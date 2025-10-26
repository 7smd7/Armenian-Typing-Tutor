import React, { useState, useEffect } from "react";
import { type Lesson } from "../types";

interface LessonMenuProps {
    isOpen: boolean;
    onClose: () => void;
    lessons: Lesson[];
    currentLessonIndex: number;
    currentExerciseIndex: number;
    onSelectExercise: (lessonIndex: number, exerciseIndex: number) => void;
}

const LessonMenu: React.FC<LessonMenuProps> = ({
    isOpen,
    onClose,
    lessons,
    currentLessonIndex,
    currentExerciseIndex,
    onSelectExercise,
}) => {
    const [expandedLesson, setExpandedLesson] = useState<number | null>(
        currentLessonIndex
    );

    useEffect(() => {
        setExpandedLesson(currentLessonIndex);
    }, [currentLessonIndex]);

    if (!isOpen) {
        return null;
    }

    const toggleLesson = (index: number) => {
        setExpandedLesson(expandedLesson === index ? null : index);
    };

    return (
        <div
            className='fixed inset-0 bg-black/70 flex items-center justify-center z-50 transition-opacity duration-300 p-4'
            onClick={onClose}
        >
            <div
                className='bg-gray-800 rounded-lg shadow-2xl w-full max-w-xs sm:max-w-md max-h-[85vh] overflow-y-auto p-4 sm:p-6 text-gray-200'
                onClick={(e) => e.stopPropagation()}
            >
                <div className='flex justify-between items-center mb-4'>
                    <h2 className='text-xl sm:text-2xl font-bold text-sky-400'>
                        Lessons
                    </h2>
                    <button
                        onClick={onClose}
                        className='text-2xl sm:text-3xl text-gray-400 hover:text-white min-w-[32px] min-h-[32px] flex items-center justify-center touch-manipulation'
                    >
                        &times;
                    </button>
                </div>

                <div className='space-y-2'>
                    {lessons.map((lesson, lessonIdx) => (
                        <div
                            key={lesson.title}
                            className='bg-gray-700/50 rounded-lg'
                        >
                            <button
                                onClick={() => toggleLesson(lessonIdx)}
                                className='w-full text-left p-2 sm:p-3 flex justify-between items-center hover:bg-gray-600/50 rounded-lg'
                            >
                                <div className='flex flex-col sm:flex-row sm:items-center'>
                                    <span className='font-semibold text-sm sm:text-base'>
                                        {lesson.title}
                                    </span>
                                    <span className='text-xs sm:text-sm text-gray-400 sm:ml-2'>
                                        {lesson.description}
                                    </span>
                                </div>
                                <span
                                    className={`transform transition-transform text-lg ${
                                        expandedLesson === lessonIdx
                                            ? "rotate-90"
                                            : "rotate-0"
                                    }`}
                                >
                                    &rsaquo;
                                </span>
                            </button>
                            {expandedLesson === lessonIdx && (
                                <ul className='p-3 pt-0'>
                                    {lesson.exercises.map(
                                        (exercise, exerciseIdx) => {
                                            const isActive =
                                                lessonIdx ===
                                                    currentLessonIndex &&
                                                exerciseIdx ===
                                                    currentExerciseIndex;
                                            return (
                                                <li key={exercise.name}>
                                                    <button
                                                        onClick={() =>
                                                            onSelectExercise(
                                                                lessonIdx,
                                                                exerciseIdx
                                                            )
                                                        }
                                                        className={`w-full text-left p-3 sm:p-2 pl-4 sm:pl-6 rounded-md text-sm transition-colors touch-manipulation min-h-[44px] flex items-center ${
                                                            isActive
                                                                ? "bg-sky-600 text-white"
                                                                : "hover:bg-gray-600/50 text-gray-300"
                                                        }`}
                                                    >
                                                        {exercise.name}
                                                    </button>
                                                </li>
                                            );
                                        }
                                    )}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LessonMenu;
