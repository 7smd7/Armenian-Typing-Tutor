
import React from 'react';
import { type KeyboardLayout, type KeyInfo, type Finger } from '../types';
import FingerOverlay from './FingerOverlay';

interface KeyboardProps {
    layout: KeyboardLayout;
    nextKeyCode: string | null;
    lastPressed: { code: string; correct: boolean } | null;
    fingerToHighlight: Finger | null;
}

const Key: React.FC<{
    keyInfo: KeyInfo | null;
    isNext: boolean;
    isLastPressed: boolean;
    wasCorrect: boolean;
    fingerToHighlight: Finger | null;
}> = ({ keyInfo, isNext, isLastPressed, wasCorrect, fingerToHighlight }) => {
    if (!keyInfo) {
        return <div className="w-16 h-16 rounded-lg bg-gray-800"></div>;
    }

    const getBackgroundColor = () => {
        if (isLastPressed) {
            return wasCorrect ? 'bg-green-600' : 'bg-red-600';
        }
        if (isNext) {
            return 'bg-sky-600';
        }
        return 'bg-gray-700 hover:bg-gray-600';
    };

    const widthClass = keyInfo.code.startsWith('Key') ? 'w-16' : 
                       keyInfo.code.startsWith('Digit') ? 'w-16' : 
                       'flex-grow';
    
    const isHomeKey = keyInfo.code === 'KeyF' || keyInfo.code === 'KeyJ';

    return (
        <div
            className={`relative flex items-center justify-center h-16 ${widthClass} rounded-lg shadow-lg transition-colors duration-150 text-white font-sans text-2xl select-none ${getBackgroundColor()}`}
        >
            {keyInfo.armenian}
            {isHomeKey && <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-6 h-1 bg-gray-500 rounded-sm"></div>}
            {isNext && fingerToHighlight && <FingerOverlay finger={fingerToHighlight} />}
        </div>
    );
};


const Keyboard: React.FC<KeyboardProps> = ({ layout, nextKeyCode, lastPressed, fingerToHighlight }) => {
    return (
        <div className="p-4 bg-gray-800 rounded-xl shadow-2xl w-full max-w-5xl mx-auto">
            <div className="space-y-2">
                {layout.map((row, rowIndex) => (
                    <div key={rowIndex} className="flex justify-center items-center space-x-2">
                        {row.map((keyInfo, keyIndex) => (
                           <Key
                                key={keyInfo?.code || `space-${rowIndex}-${keyIndex}`}
                                keyInfo={keyInfo}
                                isNext={keyInfo?.code === nextKeyCode}
                                isLastPressed={lastPressed?.code === keyInfo?.code}
                                wasCorrect={lastPressed?.correct ?? false}
                                fingerToHighlight={keyInfo?.code === nextKeyCode ? fingerToHighlight : null}
                            />
                        ))}
                    </div>
                ))}
                 <div className="flex justify-center items-center space-x-2">
                    <div className={`relative flex items-center justify-center h-16 w-full max-w-lg rounded-lg shadow-lg transition-colors duration-150 text-white font-sans text-2xl select-none ${nextKeyCode === 'Space' ? 'bg-sky-600' : 'bg-gray-700 hover:bg-gray-600'}`}>
                        Space
                        {nextKeyCode === 'Space' && fingerToHighlight && <FingerOverlay finger={fingerToHighlight} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Keyboard;