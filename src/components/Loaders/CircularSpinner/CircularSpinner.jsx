import React from 'react';

const Sizes = {
    "xs": "w-[20px] h-[20px]",
    "sm": "w-[30px] h-[30px]",
    "md": "w-[40px] h-[40px]",
    "lg": "w-[50px] h-[50px]",
    "xl": "w-[60px] h-[60px]",
    "2xl": "w-[70px] h-[70px]",
    "3xl": "w-[80px] h-[80px]",
    "4xl": "w-[90px] h-[90px]"
};

const Thicknesses = {
    "xs": "stroke-[1]",
    "sm": "stroke-[2]",
    "md": "stroke-[3]",
    "lg": "stroke-[4]",
    "xl": "stroke-[5]",
    "2xl": "stroke-[6]",
    "3xl": "stroke-[7]",
    "4xl": "stroke-[8]"
}

const CapShapes = {
    'round': 'round',
    'square': 'square'
}

const CircularSpinner = ({
    Size = "lg",
    Thickness = "lg",
    StrokeHex = "#93bfec",
    CapShape = "round"
}) => {

    const CircleDefaultStyling = {
        stroke: StrokeHex || '#93bfec',
        strokeLinecap: (CapShape && CapShapes[CapShape]) || 'round',
        animation: 'dash 1.5s ease-in-out infinite'
    }

    return (
        <div className=''>
            <svg className={`animate-spin z-10 ${(Size && Sizes[Size]) || "w-[50px] h-[50px]"}`} viewBox="0 0 50 50">
                <circle className={`fill-none ${(Thickness && Thicknesses[Thickness]) || "stroke-[4]"}`}
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

