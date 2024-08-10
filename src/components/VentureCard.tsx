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
import { RxExternalLink } from "react-icons/rx";

import { IoCodeSlashOutline } from "react-icons/io5";
import { CiGlobe } from "react-icons/ci";

  
interface VenturesCardProps {
    imgSrc: string;
    imgAlt: string;
    title: string;
    description: string;
    ventureLink: string;
}
const VenturesCard: React.FC<VenturesCardProps> = ({
    imgSrc,
    imgAlt,
    title,
    description,
    ventureLink
}) => {
    return ( 
        <div>
            <Card className=" p-4 flex flex-col gap-6 ">
                <Image
                    src={imgSrc}
                    alt={imgAlt}
                    width="448"
                    height="100"
                    className="m-auto rounded"
                />
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardHeader>
                
                <CardContent className="flex justify-between">
                    <div className="flex gap-2">
                        <Link
                            href={ventureLink}
                            className="flex gap-2 items-center"
                            >
                            Visit live website
                            <RxExternalLink />
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
     );
}
 
export default VenturesCard;