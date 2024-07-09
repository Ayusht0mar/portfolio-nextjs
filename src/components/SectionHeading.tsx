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
                "
            >
                {subLabel}
            </div>
        </div>
     );
}
 
export default SectionHeading;