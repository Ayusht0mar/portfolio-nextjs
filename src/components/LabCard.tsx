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
    href: string;
}
const LabCard: React.FC<ProjectCardProps> = ({
    imgSrc,
    imgAlt,
    title,
    href
}) => {
    return ( 
        <div>
            <Link href={href}>
                <Card className="w-[80vw] md:w-[420px] p-4 flex flex-col gap-2">
                    <Image
                        src={imgSrc}
                        alt={imgAlt}
                        width="388"
                        height="100"
                        className="m-auto rounded"
                    />
                    <CardHeader>
                        <CardTitle>{title}</CardTitle>
                    </CardHeader>
                </Card>
            </Link>
        </div>
     );
}
 
export default LabCard;