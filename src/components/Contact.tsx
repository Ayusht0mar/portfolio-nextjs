import ContactCard from "./ContactCard";
import SectionHeading from "./SectionHeading";

const Contact = () => {
    return ( 
        <div className="flex flex-col gap-6">
            <SectionHeading
                label="Contact"
                subLabel="Take a look at what i do on side "
            />
            <ContactCard/>
        </div>
     );
}
 
export default Contact;