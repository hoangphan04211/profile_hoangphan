import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

interface GlitchTextProps {
    text: string;
    className?: string;
    as?: React.ElementType;
}

export function cn(...inputs: (string | undefined | null | false)[]) {
    return twMerge(clsx(inputs));
}

export const GlitchText: React.FC<GlitchTextProps> = ({ text, className, as: Component = 'span' }) => {
    return (
        <Component className={cn("relative inline-block group", className)}>
            <span className="relative z-10">{text}</span>
            <span
                className="absolute top-0 left-0 -translate-x-[2px] w-full text-cyber-blue opacity-70 z-0 group-hover:animate-[glitch_2s_infinite] hidden group-hover:block clip-path-polygon-[0_0,_100%_0,_100%_45%,_0_45%]"
                aria-hidden="true"
            >
                {text}
            </span>
            <span
                className="absolute top-0 left-0 translate-x-[2px] w-full text-cyber-purple opacity-70 z-0 group-hover:animate-[glitch_3s_infinite_reverse] hidden group-hover:block clip-path-polygon-[0_55%,_100%_55%,_100%_100%,_0_100%]"
                aria-hidden="true"
            >
                {text}
            </span>
        </Component>
    );
};
