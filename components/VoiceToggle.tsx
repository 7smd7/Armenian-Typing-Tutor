import React from "react";

interface VoiceToggleProps {
    voiceMode: "human" | "computer";
    onToggle: () => void;
}

const VoiceToggle: React.FC<VoiceToggleProps> = ({ voiceMode, onToggle }) => {
    const isHuman = voiceMode === "human";

    return (
        <div className='flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm text-gray-400'>
            <span className='hidden sm:inline'>Computer Voice</span>
            <span className='sm:hidden'>Comp</span>
            <button
                onClick={onToggle}
                role='switch'
                aria-checked={isHuman ? "true" : "false"}
                aria-label='Toggle voice mode'
                title='Toggle between computer and human voice'
                className={`relative inline-flex h-5 w-9 sm:h-6 sm:w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-gray-900 touch-manipulation ${
                    isHuman ? "bg-sky-600" : "bg-gray-600"
                }`}
            >
                <span
                    aria-hidden='true'
                    className={`inline-block h-4 w-4 sm:h-5 sm:w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                        isHuman
                            ? "translate-x-4 sm:translate-x-5"
                            : "translate-x-0"
                    }`}
                />
            </button>
            <span className='hidden sm:inline'>Human Voice</span>
            <span className='sm:hidden'>Human</span>
        </div>
    );
};

export default VoiceToggle;
