import Image from "next/image"
import Link from "next/link"
import iconJava from "../../../../public/images/iconjava.png"
import iconPy from "../../../../public/images/icons8-python-100.png"
import Jenniferfoto from "../../../../public/images/jennifer.png"
import iconMongo from "../../../../public/images/mongodb.png"
import calendarioCp from "../../../../public/images/calendariocheckpoint.png"
 
export default function Jennifer() {
    return (
        <div className="bg-black">
            <div className="bg-black flex justify-between items-center flex-wrap" >
                <div className="m-10">
                    <Link className="text-2xl text-fiap" href="/">F I A P</Link>
                </div>
                <div className="flex gap-8 m-10 flex-wrap">
                    <nav className="text-white">
                        <div className="flex gap-5 flex-wrap">
                            <Link className="text-white p-2 rounded-md border-white border-solid border-2 hover:bg-fiap transition duration-500 hover:border-black" href="/checkpoint/jennifer">Jennifer</Link>
                            <Link className="text-white p-2 rounded-md border-white border-solid border-2 hover:bg-fiap transition duration-500 hover:border-black" href="/checkpoint/cadena">Leonardo</Link>
                            <Link className="text-white p-2 rounded-md border-white border-solid border-2 hover:bg-fiap transition duration-500 hover:border-black" href="/checkpoint/julia">Julia</Link>
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
                    <h1 className="text-2xl mt-5 text-fiap text-left" >Back-end Java e</h1>
                    <h1 className="text-2xl mt-3 text-fiap text-left" >Análise de Dados</h1>
                    <Image className="mt-20" width={500} src={calendarioCp} alt="foto do calendario do cp"></Image>
                </div>
                <div className="max-w-xl">
                    <h1 className="text-5xl text-fiap mt-10" >Jennifer Daleffi</h1>
                    <p className="mt-5 text-xl break-words text-white">Atualmente, estudante de Análise e Desenvolvimento de Sistemas na FIAP e formada em Mecânica pelo IFSP. Proatividade, comunicação e liderança  em projetos acadêmicos são características marcantes, sempre visando o bom desenvolvimento.</p>
                    <div className="flex mt-10 justify-center">
                        <Image width={90} src={iconPy} alt="python"></Image>
                        <Image width={90} src={iconJava} alt="java"></Image>
                        <Image width={90} src={iconMongo} alt="mongo"></Image>
                    </div>
                    <div className="mt-20 border-2 border-white border-solid rounded-lg shadow-2xl shadow-fiap hover:scale-110 hover:duration-300 mb-20 w-80 lg:w-11/12">
                        <h1 className="text-white p-10 text-3xl">Feedback <br /> <span className="text-fiap">CheckPoints</span> </h1>
                        <h1 className="text-fiap ml-10 text-2xl">Artificial Inteligence:</h1>
                        <p className="text-white ml-10"><span className="text-amarelo">CP1:</span> Ok</p>
                        <p className="text-white ml-10"><span className="text-amarelo">CP2:</span> Ok</p>
                        <p className="text-white ml-10"><span className="text-amarelo">CP4:</span> Análise de Dados simples porém rica.</p>
                        <p className="text-white ml-10"><span className="text-amarelo">CP5:</span> Ok</p>
                        <h1 className=" mt-3 text-fiap ml-10 text-2xl">Building Relational Database:</h1>
                        <p className="text-white ml-10"><span className="text-amarelo">CP1:</span> (Sem feedback)</p>
                        <p className="text-white ml-10"><span className="text-amarelo">CP2:</span> (Sem feedback)</p>
                        <p className="text-white ml-10"><span className="text-amarelo">CP4: </span>(Sem feedback)</p>
                        <p className="text-white ml-10"><span className="text-amarelo">CP6:</span>(Ainda não corrigido)</p>
                        <h1 className=" mt-3 text-fiap ml-10 text-2xl">Computational Thinking Using Python:</h1>
                        <p className="text-white ml-10"><span className="text-amarelo">CP1:</span>Calculo da comissão foi feita encima do valor total das vendas. Fluxograma não desenvolvido.</p>
                        <p className="text-white ml-10"><span className="text-amarelo">CP2: </span>(Sem feedback)</p>
                        <p className="text-white ml-10"><span className="text-amarelo">CP4:</span> (Sem feedback)</p>
                        <p className="text-white ml-10"><span className="text-amarelo">CP5:</span> (Sem feedback)</p>
                        <h1 className=" mt-3 text-fiap ml-10 text-2xl">Domain Driven Using Java:</h1>
                        <p className="text-white ml-10"><span className="text-amarelo">CP1:</span> (Sem feedback)</p>
                        <p className="text-white ml-10"><span className="text-amarelo">CP2: </span>(Sem feedback)</p>
                        <p className="text-white ml-10"><span className="text-amarelo">CP4:</span> (Sem feedback)</p>
                        <p className="text-white ml-10"><span className="text-amarelo">CP5:</span> (Sem feedback)</p>
                        <h1 className=" mt-3 text-fiap ml-10 text-2xl">Front End Design Engineering:</h1>
                        <p className="text-white ml-10"><span className="text-amarelo">CP2: </span>(Feedback somente para o líder do grupo.)</p>
                        <p className="text-white ml-10"><span className="text-amarelo">CP3:</span> Os arquivos JS foram referenciados no body.(-15)
                        <br /> Não é realizado o procedimento de adicionar o usuário ao sessionStorage.(-10).</p>
                        <p className="text-white ml-10"><span className="text-amarelo">CP5:</span> (Feedback somente para o líder do grupo.)</p>
                        <p className="text-white ml-10"><span className="text-amarelo">CP6: (...)</span></p>
                        <h1 className=" mt-3 text-fiap ml-10 text-2xl">Software Engineering and Business Model:</h1>
                        <p className="text-white ml-10"><span className="text-amarelo">CP2: </span>Faltou escrever as HU e descrever qual você estava quebrando em tarefas</p>
                        <p className="text-white ml-10"><span className="text-amarelo">CP4:</span> (Sem feedback)</p>
                        <p className="text-white ml-10 mb-5"><span className="text-amarelo">CP5: </span>Poderia ter usado as caixas de opção para mostrar as diferentes alternativas e escolhas no fluxo</p>
                    </div>
                </div>
                <div className="mr-10">
                    <div>
                        <div className="bg-fiap w-20 h-20 rounded-full flex items-center justify-center">
                            <h1 className="text-4xl text-white" >1º</h1>
                        </div>
                        <div className=" flex items-center justify-center">
                            <h1 className="text-4xl mt-5 text-white flex justify-start">MÉDIA GERAL CHECKPOINT</h1>
                        </div>
                        <table className="mt-5 text-white bg-fiap rounded-lg">
                            <thead>
                                <tr className="border-solid border-2 border-black">
                                    <th scope="col">DISCIPLINA</th>
                                    <th scope="col">CP</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-solid border-2 border-black">
                                    <th className="border-solid border-2 border-black">Artificial Intelligence</th>
                                    <th className="p-5">100</th>
                                   
 
                                </tr>
                                <tr className="border-solid border-2 border-black">
                                    <th className="border-solid border-2 border-black">Building Relational Database</th>
                                    <th className="p-5">77</th>
 
 
                                </tr>
                                <tr className="border-solid border-2 border-black">
                                    <th className="border-solid border-2 border-black">Computational Thinking Using Python</th>
                                    <th className="p-5">60</th>
 
                                </tr>
                                <tr className="border-solid border-2 border-black">
                                    <th className="border-solid border-2 border-black">Domain Driven Using Java</th>
                                    <th className="p-5">100</th>
                                </tr>
                                <tr className="border-solid border-2 border-black">
                                    <th className="border-solid border-2 border-black">Front End Design Engineering</th>
                                    <th className="p-5">82</th>
                                </tr>
                                <tr className="border-solid border-2 border-black">
                                    <th className="border-solid border-2 border-black">Software Engineering and Business Model</th>
                                    <th className="p-5">60</th>
 
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
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-solid border-2 border-black">
                                    <th className="border-solid border-2 border-black">Artificial Intelligence</th>
                                    <th className="p-5">95</th>
 
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
                                    <th className="p-5">100</th>
                                </tr>
                                <tr className="border-solid border-2 border-black">
                                    <th className="border-solid border-2 border-black">Front End Design Engineering</th>
                                    <th className="p-5">--</th>
                                </tr>
                                <tr className="border-solid border-2 border-black">
                                    <th className="border-solid border-2 border-black">Software Engineering and Business Model</th>
                                    <th className="p-5">80</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                   
                </div>
            </div>
        </div>
 
    )
}