import Link from "next/link";
import { Button } from "./ui/button";
import { TiChevronRight } from "react-icons/ti";
import { Card } from "./DargCard";


const HeroArea = () => {
    return ( 
        <div
            className="h-fit md:h-[80vh] justify-between px-6 py-16 md:py-0"
        >
            <div className="flex flex-col h-full justify-center gap-6">
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl md:text-5xl text-muted leading-normal font-bold ">
                        Hello, I am <b className="text-accent leading-normal">Ayush!</b>
                        <br/>
                        I am a <b className="text-accent leading-normal">Web Developer</b>
                        <br/>
                        and <b className="text-accent leading-normal">Product Designer.</b>
                    </h1>
                    <p className="max-w-[440px] text-base md:text-xl text-muted">
                        I design and code things on the internet blending creativity and technical expertise to make the users experience better.
                    </p>
                    <p className="text-base md:text-xl text-muted">
                        Previously @ <a href="https://satyukt.com/"><b>Satyukt</b></a> 
                        {/* <br /> */}
                        {/* Previously @ <a href="https://storyflow.so/"><b>Storyflow</b></a> */}
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
                            href="https://read.cv/ayushtomar"
                        >
                            View resume
                        </Link>
                    </Button>
                </div>
            </div>
            <Card
            src="https://images.unsplash.com/photo-1576174464184-fb78fe882bfd?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Example image"
            rotate="12deg"
            top="25%"
            left="60%"
            className="w-24 md:w-60 hidden md:block"
            />
        </div>
     );
}
 
export default HeroArea;