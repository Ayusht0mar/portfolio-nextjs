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
import { IoCodeSlashOutline } from "react-icons/io5";
import { CiGlobe } from "react-icons/ci";

  
interface  ProjectCardProps {
    imgSrc: string;
    imgAlt: string;
    title: string;
    description: string;
    githubLink: string;
    projectLink: string;
    tech1: string;
    tech2: string;
    tech3: string;
    tech4: string;
    tech5: string;
}
const ProjectCard: React.FC<ProjectCardProps> = ({
    imgSrc,
    imgAlt,
    title,
    description,
    githubLink,
    projectLink,
    tech1,
    tech2,
    tech3,
    tech4,
    tech5,
}) => {
    return ( 
        <div>
            <Card className="w-[80vw] md:w-[420px] p-4 flex flex-col gap-6">
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
                    <ul className="flex gap-1">
                        <li>
                            <Image
                                className="
                                m-auto
                                p-1
                                border
                                rounded-full
                                border-muted-foreground
                                "
                                src={tech1}
                                alt=""
                                width="32"
                                height="32"
                            />
                        </li>
                        <li>
                            <Image
                                className="
                                m-auto
                                p-1
                                border
                                rounded-full
                                border-muted-foreground
                                "
                                src={tech2}
                                alt=""
                                width="32"
                                height="32"
                            />
                        </li>
                        <li>
                            <Image
                                className="
                                m-auto
                                p-1
                                border
                                rounded-full
                                border-muted-foreground
                                "
                                src={tech3}
                                alt=""
                                width="32"
                                height="32"
                            />
                        </li>
                        <li>
                            <Image
                                className="
                                m-auto
                                p-1
                                border
                                rounded-full
                                border-muted-foreground
                                "
                                src={tech4}
                                alt=""
                                width="32"
                                height="32"
                            />
                        </li>
                        <li>
                            <Image
                                className="
                                m-auto
                                p-1
                                border
                                rounded-full
                                border-muted-foreground
                                "
                                src={tech5}
                                alt=""
                                width="32"
                                height="32"
                            />
                        </li>
                    </ul>
                    <div className="flex gap-2">
                        <Link
                            href={githubLink}>
                            <IoCodeSlashOutline
                            size="32"
                            className="
                            text-muted-foreground
                            p-1
                            border
                            rounded-full
                            border-muted-foreground
                            "
                            />
                        </Link>
                        <Link
                            href={projectLink}>
                            <CiGlobe 
                            size="32"
                            className="
                            text-muted-foreground
                            p-1
                            border
                            rounded-full
                            border-muted-foreground
                            "
                            />
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
     );
}
 
export default ProjectCard;