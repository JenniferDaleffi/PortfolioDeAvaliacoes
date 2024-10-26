import Image from "next/image"
import challenge from "../../../public/images/challenge.svg"
import checkpoint from "../../../public/images/checkpoint.svg"
import global from "../../../public/images/global.svg"
import Link from "next/link"
 
export default function Menu() {
    return (
        <div>
            <div className="flex items-center justify-center w-full h-screen">
                <div className="p-10 flex flex-col items-center justify-center w-1/3 m-10 h-2/3 border-white border-solid border-2 shadow-slate-300 shadow-lg rounded-lg hover:scale-110 hover:duration-300">
                    <Image src={checkpoint} alt="Checkpoint" width={100} height={50} className="my-4" />
                    <h2 className="text-2xl mb-4">CheckPoint</h2>
                    <p className="text-left mb-12"> São testes semestrais dados por cada matéria do curso de Análise e Desenvolvimento de Sistemas, Sendo: Building relational Database, Domain driven using java, Computational thinking using python, IA, Front-end design engineering e Software engineering and business model.</p>
                    <Link className="text-white border-black border-solid border-2 p-3 bg-fiap rounded-md hover:bg-black hover:border-white  transition duration-500 hover:scale-110 hover:duration-300" href="/us/jennifer">CheckPoints</Link>
                </div>
                <div className="p-10 flex flex-col items-center justify-center w-1/3 m-10 h-2/3 border-white border-solid border-2 shadow-slate-300 shadow-lg rounded-lg hover:scale-110 hover:duration-300">
                    <Image src={global} alt="challenge" width={100} height={50} className="my-4" />
                    <h2 className="text-2xl mb-4">Global Solution</h2>
                    <p className="text-left mb-12">A Global Solution da FIAP tem como objetivo resolver problemas de situacões reais e globais em parcerias com várias empresas do Mundo todo! Estudantes da FIAP recebem tempo determinado para solucionar casos importantes que contém inovacão como forma de sustentabilidade.
                    </p>
                    <Link className="text-white border-black border-solid border-2 p-3 bg-fiap rounded-md hover:bg-black hover:border-white  transition duration-500 hover:scale-110 hover:duration-300" href="">Global Solution</Link>
                </div>
                <div className="p-10 flex flex-col items-center justify-center w-1/3 m-10 h-2/3 border-white border-solid border-2 shadow-slate-300 shadow-lg rounded-lg hover:scale-110 hover:duration-300">
                    <Image src={challenge} alt="Global Sollution" width={100} height={50} className="my-4" />
                    <h2 className="text-2xl mb-4">Challenge</h2>
                    <p className="text-left mb-12">Os challenges da FIAP sao projetos desenvolvidos no ano todo para solucionar uma questão dada por determinada empresa, Os estudantes de Análise e Desenvolvimento de Sistemas estão buscando a inovacão  como forma de solução para porto seguro e a confiabilidade dos clientes em razão a oficinas mecânicas.</p>
                    <Link className="text-white border-black border-solid border-2 p-3 bg-fiap rounded-md hover:bg-black hover:border-white  transition duration-500 hover:scale-110 hover:duration-300" href="">Challenge</Link>
                </div>
            </div>
            <div>
                        <div className=" flex items-center justify-center">
                            <h1 className="text-4xl text-white" > Desempenho </h1>
                        </div>
                        <table className="text-white bg-fiap rounded-lg mb-5 mt-5 justify-content">
                            <thead>
                                <tr className="border-solid border-2 border-black">
                                    <th scope="col">DISCIPLINA</th>
                                    <th scope="col">Jennifer</th>
                                    <th scope="col">Julia</th>
                                    <th scope="col">Leonardo</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-solid border-2 border-black">
                                    <th className="border-solid border-2 border-black">Artificial Intelligence</th>
                                    <th>100</th>
                                    <td className="p-5">100</td>
                                    <td>100</td>
                                    
                                </tr>
                                <tr className="border-solid border-2 border-black">
                                    <th className="border-solid border-2 border-black">Building Relational Database</th>
                                    <th>90</th>
                                    <td className="p-5">86</td>
                                    <td>83</td>
                                    
                                </tr>
                                <tr className="border-solid border-2 border-black">
                                    <th className="border-solid border-2 border-black">Computational Thinking Using Python</th>
                                    <th>67</th>
                                    <td className="p-5">66</td>
                                    <td>67</td>
                                    
                                </tr>
                                <tr className="border-solid border-2 border-black">
                                    <th className="border-solid border-2 border-black">Domain Driven Using Java</th>
                                    <th>97</th>
                                    <td className="p-5">95</td>
                                    <td>97</td>
                                    
                                </tr>
                                <tr className="border-solid border-2 border-black">
                                    <th className="border-solid border-2 border-black">Front End Design Engineering</th>
                                    <th>81</th>
                                    <td className="p-5">71</td>
                                    <td>73</td>
                                    
                                </tr>
                                <tr className="border-solid border-2 border-black">
                                    <th className="border-solid border-2 border-black">Software Engineering and Business Model</th>
                                    <th>69</th>
                                    <td className="p-5">73</td>
                                    <td>76</td>
                                    
                                </tr>
                            </tbody>
                        </table>
                    </div>
        </div>
       
    )
 
}