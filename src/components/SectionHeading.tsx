import React from "react";

interface SectionHeadingProps {
    label: string;
    subLabel: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
    label,
    subLabel
}) => {
    return ( 
        <div
            className="
                flex
                flex-col
                text-2xl
                font-medium
                gap-2
                mx-[5vw]
            "
        >
            <div
                className="
                    text-primary-black
                    font-semibold
                "
            >
                {label}
            </div>
            <div
                className="
                    text-muted
                    text-base
                    md:text-xl
                "
            >
                {subLabel}
            </div>
        </div>
     );
}
 
export default SectionHeading;