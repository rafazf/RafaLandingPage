import React from "react";
import {Card, CardFooter, Image, Button, Link} from "@nextui-org/react";
interface MyCardProps {
    imgUrl:string,
    title:string,
    linkPage:string
}
const MyCard:React.FC<MyCardProps> = ({imgUrl,title, linkPage}) => {
    const styleCardFooter = 'justify-between\n' +
        '                    before:bg-white/10\n' +
        '                    border-white/20 border-1\n' +
        '                    overflow-hidden py-1 absolute\n' +
        '                    before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10'
    return (
        <Card
            isFooterBlurred
            className='border-none rounded-2xl'
        >
            <Image
                alt="portafolio"
                className="object-cover"
                src={imgUrl}
                width={300}
            />
            <CardFooter className={styleCardFooter}>
                <p className="text-tiny text-black/80">{title}</p>
                <Button
                    className="text-tiny text-white bg-black/20"
                    variant="flat"
                    color="default"
                    radius="lg"
                    size="sm"
                >
                    <a href={linkPage} target='_blank'>Ir al sitio</a>
                </Button>
            </CardFooter>
        </Card>
    );
}
export default MyCard