import React from "react";
import Link from "next/link";

interface NavItemProps {
    label: string;
    link: string;
}

const NavItem: React.FC<NavItemProps> = ({
    label,
    link
}
) => {
    return (
        <div>
                <Link 
                    href={link}
                >
                    {label}
                </Link>
        </div>
    )
}

export default NavItem;