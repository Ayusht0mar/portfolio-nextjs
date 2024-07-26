import ContactCard from "./ContactCard";
import SectionHeading from "./SectionHeading";

const Contact = () => {
    return ( 
        <div className="flex flex-col gap-6">
            <SectionHeading
                label="Contact."
                subLabel="Have a work for me?"
            />
            <ContactCard/>
        </div>
     );
}
 
export default Contact;