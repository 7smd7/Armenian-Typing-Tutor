import React from 'react';

interface VoiceToggleProps {
    voiceMode: 'human' | 'computer';
    onToggle: () => void;
}

const VoiceToggle: React.FC<VoiceToggleProps> = ({ voiceMode, onToggle }) => {
    const isHuman = voiceMode === 'human';

    return (
        <div className="flex items-center space-x-2 text-sm text-gray-400">
            <span>Computer Voice</span>
            <button
                onClick={onToggle}
                role="switch"
                aria-checked={isHuman}
                className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                    isHuman ? 'bg-sky-600' : 'bg-gray-600'
                }`}
            >
                <span
                    aria-hidden="true"
                    className={`inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                        isHuman ? 'translate-x-5' : 'translate-x-0'
                    }`}
                />
            </button>
            <span>Human Voice</span>
        </div>
    );
};

export default VoiceToggle;
