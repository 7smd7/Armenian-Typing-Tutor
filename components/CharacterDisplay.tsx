
import React from 'react';
import { type LetterInfo } from '../types';

interface CharacterDisplayProps {
    letterInfo: LetterInfo | null;
    onPlaySound: () => void;
}

const SpeakerIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
    </svg>
);


const CharacterDisplay: React.FC<CharacterDisplayProps> = ({ letterInfo, onPlaySound }) => {
    if (!letterInfo) {
        return null;
    }

    return (
        <div className="flex flex-col items-center justify-center p-8 bg-gray-800 rounded-xl shadow-lg my-8 w-64 h-64 mx-auto">
            <div className="text-8xl font-bold text-sky-400">{letterInfo.armenian}</div>
            <div className="text-3xl text-gray-400 mt-2">{letterInfo.transliteration}</div>
            <button
                onClick={onPlaySound}
                className="mt-4 p-3 rounded-full bg-gray-700 hover:bg-sky-600 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
                aria-label="Play sound"
            >
                <SpeakerIcon className="w-6 h-6 text-white" />
            </button>
        </div>
    );
};

export default CharacterDisplay;
