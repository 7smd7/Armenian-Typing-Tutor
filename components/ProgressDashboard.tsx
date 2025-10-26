import React from "react";
import { getProgressTracker } from "../progressTracker";
import type { UserProgress, LessonProgress } from "../progressTracker";

interface ProgressDashboardProps {
    onSelectLesson: (lessonId: number) => void;
}

export const ProgressDashboard: React.FC<ProgressDashboardProps> = ({
    onSelectLesson,
}) => {
    const [progress, setProgress] = React.useState<UserProgress | null>(null);
    const [showExport, setShowExport] = React.useState(false);
    const [importData, setImportData] = React.useState("");

    React.useEffect(() => {
        const tracker = getProgressTracker();
        setProgress(tracker.getProgress());
    }, []);

    const handleReset = () => {
        if (
            confirm(
                "Are you sure you want to reset all progress? This cannot be undone."
            )
        ) {
            const tracker = getProgressTracker();
            tracker.resetProgress();
            setProgress(tracker.getProgress());
        }
    };

    const handleExport = () => {
        const tracker = getProgressTracker();
        const data = tracker.exportProgress();
        const blob = new Blob([data], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `armenian-typing-progress-${
            new Date().toISOString().split("T")[0]
        }.json`;
        a.click();
        URL.revokeObjectURL(url);
    };

    const handleImport = () => {
        const tracker = getProgressTracker();
        if (tracker.importProgress(importData)) {
            alert("Progress imported successfully!");
            setProgress(tracker.getProgress());
            setImportData("");
        } else {
            alert("Failed to import progress. Please check the data format.");
        }
    };

    if (!progress) return <div className='text-gray-200'>Loading...</div>;

    const recommendations = getProgressTracker().getPracticeRecommendations();
    const lessonsNeedingReview = getProgressTracker().getLessonsNeedingReview();
    const completionPercentage =
        (progress.completedLessons / progress.totalLessons) * 100;

    return (
        <div className='p-5 max-w-7xl mx-auto'>
            <h1 className='text-4xl font-bold text-sky-400 mb-6'>
                Your Learning Progress
            </h1>

            {/* Overall Stats */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8'>
                <StatCard
                    title='Completed Lessons'
                    value={`${progress.completedLessons}/${progress.totalLessons}`}
                />
                <StatCard
                    title='Overall Accuracy'
                    value={`${progress.overallStats.overallAccuracy.toFixed(
                        1
                    )}%`}
                />
                <StatCard
                    title='Average Speed'
                    value={`${progress.overallStats.averageSpeed.toFixed(
                        0
                    )} WPM`}
                />
                <StatCard
                    title='Total Time'
                    value={formatTime(progress.overallStats.totalTimeSpent)}
                />
                <StatCard
                    title='Characters Typed'
                    value={progress.overallStats.totalCharactersTyped.toLocaleString()}
                />
                <StatCard
                    title='Completion'
                    value={`${completionPercentage.toFixed(0)}%`}
                />
            </div>

            {/* Progress Bar */}
            <div className='mb-8'>
                <h2 className='text-2xl font-bold text-sky-400 mb-3'>
                    Overall Progress
                </h2>
                <div className='w-full h-8 bg-gray-700 rounded-full overflow-hidden'>
                    <div
                        className='h-full bg-green-500 transition-all duration-300'
                        style={{ width: `${completionPercentage}%` }}
                    />
                </div>
            </div>

            {/* Recommendations */}
            <div className='mb-8'>
                <h2 className='text-2xl font-bold text-sky-400 mb-3'>
                    Recommendations
                </h2>
                <div className='bg-gray-800 p-4 rounded-lg border border-gray-700'>
                    <p className='text-gray-200'>
                        <strong className='text-sky-400'>Next Lesson:</strong>{" "}
                        Lesson {recommendations.suggestedNextLesson}
                    </p>
                    <button
                        onClick={() =>
                            onSelectLesson(recommendations.suggestedNextLesson)
                        }
                        className='mt-3 bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 px-6 rounded-lg transition-colors'
                    >
                        Continue Learning →
                    </button>
                </div>
            </div>

            {/* Lessons Needing Review */}
            {lessonsNeedingReview.length > 0 && (
                <div className='mb-8'>
                    <h2 className='text-2xl font-bold text-sky-400 mb-3'>
                        Lessons That Need Review
                    </h2>
                    <div className='grid gap-3'>
                        {lessonsNeedingReview.map((lesson) => (
                            <div
                                key={lesson.lessonId}
                                className='bg-yellow-900/30 p-4 rounded-lg border border-yellow-600'
                            >
                                <div className='flex justify-between items-center flex-wrap gap-3'>
                                    <div>
                                        <strong className='text-yellow-400'>
                                            {lesson.lessonTitle}
                                        </strong>
                                        <div className='text-sm text-gray-400 mt-1'>
                                            Accuracy:{" "}
                                            {lesson.overallAccuracy.toFixed(1)}%
                                            | Speed:{" "}
                                            {lesson.averageSpeed.toFixed(0)} WPM
                                        </div>
                                    </div>
                                    <button
                                        onClick={() =>
                                            onSelectLesson(lesson.lessonId)
                                        }
                                        className='bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-lg transition-colors'
                                    >
                                        Review
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Most Common Mistakes */}
            {progress.overallStats.mostCommonMistakes.length > 0 && (
                <div className='mb-8'>
                    <h2 className='text-2xl font-bold text-sky-400 mb-3'>
                        Characters You Need to Practice
                    </h2>
                    <div className='flex gap-3 flex-wrap'>
                        {progress.overallStats.mostCommonMistakes
                            .slice(0, 10)
                            .map((mistake) => (
                                <div
                                    key={mistake.character}
                                    className='p-3 bg-red-900/30 rounded-lg border border-red-600'
                                >
                                    <div className='text-2xl font-bold text-red-400'>
                                        {mistake.character}
                                    </div>
                                    <div className='text-xs text-gray-400 mt-1'>
                                        {mistake.count} mistakes
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            )}

            {/* All Lessons Progress */}
            <div className='mb-8'>
                <h2 className='text-2xl font-bold text-sky-400 mb-3'>
                    All Lessons
                </h2>
                <div className='grid gap-3'>
                    {Array.from(
                        { length: progress.totalLessons },
                        (_, i) => i + 1
                    ).map((lessonId) => {
                        const lessonProgress =
                            progress.lessonsProgress[lessonId];
                        return (
                            <LessonCard
                                key={lessonId}
                                lessonId={lessonId}
                                progress={lessonProgress}
                                onSelect={onSelectLesson}
                            />
                        );
                    })}
                </div>
            </div>

            {/* Export/Import/Reset */}
            <div className='mt-8 p-5 bg-gray-800 rounded-lg border border-gray-700'>
                <h2 className='text-2xl font-bold text-sky-400 mb-3'>
                    Manage Progress
                </h2>
                <div className='flex gap-3 flex-wrap'>
                    <button
                        onClick={handleExport}
                        className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors'
                    >
                        Export Progress
                    </button>
                    <button
                        onClick={() => setShowExport(!showExport)}
                        className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors'
                    >
                        Import Progress
                    </button>
                    <button
                        onClick={handleReset}
                        className='bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors'
                    >
                        Reset Progress
                    </button>
                </div>
                {showExport && (
                    <div className='mt-4'>
                        <textarea
                            value={importData}
                            onChange={(e) => setImportData(e.target.value)}
                            placeholder='Paste your progress data here...'
                            className='w-full h-24 p-3 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg focus:outline-none focus:border-sky-500'
                        />
                        <button
                            onClick={handleImport}
                            className='mt-3 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-colors'
                        >
                            Import
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

const StatCard: React.FC<{ title: string; value: string }> = ({
    title,
    value,
}) => (
    <div className='p-5 bg-gray-800 rounded-lg shadow-lg border border-gray-700'>
        <div className='text-sm text-gray-400 mb-1'>{title}</div>
        <div className='text-2xl font-bold text-sky-400'>{value}</div>
    </div>
);

const LessonCard: React.FC<{
    lessonId: number;
    progress: LessonProgress | undefined;
    onSelect: (id: number) => void;
}> = ({ lessonId, progress, onSelect }) => {
    const status = progress?.status || "not-started";
    const statusColors = {
        "not-started": "bg-gray-800 border-gray-700 text-gray-400",
        "in-progress": "bg-blue-900/30 border-blue-600 text-blue-400",
        completed: "bg-yellow-900/30 border-yellow-600 text-yellow-400",
        mastered: "bg-green-900/30 border-green-600 text-green-400",
    };

    const colorClass = statusColors[status];

    return (
        <div
            className={`p-4 rounded-lg border-2 cursor-pointer hover:brightness-110 transition-all ${colorClass}`}
            onClick={() => onSelect(lessonId)}
        >
            <div className='flex justify-between items-center flex-wrap gap-3'>
                <div>
                    <strong className='text-sky-400'>Lesson {lessonId}</strong>
                    {progress && (
                        <div className='text-sm text-gray-400 mt-1'>
                            {progress.completedExercises}/
                            {progress.totalExercises} exercises | Accuracy:{" "}
                            {progress.overallAccuracy.toFixed(1)}% | Speed:{" "}
                            {progress.averageSpeed.toFixed(0)} WPM
                        </div>
                    )}
                </div>
                <div className='text-xs font-bold'>
                    {status.toUpperCase().replace("-", " ")}
                </div>
            </div>
        </div>
    );
};

function formatTime(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    if (hours > 0) return `${hours}h ${minutes}m`;
    if (minutes > 0) return `${minutes}m`;
    return `${seconds}s`;
}

export default ProgressDashboard;
