import React, { useState, useEffect, useMemo, useCallback } from "react";
import {
    ARMENIAN_ALPHABET,
    KEYBOARD_LAYOUT,
    LESSONS,
    FINGER_MAP,
    SOUND_MAP,
    COMPUTER_VOICE_PHONETIC_MAP,
    WOMAN_VOICE_MAP,
    LETTER_SVG_MAP,
} from "./constants";
import { type LetterInfo, type Finger } from "./types";
import Keyboard from "./components/Keyboard";
import CharacterDisplay from "./components/CharacterDisplay";
import LessonMenu from "./components/LessonMenu";
import VoiceToggle from "./components/VoiceToggle";
import ProgressDashboard from "./components/ProgressDashboard";
import { getProgressTracker } from "./progressTracker";

const NON_TYPING_KEY_CODES = new Set([
    "ShiftLeft",
    "ShiftRight",
    "CapsLock",
    "Tab",
    "AltLeft",
    "AltRight",
    "MetaLeft",
    "MetaRight",
    "ControlLeft",
    "ControlRight",
]);

// Helper function to get SVG file name based on number
function getSvgFileName(num: number): string {
    const fileNames: Record<number, string> = {
        1: "այբ_ayb",
        2: "բեն_ben",
        3: "գիմ_gim",
        4: "դա_da",
        5: "եչ_yeč",
        6: "զա_za",
        7: "է_ē",
        8: "ըթ_ët'",
        9: "թօ_t'ò",
        10: "ժէ_žē",
        11: "ինի_ini",
        12: "լիւն_liwn",
        13: "խէ_xē",
        14: "ծա_ça",
        15: "կեն_ken",
        16: "հօ_hò",
        17: "ձա_ja",
        18: "ղատ_ġat",
        19: "ճէ_č̣ē",
        20: "մեն_men",
        21: "յի_yi",
        22: "նու_now",
        23: "շա_ša",
        24: "ո_vo",
        25: "չա_ča",
        26: "պէ_pē",
        27: "ջէ_ǰē",
        28: "ռա_ṙa",
        29: "սէ_sē",
        30: "վեւ_vew",
        31: "տիւն_tiwn",
        32: "րէ_rē",
        33: "ցօ_c'ò",
        34: "հիւն_hiwn",
        35: "փիւր_p'iwr",
        36: "քէ_k'ē",
        37: "և_jew",
        38: "օ_ò",
        39: "ֆէ_fē",
    };
    return fileNames[num] || "";
}

