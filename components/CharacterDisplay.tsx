import React from "react";
import { type LetterInfo } from "../types";
import { LETTER_SVG_MAP } from "../constants";

interface CharacterDisplayProps {
    letterInfo: LetterInfo | null;
    onPlaySound: () => void;
}

const SpeakerIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className={className}
    >
        <polygon points='11 5 6 9 2 9 2 15 6 15 11 19 11 5'></polygon>
        <path d='M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07'></path>
    </svg>
);

const CharacterDisplay: React.FC<CharacterDisplayProps> = ({
    letterInfo,
    onPlaySound,
}) => {
    if (!letterInfo) {
        return null;
    }

    const svgNumber = LETTER_SVG_MAP[letterInfo.armenian];
    const svgPath = svgNumber
        ? `/armenian_letters_svg/${String(svgNumber).padStart(
              2,
              "0"
          )}_${getSvgFileName(svgNumber)}.svg`
        : null;

    return (
        <div className='flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6 mx-auto'>
            {/* Desktop: Show handwriting SVG as separate card */}
            {svgPath && (
                <div className='hidden lg:flex bg-gray-800 rounded-xl shadow-lg p-4 w-48 h-48 flex-col items-center justify-center'>
                    <div className='text-xs sm:text-sm text-gray-400 mb-2'>
                        Handwriting
                    </div>
                    <div className='w-full h-full flex items-center justify-center'>
                        <img
                            src={svgPath}
                            alt={`Handwriting for ${letterInfo.armenian}`}
                            className='w-40 h-40 object-contain'
                        />
                    </div>
                </div>
            )}

            {/* Typed Letter Display */}
            <div className='flex flex-col items-center justify-center bg-gray-800 rounded-xl shadow-lg w-full max-w-md lg:w-48 lg:h-48 p-4'>
                <div className='text-xs sm:text-sm text-gray-400 mb-2'>
                    Typed Form
                </div>

                {/* Mobile: Show SVG small beside the letter */}
                <div className='flex items-center justify-center gap-4 lg:gap-0'>
                    <div className='text-5xl sm:text-6xl md:text-7xl font-bold text-sky-400'>
                        {letterInfo.armenian}
                    </div>

                    {/* Small SVG on mobile, hidden on desktop */}
                    {svgPath && (
                        <img
                            src={svgPath}
                            alt={`Handwriting for ${letterInfo.armenian}`}
                            className='w-16 h-16 object-contain lg:hidden'
                        />
                    )}
                </div>

                <div className='flex space-x-2 mt-2 sm:mt-3 md:mt-4 items-center'>
                    <button
                        onClick={onPlaySound}
                        className='p-1.5 sm:p-2 rounded-full bg-gray-700 hover:bg-sky-600 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500'
                        aria-label='Play sound'
                    >
                        <SpeakerIcon className='w-3 h-3 text-white' />
                    </button>
                    <div className='text-lg sm:text-xl md:text-2xl text-gray-400'>
                        {letterInfo.transliteration}
                    </div>
                </div>
            </div>
        </div>
    );
};

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

export default CharacterDisplay;
