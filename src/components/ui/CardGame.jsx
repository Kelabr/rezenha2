'use client'

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"





export default function CardGame({data}){

    const [indice, setIndice] = useState(0)
    const [rodada, setRodada] = useState(0)
    const [finish, setFinish] = useState(false)



    useEffect(() => {

        if(rodada === 21){
           setFinish(true)
        }

    }, [rodada])
    

    function nextQuestion(){

        const limit = data.length

        let indexRamdom = 0

        do {
            indexRamdom = Math.floor(Math.random() * Number(limit))
        }while(indexRamdom === indice)

        setIndice(indexRamdom)

        setRodada((value) => value +1)

    }



    return(
        <div className="h-56 bg-white w-full rounded-xl px-3 pt-5 flex flex-col box-border max-w-96">
            <div className=" flex justify-center">
                <Image
                src='/cardGame/logoCardGame.svg'
                width={70}
                height={70}
                alt="Logo Rezenha"
                >

                </Image>
            </div>
            <div className="flex justify-center mt-5 text-center">
                <p>{data[indice].peq}</p>
            </div>
            <div className="h-1/3 flex justify-end items-end px-6 pb-3" >
            {
                finish ? (
                <Link href='/games'>
                    <button>Voltar</button>
                </Link>
                ):(
                    <Image
                    onClick={nextQuestion}
                src='/cardGame/setaProximo.svg'
                height={30}
                width={30}
                alt="seta"
                >

                </Image>
                )
            }
                

                
            </div>
            
        </div>
    )
}