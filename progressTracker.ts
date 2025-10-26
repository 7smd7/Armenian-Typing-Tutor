// Progress tracking and analysis system for Armenian Typing Tutor

export interface ExerciseStats {
    exerciseId: string;
    lessonId: number;
    attempts: number;
    completedAt: string[];
    totalCharacters: number;
    correctCharacters: number;
    incorrectCharacters: number;
    averageSpeed: number; // WPM
    accuracy: number; // percentage
    mistakes: Record<string, number>; // character -> count of mistakes
    timeSpent: number; // seconds
    lastPracticed: string;
    needsReview: boolean;
}

export interface LessonProgress {
    lessonId: number;
    lessonTitle: string;
    status: "not-started" | "in-progress" | "completed" | "mastered";
    completedExercises: number;
    totalExercises: number;
    overallAccuracy: number;
    averageSpeed: number;
    startedAt?: string;
    completedAt?: string;
    lastPracticed: string;
}

export interface UserProgress {
    userId: string;
    totalLessons: number;
    completedLessons: number;
    currentLesson: number;
    lessonsProgress: Record<number, LessonProgress>;
    exerciseStats: Record<string, ExerciseStats>;
    overallStats: {
        totalTimeSpent: number;
        totalCharactersTyped: number;
        overallAccuracy: number;
        averageSpeed: number;
        mostCommonMistakes: Array<{ character: string; count: number }>;
    };
    createdAt: string;
    lastUpdated: string;
}

const STORAGE_KEY = "armenian-typing-tutor-progress";
const ACCURACY_THRESHOLD = 95; // 95% accuracy to mark as mastered
const MIN_SPEED_THRESHOLD = 20; // 20 WPM minimum to mark as mastered

class ProgressTracker {
    private progress: UserProgress;

    constructor() {
        this.progress = this.loadProgress();
    }

