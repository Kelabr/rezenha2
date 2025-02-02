import Image from "next/image";
import Link from "next/link";

const COLOR = {
    "orange-500": "bg-orange-500",
    "red-500": "bg-red-500",
    "green-500": "bg-green-500"
}


export function Card({name, color, destino}){
    return(
        <div className={`h-20 ${COLOR[color]} w-full p-3 rounded-lg font-bold mb-3`}>
            <Link href={`${destino}`}>
                <div>
                    <div className="flex">
                        <Image
                        className="mr-2"
                        src="/card/figuraCard.svg"
                        width={20}
                        height={20}
                        alt="Figura de Card"
                        ></Image>
                        <p className="text-primary">{name}</p>
                    </div>
                    <div className="h-10 flex justify-end items-end p-2">
                        <Image
                        src='/card/logoRezenhaCard.svg'
                        width={25}
                        height={25}
                        alt="Logo Rezenha"
                        >

                        </Image>
                    </div>
                </div>
            </Link>

            
        </div>
    )
}