import React from "react";
import { type KeyboardLayout, type KeyInfo, type Finger } from "../types";
import FingerOverlay from "./FingerOverlay";

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
        return <div className='w-10 h-10 rounded-lg bg-gray-800'></div>;
    }

    const getBackgroundColor = () => {
        if (isLastPressed) {
            return wasCorrect ? "bg-green-600" : "bg-red-600";
        }
        if (isNext) {
            return "bg-sky-600";
        }
        return "bg-gray-700 hover:bg-gray-600";
    };

    const getWidthClass = () => {
        if (keyInfo.code === "Tab" || keyInfo.code === "Backspace") {
            return "w-16";
        }
        if (keyInfo.code === "CapsLock" || keyInfo.code === "Enter") {
            return "w-20";
        }
        if (keyInfo.code === "ShiftLeft" || keyInfo.code === "ShiftRight") {
            return "w-24";
        }
        return "w-10";
    };

    const widthClass = getWidthClass();

    const isHomeKey = keyInfo.code === "KeyF" || keyInfo.code === "KeyJ";

    return (
        <div
            className={`relative flex items-center justify-center h-10 ${widthClass} rounded-lg shadow-lg transition-colors duration-150 text-white font-sans text-xl select-none ${getBackgroundColor()}`}
        >
            {keyInfo.armenian}
            {isHomeKey && (
                <div className='absolute bottom-1.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gray-500 rounded-sm'></div>
            )}
            {isNext && fingerToHighlight && (
                <FingerOverlay finger={fingerToHighlight} />
            )}
        </div>
    );
};

const Keyboard: React.FC<KeyboardProps> = ({
    layout,
    nextKeyCode,
    lastPressed,
    fingerToHighlight,
}) => {
    return (
        <div className='p-3 bg-gray-800 rounded-xl shadow-2xl w-full max-w-4xl mx-auto'>
            {/* Keyboard rows */}
            {layout.map((row, rowIndex) => (
                <div
                    key={rowIndex}
                    className={`flex justify-center items-center space-x-1${
                        rowIndex < layout.length - 1 ? " mb-1" : ""
                    }`}
                >
                    {row.map((keyInfo, keyIndex) => (
                        <Key
                            key={
                                keyInfo?.code || `space-${rowIndex}-${keyIndex}`
                            }
                            keyInfo={keyInfo}
                            isNext={keyInfo?.code === nextKeyCode}
                            isLastPressed={lastPressed?.code === keyInfo?.code}
                            wasCorrect={lastPressed?.correct ?? false}
                            fingerToHighlight={
                                keyInfo?.code === nextKeyCode
                                    ? fingerToHighlight
                                    : null
                            }
                        />
                    ))}
                </div>
            ))}

            <div className='flex justify-center items-center mt-1'>
                <div
                    className={`relative flex items-center justify-center h-10 w-96 rounded-lg shadow-lg transition-colors duration-150 text-white font-sans text-xl select-none ${
                        nextKeyCode === "Space"
                            ? "bg-sky-600"
                            : "bg-gray-700 hover:bg-gray-600"
                    }`}
                >
                    Space
                    {nextKeyCode === "Space" && fingerToHighlight && (
                        <FingerOverlay finger={fingerToHighlight} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Keyboard;
