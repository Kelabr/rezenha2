import { Card } from "@/components/ui/Card";
import Image from "next/image";
import Link from "next/link";

export default function Games(){
    return(
        <div className="px-3 bg-primary h-screen pt-5 flex flex-col  ">
            <div className="">
                <section className="mb-10 flex justify-center w-full ">
                    <Image
                    className="bg-red"
                    src='/games/logoRezenha.svg'
                    width={120}
                    height={50}
                    alt="Logo Rezeha"
                    >

                    </Image>
                </section>
                <section className="flex justify-center">
                    <div className="max-w-[450px] w-full">
                        <Card name='Galera' color='orange-500' destino='/galera'/> 
                        <Card name='Hot' color='red-500' destino='#'/>
                        <Card name='F1' color='green-500' destino='#'/>
                    </div>
                </section>
            </div>
        </div>
    )
}