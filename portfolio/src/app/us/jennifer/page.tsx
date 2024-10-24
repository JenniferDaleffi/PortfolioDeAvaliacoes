import Link from "next/link"
import Image from "next/image"
import Jenniferfoto from "../../../../public/images/jennifer.png"
import Grafico from "../../../../public/images/Blue and White Weekly House Expenses Chart Graph.png"
import iconPy from "../../../../public/images/icons8-python-100.png"
import iconJava from "../../../../public/images/iconjava.png"
import iconMongo from "../../../../public/images/mongodb.png"
 
 
export default function Jennifer() {
    return (
        <div className="bg-black">
            <div className="bg-black flex justify-between items-center" >
                <div className="m-10">
                    <h1 className="text-2xl  text-fiap">F I A P</h1>
                </div>
                <div className="flex gap-8 m-10">
                    <nav className="text-white">
                        <div className="flex gap-5">
                        <Link className="text-white p-2 rounded-md border-white border-solid border-2 hover:bg-fiap transition duration-500 hover:border-black" href="/us/jennifer">Jennifer</Link>
                        <Link className="text-white p-2 rounded-md border-white border-solid border-2 hover:bg-fiap transition duration-500 hover:border-black" href="/us/cadena">Leonardo</Link>
                        <Link className="text-white p-2 rounded-md border-white border-solid border-2 hover:bg-fiap transition duration-500 hover:border-black" href="/us/julia">Julia</Link>
                        </div>
                    </nav>
                </div>
                <div className="m-10">
                <Link className="text-white p-2 rounded-md border-white border-solid border-2 hover:bg-fiap transition duration-500 hover:border-black" href="/">Home</Link>
                </div>
            </div>
            <div className="ml-10 mt-10 flex justify-between">
                <div className="text-center">
                <Image className="rounded-full w-80 h-80 " src={Jenniferfoto} alt="Foto da Jennifer"/>
                <h1 className="text-2xl mt-5 text-fiap" >Back-end Java e</h1>
                <h1 className="text-2xl mt-3 text-fiap" >Análise de Dados</h1>
                </div>
                <div className="max-w-xl">
                    <h1 className="text-5xl text-fiap" >Jennifer Daleffi</h1>
                    <p className="mt-5 text-xl break-words text-white">Atualmente, estudante de Análise e Desenvolvimento de Sistemas na FIAP e formada em Mecânica pelo IFSP. Proatividade, comunicação e liderança  em projetos acadêmicos são características marcantes, sempre visando o bom desenvolvimento.</p>
                    <div className="flex mt-10 justify-center">
                        <Image width={90} src={iconPy} alt="python"></Image>
                        <Image width={90} src={iconJava} alt="java"></Image>
                        <Image width={90} src={iconMongo} alt="mongo"></Image>
                    </div>
                </div>
                <div className="mr-10">
                    <div>
                        <div className="bg-fiap w-20 h-20 rounded-full flex items-center justify-center">
                        <h1 className="text-4xl text-white" >1º</h1>
                        </div>
                        <table className="mt-5 text-white bg-fiap rounded-lg">
                            <thead>
                                <tr className="border-solid border-2 border-black">
                                    <th scope="col">DISCIPLINA</th>
                                    <th scope="col">CP</th>
                                    <th scope="col">GS</th>
                                    <th scope="col">SPNT</th>
                                    <th scope="col">MD</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-solid border-2 border-black">
                                    <th className="border-solid border-2 border-black">Artificial Intelligence</th>
                                    <th>100</th>
                                    <td className="p-5">100</td>
                                    <td>100</td>
                                    <td className="p-5">100</td>
                                </tr>
                                <tr className="border-solid border-2 border-black">
                                    <th className="border-solid border-2 border-black">Building Relational Database</th>
                                    <th>77</th>
                                    <td className="p-5">98</td>
                                    <td>83</td>
                                    <td className="p-5">90</td>
                                </tr>
                                <tr className="border-solid border-2 border-black">
                                    <th className="border-solid border-2 border-black">Computational Thinking Using Python</th>
                                    <th>60</th>
                                    <td className="p-5">65</td>
                                    <td>80</td>
                                    <td className="p-5">67</td>
                                </tr>
                                <tr className="border-solid border-2 border-black">
                                    <th className="border-solid border-2 border-black">Domain Driven Using Java</th>
                                    <th>100</th>
                                    <td className="p-5">98</td>
                                    <td>95</td>
                                    <td className="p-5">97</td>
                                </tr>
                                <tr className="border-solid border-2 border-black">
                                    <th className="border-solid border-2 border-black">Front End Design Engineering</th>
                                    <th>82</th>
                                    <td className="p-5">90</td>
                                    <td>52</td>
                                    <td className="p-5">81</td>
                                </tr>
                                <tr className="border-solid border-2 border-black">
                                    <th className="border-solid border-2 border-black">Software Engineering and Business Model</th>
                                    <th>29</th>
                                    <td className="p-5">80</td>
                                    <td>77</td>
                                    <td className="p-5">69</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <div className="mt-5 bg-fiap w-20 h-20 rounded-full flex items-center justify-center">
                        <h1 className="text-4xl text-white" >2º</h1>    
                    </div>
                    <table className="text-white bg-fiap rounded-lg mb-5 mt-5">
                            <thead>
                                <tr className="border-solid border-2 border-black">
                                    <th scope="col">DISCIPLINA</th>
                                    <th scope="col">CP</th>
                                    <th scope="col">GS</th>
                                    <th scope="col">SPNT</th>
                                    <th scope="col">MD</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-solid border-2 border-black">
                                    <th className="border-solid border-2 border-black">Artificial Intelligence</th>
                                    <th>95</th>
                                    <td className="p-5">---</td>
                                    <td>---</td>
                                    <td className="p-5">---</td>
                                </tr>
                                <tr className="border-solid border-2 border-black">
                                    <th className="border-solid border-2 border-black">Building Relational Database</th>
                                    <th>---</th>
                                    <td className="p-5">---</td>
                                    <td>---</td>
                                    <td className="p-5">---</td>
                                </tr>
                                <tr className="border-solid border-2 border-black">
                                    <th className="border-solid border-2 border-black">Computational Thinking Using Python</th>
                                    <th>---</th>
                                    <td className="p-5">---</td>
                                    <td>---</td>
                                    <td className="p-5">---</td>
                                </tr>
                                <tr className="border-solid border-2 border-black">
                                    <th className="border-solid border-2 border-black">Domain Driven Using Java</th>
                                    <th>100</th>
                                    <td className="p-5">---</td>
                                    <td>---</td>
                                    <td className="p-5">---</td>
                                </tr>
                                <tr className="border-solid border-2 border-black">
                                    <th className="border-solid border-2 border-black">Front End Design Engineering</th>
                                    <th>---</th>
                                    <td className="p-5">---</td>
                                    <td>---</td>
                                    <td className="p-5">---</td>
                                </tr>
                                <tr className="border-solid border-2 border-black">
                                    <th className="border-solid border-2 border-black">Software Engineering and Business Model</th>
                                    <th>80</th>
                                    <td className="p-5">---</td>
                                    <td>---</td>
                                    <td className="p-5">---</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
       
    )
}