import Contact from "@/components/Contact";
import HeroArea from "@/components/HeroArea";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import Ventures from "@/components/Ventures";


export default function Home() {
  return (
    <main>
      <div className=" px-[5vw] py-4">
        <Navbar/>
        <HeroArea />
        <div className="flex flex-col gap-20 pt-[12vh]" id="projects">
          <Projects />
          <Ventures/>
          <Stack/>
          <Contact/>
        </div>
      </div>
    </main>
  );
}
