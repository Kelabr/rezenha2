import CardGame from "@/components/ui/CardGame";
import { Consult } from "@/services/firebase/consultHot";

export default async function  startGame(){

    const data = await Consult()

    return(
        <div className="h-screen flex justify-center items-center bg-red-500 px-3">
            <CardGame data={data}/>
        </div>
    )
}