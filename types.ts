export interface LetterInfo {
  armenian: string;
  transliteration: string;
}

export interface KeyInfo extends LetterInfo {
  code: string; // e.g., 'KeyQ', 'KeyA'
  shift?: LetterInfo;
  isModifier?: boolean;
}

export type KeyboardLayout = (KeyInfo | null)[][];

export interface LessonExercise {
  name: string;
  text: string;
}

export interface Lesson {
  title: string;
  description: string;
  exercises: LessonExercise[];
}

export type Finger =
  | 'LeftPinky' | 'LeftRing' | 'LeftMiddle' | 'LeftIndex' | 'LeftThumb'
  | 'RightPinky' | 'RightRing' | 'RightMiddle' | 'RightIndex' | 'RightThumb'
  | 'BothThumbs';