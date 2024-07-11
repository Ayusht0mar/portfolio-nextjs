import SectionHeading from "./SectionHeading";
import StackCard from "./StackCard";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

const Stack = () => {
    return ( 
        <div className="flex flex-col gap-6">
            <SectionHeading 
                label="Stack"
                subLabel="What tech i use"
            />
            <ScrollArea>
                <div className="flex gap-4">
                    <StackCard
                        imgSrc="/logos/js.svg"
                        imgAlt="Javascript"
                        title="JavaScript"
                    />
                    <StackCard
                        imgSrc="/logos/css.svg"
                        imgAlt="CSS"
                        title="CSS"
                    />
                    <StackCard
                        imgSrc="/logos/html.svg"
                        imgAlt="HTML"
                        title="HTML"
                    />
                    <StackCard
                        imgSrc="/logos/react.svg"
                        imgAlt="React"
                        title="React"
                    />
                    <StackCard
                        imgSrc="/logos/figma.svg"
                        imgAlt="Figma"
                        title="Figma"
                    />
                    <StackCard
                        imgSrc="/logos/docker.svg"
                        imgAlt="Docker"
                        title="Docker"
                    />
                    <StackCard
                        imgSrc="/logos/nextjs.png"
                        imgAlt="NextJs"
                        title="NextJs"
                    />
                    <StackCard
                        imgSrc="/logos/vercel.png"
                        imgAlt="Vercel"
                        title="Vercel"
                    />
                    <StackCard
                        imgSrc="/logos/framer.png"
                        imgAlt="Framer"
                        title="Framer"
                    />
                    <StackCard
                        imgSrc="/logos/nextauth.svg"
                        imgAlt="NextAuth"
                        title="NextAuth"
                    />
                    <StackCard
                        imgSrc="/logos/js.png"
                        imgAlt="Javascript"
                        title="Tailwind CSS"
                    />
                    <StackCard
                        imgSrc="/logos/js.png"
                        imgAlt="Javascript"
                        title="Git"
                    />
                </div>
                <ScrollBar orientation="horizontal" className="hidden"/>
            </ScrollArea>
        </div>
     );
}
 
export default Stack;