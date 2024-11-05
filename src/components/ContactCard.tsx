import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { FaGithub, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { SiGitbook } from "react-icons/si";
import { PiCopyright } from "react-icons/pi";
import CopyToClipboardComponent from "./CopyToClipboard";

const ContactCard = () => {

    const d = new Date();
    let year = d.getFullYear();
    return ( 
        <div className="mx-[5vw]">
            <Card className="justify-center m-auto pt-20 pb-10 mb-5">
            <CardHeader className="text-center pb-5">
                    <CardTitle className="text-4xl">Lets start a project together.</CardTitle>
                    <CardDescription className="max-w-96 m-auto">I help business grow by crafting amazing web experiences. If you’re looking for a designer and developer that likes to get stuff done, let talk.</CardDescription>
                </CardHeader>
                <CardContent 
                className="
                flex
                gap-4
                justify-center
                ">
                <Button>
                    <Link
                        href="mailto: hi@ayushtomar.in"
                        className="flex items-center gap-2 text-base"
                     >
                        Send a message
                     </Link>
                </Button>
                <CopyToClipboardComponent textToCopy="hi@ayushtomar.in" />
                
                </CardContent>
            </Card>
            <Card className="flex flex-col md:flex-row gap-6 justify-between m-auto py-4 px-4 md:px-10 md:items-center">
                <CardHeader className="w-full">
                    <CardTitle>Ayush Tomar</CardTitle>
                    <CardDescription className="w-96">Web Developer and Product Designer</CardDescription>
                </CardHeader>
                <div className="flex gap-4">
                    <Link
                        href="https://github.com/Ayusht0mar"
                    >
                        <FaGithub size={24}/>
                    </Link>
                    <Link
                        href="https://www.instagram.com/ayusht0mar"
                    >
                        <FaInstagram size={24}/>
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/ayusht0mar/"
                    >
                        <FaLinkedinIn size={24}/>
                    </Link>
                    <Link
                        href="https://twitter.com/justayushtomar"
                    >
                        <FaXTwitter size={24}/>
                    </Link>
                    <Link
                        href="https://ayushtomar.gitbook.io/notes"
                    >
                        <SiGitbook size={24}/>
                    </Link>
                </div>
                <CardContent 
                className="
                flex
                md:justify-end
                w-full
                items-center
                gap-1
                ">
                <PiCopyright />
                {year}
                <p>Ayush Tomar</p>
                </CardContent>
            </Card>
        </div>
     );
}
 
export default ContactCard;