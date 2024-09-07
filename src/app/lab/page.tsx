import LabCard from "@/components/LabCard";

const LabPage = () => {
    return ( 
        <main className="p-6 min-h-screen h-full">
            <p className="text-center text-muted w-[90vw] md:w-[50vw] m-auto">Creative space for UI experiments, component explorations, and interaction design.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-fit m-auto mt-6">
                <LabCard
                    imgSrc="/inconcisecover.jpg"
                    imgAlt = "Inconcise"
                    title = "Inconcise"
                    href = "/"
                />
                <LabCard
                    imgSrc="/inconcisecover.jpg"
                    imgAlt = "Inconcise"
                    title = "Inconcise"
                    href = "/"
                />
                <LabCard
                    imgSrc="/inconcisecover.jpg"
                    imgAlt = "Inconcise"
                    title = "Inconcise"
                    href = "/"
                />
                <LabCard
                    imgSrc="/inconcisecover.jpg"
                    imgAlt = "Inconcise"
                    title = "Inconcise"
                    href = "/"
                />
            </div>
        </main>
     );
}
 
export default LabPage;