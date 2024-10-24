import Link from "next/link"
import Image from "next/image"
import Juliafoto from "../../../../public/images/juliavasco.jpg"
import Grafico from "../../../../public/images/Blue and White Weekly House Expenses Chart Graph.png"
import iconPy from "../../../../public/images/icons8-python-100.png"
import iconJava from "../../../../public/images/iconjava.png"
import iconType from "../../../../public/images/type.png"
 
 
 
export default function Julia() {
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
                <Image className="rounded-full w-80 h-80 " src={Juliafoto} alt="Foto da Julia"/>
                <h1 className="text-2xl mt-5 text-fiap" >Analista de Sistemas</h1>
                </div>
                <div className="max-w-xl">
                    <h1 className="text-5xl text-fiap" >Julia Vasconselos</h1>
                    <p className="mt-5 text-xl break-words text-white">Desenvolvedora com afinidade por tecnologia e experiência em gestão de dados, utilizando ferramentas como Excel. Com fluência em inglês e conhecimentos principais em programação, procuro expandir minhas habilidades para contribuir em projetos inovadores no campo da tecnologia.</p>
                    <div className="flex mt-10 justify-center">
                        <Image width={90} src={iconPy} alt="python"></Image>
                        <Image width={90} src={iconJava} alt="java"></Image>
                        <Image width={90} src={iconType} alt="type"></Image>
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
                                    <td>---</td>
                                    <td className="p-5">100</td>
                                </tr>
                                <tr className="border-solid border-2 border-black">
                                    <th className="border-solid border-2 border-black">Building Relational Database</th>
                                    <th>74</th>
                                    <td className="p-5">95</td>
                                    <td>---</td>
                                    <td className="p-5">86</td>
                                </tr>
                                <tr className="border-solid border-2 border-black">
                                    <th className="border-solid border-2 border-black">Computational Thinking Using Python</th>
                                    <th>72</th>
                                    <td className="p-5">62</td>
                                    <td>---</td>
                                    <td className="p-5">66</td>
                                </tr>
                                <tr className="border-solid border-2 border-black">
                                    <th className="border-solid border-2 border-black">Domain Driven Using Java</th>
                                    <th>96</th>
                                    <td className="p-5">95</td>
                                    <td>---</td>
                                    <td className="p-5">95</td>
                                </tr>
                                <tr className="border-solid border-2 border-black">
                                    <th className="border-solid border-2 border-black">Front End Design Engineering</th>
                                    <th>81</th>
                                    <td className="p-5">65</td>
                                    <td>---</td>
                                    <td className="p-5">71</td>
                                </tr>
                                <tr className="border-solid border-2 border-black">
                                    <th className="border-solid border-2 border-black">Software Engineering and Business Model</th>
                                    <th>71</th>
                                    <td className="p-5">75</td>
                                    <td>---</td>
                                    <td className="p-5">73</td>
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