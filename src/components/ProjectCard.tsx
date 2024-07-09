import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from "next/image";
import Link from "next/link";
import React from "react";
  
interface  ProjectCardProps {
    imgSrc: string;
    imgAlt: string;
    title: string;
    description: string;
    githubLink: string;
    projectLink: string;
    tech1: string;
}
const ProjectCard: React.FC<ProjectCardProps> = ({
    imgSrc,
    imgAlt,
    title,
    description,
    githubLink,
    projectLink,
    tech1
}) => {
    return ( 
        <div>
            <Card className="w-[420px] p-4">
                <Image
                    src={imgSrc}
                    alt={imgAlt}
                    width="388"
                    height="100"
                    className="m-auto rounded"
                />
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardHeader>
                
                <CardContent className="flex justify-between">
                    <ul className="flex">
                        <li>
                            <Image
                                className="m-auto"
                                src={tech1}
                                alt=""
                                width="32"
                                height="32"
                            />
                        </li>
                        <li>
                            <Image
                                className="m-auto"
                                src={tech1}
                                alt=""
                                width="32"
                                height="32"
                            />
                        </li>
                        <li>
                            <Image
                                className="m-auto"
                                src={tech1}
                                alt=""
                                width="32"
                                height="32"
                            />
                        </li>
                        <li>
                            <Image
                                className="m-auto"
                                src={tech1}
                                alt=""
                                width="32"
                                height="32"
                            />
                        </li>
                    </ul>
                    <div className="flex">
                        <Link
                            href={githubLink}>
                            <Image
                                className="m-auto"
                                src={tech1}
                                alt=""
                                width="32"
                                height="32"
                            />
                        </Link>
                        <Link
                            href={projectLink}>
                            <Image
                                className="m-auto"
                                src={tech1}
                                alt=""
                                width="32"
                                height="32"
                            />
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
     );
}
 
export default ProjectCard;