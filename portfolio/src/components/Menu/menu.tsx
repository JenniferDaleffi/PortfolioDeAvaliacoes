import Image from "next/image"
import Link from "next/link"
import checkpoint from "../../../public/images/checkpoint.png"
import global from "../../../public/images/global.png"
import challenge from "../../../public/images/challenge.png"

export default function Menu() {
    return (
        <div>
            <div className="flex items-center justify-center mt-32 w-full">
                <div className="p-10 flex flex-col items-center  w-1/3 m-10 min-h-80 shadow-lg ">
                    <Image src={checkpoint} alt="Checkpoint" width={100} height={50} className="my-4" />
                    <h2 className="text-2xl mb-4">Checkpoint</h2>
                    <p className="text-left mb-12"> São testes semestrais dados por cada matéria do curso de análise e desenvolvimento de sistemas, Sendo: Building relational Database, Domain driven using java, computational thinking using python, IA, front-end design engineering e software engineering and business model</p>
                    <Link href="/checkpoint" className="px-4 py-2 bg-fiap rounded-md  text-white text-center">CheckPoints</Link>
                </div>
                <div className="p-10 flex flex-col items-center w-1/3 m-10 min-h-80 shadow-lg">
                    <Image src={global} alt="challenge" width={100} height={50} className="my-4" />
                    <h2 className="text-2xl mb-4">Global Solution</h2>
                    <p className="text-left mb-12">A Global Solution da FIAP tem como objetivo resolver problemas de situacões reais e globais em parcerias com varias empresas do Mundo todo! Estudantes da FIAP recebem tempo determinado para solucionar casos importantes que contem inovacão como forma de sustentabilidade.
                    </p>
                    <Link href="/checkpoint" className="px-4 py-2 bg-fiap rounded-md text-white"> Checkpoint </Link>
                </div>
                <div className="p-10 flex flex-col items-center w-1/3 m-10 min-h-80 shadow-lg">
                    <Image src={challenge} alt="Global Sollution" width={100} height={50} className="my-4" />
                    <h2 className="text-2xl mb-4">Challenge</h2>
                    <p className="text-left mb-12">Os challenges da FIAP sao projetos desenvolvidos no ano todo para solucionar uma questão dada por determinada empresa, Os estudantes de análise e desenvolvimento de sistemas estão buscando a inovacão  como forma de solucão para porto seguro e a confiabilidade dos clientes em razão a oficinas mecânicas</p>
                    <Link href="/checkpoint" className="px-4 py-2 bg-fiap rounded-md text-white"> Checkpoint </Link>
                </div>
            </div>
        </div>
    )
 
}