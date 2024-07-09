import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from "next/image"
  
interface StackCardProps {
    imgSrc: string,
    imgAlt: string,
    title: string
}

const StackCard: React.FC<StackCardProps> = ({
    imgSrc,
    imgAlt,
    title
}) => {
    return ( 
        <div>
            <Card className="w-36 h-36 p-5">
                <CardHeader>
                    <Image
                        className="m-auto"
                        src={imgSrc}
                        alt={imgAlt}
                        width="80"
                        height="80"
                    />
                    <CardDescription className="text-center">{title}</CardDescription>
                </CardHeader>
            </Card>
        </div>
     );
}
 
export default StackCard;