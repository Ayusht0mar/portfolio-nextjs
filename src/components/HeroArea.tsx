import Link from "next/link";
import { Button } from "./ui/button";
import { TiChevronRight } from "react-icons/ti";


const HeroArea = () => {
    return ( 
        <div
            className="h-[80vh] justify-center px-6 flex flex-col gap-6"
        >
            <div className="flex flex-col gap-2">
                <h1 className="text-5xl text-muted leading-normal font-bold ">
                    Hello, I am <b className="text-accent">Ayush!</b>
                    <br/>
                    I am a <b className="text-accent">Web Developer</b>
                    <br/>
                    and <b className="text-accent">Product Designer.</b>
                </h1>
                <p className="w-[440px] text-xl text-muted">
                    I help business grow by crafting amazing web experiences. If you are looking for a designer and developer that likes to get stuff done, lets talk.
                </p>
            </div>
            <div 
                className="
                    flex
                    gap-4
                "
            >
                <Button>
                    <Link
                        href="#projects"
                        className="flex items-center gap-2 text-base"
                     >
                        See my work
                        <TiChevronRight 
                            className="rotate-90"
                            size={20}
                        />
                     </Link>
                </Button>
                <Button 
                    variant="outline"
                >
                    <Link
                        href="/"
                    >
                        View resume
                    </Link>
                </Button>
            </div>
        </div>
     );
}
 
export default HeroArea;