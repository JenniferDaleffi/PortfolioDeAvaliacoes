import Image from "next/image"
import Link from "next/link"
import iconJava from "../../../../public/images/iconjava.png"
import iconPy from "../../../../public/images/icons8-python-100.png"
import Juliafoto from "../../../../public/images/juliavasco.jpg"
import iconType from "../../../../public/images/type.png"



export default function Julia() {
    return (
        <div className="bg-black">
            <div className="bg-black flex justify-between items-center" >
                <div className="m-10">
                    <Link className="text-2xl  text-fiap" href="/">F I A P</Link>
                </div>
                <div className="flex gap-8 m-10">
                    <nav className="text-white">
                        <div className="flex gap-5">
                            <Link className="text-white p-2 rounded-md border-white border-solid border-2 hover:bg-fiap transition duration-500 hover:border-black" href="/gs/jennifer">Jennifer</Link>
                            <Link className="text-white p-2 rounded-md border-white border-solid border-2 hover:bg-fiap transition duration-500 hover:border-black" href="/gs/cadena">Leonardo</Link>
                            <Link className="text-white p-2 rounded-md border-white border-solid border-2 hover:bg-fiap transition duration-500 hover:border-black" href="/gs/julia">Julia</Link>
                        </div>
                    </nav>
                </div>
                <div className="m-10">
                    <Link className="text-white p-2 rounded-md border-white border-solid border-2 hover:bg-fiap transition duration-500 hover:border-black" href="/">Home</Link>
                </div>
            </div>
            <div className="ml-10 mt-10 flex justify-between">
                <div className="text-center">
                    <Image className="rounded-full w-80 h-80 " src={Juliafoto} alt="Foto da Julia" />
                    <h1 className="text-2xl mt-5 text-fiap" >Analista de Sistemas</h1>
                </div>
                <div className="max-w-xl">
                    <h1 className="text-5xl text-fiap" >Julia Vasconcelos</h1>
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
                        <div className=" flex items-center justify-center">
                            <h1 className="text-4xl text-white flex justify-start"  >Global Solution</h1>
                        </div>
                        <table className="mt-5 text-white bg-fiap rounded-lg">
                            <thead>
                                <tr className="border-solid border-2 border-black">
                                    <th scope="col">DISCIPLINA</th>
                                    <th scope="col">GS</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-solid border-2 border-black">
                                    <th className="border-solid border-2 border-black">Artificial Intelligence</th>
                                    <th className="p-5">100</th>
                                    <th className="p-5">Fala grupo, perfeito!!! Consegui entender as varáives de contexto, entidades e inteções. Além do STT e TSS. A integração com front ficou showww!! Parabéns!</th>

                                </tr>
                                <tr className="border-solid border-2 border-black">
                                    <th className="border-solid border-2 border-black">Building Relational Database</th>
                                    <th className="p-5">65</th>
                                    <th className="p-5">Ponto de Atenção:
- Repensem a utilização de campos obrigatórios para não "quebrar" o seu projeto, exemplo: na modelagem é possivel cadastrar uma ong somente com o ID_ONG preenchido;
- A foto da modelagem relacional não ficou legal, parecendo que foi feito as pressas, com algumas informações cortadas.</th>

                                </tr>
                                <tr className="border-solid border-2 border-black">
                                    <th className="border-solid border-2 border-black">Computational Thinking Using Python</th>
                                    <th className="p-5">74</th>
                                    <th className="p-5"> Faltou abordar a identificação do problema e a solução proposta. Foi apresentado apenas o Demo da Solução, porém, sem uma explicação do código.</th>
                                </tr>
                                <tr className="border-solid border-2 border-black">
                                    <th className="border-solid border-2 border-black">Domain Driven Using Java</th>
                                    <th className="p-5">96</th>
                                    <th className="p-5">--</th>
                                </tr>
                                <tr className="border-solid border-2 border-black">
                                    <th className="border-solid border-2 border-black">Front End Design Engineering</th>
                                    <th className="p-5">85</th>
                                    <th className="p-5">--</th>
                                </tr>
                                <tr className="border-solid border-2 border-black">
                                    <th className="border-solid border-2 border-black">Software Engineering and Business Model</th>
                                    <th className="p-5">77</th>
                                    <th className="p-5"> Tem que analisar o contexto da aplicação para chegar numa solução específica e que mostre os resultados adequados para o problema que vocês estão trabalhando. Um requisito não-funcional pode ser tão ou mais importante que um requisito funcional.</th>
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
                                    <th scope="col">SPNT</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-solid border-2 border-black">
                                    <th className="border-solid border-2 border-black">Artificial Intelligence</th>
                                    <th className="p-5">--</th>

                                </tr>
                                <tr className="border-solid border-2 border-black">
                                    <th className="border-solid border-2 border-black">Building Relational Database</th>
                                    <th className="p-5">--</th>

                                </tr>
                                <tr className="border-solid border-2 border-black">
                                    <th className="border-solid border-2 border-black">Computational Thinking Using Python</th>
                                    <th className="p-5">--</th>
                                </tr>
                                <tr className="border-solid border-2 border-black">
                                    <th className="border-solid border-2 border-black">Domain Driven Using Java</th>
                                    <th className="p-5">--</th>
                                </tr>
                                <tr className="border-solid border-2 border-black">
                                    <th className="border-solid border-2 border-black">Front End Design Engineering</th>
                                    <th className="p-5">--</th>
                                </tr>
                                <tr className="border-solid border-2 border-black">
                                    <th className="border-solid border-2 border-black">Software Engineering and Business Model</th>
                                    <th className="p-5">--</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    )
}