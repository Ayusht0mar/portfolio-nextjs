import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import CodeViewer from "@/components/lab/CodeViewer";
import FigmaStyleToolbar from "@/components/lab/FigmaStyleToolbar";


const Popover = () => {
    return ( 
        <div className="min-h-screen w-[96vw] lg:w-[60vw] mb-20 flex flex-col gap-4 mx-auto">
            <Link 
            href="/lab"
            className="flex items-center gap-2"
            >
                <FaArrowLeft />
                Back to lab
            </Link>
            <h2 className="font-semibold pl-2">Figma Style Toolbar</h2>
            <div className="border bg-white rounded-lg overflow-hidden min-h-80">
                <FigmaStyleToolbar/>
            </div>
            <div className="bg-[#1a1a1a] rounded-lg">
                <CodeViewer filePath="lab/figmastyletoolbar/page.tsx"/>
            </div>
        </div>
     );
}
 
export default Popover;