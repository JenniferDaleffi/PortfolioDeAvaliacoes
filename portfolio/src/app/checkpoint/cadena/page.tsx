import Image from "next/image"
import Link from "next/link"
import iconPy from "../../../../public/images/icons8-python-100.png"
import iconJavascript from "../../../../public/images/javascripticon.png"
import Leonardofoto from "../../../../public/images/leocadena.png"
import iconType from "../../../../public/images/type.png"

export default function Leonardo() {
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
                    <Image className="rounded-full w-80 h-80 " src={Leonardofoto} alt="Foto da Jennifer" />
                    <h1 className="text-2xl mt-5 text-fiap" >Desenvolvedor de Software e</h1>
                    <h1 className="text-2xl mt-3 text-fiap" >Frontend</h1>
                </div>
                <div className="max-w-xl">
                    <h1 className="text-5xl text-fiap" >Leonardo Cadena</h1>
                    <p className="mt-5 text-xl break-words text-white">Me chamo Leonardo Cadena de Souza, tenho 18 anos, busco oportunidades na area de desenvolvimento de software. Me formei no ensino medio e agora estou cursando o 2° semestre na Faculdade de Informática e Administração Paulista (FIAP), cursando Análise e Desenvolvimento de Sistemas. Buscando sempre evoluir meu conhecimento através de cursos e pesquisas, com foco em desenvolvimento front-end.</p>
                    <div className="flex mt-10 justify-center">
                        <Image width={90} src={iconJavascript} alt="javascript"></Image>
                        <Image width={90} src={iconPy} alt="python"></Image>
                        <Image width={90} src={iconType} alt="typescript"></Image>
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
                                    <th>65</th>
                                    <td className="p-5">95</td>
                                    <td>93</td>
                                    <td className="p-5">83</td>
                                </tr>
                                <tr className="border-solid border-2 border-black">
                                    <th className="border-solid border-2 border-black">Computational Thinking Using Python</th>
                                    <th>74</th>
                                    <td className="p-5">62</td>
                                    <td>60</td>
                                    <td className="p-5">67</td>
                                </tr>
                                <tr className="border-solid border-2 border-black">
                                    <th className="border-solid border-2 border-black">Domain Driven Using Java</th>
                                    <th>96</th>
                                    <td className="p-5">95</td>
                                    <td>95</td>
                                    <td className="p-5">95</td>
                                </tr>
                                <tr className="border-solid border-2 border-black">
                                    <th className="border-solid border-2 border-black">Front End Design Engineering</th>
                                    <th>85</th>
                                    <td className="p-5">65</td>
                                    <td>85</td>
                                    <td className="p-5">73</td>
                                </tr>
                                <tr className="border-solid border-2 border-black">
                                    <th className="border-solid border-2 border-black">Software Engineering and Business Model</th>
                                    <th>77</th>
                                    <td className="p-5">75</td>
                                    <td>80</td>
                                    <td className="p-5">76</td>
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
                                    <th>---</th>
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
                                    <th>---</th>
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
                                    <th>---</th>
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