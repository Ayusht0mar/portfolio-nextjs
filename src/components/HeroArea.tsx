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
                    <h1 className="text-3xl md:text-5xl font-bold text-primary">Hey, I am Ayush</h1>
                    {/* <h1 className="text-3xl md:text-5xl text-muted leading-normal font-bold ">
                        Hello, I am <b className="text-accent leading-normal">Ayush!</b>
                        <br/>
                        I am a <b className="text-accent leading-normal">Web Developer</b>
                        <br/>
                        and <b className="text-accent leading-normal">Product Designer.</b>
                    </h1> */}
                    <p className="max-w-[440px] mt-2 text-base md:text-xl text-muted">
                        A Web Developer and Designer blending technical expertise and creativity to make the internet experience better.
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
                            className="flex items-center gap-2 text-lg"
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
                            className="text-lg"
                        >
                            View resume
                        </Link>
                    </Button>
                </div>
            </div>
            <Card
            src="/emojis/hero-img.png"
            alt="Example image"
            rotate="6deg"
            top="20%"
            left="65%"
            className="w-24 md:w-64 hidden md:block"
            />
        </div>
     );
}
 
export default HeroArea;