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
                        imgSrc="/logos/js.png"
                        imgAlt="Javascript"
                        title="JavaScript"
                    />
                    <StackCard
                        imgSrc="/logos/css.png"
                        imgAlt="CSS"
                        title="CSS"
                    />
                    <StackCard
                        imgSrc="/logos/html.png"
                        imgAlt="HTML"
                        title="HTML"
                    />
                    <StackCard
                        imgSrc="/logos/react.png"
                        imgAlt="React"
                        title="React"
                    />
                    <StackCard
                        imgSrc="/logos/figma.png"
                        imgAlt="Figma"
                        title="Figma"
                    />
                    <StackCard
                        imgSrc="/logos/docker.png"
                        imgAlt="Docker"
                        title="Docker"
                    />
                    <StackCard
                        imgSrc="/logos/js.png"
                        imgAlt="Javascript"
                        title="JavaScript"
                    />
                    <StackCard
                        imgSrc="/logos/js.png"
                        imgAlt="Javascript"
                        title="JavaScript"
                    />
                    <StackCard
                        imgSrc="/logos/js.png"
                        imgAlt="Javascript"
                        title="JavaScript"
                    />
                    <StackCard
                        imgSrc="/logos/js.png"
                        imgAlt="Javascript"
                        title="JavaScript"
                    />
                    <StackCard
                        imgSrc="/logos/js.png"
                        imgAlt="Javascript"
                        title="JavaScript"
                    />
                </div>
                <ScrollBar orientation="horizontal" className="hidden"/>
            </ScrollArea>
        </div>
     );
}
 
export default Stack;