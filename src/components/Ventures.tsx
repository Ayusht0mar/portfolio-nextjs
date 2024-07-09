import SectionHeading from "./SectionHeading";
import { ScrollArea } from "./ui/scroll-area";
import VenturesCard from "./VentureCard";

const Ventures = () => {
    return ( 
        <div className="flex flex-col gap-6">
            <SectionHeading
                label="The ventures."
                subLabel="Take a look at what i do on side "
            />
            <ScrollArea>
                <VenturesCard/>
            </ScrollArea>
        </div>
     );
}
 
export default Ventures;