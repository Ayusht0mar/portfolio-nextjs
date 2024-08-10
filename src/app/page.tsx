import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import HeroArea from "@/components/HeroArea";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import Ventures from "@/components/Ventures";


export default function Home() {
  return (
    <main>
      <div className=" px-[5vw]">
        <HeroArea />
      </div>
        <div className="flex flex-col gap-20 pt-[12vh] mx-[5vw] overflow-visible pb-6" id="projects">
          <Projects />
          <Experience/>
          <Ventures/>
          <Stack/>
          <Contact/>
        </div>
    </main>
  );
}
