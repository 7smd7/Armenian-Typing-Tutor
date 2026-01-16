import React from "react";

interface VoiceToggleProps {
    voiceMode: "woman" | "human" | "computer";
    onToggle: () => void;
}

const VoiceToggle: React.FC<VoiceToggleProps> = ({ voiceMode, onToggle }) => {
    const getVoiceLabel = () => {
        switch (voiceMode) {
            case "woman":
                return "Woman Voice";
            case "human":
                return "Male Voice";
            case "computer":
                return "Computer Voice";
        }
    };

    const getVoiceIcon = () => {
        switch (voiceMode) {
            case "woman":
                return "👩";
            case "human":
                return "👨";
            case "computer":
                return "🤖";
        }
    };

    return (
        <button
            onClick={onToggle}
            className='flex items-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors text-sm sm:text-base text-gray-200'
            aria-label={`Current voice: ${getVoiceLabel()}. Click to change.`}
            title='Click to cycle through voice options'
        >
            <span className='text-lg'>{getVoiceIcon()}</span>
            <span className='hidden sm:inline'>{getVoiceLabel()}</span>
            <span className='sm:hidden'>
                {voiceMode === "woman"
                    ? "Woman"
                    : voiceMode === "human"
                    ? "Male"
                    : "PC"}
            </span>
        </button>
    );
};

export default VoiceToggle;
