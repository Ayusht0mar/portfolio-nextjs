import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
  

const Projects = () => {
    return ( 
        <div 
            className="
                flex
                flex-col
                gap-4
            "
        >
            <SectionHeading
                label="The projects."
                subLabel="Take a look at what i have made soo far"
            />
            <Tabs defaultValue="all">
                <TabsList>
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="webDevelopment">Web Development</TabsTrigger>
                    {/* <TabsTrigger value="appDevelopment">App Development</TabsTrigger> */}
                    <TabsTrigger value="productDesign">Product Design</TabsTrigger>
                </TabsList>
                    <TabsContent value="all">
                        <ScrollArea className="overflow-x-visible">
                            <div className="flex space-x-4">
                                <ProjectCard
                                    imgSrc = "/covers/inconcisecover.png"
                                    imgAlt = "Inconcise"
                                    title = "Inconcise"
                                    description = "A Productivity app making notes making, documentation etc. all at one place with no a smooth exprinece hehe"
                                    githubLink = "https://github.com/Ayusht0mar/inconcise"
                                    projectLink = "https://www.inconcise.in/"
                                    tech1="/logos/css.svg"
                                    tech2="/logos/html.svg"
                                    tech3="/logos/js.svg"
                                    tech4="/logos/react.svg"
                                    tech5="/logos/nextauth.svg"
                                    />
                                <ProjectCard
                                    imgSrc = "/portfolio1cover.jpg"
                                    imgAlt = "Clarity"
                                    title = "Clarity"
                                    description = "A Productivity app making notes making, documentation etc. all at one place with no a smooth exprinece hehe"
                                    githubLink = "/"
                                    projectLink = "/"
                                    tech1="/logos/css.svg"
                                    tech2="/logos/html.svg"
                                    tech3="/logos/js.svg"
                                    tech4="/logos/react.svg"
                                    tech5="/logos/nextauth.svg"
                                    />
                                <ProjectCard
                                    imgSrc = "/portfolio1cover.jpg"
                                    imgAlt = "Shortlist"
                                    title = "Shortlist"
                                    description = "A Job Portal app making notes making, documentation etc. all at one place with no a smooth exprinece hehe"
                                    githubLink = "/"
                                    projectLink = "/"
                                    tech1="/logos/css.svg"
                                    tech2="/logos/html.svg"
                                    tech3="/logos/js.svg"
                                    tech4="/logos/react.svg"
                                    tech5="/logos/nextauth.svg"
                                    />
                                <ProjectCard
                                    imgSrc = "/portfolio1cover.jpg"
                                    imgAlt = "Portfolio1"
                                    title = "Portfolio"
                                    description = "A Productivity app making notes making, documentation etc. all at one place with no a smooth exprinece hehe"
                                    githubLink = "/"
                                    projectLink = "/"
                                    tech1="/logos/css.svg"
                                    tech2="/logos/html.svg"
                                    tech3="/logos/js.svg"
                                    tech4="/logos/react.svg"
                                    tech5="/logos/nextauth.svg"
                                    />
                                <ProjectCard
                                    imgSrc = "/airbnbcover.jpg"
                                    imgAlt = "Airbnb clone"
                                    title = "Airbnb clone"
                                    description = "A Productivity app making notes making, documentation etc. all at one place with no a smooth exprinece hehe"
                                    githubLink = "/"
                                    projectLink = "/"
                                    tech1="/logos/css.svg"
                                    tech2="/logos/html.svg"
                                    tech3="/logos/js.svg"
                                    tech4="/logos/react.svg"
                                    tech5="/logos/nextauth.svg"
                                    />
                                <ProjectCard
                                    imgSrc = "/reflectcover.jpg"
                                    imgAlt = "No code website builder"
                                    title = "No code website builder"
                                    description = "A Productivity app making notes making, documentation etc. all at one place with no a smooth exprinece hehe"
                                    githubLink = "/"
                                    projectLink = "/"
                                    tech1="/logos/css.svg"
                                    tech2="/logos/html.svg"
                                    tech3="/logos/js.svg"
                                    tech4="/logos/react.svg"
                                    tech5="/logos/nextauth.svg"
                                    />
                                <ProjectCard
                                    imgSrc = "/text.jpeg"
                                    imgAlt = "Linktree Clone"
                                    title = "Linktree Clone"
                                    description = "A Productivity app making notes making, documentation etc. all at one place with no a smooth exprinece hehe"
                                    githubLink = "/"
                                    projectLink = "/"
                                    tech1="/logos/css.svg"
                                    tech2="/logos/html.svg"
                                    tech3="/logos/js.svg"
                                    tech4="/logos/react.svg"
                                    tech5="/logos/nextauth.svg"
                                    />
                                
                            </div>
                            <ScrollBar orientation="horizontal" className="hidden"/>
                        </ScrollArea>
                    </TabsContent>
                    <TabsContent value="webDevelopment">
                        Web Development
                    </TabsContent>
                    {/* <TabsContent value="appDevelopment">
                        App Development
                    </TabsContent> */}
                    <TabsContent value="productDesign">Product Design</TabsContent>
            </Tabs>

        </div>
     );
}
 
export default Projects;