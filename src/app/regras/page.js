export default function Regras(){
    return(
        <div className="h-screen bg-primary flex justify-center">
            <div className="max-w-96 text-white w-full pt-5 px-3">
                <div className="w-full mb-4">
                    <h1 className="text-3xl font-bold mb-2">Regras</h1>
                    <hr/>
                </div>
                <div className="mb-5">
                    <h2 className="font-medium mb-3 text-xl">O que precisa pra jogar?</h2>
                    <ol className="list-decimal px-6">
                        <li className="text-sm">Um celular ou PC (Indico jogar pelo celular)</li>
                        <li className="text-sm">No mínimo duas pessoas (contando com você)</li>
                        <li className="text-sm">Uma bebida alcoolica</li>
                        <li className="text-sm">Copos</li>

                    </ol>
                </div>

                <div className="mb-5">
                    <h2 className="font-medium mb-3 text-xl">Como jogar?</h2>
                    <ol className="list-decimal px-6">
                        <li className="text-sm">Clique em jogar</li>
                        <li className="text-sm">Escolha um pack/Card que você deseja (cada card descreve mais ou menos o ambiente ou qual a inteção que você quer jogar)</li>
                        <li className="text-sm">Leia a frase que aparecerá, provavelmente começará com "Eu nunca"</li>
                        <li className="text-sm">Todos que já tiverem feito o que está na frase têm que beber um dedo da bebida alcoolica escolhida. "um dedo = meça a grossura do dedo de alguém no copo e encha até essa médida"</li>
                        <li className="text-sm">A pessoa que leu passa para a pessoa ao seu lado e assim contiua o jogo repetindo as instruções anteriores a partir da "3"</li>

                    </ol>
                </div>
             
                
            </div>
        </div>
    )
}