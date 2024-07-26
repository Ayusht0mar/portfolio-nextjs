import Navbar from "@/components/Navbar";
import Link from "next/link";

const LabPage = () => {
    return ( 
        <main>
            <div className="px-[5vw] py-4">
                <Navbar/>
            </div>
            Lab Page
            <br />
            <Link
            href="/toolkit"
            >
                Toolkit
            </Link>
        </main>
     );
}
 
export default LabPage;