import React, { useState, useEffect, useMemo, useCallback } from "react";
import {
    ARMENIAN_ALPHABET,
    KEYBOARD_LAYOUT,
    LESSONS,
    FINGER_MAP,
    SOUND_MAP,
    COMPUTER_VOICE_PHONETIC_MAP,
} from "./constants";
import { type LetterInfo, type Finger } from "./types";
import Keyboard from "./components/Keyboard";
import CharacterDisplay from "./components/CharacterDisplay";
import LessonMenu from "./components/LessonMenu";
import VoiceToggle from "./components/VoiceToggle";
import ProgressDashboard from "./components/ProgressDashboard";
import { getProgressTracker } from "./progressTracker";

const App: React.FC = () => {
    const [lessonIndex, setLessonIndex] = useState(0);
    const [exerciseIndex, setExerciseIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [lastPressed, setLastPressed] = useState<{
        code: string;
        correct: boolean;
    } | null>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showProgress, setShowProgress] = useState(false);
    const [voiceMode, setVoiceMode] = useState<"human" | "computer">("human");
    const [mobileInput, setMobileInput] = useState("");
    const [isMobile, setIsMobile] = useState(false);
    const [mobileInputStatus, setMobileInputStatus] = useState<
        "idle" | "correct" | "incorrect"
    >("idle");

    // Track exercise stats
    const [exerciseStartTime, setExerciseStartTime] = useState(Date.now());
    const [mistakes, setMistakes] = useState<Record<string, number>>({});
    const [correctChars, setCorrectChars] = useState(0);

    const keyMap = useMemo(() => {
        const map = new Map<string, string>(); // Map<armenianChar, keyCode>
        KEYBOARD_LAYOUT.flat().forEach((key) => {
            if (key) {
                map.set(key.armenian, key.code);
                if (key.shift) {
                    map.set(key.shift.armenian, key.code);
                }
            }
        });
        map.set(" ", "Space");
        return map;
    }, []);

    const currentLesson = LESSONS[lessonIndex];
    const currentExercise = currentLesson.exercises[exerciseIndex];
    const currentLessonText = currentExercise.text;
    const currentArmenianChar = currentLessonText[charIndex];
    const currentLetterInfo: LetterInfo | null =
        ARMENIAN_ALPHABET[currentArmenianChar] || null;
    const nextKeyCode = keyMap.get(currentArmenianChar) || null;
    const fingerToHighlight = nextKeyCode
        ? FINGER_MAP[nextKeyCode] || null
        : null;

    const playAudio = useCallback(
        (letterInfo: LetterInfo | null) => {
            if (!letterInfo || !letterInfo.armenian) return;

            speechSynthesis.cancel(); // Stop any currently speaking computer voice

            if (voiceMode === "human") {
                const soundFileKey = SOUND_MAP[letterInfo.armenian];

                if (soundFileKey) {
                    const audioUrl = `https://learn101.org/sound/armenian/armenian_alphabet_${soundFileKey}.mp3`;
                    const audio = new Audio(audioUrl);
                    audio.play().catch((error) => {
                        console.error(
                            `Failed to play audio for "${letterInfo.armenian}":`,
                            error
                        );
                    });
                }
            } else {
                // Use the phonetic map to get an English-readable sound.
                const textToSpeak =
                    COMPUTER_VOICE_PHONETIC_MAP[letterInfo.armenian];
                if (textToSpeak) {
                    const utterance = new SpeechSynthesisUtterance(textToSpeak);
                    // Use a standard English voice, which is universally available.
                    utterance.lang = "en-US";
                    utterance.rate = 0.8;
                    speechSynthesis.speak(utterance);
                } else {
                    console.warn(
                        `No phonetic pronunciation found for "${letterInfo.armenian}"`
                    );
                }
            }
        },
        [voiceMode]
    );

    const goToExercise = (lIdx: number, eIdx: number) => {
        if (lIdx >= 0 && lIdx < LESSONS.length) {
            const lesson = LESSONS[lIdx];
            if (eIdx >= 0 && eIdx < lesson.exercises.length) {
                setLessonIndex(lIdx);
                setExerciseIndex(eIdx);
                setCharIndex(0);
                setLastPressed(null);
                // Reset exercise tracking
                setExerciseStartTime(Date.now());
                setMistakes({});
                setCorrectChars(0);
            }
        }
    };

    const nextExercise = () => {
        // Record completed exercise
        recordExerciseCompletion();

        if (exerciseIndex < currentLesson.exercises.length - 1) {
            goToExercise(lessonIndex, exerciseIndex + 1);
        } else if (lessonIndex < LESSONS.length - 1) {
            goToExercise(lessonIndex + 1, 0);
        }
    };

    const recordExerciseCompletion = () => {
        const timeSpent = (Date.now() - exerciseStartTime) / 1000; // seconds
        const totalChars = currentLessonText.length;
        const incorrectChars = Object.values(mistakes).reduce(
            (sum: number, count) => sum + (count as number),
            0
        );

        const tracker = getProgressTracker();
        tracker.recordExerciseAttempt(
            lessonIndex + 1, // lessonId (1-indexed)
            currentLesson.title,
            `exercise-${exerciseIndex}`,
            currentExercise.name,
            {
                totalCharacters: totalChars,
                correctCharacters: correctChars,
                incorrectCharacters: incorrectChars,
                timeSpent,
                mistakes,
            }
        );
    };

    const prevExercise = () => {
        if (exerciseIndex > 0) {
            goToExercise(lessonIndex, exerciseIndex - 1);
        } else if (lessonIndex > 0) {
            const prevLesson = LESSONS[lessonIndex - 1];
            goToExercise(lessonIndex - 1, prevLesson.exercises.length - 1);
        }
    };

    const handleSelectExercise = (
        newLessonIndex: number,
        newExerciseIndex: number
    ) => {
        goToExercise(newLessonIndex, newExerciseIndex);
        setIsMenuOpen(false);
    };

    // Mobile detection
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(
                window.innerWidth < 768 ||
                    /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                        navigator.userAgent
                    )
            );
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Handle mobile input
    const handleMobileInput = (inputValue: string) => {
        if (charIndex >= currentLessonText.length || !inputValue) return;

        const enteredChar = inputValue.slice(-1); // Get the last character
        const correct = enteredChar === currentArmenianChar;

        setLastPressed({ code: enteredChar, correct });

        if (correct) {
            setCorrectChars((prev) => prev + 1);
            setMobileInputStatus("correct");
            playAudio(currentLetterInfo);

            // Clear input and feedback after a short delay
            setTimeout(() => {
                setMobileInput("");
                setMobileInputStatus("idle");
            }, 300);

            if (charIndex + 1 >= currentLessonText.length) {
                setTimeout(nextExercise, 800);
            } else {
                setTimeout(() => setCharIndex((prev) => prev + 1), 300);
            }
        } else {
            // Track mistake
            setMistakes((prev) => ({
                ...prev,
                [currentArmenianChar]: (prev[currentArmenianChar] || 0) + 1,
            }));
            setMobileInputStatus("incorrect");

            // Clear input and feedback after a short delay
            setTimeout(() => {
                setMobileInput("");
                setMobileInputStatus("idle");
            }, 500);
        }
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Skip keyboard handling on mobile
            if (isMobile) return;
            e.preventDefault();
            if (charIndex >= currentLessonText.length) return;

            const expectedKeyCode = keyMap.get(currentArmenianChar);
            const correct = e.code === expectedKeyCode;

            setLastPressed({ code: e.code, correct });

            if (correct) {
                setCorrectChars((prev) => prev + 1);
                playAudio(currentLetterInfo);
                if (charIndex + 1 >= currentLessonText.length) {
                    setTimeout(nextExercise, 500);
                } else {
                    setCharIndex((prev) => prev + 1);
                }
            } else {
                // Track mistake
                setMistakes((prev) => ({
                    ...prev,
                    [currentArmenianChar]: (prev[currentArmenianChar] || 0) + 1,
                }));
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [
        charIndex,
        lessonIndex,
        exerciseIndex,
        currentLessonText,
        keyMap,
        playAudio,
        currentArmenianChar,
        currentLetterInfo,
        nextExercise,
    ]);

    const renderLessonText = () => {
        return (
            <p className='font-mono text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-wider sm:tracking-widest text-center sm:text-left p-3 sm:p-4 bg-gray-800 rounded-lg whitespace-pre-wrap overflow-x-auto'>
                <span className='text-gray-500'>
                    {currentLessonText.substring(0, charIndex)}
                </span>
                <span className='bg-sky-600 text-white rounded px-1 animate-pulse'>
                    {currentArmenianChar === " " ? "␣" : currentArmenianChar}
                </span>
                <span className='text-gray-300'>
                    {currentLessonText.substring(charIndex + 1)}
                </span>
            </p>
        );
    };

    const isFirstExercise = lessonIndex === 0 && exerciseIndex === 0;
    const isLastExercise =
        lessonIndex === LESSONS.length - 1 &&
        exerciseIndex === LESSONS[lessonIndex].exercises.length - 1;

    // Show progress dashboard
    if (showProgress) {
        return (
            <div className='min-h-screen bg-gray-900 text-gray-200'>
                <div className='p-4'>
                    <button
                        onClick={() => setShowProgress(false)}
                        className='bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg transition-colors mb-4'
                    >
                        ← Back to Lessons
                    </button>
                </div>
                <ProgressDashboard
                    onSelectLesson={(lessonId) => {
                        goToExercise(lessonId - 1, 0);
                        setShowProgress(false);
                    }}
                />
            </div>
        );
    }

    return (
        <div className='min-h-screen bg-gray-900 text-gray-200 flex flex-col items-center justify-start sm:justify-center p-2 sm:p-4 lg:p-8'>
            <LessonMenu
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
                lessons={LESSONS}
                currentLessonIndex={lessonIndex}
                currentExerciseIndex={exerciseIndex}
                onSelectExercise={handleSelectExercise}
            />

            <div className='w-full max-w-7xl mx-auto flex flex-col items-center'>
                <header className='text-center mb-4 sm:mb-6 md:mb-8'>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-sky-400'>
                        Armenian Typing Tutor
                    </h1>
                    <p className='text-sm sm:text-base md:text-lg text-gray-400 mt-1 sm:mt-2 px-2'>
                        Learn the Armenian alphabet by typing. Press the keys to
                        hear the sounds.
                    </p>
                    {/* Mobile instruction */}
                    <div className='sm:hidden mt-2 text-xs text-gray-500 bg-gray-800 rounded p-2 mx-2'>
                        � Mobile typing supported! Install Armenian keyboard for
                        best experience
                    </div>
                </header>

                <div className='w-full max-w-5xl mb-6'>
                    {/* Mobile-first header layout */}
                    <div className='mb-4'>
                        <h2 className='text-base sm:text-lg md:text-xl font-semibold mb-3 text-center'>{`${currentLesson.title}: ${currentExercise.name}`}</h2>

                        {/* Voice toggle - centered on mobile */}
                        <div className='flex justify-center mb-4'>
                            <VoiceToggle
                                voiceMode={voiceMode}
                                onToggle={() =>
                                    setVoiceMode((prev) =>
                                        prev === "human" ? "computer" : "human"
                                    )
                                }
                            />
                        </div>

                        {/* Mobile-friendly button grid */}
                        <div className='grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap gap-2 justify-center'>
                            <button
                                onClick={() => setShowProgress(true)}
                                className='bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-3 text-sm rounded-lg transition-colors'
                            >
                                Progress
                            </button>
                            <button
                                onClick={() => setIsMenuOpen(true)}
                                className='bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-3 text-sm rounded-lg transition-colors'
                            >
                                Lessons
                            </button>
                            <button
                                onClick={prevExercise}
                                disabled={isFirstExercise}
                                className='bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-3 text-sm rounded-lg transition-colors disabled:bg-gray-800 disabled:text-gray-500 disabled:cursor-not-allowed'
                            >
                                Previous
                            </button>
                            <button
                                onClick={() =>
                                    goToExercise(lessonIndex, exerciseIndex)
                                }
                                className='bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-3 text-sm rounded-lg transition-colors'
                            >
                                Reset
                            </button>
                            <button
                                onClick={nextExercise}
                                disabled={isLastExercise}
                                className='bg-sky-700 hover:bg-sky-600 text-white font-bold py-2 px-3 text-sm rounded-lg transition-colors disabled:bg-sky-900 disabled:text-gray-400 disabled:cursor-not-allowed col-span-2 sm:col-span-1'
                            >
                                Next
                            </button>
                        </div>
                    </div>

                    {renderLessonText()}
                </div>

                <CharacterDisplay
                    letterInfo={currentLetterInfo}
                    onPlaySound={() => playAudio(currentLetterInfo)}
                />

                {/* Desktop Keyboard - Hidden on mobile */}
                {!isMobile && (
                    <div className='w-full max-w-7xl mx-auto flex justify-center items-center gap-x-2 lg:gap-x-4 mt-4 sm:mt-6 md:mt-8'>
                        <div className='flex-grow'>
                            <Keyboard
                                layout={KEYBOARD_LAYOUT}
                                nextKeyCode={nextKeyCode}
                                lastPressed={lastPressed}
                                fingerToHighlight={fingerToHighlight}
                            />
                        </div>
                    </div>
                )}

                {/* Mobile Typing Interface */}
                {isMobile && (
                    <div className='w-full max-w-md mx-auto mt-6 px-4'>
                        <div className='bg-gray-800 rounded-lg p-6'>
                            <h3 className='text-lg font-semibold text-center mb-4 text-sky-400'>
                                Mobile Typing
                            </h3>
                            <p className='text-sm text-gray-400 text-center mb-4'>
                                Type the highlighted character using your mobile
                                keyboard
                            </p>
                            <div className='flex flex-col items-center space-y-4'>
                                <div className='text-2xl font-bold text-white bg-gray-700 rounded-lg px-4 py-2 min-w-[80px] text-center'>
                                    Expected:{" "}
                                    <span className='text-sky-400'>
                                        {currentArmenianChar === " "
                                            ? "Space"
                                            : currentArmenianChar}
                                    </span>
                                </div>
                                <input
                                    type='text'
                                    value={mobileInput}
                                    onChange={(e) => {
                                        if (mobileInputStatus === "idle") {
                                            setMobileInput(e.target.value);
                                            handleMobileInput(e.target.value);
                                        }
                                    }}
                                    onKeyDown={(e) => {
                                        if (e.key === " ") {
                                            e.preventDefault();
                                            if (mobileInputStatus === "idle") {
                                                handleMobileInput(" ");
                                            }
                                        }
                                    }}
                                    placeholder='Type here...'
                                    className={`w-full px-4 py-3 text-lg text-center rounded-lg text-white placeholder-gray-400 focus:outline-none transition-all duration-300 ${
                                        mobileInputStatus === "correct"
                                            ? "bg-green-600 border-2 border-green-400 ring-2 ring-green-500"
                                            : mobileInputStatus === "incorrect"
                                            ? "bg-red-600 border-2 border-red-400 ring-2 ring-red-500 shake"
                                            : "bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                                    }`}
                                    autoFocus
                                />
                                {/* Status feedback */}
                                <div className='text-sm text-center font-medium'>
                                    {mobileInputStatus === "correct" && (
                                        <span className='text-green-400'>
                                            ✓ Correct!
                                        </span>
                                    )}
                                    {mobileInputStatus === "incorrect" && (
                                        <span className='text-red-400'>
                                            ✗ Try again
                                        </span>
                                    )}
                                    {mobileInputStatus === "idle" && (
                                        <span className='text-gray-500'>
                                            Ready to type
                                        </span>
                                    )}
                                </div>
                                <div className='text-xs text-gray-500 text-center'>
                                    💡 Install Armenian keyboard on your device
                                    for best experience
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Copyright Footer */}
                <footer className='mt-8 text-center'>
                    <div className='text-xs text-gray-500'>
                        © 2025 Created by{" "}
                        <a
                            href='https://mohammaddaryani.dev'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-sky-400 hover:text-sky-300 transition-colors'
                        >
                            Mohammad Daryani
                        </a>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default App;
