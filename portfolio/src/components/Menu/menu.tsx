import Image from "next/image"
import challenge from "../../../public/images/challenge.svg"
import checkpoint from "../../../public/images/checkpoint.svg"
import global from "../../../public/images/global.svg"
import Link from "next/link"
import dashboardJenni from "../../../public/images/dashboardjenni.png"
import dashboardLeo from "../../../public/images/dashboardleo.png"
import dashboardJulia from "../../../public/images/dashboardjulia.png"
 
export default function Menu() {
    return (
        <div className="bg-black">
            <div className="flex items-center justify-center flex-wrap">
                <div className="p-10 flex flex-col items-center justify-center lg:w-1/4 w-50 m-10 h-2/3 border-white border-solid border-2 shadow-slate-300 shadow-lg rounded-lg hover:scale-110 hover:duration-300">
                    <Image src={checkpoint} alt="Checkpoint" width={100} height={50} className="my-4" />
                    <h2 className="text-2xl mb-4">CheckPoint</h2>
                    <p className="text-left mb-12"> São testes semestrais dados por cada matéria do curso de Análise e Desenvolvimento de Sistemas, Sendo: Building relational Database, Domain driven using java, Computational thinking using python, IA, Front-end design engineering e Software engineering and business model.</p>
                    <Link className="text-white border-black border-solid border-2 p-3 bg-fiap rounded-md hover:bg-black hover:border-white  transition duration-500 hover:scale-110 hover:duration-300" href="/checkpoint/jennifer">CheckPoints</Link>
                </div>
                <div className="p-10 flex flex-col items-center justify-center w-50 lg:w-1/4 m-10 h-2/3 border-white border-solid border-2 shadow-slate-300 shadow-lg rounded-lg hover:scale-110 hover:duration-300">
                    <Image src={global} alt="challenge" width={100} height={50} className="my-4" />
                    <h2 className="text-2xl mb-4">Global Solution</h2>
                    <p className="text-left mb-12">A Global Solution da FIAP tem como objetivo resolver problemas de situacões reais e globais em parcerias com várias empresas do Mundo todo! Estudantes da FIAP recebem tempo determinado para solucionar casos importantes que contém inovacão como forma de sustentabilidade.
                    </p>
                    <Link className="text-white border-black border-solid border-2 p-3 bg-fiap rounded-md hover:bg-black hover:border-white transition duration-500 hover:scale-110 hover:duration-300" href="/gs/jennifer">Global Solution</Link>
                </div>
                <div className="p-10 flex flex-col items-center justify-center w-50 lg:w-1/4 m-10 h-2/3 border-white border-solid border-2 shadow-slate-300 shadow-lg rounded-lg hover:scale-110 hover:duration-300">
                    <Image src={challenge} alt="Global Sollution" width={100} height={50} className="my-4" />
                    <h2 className="text-2xl mb-4">Challenge</h2>
                    <p className="text-left mb-12">Os challenges da FIAP sao projetos desenvolvidos no ano todo para solucionar uma questão dada por determinada empresa, Os estudantes de Análise e Desenvolvimento de Sistemas estão buscando a inovacão  como forma de solução para porto seguro e a confiabilidade dos clientes em razão a oficinas mecânicas.</p>
                    <Link className="text-white border-black border-solid border-2 p-3 bg-fiap rounded-md hover:bg-black hover:border-white  transition duration-500 hover:scale-110 hover:duration-300" href="/challenge/jennifer">Challenge</Link>
                </div>
            </div>
        </div>
       
    )
 
}