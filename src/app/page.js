import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-primary h-screen">

      <section className="h-36 relative top-24">
        <Image
        src='/login/logoLoginRezenha.svg'
        fill
        alt="Logo rezenha"
        >
          
        </Image>
      </section>

      <section className="bg-white h-2/3 relative top-36 rounded-t-xl flex flex-col items-center">
        <div className="flex flex-col items-center pt-3 max-w-96 ">
          <h1 className="text-primary font-bold text-lg">Bem Vindo ao REZENHA</h1>
          <div className="w-2/3">
            <p className="mt-2 text-[14px] text-center font-medium text-terc">Um jogo de eu nunca pra tirar todo mundo do celular e dar umas risadas ou... quem sabe algo a mais </p>
          </div>
          <div className="mt-8 w-1/3 ">
            <Link href='/games' className=""><button className="bg-primary text-white w-full p-2 font-medium rounded-xl text-xl">Jogar</button></Link>
          </div>

          <div className="mt-20 flex flex-col items-center">
            <Link href='/regras' className="text-[14px] font-bold underline">Regras do jogo</Link>
            {/* <Link href='#' className="text-[14px] font-bold underline">@ dos jogadores</Link> */}
          </div>
          
        </div>

      </section>
    </div>
  );
}
