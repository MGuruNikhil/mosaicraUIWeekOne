import { useState } from "react";

const Sizes = {
    "xs": "h-[5px] w-[10px]",
    "sm": "h-[10px] w-[20px]",
    "md": "h-[20px] w-[40px]",
    "lg": "h-[25px] w-[50px]",
    "xl": "h-[30px] w-[60px]",
    "2xl": "h-[35px] w-[70px]",
    "3xl": "h-[40px] w-[80px]"
};

const Shapes = {
    'round': 'rounded-[50px]',
    'square': 'rounded-[0]'
}

const ExpandingSwitch = ({
    Size = 'md',
    OnBg = '#0EA5E9',
    OffBg = '#6B7280',
    Shape = 'round'
}) => {
    const [isOn, setIsOn] = useState(false);

    const SliderBg = {
        backgroundColor: isOn ? (!!OnBg ? OnBg : '#0EA5E9')   : (!!OffBg ? OffBg : '#6B7280'),
    }

    return (
        <label className={`cursor-pointer label inline-flex items-center ${(Shape && Shapes[Shape]) || "rounded-[50px]"}`}>
            <div style = { SliderBg } className={`toggle isolate relative overflow-hidden ${(Size && Sizes[Size]) || "h-[20px] w-[40px]"} ${(Shape && Shapes[Shape]) || "rounded-[50px]"}  transition-colors duration-[0.5s] ease-out delay-[0.25s]`}>
                <input 
                    className="toggle-state hidden" 
                    type="checkbox"
                    checked={isOn}
                    onChange={() => setIsOn(prev => !prev)}
                />
                <div 
                    className={`indicator h-full w-[200%] bg-slate-200 ${(Shape && Shapes[Shape]) || "rounded-[50px]"}`} 
                    style={{ transform: isOn ? "translate3d(25%, 0, 0)" : "translate3d(-75%, 0, 0)", transition: 'transform 0.5s cubic-bezier(0.85, 0.05, 0.18, 1.35)' }}
                ></div>
            </div>
        </label>
    );
};

export default ExpandingSwitch;
