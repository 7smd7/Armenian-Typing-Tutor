import React from 'react';
import { type Finger } from '../types';

interface FingerOverlayProps {
    finger: Finger;
}

const FingerSVG: React.FC<{ transform?: string }> = ({ transform }) => (
    <svg
        width="40"
        height="64"
        viewBox="0 0 40 64"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{ transform, filter: 'drop-shadow(2px 2px 3px rgba(0,0,0,0.4))' }}
        aria-hidden="true"
    >
        <path
            d="M 20,60 C 15,60 10,55 10,45 L 10,20 C 10,10 15,5 20,5 C 25,5 30,10 30,20 L 30,45 C 30,55 25,60 20,60 Z"
            fill="rgba(135, 206, 235, 0.8)" // Sky blue with opacity
            stroke="#475569" // slate-600
            strokeWidth="2"
        />
        <path
            d="M 15,18 C 15,14 25,14 25,18 C 25,22 15,22 15,18 Z"
            fill="rgba(240, 248, 255, 0.8)" // Alice blue for the nail with opacity
            stroke="#475569" // slate-600
            strokeWidth="1.5"
        />
    </svg>
);

const FingerOverlay: React.FC<FingerOverlayProps> = ({ finger }) => {
    let transform = '';
    if (finger.startsWith('Right')) {
        transform += ' scaleX(-1)';
    }

    if (finger.endsWith('Pinky')) {
        transform += ' rotate(-15deg)';
    } else if (finger.endsWith('Ring')) {
        transform += ' rotate(-5deg)';
    } else if (finger.endsWith('Index')) {
        transform += ' rotate(5deg)';
    } else if (finger.endsWith('Thumb')) {
        transform += ' rotate(30deg)';
    }
    
    if (finger === 'BothThumbs') {
         return <FingerSVG transform="rotate(30deg)" />;
    }

    return <FingerSVG transform={transform.trim()} />;
};

export default FingerOverlay;
