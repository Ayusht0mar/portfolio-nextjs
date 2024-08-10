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
                subLabel="Places I have worked at."
            />
            <Card className="p-6 overflow-hidden">
                <Tabs defaultValue="Satyukt" className="flex flex-col md:flex-row gap-6">
                    <TabsList className="flex justify-start md:flex-col overflow-y-scroll">
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
                                July 2024 - Present
                            </p>
                            <p className="text-sm text-muted-foreground mb-2">
                                Bengaluru, India
                            </p>
                            <p>
                                Worked as a web Developer
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
                            <p>
                                Worked as a web Developer
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
                            <p>
                                Worked as a web Developer
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
                                London, United Kingdom
                            </p>
                            <p>
                                Worked as a web Developer
                            </p>
                        </TabsContent>
                </Tabs>
            </Card>
        </div>
     );
}
 
export default Experience;