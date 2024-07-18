import React from 'react';

const CircularSpinner = ({
    Width = "50px",
    StrokeWidth = "4",
    StrokeHex = "#93bfec",
    CapShape = "round"
}) => {

    const CapShapes = ['round', 'square'];

    const CircleDefaultStyling = {
        stroke: StrokeHex || '#93bfec',
        strokeWidth: StrokeWidth || '4',
        strokeLinecap: ((CapShape && CapShapes.includes(CapShape)) && CapShape) || 'round',
        animation: 'dash 1.5s ease-in-out infinite'
    }

    const SpinnerStyling = {
        width: Width || '50px',
        height: Width || '50px'
    }

    return (
        <div className=''>
            <svg style={ SpinnerStyling } className={`animate-spin z-10`} viewBox="0 0 50 50">
                <circle className={`fill-none`}
                    cx="25"
                    cy="25"
                    r="20"
                    style={ CircleDefaultStyling }
                ></circle>
            </svg>
            <style>{`
                @keyframes dash {
                    0% {
                        stroke-dasharray: 1, 150;
                        stroke-dashoffset: 0;
                    }
                    50% {
                        stroke-dasharray: 90, 150;
                        stroke-dashoffset: -34;
                    }
                    100% {
                        stroke-dasharray: 90, 150;
                        stroke-dashoffset: -124;
                    }
                }
            `}</style>
        </div>
    );
}

export default CircularSpinner;