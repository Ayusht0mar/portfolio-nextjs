import SectionHeading from "./SectionHeading";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import VenturesCard from "./VentureCard";

const Ventures = () => {
    return ( 
        <div className="flex flex-col gap-6">
            <SectionHeading
                label="The ventures."
                subLabel="Take a look at what i do on side "
            />
            <ScrollArea>
                <div className="flex gap-4">
                    <VenturesCard
                    imgSrc = "/text.jpeg"
                    imgAlt = "I"
                    title = "Inconcise"
                    description = "A Productivity app making notes making, documentation etc. all at one place with no a smooth exprinece hehe"
                    ventureLink = "/"
                    />
                    <VenturesCard
                    imgSrc = "/text.jpeg"
                    imgAlt = "I"
                    title = "Digital Marketplace"
                    description = "A Productivity app making notes making, documentation etc. all at one place with no a smooth exprinece hehe"
                    ventureLink = "/"
                    />
                    <VenturesCard
                    imgSrc = "/text.jpeg"
                    imgAlt = "I"
                    title = "Shop"
                    description = "A Productivity app making notes making, documentation etc. all at one place with no a smooth exprinece hehe"
                    ventureLink = "/"
                    />
                </div>
                <ScrollBar orientation="horizontal" className="hidden"/>
            </ScrollArea>
        </div>
     );
}
 
export default Ventures;