const App: React.FC = () => {
    // Initialize lesson from URL hash
    const getInitialLessonFromHash = () => {
        const hash = window.location.hash.slice(1); // Remove '#'
        if (hash.startsWith("lesson-")) {
            const lessonNum = parseInt(hash.split("-")[1], 10);
            if (
                !isNaN(lessonNum) &&
                lessonNum >= 1 &&
                lessonNum <= LESSONS.length
            ) {
                return lessonNum - 1; // Convert to 0-indexed
            }
        }
        return 0;
    };

    const [lessonIndex, setLessonIndex] = useState(getInitialLessonFromHash);
    const [exerciseIndex, setExerciseIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [lastPressed, setLastPressed] = useState<{
        code: string;
        correct: boolean;
    } | null>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showProgress, setShowProgress] = useState(false);
    const [voiceMode, setVoiceMode] = useState<"woman" | "human" | "computer">(
        "woman",
    );
    const [mobileInput, setMobileInput] = useState("");
    const [isMobile, setIsMobile] = useState(false);
    const [mobileInputStatus, setMobileInputStatus] = useState<
        "idle" | "correct" | "incorrect"
    >("idle");
    const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
    const [showInstallButton, setShowInstallButton] = useState(false);
    const [isShiftPressed, setIsShiftPressed] = useState(false);

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

    // Check if current character requires Shift
    const isShiftRequired = useMemo(() => {
        if (!currentArmenianChar) return false;

        // Check if this character is a capital letter
        for (const row of KEYBOARD_LAYOUT) {
            for (const key of row) {
                if (key?.shift?.armenian === currentArmenianChar) {
                    return true;
                }
            }
        }
        return false;
    }, [currentArmenianChar]);

    const playAudio = useCallback(
        (letterInfo: LetterInfo | null) => {
            if (!letterInfo || !letterInfo.armenian) return;

            speechSynthesis.cancel(); // Stop any currently speaking computer voice

            if (voiceMode === "woman") {
                // New high-quality woman voice
                const audioNumber = WOMAN_VOICE_MAP[letterInfo.armenian];

                if (audioNumber) {
                    const audioUrl = `https://armenian-alphabet.com/src/audio/${audioNumber}.mp3`;
                    const audio = new Audio(audioUrl);
                    audio.play().catch((error) => {
                        console.error(
                            `Failed to play woman voice audio for "${letterInfo.armenian}":`,
                            error,
                        );
                    });
                }
            } else if (voiceMode === "human") {
                // Old male voice from learn101
                const soundFileKey = SOUND_MAP[letterInfo.armenian];

                if (soundFileKey) {
                    const audioUrl = `https://learn101.org/sound/armenian/armenian_alphabet_${soundFileKey}.mp3`;
                    const audio = new Audio(audioUrl);
                    audio.play().catch((error) => {
                        console.error(
                            `Failed to play human voice audio for "${letterInfo.armenian}":`,
                            error,
                        );
                    });
                }
            } else {
                // Computer voice (TTS)
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
                        `No phonetic pronunciation found for "${letterInfo.armenian}"`,
                    );
                }
            }
        },
        [voiceMode],
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

                // Update URL hash
                window.history.replaceState(null, "", `#lesson-${lIdx + 1}`);
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
        const incorrectChars = (Object.values(mistakes) as number[]).reduce(
            (sum, count) => sum + count,
            0,
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
            },
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
        newExerciseIndex: number,
    ) => {
        goToExercise(newLessonIndex, newExerciseIndex);
        setIsMenuOpen(false);
    };

    const handleInstallClick = async () => {
        if (!deferredPrompt) return;

        // Show the install prompt
        deferredPrompt.prompt();

        // Wait for the user to respond to the prompt
        const { outcome } = await deferredPrompt.userChoice;

        // Reset the deferred prompt
        setDeferredPrompt(null);
        setShowInstallButton(false);
    };

    // Handle hash changes (browser back/forward, direct hash links)
    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.slice(1);
            if (hash.startsWith("lesson-")) {
                const lessonNum = parseInt(hash.split("-")[1], 10);
                if (
                    !isNaN(lessonNum) &&
                    lessonNum >= 1 &&
                    lessonNum <= LESSONS.length
                ) {
                    const newLessonIndex = lessonNum - 1;
                    if (newLessonIndex !== lessonIndex) {
                        setLessonIndex(newLessonIndex);
                        setExerciseIndex(0);
                        setCharIndex(0);
                        setLastPressed(null);
                        setExerciseStartTime(Date.now());
                        setMistakes({});
                        setCorrectChars(0);
                    }
                }
            }
        };

        window.addEventListener("hashchange", handleHashChange);
        return () => window.removeEventListener("hashchange", handleHashChange);
    }, [lessonIndex]);

    // Set initial hash on mount
    useEffect(() => {
        if (!window.location.hash) {
            window.history.replaceState(null, "", `#lesson-${lessonIndex + 1}`);
        }
    }, [lessonIndex]);

    // Mobile detection
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(
                window.innerWidth < 768 ||
                    /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                        navigator.userAgent,
                    ),
            );
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // PWA Install prompt handling
    useEffect(() => {
        const handleBeforeInstallPrompt = (e: Event) => {
            // Stash the event so it can be triggered later
            // Note: we intentionally do NOT call e.preventDefault() here
            // to avoid the browser warning about the banner not being shown.
            setDeferredPrompt(e);
            // Update UI to notify the user they can install the PWA
            setShowInstallButton(true);
        };

        const handleAppInstalled = () => {
            // Hide the install button
            setShowInstallButton(false);
            setDeferredPrompt(null);
        };

        window.addEventListener(
            "beforeinstallprompt",
            handleBeforeInstallPrompt,
        );
        window.addEventListener("appinstalled", handleAppInstalled);

        return () => {
            window.removeEventListener(
                "beforeinstallprompt",
                handleBeforeInstallPrompt,
            );
            window.removeEventListener("appinstalled", handleAppInstalled);
        };
    }, []);

    // Handle mobile input
    const handleMobileInput = (enteredChar: string) => {
        if (charIndex >= currentLessonText.length || !enteredChar) return;

        const correct = enteredChar === currentArmenianChar;

        setLastPressed({ code: enteredChar, correct });

        // Show the typed letter briefly
        setMobileInput(enteredChar);

        if (correct) {
            setCorrectChars((prev) => prev + 1);
            setMobileInputStatus("correct");
            playAudio(currentLetterInfo);

            // Clear input after showing the letter briefly
            setTimeout(() => {
                setMobileInput("");
                setMobileInputStatus("idle");
            }, 200); // Show for 200ms

            if (charIndex + 1 >= currentLessonText.length) {
                setTimeout(nextExercise, 800);
            } else {
                setTimeout(() => setCharIndex((prev) => prev + 1), 200);
            }
        } else {
            // Track mistake
            setMistakes((prev) => ({
                ...prev,
                [currentArmenianChar]: (prev[currentArmenianChar] || 0) + 1,
            }));
            setMobileInputStatus("incorrect");

            // Clear input after showing the letter briefly
            setTimeout(() => {
                setMobileInput("");
                setMobileInputStatus("idle");
            }, 300); // Show for 300ms for mistakes
        }
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Skip keyboard handling on mobile
            if (isMobile) return;

            // Track shift key state
            if (e.code === "ShiftLeft" || e.code === "ShiftRight") {
                setIsShiftPressed(true);
                return;
            }

            // Allow browser/system shortcuts like refresh or copy/paste
            if (e.metaKey || e.ctrlKey) return;

            // Let non-character keys (e.g. Shift, CapsLock) behave normally
            if (NON_TYPING_KEY_CODES.has(e.code)) return;

            if (charIndex >= currentLessonText.length) return;

            e.preventDefault();

            const expectedKeyCode = keyMap.get(currentArmenianChar);

            if (!expectedKeyCode) {
                // Debug missing mapping for punctuation: log character and codepoint for diagnosis
                try {
                    const cp = currentArmenianChar
                        ? `U+${currentArmenianChar.codePointAt(0)?.toString(16)}`
                        : "N/A";
                    // Only log in development to avoid noisy warnings in production
                    if (
                        (import.meta as any).env &&
                        (import.meta as any).env.DEV
                    ) {
                        console.warn("Missing mapping for char:", {
                            char: currentArmenianChar,
                            codePoint: cp,
                            keyMapHasChar: keyMap.has(currentArmenianChar),
                        });
                    }
                } catch (err) {
                    if (
                        (import.meta as any).env &&
                        (import.meta as any).env.DEV
                    ) {
                        console.warn(
                            "Missing mapping for char (couldn't get codepoint):",
                            currentArmenianChar,
                        );
                    }
                }
                return;
            }

            // Check if the key code matches
            const keyMatches = e.code === expectedKeyCode;

            // Check if shift state matches what's required
            const shiftMatches = isShiftRequired
                ? isShiftPressed
                : !isShiftPressed;

            // Both key and shift state must be correct
            const correct = keyMatches && shiftMatches;

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

        const handleKeyUp = (e: KeyboardEvent) => {
            // Track shift key release
            if (e.code === "ShiftLeft" || e.code === "ShiftRight") {
                setIsShiftPressed(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
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
        isShiftRequired,
        isShiftPressed,
        isMobile,
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
                                    setVoiceMode((prev) => {
                                        if (prev === "woman") return "human";
                                        if (prev === "human") return "computer";
                                        return "woman";
                                    })
                                }
                            />
                        </div>

                        {/* Mobile-friendly button grid */}
                        <div className='grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap gap-2 justify-center'>
                            {showInstallButton && (
                                <button
                                    onClick={handleInstallClick}
                                    className='bg-purple-700 hover:bg-purple-600 text-white font-bold py-2 px-3 text-sm rounded-lg transition-colors'
                                >
                                    📱 Install App
                                </button>
                            )}
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

                {/* Character Display - Hidden on mobile (integrated into mobile typing interface) */}
                {!isMobile && (
                    <CharacterDisplay
                        letterInfo={currentLetterInfo}
                        onPlaySound={() => playAudio(currentLetterInfo)}
                    />
                )}

                {/* Desktop Keyboard - Hidden on mobile */}
                {!isMobile && (
                    <div className='w-full max-w-7xl mx-auto flex justify-center items-center gap-x-2 lg:gap-x-4 mt-4 sm:mt-6 md:mt-8'>
                        <div className='flex-grow'>
                            <Keyboard
                                layout={KEYBOARD_LAYOUT}
                                nextKeyCode={nextKeyCode}
                                lastPressed={lastPressed}
                                fingerToHighlight={fingerToHighlight}
                                isShiftRequired={isShiftRequired}
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
                                {/* Merged Character Display for Mobile */}
                                {currentLetterInfo && (
                                    <div className='flex flex-col items-center justify-center bg-gray-700 rounded-xl shadow-lg w-full max-w-xs p-4'>
                                        <div className='flex items-center justify-center gap-3 mb-2'>
                                            <div className='text-4xl sm:text-5xl font-bold text-sky-400'>
                                                {currentLetterInfo.armenian}
                                            </div>
                                            {/* Small SVG handwriting beside letter */}
                                            {LETTER_SVG_MAP[
                                                currentLetterInfo.armenian
                                            ] && (
                                                <img
                                                    src={`/armenian_letters_svg/${String(
                                                        LETTER_SVG_MAP[
                                                            currentLetterInfo
                                                                .armenian
                                                        ],
                                                    ).padStart(
                                                        2,
                                                        "0",
                                                    )}_${getSvgFileName(
                                                        LETTER_SVG_MAP[
                                                            currentLetterInfo
                                                                .armenian
                                                        ],
                                                    )}.svg`}
                                                    alt={`Handwriting for ${currentLetterInfo.armenian}`}
                                                    className='w-12 h-12 opacity-80'
                                                />
                                            )}
                                        </div>
                                        <div className='flex space-x-2 items-center'>
                                            <button
                                                onClick={() =>
                                                    playAudio(currentLetterInfo)
                                                }
                                                className='p-1.5 rounded-full bg-gray-600 hover:bg-sky-600 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500'
                                                aria-label='Play sound'
                                            >
                                                <svg
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    width='20'
                                                    height='20'
                                                    viewBox='0 0 24 24'
                                                    fill='none'
                                                    stroke='currentColor'
                                                    strokeWidth='2'
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                    className='text-white'
                                                >
                                                    <polygon points='11 5 6 9 2 9 2 15 6 15 11 19 11 5'></polygon>
                                                    <path d='M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07'></path>
                                                </svg>
                                            </button>
                                            <div className='text-lg sm:text-xl text-gray-400'>
                                                {
                                                    currentLetterInfo.transliteration
                                                }
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <input
                                    type='text'
                                    value={mobileInput}
                                    onChange={(e) => {
                                        if (mobileInputStatus === "idle") {
                                            const newValue = e.target.value;

                                            // If user typed something
                                            if (newValue.length > 0) {
                                                const enteredChar =
                                                    newValue.slice(-1);
                                                handleMobileInput(enteredChar);
                                            }
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
                                    autoCapitalize='none'
                                    autoCorrect='off'
                                    autoComplete='off'
                                    spellCheck='false'
                                    inputMode='text'
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
