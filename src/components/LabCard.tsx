import {
    Card,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from "next/image";
import Link from "next/link";
import React from "react";

  
interface  ProjectCardProps {
    imgSrc: string;
    title: string;
    href: string;
}
const LabCard: React.FC<ProjectCardProps> = ({
    imgSrc,
    title,
    href
}) => {
    return ( 
        <div>
            <Link href={href}>
                <Card className="w-[80vw] max-w-fit p-2 flex flex-col gap-2">
                    <Image
                        src={imgSrc}
                        alt={title}
                        width="388"
                        height="100"
                        className="m-auto rounded-lg"
                    />
                    <CardHeader>
                        <CardTitle  className="pl-1 font-normal text-lg">{title}</CardTitle>
                    </CardHeader>
                </Card>
            </Link>
        </div>
     );
}
 
export default LabCard;