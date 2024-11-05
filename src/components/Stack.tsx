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
                    <div className="md:w-[4vw]">
                    </div>
                    <StackCard
                        imgSrc="/logos/nextjs.png"
                        imgAlt="NextJs"
                        title="NextJs"
                    />
                    <StackCard
                        imgSrc="/logos/react.svg"
                        imgAlt="React"
                        title="React"
                    />
                    <StackCard
                        imgSrc="/logos/nextauth.svg"
                        imgAlt="NextAuth"
                        title="NextAuth"
                    />
                    <StackCard
                        imgSrc="/logos/docker.svg"
                        imgAlt="Docker"
                        title="Docker"
                    />
                    <StackCard
                        imgSrc="/logos/typescript.svg"
                        imgAlt="TypeScript"
                        title="TypeScript"
                    />
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
                        imgSrc="/logos/node_js.svg"
                        imgAlt="Node.Js"
                        title="Node.Js"
                    />
                    <StackCard
                        imgSrc="/logos/github.svg"
                        imgAlt="GitHub"
                        title="GitHub"
                    />
                    <StackCard
                        imgSrc="/logos/vercel.png"
                        imgAlt="Vercel"
                        title="Vercel"
                    />
                    <StackCard
                        imgSrc="/logos/tailwindcss.svg"
                        imgAlt="Tailwind CSS"
                        title="Tailwind CSS"
                    />
                    <StackCard
                        imgSrc="/logos/figma.svg"
                        imgAlt="Figma"
                        title="Figma"
                    />
                    <StackCard
                        imgSrc="/logos/framer.png"
                        imgAlt="Framer"
                        title="Framer"
                    />
                    <div className="md:w-[4vw]">
                    </div>
                </div>
                <ScrollBar orientation="horizontal" className="hidden"/>
            </ScrollArea>
        </div>
     );
}
 
export default Stack;