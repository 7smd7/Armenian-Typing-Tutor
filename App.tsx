import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { ARMENIAN_ALPHABET, KEYBOARD_LAYOUT, LESSONS, FINGER_MAP, SOUND_MAP, COMPUTER_VOICE_PHONETIC_MAP } from './constants';
import { type LetterInfo, type Finger } from './types';
import Keyboard from './components/Keyboard';
import CharacterDisplay from './components/CharacterDisplay';
import LessonMenu from './components/LessonMenu';
import VoiceToggle from './components/VoiceToggle';

const App: React.FC = () => {
    const [lessonIndex, setLessonIndex] = useState(0);
    const [exerciseIndex, setExerciseIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [lastPressed, setLastPressed] = useState<{ code: string; correct: boolean } | null>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [voiceMode, setVoiceMode] = useState<'human' | 'computer'>('human');

    const keyMap = useMemo(() => {
        const map = new Map<string, string>(); // Map<armenianChar, keyCode>
        KEYBOARD_LAYOUT.flat().forEach(key => {
            if (key) {
                map.set(key.armenian, key.code);
                if (key.shift) {
                    map.set(key.shift.armenian, key.code);
                }
            }
        });
        map.set(' ', 'Space');
        return map;
    }, []);

    const currentLesson = LESSONS[lessonIndex];
    const currentExercise = currentLesson.exercises[exerciseIndex];
    const currentLessonText = currentExercise.text;
    const currentArmenianChar = currentLessonText[charIndex];
    const currentLetterInfo: LetterInfo | null = ARMENIAN_ALPHABET[currentArmenianChar] || null;
    const nextKeyCode = keyMap.get(currentArmenianChar) || null;
    const fingerToHighlight = nextKeyCode ? (FINGER_MAP[nextKeyCode] || null) : null;

    const playAudio = useCallback((letterInfo: LetterInfo | null) => {
        if (!letterInfo || !letterInfo.armenian) return;

        speechSynthesis.cancel(); // Stop any currently speaking computer voice

        if (voiceMode === 'human') {
            const soundFileKey = SOUND_MAP[letterInfo.armenian];

            if (soundFileKey) {
                const audioUrl = `https://learn101.org/sound/armenian/armenian_alphabet_${soundFileKey}.mp3`;
                const audio = new Audio(audioUrl);
                audio.play().catch(error => {
                    console.error(`Failed to play audio for "${letterInfo.armenian}":`, error);
                });
            }
        } else {
            // Use the phonetic map to get an English-readable sound.
            const textToSpeak = COMPUTER_VOICE_PHONETIC_MAP[letterInfo.armenian];
            if (textToSpeak) {
                const utterance = new SpeechSynthesisUtterance(textToSpeak);
                // Use a standard English voice, which is universally available.
                utterance.lang = 'en-US';
                utterance.rate = 0.8;
                speechSynthesis.speak(utterance);
            } else {
                 console.warn(`No phonetic pronunciation found for "${letterInfo.armenian}"`);
            }
        }
    }, [voiceMode]);


    const goToExercise = (lIdx: number, eIdx: number) => {
        if (lIdx >= 0 && lIdx < LESSONS.length) {
            const lesson = LESSONS[lIdx];
            if (eIdx >= 0 && eIdx < lesson.exercises.length) {
                setLessonIndex(lIdx);
                setExerciseIndex(eIdx);
                setCharIndex(0);
                setLastPressed(null);
            }
        }
    };

    const nextExercise = () => {
        if (exerciseIndex < currentLesson.exercises.length - 1) {
            goToExercise(lessonIndex, exerciseIndex + 1);
        } else if (lessonIndex < LESSONS.length - 1) {
            goToExercise(lessonIndex + 1, 0);
        }
    };
    
    const prevExercise = () => {
        if (exerciseIndex > 0) {
            goToExercise(lessonIndex, exerciseIndex - 1);
        } else if (lessonIndex > 0) {
            const prevLesson = LESSONS[lessonIndex - 1];
            goToExercise(lessonIndex - 1, prevLesson.exercises.length - 1);
        }
    };

    const handleSelectExercise = (newLessonIndex: number, newExerciseIndex: number) => {
        goToExercise(newLessonIndex, newExerciseIndex);
        setIsMenuOpen(false);
    }

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            e.preventDefault();
            if (charIndex >= currentLessonText.length) return;

            const expectedKeyCode = keyMap.get(currentArmenianChar);
            const correct = e.code === expectedKeyCode;

            setLastPressed({ code: e.code, correct });

            if (correct) {
                playAudio(currentLetterInfo);
                if (charIndex + 1 >= currentLessonText.length) {
                    setTimeout(nextExercise, 500);
                } else {
                    setCharIndex(prev => prev + 1);
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [charIndex, lessonIndex, exerciseIndex, currentLessonText, keyMap, playAudio, currentArmenianChar, currentLetterInfo, nextExercise]);
    
    const renderLessonText = () => {
        return (
            <p className="font-mono text-3xl md:text-4xl tracking-widest text-left p-4 bg-gray-800 rounded-lg whitespace-pre-wrap">
                <span className="text-gray-500">{currentLessonText.substring(0, charIndex)}</span>
                <span className="bg-sky-600 text-white rounded px-1 animate-pulse">
                    {currentArmenianChar === ' ' ? '␣' : currentArmenianChar}
                </span>
                <span className="text-gray-300">{currentLessonText.substring(charIndex + 1)}</span>
            </p>
        );
    };

    const isFirstExercise = lessonIndex === 0 && exerciseIndex === 0;
    const isLastExercise = lessonIndex === LESSONS.length - 1 && exerciseIndex === LESSONS[lessonIndex].exercises.length - 1;

    return (
        <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
            <LessonMenu 
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
                lessons={LESSONS}
                currentLessonIndex={lessonIndex}
                currentExerciseIndex={exerciseIndex}
                onSelectExercise={handleSelectExercise}
            />

            <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
                <header className="text-center mb-8">
                    <h1 className="text-4xl sm:text-5xl font-bold text-sky-400">Armenian Typing Tutor</h1>
                    <p className="text-lg text-gray-400 mt-2">Learn the Armenian alphabet by typing. Press the keys to hear the sounds.</p>
                    <div className="mt-4 flex justify-center">
                        <VoiceToggle 
                            voiceMode={voiceMode}
                            onToggle={() => setVoiceMode(prev => prev === 'human' ? 'computer' : 'human')}
                        />
                    </div>
                </header>
                
                <div className="w-full max-w-5xl mb-6">
                    <div className="flex justify-between items-center mb-2 flex-wrap gap-2">
                         <h2 className="text-lg sm:text-xl font-semibold">{`${currentLesson.title}: ${currentExercise.name}`}</h2>
                         <div>
                            <button onClick={() => setIsMenuOpen(true)} className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg transition-colors mr-2">Lessons</button>
                            <button onClick={prevExercise} disabled={isFirstExercise} className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg transition-colors mr-2 disabled:bg-gray-800 disabled:text-gray-500 disabled:cursor-not-allowed">Previous</button>
                            <button onClick={() => goToExercise(lessonIndex, exerciseIndex)} className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg transition-colors mr-2">Reset</button>
                            <button onClick={nextExercise} disabled={isLastExercise} className="bg-sky-700 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded-lg transition-colors disabled:bg-sky-900 disabled:text-gray-400 disabled:cursor-not-allowed">Next</button>
                         </div>
                    </div>
                   
                    {renderLessonText()}
                </div>

                <CharacterDisplay 
                    letterInfo={currentLetterInfo} 
                    onPlaySound={() => playAudio(currentLetterInfo)} 
                />
                 <div className="w-full max-w-7xl mx-auto flex justify-center items-center gap-x-2 lg:gap-x-4 mt-8">
                    <div className="flex-grow">
                        <Keyboard 
                            layout={KEYBOARD_LAYOUT} 
                            nextKeyCode={nextKeyCode} 
                            lastPressed={lastPressed}
                            fingerToHighlight={fingerToHighlight}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;