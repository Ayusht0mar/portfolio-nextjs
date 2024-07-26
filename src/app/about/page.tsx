import { DragCards } from "@/components/DargCard";
import Navbar from "@/components/Navbar";

const AboutPage = () => {
    return ( 
        <main className="h-full">
            <div className="px-[5vw] py-4">
                <Navbar/>
            </div>
            <div className="w-1/2 m-auto py-10">
                <h1 className="font-bold">Hi there</h1>
                <p>
                    I am Ayush Tomar, a web developer and a Product Designer
                </p>
            </div>
            <DragCards/>
        </main>
     );
}
 
export default AboutPage;