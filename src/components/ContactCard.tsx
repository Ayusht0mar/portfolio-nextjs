import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { SlSocialGithub, SlSocialInstagram, SlSocialLinkedin } from "react-icons/sl";

const ContactCard = () => {
    return ( 
        <div>
            <Card className="justify-center m-auto pt-20 pb-10 mb-5">
            <CardHeader className="text-center pb-5">
                    <CardTitle className="text-4xl">Lets start a project together.</CardTitle>
                    <CardDescription className="w-96 m-auto">I help business grow by crafting amazing web experiences. If you’re looking for a designer and developer that likes to get stuff done, let talk.</CardDescription>
                </CardHeader>
                <CardContent 
                className="
                flex
                gap-4
                justify-center
                ">
                <Button>
                    <Link
                        href="#projects"
                        className="flex items-center gap-2 text-base"
                     >
                        Send a message
                     </Link>
                </Button>
                <Button 
                    variant="outline"
                    className="
                    bg-white"
                >
                    <Link
                        href="/"
                    >
                        Copy email
                    </Link>
                </Button>
                </CardContent>
            </Card>
            <Card className="flex justify-between m-auto py-8 px-10 items-center">
            <CardHeader className="w-full">
                    <CardTitle>Ayush Tomar</CardTitle>
                    <CardDescription className="w-96">Web Developer and Product Designer</CardDescription>
                </CardHeader>
                <div className="flex gap-4">
                    <Link
                        href="/"
                    >
                        <SlSocialGithub size={24}/>
                    </Link>
                    <Link
                        href="/"
                    >
                        <SlSocialInstagram size={24}/>
                    </Link>
                    <Link
                        href="/"
                    >
                        <SlSocialLinkedin size={24}/>
                    </Link>
                </div>
                <CardContent 
                className="
                flex
                gap-4
                w-full
                justify-end
                ">
                <Button>
                    <Link
                        href="#projects"
                        className="flex items-center gap-2 text-base"
                     >
                        Send a message
                     </Link>
                </Button>
                <Button 
                    variant="outline"
                    className="
                    bg-white"

                >
                    <Link
                        href="/"
                    >
                        Copy email
                    </Link>
                </Button>
                </CardContent>
            </Card>
        </div>
     );
}
 
export default ContactCard;