    private loadProgress(): UserProgress {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored) {
                return JSON.parse(stored);
            }
        } catch (error) {
            console.error("Error loading progress:", error);
        }

        // Initialize new progress
        return this.createNewProgress();
    }

    private createNewProgress(): UserProgress {
        return {
            userId: this.generateUserId(),
            totalLessons: 20,
            completedLessons: 0,
            currentLesson: 1,
            lessonsProgress: {},
            exerciseStats: {},
            overallStats: {
                totalTimeSpent: 0,
                totalCharactersTyped: 0,
                overallAccuracy: 0,
                averageSpeed: 0,
                mostCommonMistakes: [],
            },
            createdAt: new Date().toISOString(),
            lastUpdated: new Date().toISOString(),
        };
    }

    private generateUserId(): string {
        return `user-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    }

    private saveProgress(): void {
        try {
            this.progress.lastUpdated = new Date().toISOString();
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.progress));
        } catch (error) {
            console.error("Error saving progress:", error);
        }
    }

    // Record exercise completion
    recordExerciseAttempt(
        lessonId: number,
        lessonTitle: string,
        exerciseId: string,
        exerciseName: string,
        stats: {
            totalCharacters: number;
            correctCharacters: number;
            incorrectCharacters: number;
            timeSpent: number;
            mistakes: Record<string, number>;
        }
    ): void {
        const now = new Date().toISOString();
        const accuracy =
            (stats.correctCharacters / stats.totalCharacters) * 100;
        const wpm = this.calculateWPM(stats.totalCharacters, stats.timeSpent);

        // Update or create exercise stats
        const exerciseKey = `${lessonId}-${exerciseId}`;
        const existingStats = this.progress.exerciseStats[exerciseKey];

        const exerciseStats: ExerciseStats = {
            exerciseId,
            lessonId,
            attempts: (existingStats?.attempts || 0) + 1,
            completedAt: [...(existingStats?.completedAt || []), now],
            totalCharacters: stats.totalCharacters,
            correctCharacters: stats.correctCharacters,
            incorrectCharacters: stats.incorrectCharacters,
            averageSpeed: existingStats
                ? (existingStats.averageSpeed * existingStats.attempts + wpm) /
                  (existingStats.attempts + 1)
                : wpm,
            accuracy,
            mistakes: this.mergeMistakes(
                existingStats?.mistakes || {},
                stats.mistakes
            ),
            timeSpent: (existingStats?.timeSpent || 0) + stats.timeSpent,
            lastPracticed: now,
            needsReview:
                accuracy < ACCURACY_THRESHOLD || wpm < MIN_SPEED_THRESHOLD,
        };

        this.progress.exerciseStats[exerciseKey] = exerciseStats;

        // Update lesson progress
        this.updateLessonProgress(lessonId, lessonTitle);

        // Update overall stats
        this.updateOverallStats(stats, wpm, accuracy);

        this.saveProgress();
    }

    private calculateWPM(characters: number, timeInSeconds: number): number {
        const words = characters / 5; // Standard: 5 characters = 1 word
        const minutes = timeInSeconds / 60;
        return minutes > 0 ? Math.round(words / minutes) : 0;
    }

    private mergeMistakes(
        existing: Record<string, number>,
        newMistakes: Record<string, number>
    ): Record<string, number> {
        const merged = { ...existing };
        for (const [char, count] of Object.entries(newMistakes)) {
            merged[char] = (merged[char] || 0) + count;
        }
        return merged;
    }

    private updateLessonProgress(lessonId: number, lessonTitle: string): void {
        const lessonExercises = Object.values(
            this.progress.exerciseStats
        ).filter((stat) => stat.lessonId === lessonId);

        const completedExercises = lessonExercises.filter(
            (ex) => !ex.needsReview
        ).length;
        const totalExercises = lessonExercises.length;

        const averageAccuracy =
            lessonExercises.reduce((sum, ex) => sum + ex.accuracy, 0) /
            (lessonExercises.length || 1);
        const averageSpeed =
            lessonExercises.reduce((sum, ex) => sum + ex.averageSpeed, 0) /
            (lessonExercises.length || 1);

        let status: LessonProgress["status"] = "not-started";
        if (totalExercises > 0) {
            if (
                completedExercises === totalExercises &&
                averageAccuracy >= ACCURACY_THRESHOLD &&
                averageSpeed >= MIN_SPEED_THRESHOLD
            ) {
                status = "mastered";
            } else if (completedExercises === totalExercises) {
                status = "completed";
            } else {
                status = "in-progress";
            }
        }

        const existingProgress = this.progress.lessonsProgress[lessonId];
        const now = new Date().toISOString();

        this.progress.lessonsProgress[lessonId] = {
            lessonId,
            lessonTitle,
            status,
            completedExercises,
            totalExercises,
            overallAccuracy: averageAccuracy,
            averageSpeed,
            startedAt: existingProgress?.startedAt || now,
            completedAt:
                status === "completed" || status === "mastered"
                    ? now
                    : undefined,
            lastPracticed: now,
        };

        // Update current lesson and completed count
        this.progress.completedLessons = Object.values(
            this.progress.lessonsProgress
        ).filter((lp) => lp.status === "mastered").length;

        // Advance to next lesson if current is mastered
        if (status === "mastered" && lessonId === this.progress.currentLesson) {
            this.progress.currentLesson = Math.min(
                lessonId + 1,
                this.progress.totalLessons
            );
        }
    }

    private updateOverallStats(
        stats: {
            totalCharacters: number;
            correctCharacters: number;
            timeSpent: number;
            mistakes: Record<string, number>;
        },
        wpm: number,
        accuracy: number
    ): void {
        const overall = this.progress.overallStats;

        overall.totalTimeSpent += stats.timeSpent;
        overall.totalCharactersTyped += stats.totalCharacters;

        // Calculate weighted average for accuracy and speed
        const totalAttempts = Object.values(this.progress.exerciseStats).reduce(
            (sum, ex) => sum + ex.attempts,
            0
        );
        overall.overallAccuracy =
            totalAttempts > 1
                ? (overall.overallAccuracy * (totalAttempts - 1) + accuracy) /
                  totalAttempts
                : accuracy;
        overall.averageSpeed =
            totalAttempts > 1
                ? (overall.averageSpeed * (totalAttempts - 1) + wpm) /
                  totalAttempts
                : wpm;

        // Update most common mistakes
        this.updateMostCommonMistakes(stats.mistakes);
    }

    private updateMostCommonMistakes(
        newMistakes: Record<string, number>
    ): void {
        const allMistakes: Record<string, number> = {};

        // Aggregate all mistakes from all exercises
        Object.values(this.progress.exerciseStats).forEach((stat) => {
            Object.entries(stat.mistakes).forEach(([char, count]) => {
                allMistakes[char] = (allMistakes[char] || 0) + count;
            });
        });

        // Convert to sorted array
        this.progress.overallStats.mostCommonMistakes = Object.entries(
            allMistakes
        )
            .map(([character, count]) => ({ character, count }))
            .sort((a, b) => b.count - a.count)
            .slice(0, 10); // Keep top 10
    }

    // Get current progress
    getProgress(): UserProgress {
        return { ...this.progress };
    }

    // Get lesson progress
    getLessonProgress(lessonId: number): LessonProgress | null {
        return this.progress.lessonsProgress[lessonId] || null;
    }

    // Get exercises that need review
    getExercisesNeedingReview(): ExerciseStats[] {
        return Object.values(this.progress.exerciseStats).filter(
            (stat) => stat.needsReview
        );
    }

    // Get recommended next lesson
    getRecommendedLesson(): number {
        return this.progress.currentLesson;
    }

    // Get lessons that need review
    getLessonsNeedingReview(): LessonProgress[] {
        return Object.values(this.progress.lessonsProgress).filter(
            (lp) =>
                lp.status === "completed" &&
                (lp.overallAccuracy < ACCURACY_THRESHOLD ||
                    lp.averageSpeed < MIN_SPEED_THRESHOLD)
        );
    }

    // Reset progress
    resetProgress(): void {
        this.progress = this.createNewProgress();
        this.saveProgress();
    }

    // Export progress as JSON
    exportProgress(): string {
        return JSON.stringify(this.progress, null, 2);
    }

    // Import progress from JSON
    importProgress(jsonData: string): boolean {
        try {
            const imported = JSON.parse(jsonData);
            if (this.validateProgress(imported)) {
                this.progress = imported;
                this.saveProgress();
                return true;
            }
        } catch (error) {
            console.error("Error importing progress:", error);
        }
        return false;
    }

    private validateProgress(data: any): data is UserProgress {
        return (
            data &&
            typeof data === "object" &&
            "userId" in data &&
            "lessonsProgress" in data &&
            "exerciseStats" in data
        );
    }

    // Get statistics for a specific character
    getCharacterStats(character: string): {
        totalAttempts: number;
        mistakes: number;
        accuracy: number;
    } {
        let totalAttempts = 0;
        let mistakes = 0;

        Object.values(this.progress.exerciseStats).forEach((stat) => {
            totalAttempts += stat.totalCharacters;
            mistakes += stat.mistakes[character] || 0;
        });

        return {
            totalAttempts,
            mistakes,
            accuracy:
                totalAttempts > 0
                    ? ((totalAttempts - mistakes) / totalAttempts) * 100
                    : 0,
        };
    }

    // Get practice recommendations
    getPracticeRecommendations(): {
        weakCharacters: string[];
        lessonsToReview: number[];
        suggestedNextLesson: number;
    } {
        const weakCharacters = this.progress.overallStats.mostCommonMistakes
            .slice(0, 5)
            .map((m) => m.character);

        const lessonsToReview = this.getLessonsNeedingReview().map(
            (lp) => lp.lessonId
        );

        return {
            weakCharacters,
            lessonsToReview,
            suggestedNextLesson: this.progress.currentLesson,
        };
    }
}

// Singleton instance
let trackerInstance: ProgressTracker | null = null;

export function getProgressTracker(): ProgressTracker {
    if (!trackerInstance) {
        trackerInstance = new ProgressTracker();
    }
    return trackerInstance;
}

export default ProgressTracker;
