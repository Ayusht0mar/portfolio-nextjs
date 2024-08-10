import { DragCards } from "@/components/DargCard";

const AboutPage = () => {
    return ( 
        <main className="h-full">
            <div className="w-[80vw] md:w-1/2 m-auto py-10">
                <h1 className="font-bold">Hi there,</h1>
                <p>
                    I am Ayush Tomar, a Web Developer and a Product Designer who design and code digital products, based in India. With experience of working with teams all around the world. I Currently work as a Web Developer for <a href="">Satyukt</a> prior to which I also worked as a Intern for Storyflow and as a freelacer for Digisell.
                    <br /><br />
                    I specialize in creating complex web-applications with NextJs and TypeScript. For Design I use Framer and Figma 
                    <br /><br />
                    I also created Inconcise which is a UI library with helps me and other developer to write code faster by copy pasting the reusable components
                    <br /><br />
                    When I am offline, you will probably find me working out, reading, playing chess or road tripping with my best friends.
                </p>

            </div>
            <DragCards/>
        </main>
     );
}
 
export default AboutPage;