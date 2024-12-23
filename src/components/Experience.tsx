import SectionHeading from "./SectionHeading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "./ui/card";

const Experience = () => {
    return ( 
        <div
            className="
                flex
                flex-col
                gap-4
            "
        >
            <SectionHeading
                label="Experience."
                subLabel="Places I got to work at."
            />
            <Card className="p-6 overflow-hidden mx-[5vw]">
                <Tabs defaultValue="Satyukt" className="flex flex-col md:flex-row gap-6">
                    <TabsList className="no-scrollbar flex justify-start md:flex-col overflow-y-scroll md:overflow-y-clip">
                        <TabsTrigger value="Satyukt" className="bg-white w-full text-base">Satyukt</TabsTrigger>
                        <TabsTrigger value="Storyflow" className="bg-white w-full text-base">Storyflow</TabsTrigger>
                        <TabsTrigger value="Digisell" className="bg-white w-full text-base">Digisell</TabsTrigger>
                        <TabsTrigger value="ShreeSarang" className="bg-white w-full text-base">Shree Sarang</TabsTrigger>
                    </TabsList>
                        <TabsContent value="Satyukt">
                            <h2 className="font-semibold leading-none tracking-tight text-3xl mb-2">
                                Web Developement Intern
                            </h2>
                            <p className="text-sm text-muted-foreground">
                                July 2024 - August 2024
                            </p>
                            <p className="text-sm text-muted-foreground mb-2">
                                Bengaluru, India
                            </p>
                            <p className="max-w-xl">
                                During my internship at Satyukt, I collaborate with the development team to design and implement responsive websites using HTML, CSS, and JavaScript. I contributed to the front-end enhancing user interfaces and optimizing website performance.
                            </p>
                        </TabsContent>
                        <TabsContent value="Storyflow">
                            <h2 className="font-semibold leading-none tracking-tight text-3xl mb-2">
                                Web Developement Intern
                            </h2>
                            <p className="text-sm text-muted-foreground">
                                April 2024
                            </p>
                            <p className="text-sm text-muted-foreground mb-2">
                                Tilburg, Netherlands
                            </p>
                            <p className="max-w-xl">
                                During my internship at Storyflow, I collaborated with the founding team to design and implement responsive platforms using NextJs, NextAuth, and GraphQL. I contributed to both front-end and back-end development. My work included developing and maintaining web applications.
                            </p>
                        </TabsContent>
                        <TabsContent value="Digisell">
                            <h2 className="font-semibold leading-none tracking-tight text-3xl mb-2">
                                Web Developement Freelancer
                            </h2>
                            <p className="text-sm text-muted-foreground">
                                March 2024
                            </p>
                            <p className="text-sm text-muted-foreground mb-2">
                                London, United Kingdom
                            </p>
                            <p className="max-w-xl">
                                As a freelance web developer, I successfully completed a project for Digisell, where I was responsible for designing and building a custom website template to allow users to create custom websites .
                            </p>                        
                        </TabsContent>
                        <TabsContent value="ShreeSarang">
                            <h2 className="font-semibold leading-none tracking-tight text-3xl mb-2">
                                Web Developement Freelancer
                            </h2>
                            <p className="text-sm text-muted-foreground">
                                March 2024
                            </p>
                            <p className="text-sm text-muted-foreground mb-2">
                                Delhi, India
                            </p>
                            <p className="max-w-xl">
                                As a freelance web developer, I successfully completed a project for Shree Sarang, where I was responsible for designing and building an ecommerce website for the jewelry brand .
                            </p>
                        </TabsContent>
                </Tabs>
            </Card>
        </div>
     );
}
 
export default Experience;