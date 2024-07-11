import Link from "next/link";
import NavItem from "./NavItem";

const Navbar = () => {
    return ( 
        <div className="
            justify-center
            flex
            px-6
            py-2
            text-muted
            gap-6
            bg-[#F5F5F7]
            w-fit
            m-auto
            border
            border-[#6E6E7350]
            rounded-full
        ">
                <NavItem 
                    label="Home"
                    link="/"
                    />
                <NavItem 
                    label="About"
                    link="/about"
                    />
                <NavItem 
                    label="Lab"
                    link="/lab"
                    />
                <NavItem 
                    label="Shop"
                    link="/resume"
                    />
                <NavItem 
                    label="Resume"
                    link="/resume"
                    />
        </div>
     );
}
 
export default Navbar;
