import Image from "next/image"
import Link from "next/link"
import iconJava from "../../../../public/images/iconjava.png"
import iconPy from "../../../../public/images/icons8-python-100.png"
import Jenniferfoto from "../../../../public/images/jennifer.png"
import iconMongo from "../../../../public/images/mongodb.png"
import JenniChallenge from "../../../../public/images/challengejenni.png"
import CalendarioChallenge from "../../../../public/images/calendariochallenge.png"
 
 
export default function Jennifer() {
    return (
        <div className="bg-black">
            <div className="bg-black flex justify-between items-center flex-wrap" >
                <div className="m-10">
                    <h1 className="text-2xl  text-fiap">F I A P</h1>
                </div>
                <div className="flex gap-8 m-10 flex-wrap">
                    <nav className="text-white">
                        <div className="flex gap-5 flex-wrap">
                            <Link className="text-white p-2 rounded-md border-white border-solid border-2 hover:bg-fiap transition duration-500 hover:border-black" href="/challenge/jennifer">Jennifer</Link>
                            <Link className="text-white p-2 rounded-md border-white border-solid border-2 hover:bg-fiap transition duration-500 hover:border-black" href="/challenge/cadena">Leonardo</Link>
                            <Link className="text-white p-2 rounded-md border-white border-solid border-2 hover:bg-fiap transition duration-500 hover:border-black" href="/challenge/julia">Julia</Link>
                        </div>
                    </nav>
                </div>
                <div className="m-10">
                    <Link className="text-white p-2 rounded-md border-white border-solid border-2 hover:bg-fiap transition duration-500 hover:border-black" href="/">Home</Link>
                </div>
            </div>
            <div className="ml-10 mt-10 flex justify-between flex-wrap">
                <div className="text-center">
                    <Image className="rounded-full w-80 h-80 " src={Jenniferfoto} alt="Foto da Jennifer" />
                    <h1 className="text-2xl mt-5 text-fiap" >Back-end Java e</h1>
                    <h1 className="text-2xl mt-3 text-fiap" >Análise de Dados</h1>
                    <Image className="mt-20" width={350} src={CalendarioChallenge} alt="imagem do calendario challenge"></Image>
                </div>
                <div className="max-w-xl">
                    <h1 className="text-5xl text-fiap mt-10" >Jennifer Daleffi</h1>
                    <p className="mt-5 text-xl break-words text-white">Atualmente, estudante de Análise e Desenvolvimento de Sistemas na FIAP e formada em Mecânica pelo IFSP. Proatividade, comunicação e liderança  em projetos acadêmicos são características marcantes, sempre visando o bom desenvolvimento.</p>
                    <div className="flex mt-10 justify-center">
                        <Image width={90} src={iconPy} alt="python"></Image>
                        <Image width={90} src={iconJava} alt="java"></Image>
                        <Image width={90} src={iconMongo} alt="mongo"></Image>
                    </div>
                    <div className="mt-10">
                        <Image className="rounded-lg w-80 lg:w-10/12" src={JenniChallenge} alt="imagem do FixerAI"></Image>
                        <h1 className="mt-5 text-fiap text-xl">FixerAI</h1>
                        <p className="text-lg text-white">O projeto ReciclaBalsa: Transporte
                        Marítimo Sustentável para a Região de São Paulo propõe de forma multidisciplinar contendo uma base de dados, python, java, frontend, business model e inteligência artificial a criação que facilite a integração de iniciativas de reciclagem com o transporte fluvial, visando promover práticas sustentáveis e reduzir a emissão de poluentes.</p>
                    </div>
                    <div className="mt-20 border-2 border-white border-solid rounded-lg shadow-2xl shadow-fiap hover:scale-110 hover:duration-300 mb-20 w-80 lg:w-11/12">
                        <h1 className="text-white p-10 text-3xl">Feedback <br /> <span className="text-fiap">Challenge</span> </h1>
                        <h1 className="text-fiap ml-10 mr-10 text-2xl">Artificial Inteligence:</h1>
                        <p className="text-white ml-10 mr-10"><span className="text-amarelo">
                        Através do video ficou claro o uso do Watson com Telegram e o reconhecimento das inteções, entidades e variaveis!</span></p>
                        <h1 className=" mt-3 text-fiap ml-10 text-2xl">Building Relational Database:</h1>
                        <p className="text-white ml-10"><span className="text-amarelo">
                        Os relacionamentos entre as entidades CLIENTES, TELEFONE, ENDERECO e OFICINAS está definido como 1:1;</span></p>
                        <h1 className=" mt-3 text-fiap ml-10 text-2xl">Computational Thinking Using Python:</h1>
                        <p className="text-white ml-10"><span className="text-amarelo">Formato de entrega: 0,5. Documentação - 2,5 ok. Código fonte - 5,5. Melhorar a apresentação dos dados e usabilidade
                        </span></p>
                        <h1 className=" mt-3 text-fiap ml-10 text-2xl">Domain Driven Using Java:</h1>
                        <p className="text-white ml-10"><span className="text-amarelo">Efetuados todos os requisitos de avaliação, parabéns a todos envolvidos pelo excelente trabalho.
                        </span></p>
                        <h1 className=" mt-3 text-fiap ml-10 text-2xl">Front End Design Engineering:</h1>
                        <p className="text-white ml-10"><span className="text-amarelo">Versionamento: Não foi enviado uma cópia do repositório e sim apenas uma pasta com arquivos.(-10)
                        Estrutura: Muitos links internos abrindo em outra aba..
                        </span></p>
                        <h1 className=" mt-3 text-fiap ml-10 text-2xl">Software Engineering and Business Model:</h1>
                        <p className="text-white ml-10 mb-5"><span className="text-amarelo">Faltou a Descrição dos casos de uso dentro dos Diagramas de caso de uso. No canvas. Pensar em colocar ao projetar os custos e as receitas estimativas. Revisão de texto!</span></p>
                    </div>
                </div>
                <div className="mr-10">
                    <div>
                        <div className="bg-fiap w-20 h-20 rounded-full flex items-center justify-center">
                            <h1 className="text-4xl text-white" >1º</h1>
                        </div>
                        <div className=" flex items-center justify-center">
                            <h1 className="text-4xl text-white flex justify-start" >Challenge</h1>
                        </div>
                        <table className="mt-5 text-white bg-fiap rounded-lg">
                            <thead>
                                <tr className="border-solid border-2 border-black">
                                    <th scope="col">DISCIPLINA</th>
                                    <th scope="col">SPNT</th>
 
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-solid border-2 border-black">
                                    <th className="border-solid border-2 border-black">Artificial Intelligence</th>
 
                                    <td className="p-5">100</td>
 
                                </tr>
                                <tr className="border-solid border-2 border-black">
                                    <th className="border-solid border-2 border-black">Building Relational Database</th>
 
                                    <td className="p-5">75</td>
 
                                </tr>
                                <tr className="border-solid border-2 border-black">
                                    <th className="border-solid border-2 border-black">Computational Thinking Using Python</th>
 
                                    <td className="p-5">75</td>
 
                                </tr>
                                <tr className="border-solid border-2 border-black">
                                    <th className="border-solid border-2 border-black">Domain Driven Using Java</th>
 
                                    <td className="p-5">90</td>
 
                                </tr>
                                <tr className="border-solid border-2 border-black">
                                    <th className="border-solid border-2 border-black">Front End Design Engineering</th>
 
                                    <td className="p-5">35</td>
 
                                </tr>
                                <tr className="border-solid border-2 border-black">
                                    <th className="border-solid border-2 border-black">Software Engineering and Business Model</th>
 
                                    <td className="p-5">80</td>
 
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
                                    <th className="p-5">100</th>
 
                                </tr>
                                <tr className="border-solid border-2 border-black">
                                    <th className="border-solid border-2 border-black">Building Relational Database</th>
                                    <th className="p-5">91</th>
 
                                </tr>
                                <tr className="border-solid border-2 border-black">
                                    <th className="border-solid border-2 border-black">Computational Thinking Using Python</th>
                                    <th className="p-5">85</th>
                                </tr>
                                <tr className="border-solid border-2 border-black">
                                    <th className="border-solid border-2 border-black">Domain Driven Using Java</th>
                                    <th className="p-5">100</th>
                                </tr>
                                <tr className="border-solid border-2 border-black">
                                    <th className="border-solid border-2 border-black">Front End Design Engineering</th>
                                    <th className="p-5">70</th>
                                </tr>
                                <tr className="border-solid border-2 border-black">
                                    <th className="border-solid border-2 border-black">Software Engineering and Business Model</th>
                                    <th className="p-5">75</th>
                                   
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
 
    )
}