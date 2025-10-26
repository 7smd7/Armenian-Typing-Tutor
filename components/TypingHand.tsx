import React from "react";
import { type Finger } from "../types";

interface TypingHandProps {
    side: "left" | "right";
    fingerToHighlight: Finger | null;
}

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

const TypingHand: React.FC<TypingHandProps> = ({ side, fingerToHighlight }) => {
    const shouldHighlight = (
        finger: "Thumb" | "Index" | "Middle" | "Ring" | "Pinky"
    ): boolean => {
        if (!fingerToHighlight) return false;
        if (fingerToHighlight === "BothThumbs" && finger === "Thumb")
            return true;
        const expectedFinger = `${capitalize(side)}${finger}`;
        return fingerToHighlight === expectedFinger;
    };

    // [top, left] percentages for the highlight dot on the left hand
    const highlightPositions: Record<string, [string, string]> = {
        Pinky: ["28%", "72%"],
        Ring: ["15%", "58%"],
        Middle: ["10%", "40%"],
        Index: ["15%", "22%"],
        Thumb: ["55%", "15%"],
    };

    return (
        <div className='hidden md:block relative w-24 md:w-28 lg:w-32 h-36 md:h-42 lg:h-48 flex-shrink-0'>
            <svg
                viewBox='0 0 100 135'
                className={`absolute inset-0 w-full h-full ${
                    side === "right" ? "transform -scale-x-100" : ""
                }`}
                aria-hidden='true'
            >
                <path
                    d='M65.6,134.5C49.9,134.5,42,121,39,111.4c-2.4-7.5-4.4-19.4-4.4-23.7c0-4.3,2-10.3,5-13.3c3-3,8-4.9,12-4.9h27.9 c4,0,9,2,12,4.9c3,3,5,9,5,13.3c0,4.3-2,16.2-4.4,23.7C88,121,80.1,134.5,65.6,134.5z M41.3,47.3c-2.6,0-5.1,1.5-6.6,3.8 C28.9,60.6,28.9,70,28.9,70s-1.5,13.8-1.5,18.8c0,5,3,9.4,7.5,9.4s7.5-4.4,7.5-9.4c0-5-1.5-18.8-1.5-18.8s0-9.4-5.9-18.8 C34.3,48.8,32.8,47.3,41.3,47.3z M61.3,31.3c-2.6,0-5.1,1.5-6.6,3.8c-5.9,9.4-5.9,18.8-5.9,18.8s-1.5,13.8-1.5,18.8 c0,5,3,9.4,7.5,9.4s7.5-4.4,7.5-9.4c0-5-1.5-18.8-1.5-18.8s0-9.4-5.9-18.8C64.3,32.8,62.8,31.3,61.3,31.3z M81.3,20.8 c-2.6,0-5.1,1.5-6.6,3.8c-5.9,9.4-5.9,18.8-5.9,18.8s-1.5,13.8-1.5,18.8c0,5,3,9.4,7.5,9.4s7.5-4.4,7.5-9.4c0-5-1.5-18.8-1.5-18.8 s0-9.4-5.9-18.8C84.3,22.3,82.8,20.8,81.3,20.8z M100,1.3C97.4,1.3,95,2.8,93.4,5C87.5,14.4,87.5,23.8,87.5,23.8s-1.5,13.8-1.5,18.8 c0,5,3,9.4,7.5,9.4s7.5-4.4,7.5-9.4c0-5-1.5-18.8-1.5-18.8s0-9.4-5.9-18.8C103,2.8,101.5,1.3,100,1.3z'
                    stroke='#4b5563' // gray-600
                    strokeWidth='2'
                    fill='none'
                    transform='translate(-28, 0)'
                />
            </svg>

            {Object.entries(highlightPositions).map(
                ([finger, [top, left]]) =>
                    shouldHighlight(finger as any) && (
                        <div
                            key={finger}
                            className='absolute w-6 h-6 rounded-full bg-green-500 animate-pulse shadow-lg'
                            style={{
                                top,
                                left:
                                    side === "right"
                                        ? `calc(100% - ${left})`
                                        : left,
                                transform: "translate(-50%, -50%)",
                            }}
                        />
                    )
            )}
        </div>
    );
};

export default TypingHand;
