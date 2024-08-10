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
                md:flex-row
                text-2xl
                font-medium
                gap-2
            "
        >
            <div
                className="
                    text-primary-black
                "
            >
                {label}
            </div>
            <div
                className="
                    text-muted
                    text-base
                    md:text-2xl
                "
            >
                {subLabel}
            </div>
        </div>
     );
}
 
export default SectionHeading;