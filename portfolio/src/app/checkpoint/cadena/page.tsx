import Image from "next/image"
import Link from "next/link"
import iconPy from "../../../../public/images/icons8-python-100.png"
import iconJavascript from "../../../../public/images/javascripticon.png"
import Leonardofoto from "../../../../public/images/leocadena.png"
import iconType from "../../../../public/images/type.png"
import calendarioCp from "../../../../public/images/calendariocheckpoint.png"
 
export default function Leonardo() {
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
                    <Image className="rounded-full w-80 h-80 " src={Leonardofoto} alt="Foto da Jennifer" />
                    <h1 className="text-2xl mt-5 text-fiap text-left" >Desenvolvedor de Software e</h1>
                    <h1 className="text-2xl mt-3 text-fiap text-left" >Frontend</h1>
                    <Image className="mt-20" width={500} src={calendarioCp} alt="foto do calendario do cp"></Image>
                </div>
                <div className="max-w-xl">
                    <h1 className="text-5xl text-fiap mt-10" >Leonardo Cadena</h1>
                    <p className="mt-5 text-xl break-words text-white">Me chamo Leonardo Cadena de Souza, tenho 18 anos, busco oportunidades na area de desenvolvimento de software. Me formei no ensino medio e agora estou cursando o 2° semestre na Faculdade de Informática e Administração Paulista (FIAP), cursando Análise e Desenvolvimento de Sistemas. Buscando sempre evoluir meu conhecimento através de cursos e pesquisas, com foco em desenvolvimento front-end.</p>
                    <div className="flex mt-10 justify-center">
                        <Image width={90} src={iconJavascript} alt="javascript"></Image>
                        <Image width={90} src={iconPy} alt="python"></Image>
                        <Image width={90} src={iconType} alt="typescript"></Image>
                    </div>
                    <div className="mt-20 border-2 border-white border-solid rounded-lg shadow-2xl shadow-fiap hover:scale-110 hover:duration-300 mb-20 w-80 lg:w-11/12">
                        <h1 className="text-white p-10 text-3xl">Feedback <br /> <span className="text-fiap">CheckPoints</span> </h1>
                        <h1 className="text-fiap ml-10 text-2xl">Artificial Inteligence:</h1>
                        <p className="text-white ml-10"><span className="text-amarelo">CP1:</span> Boa tarde grupo, muito legal a implementação que vcs fizeram! Gostei do nome do Bot (Jaildo) e as interações! Parabéns! 10zão</p>
                        <p className="text-white ml-10"><span className="text-amarelo">CP2:</span> Ok</p>
                        <p className="text-white ml-10"><span className="text-amarelo">CP4:</span> Ok.</p>
                        <p className="text-white ml-10"><span className="text-amarelo">CP5:</span> Ok</p>
                        <h1 className=" mt-3 text-fiap ml-10 text-2xl">Building Relational Database:</h1>
                        <p className="text-white ml-10"><span className="text-amarelo">CP1:</span> (Sem feedback)</p>
                        <p className="text-white ml-10"><span className="text-amarelo">CP2:</span> (Sem feedback)</p>
                        <p className="text-white ml-10"><span className="text-amarelo">CP4: </span>(Sem feedback)</p>
                        <p className="text-white ml-10"><span className="text-amarelo">CP6:</span>(Ainda não corrigido)</p>
                        <h1 className=" mt-3 text-fiap ml-10 text-2xl">Computational Thinking Using Python:</h1>
                        <p className="text-white ml-10"><span className="text-amarelo">CP1:</span>.Implementação com lista (dias da semana) | Erro de lógica nos testes | Parcialmente correto. 
                        <br />Fluxograma não atende ao solicitado | código ok!</p>
                        <p className="text-white ml-10"><span className="text-amarelo">CP2: </span>ok - poderiam ter aplicado a estrutura de repetição para percorrer a lista na impressão dos dados.</p>
                        <p className="text-white ml-10"><span className="text-amarelo">CP4:</span> Poderia imprimir o tabuleiro sempre que uma jogada ocorrer, mesmo com a casa ocupada.</p>
                        <p className="text-white ml-10"><span className="text-amarelo">CP5:</span> Programa Python + 4 algoritmos - o programa não lê, nem escreve em arquivos. Implementação ok!
                        <br />Relatório + gráficos - as simulações deveriam ocorrer com listas do mesmo tamanho | simulação parcialmente desenvolvida. Os gráficos deveriam ser utilizado para comparar os tempos de cada algoritmo e não individualmente.</p>
                        <h1 className=" mt-3 text-fiap ml-10 text-2xl">Domain Driven Using Java:</h1>
                        <p className="text-white ml-10"><span className="text-amarelo">CP1:</span> (Sem feedback)</p>
                        <p className="text-white ml-10"><span className="text-amarelo">CP2: </span>(Sem feedback)</p>
                        <p className="text-white ml-10"><span className="text-amarelo">CP4:</span> (Sem feedback)</p>
                        <p className="text-white ml-10"><span className="text-amarelo">CP5:</span> (Sem feedback)</p>
                        <h1 className=" mt-3 text-fiap ml-10 text-2xl">Front End Design Engineering:</h1>
                        <p className="text-white ml-10"><span className="text-amarelo">CP2: </span>(Feedback somente para o líder do grupo.)</p>
                        <p className="text-white ml-10"><span className="text-amarelo">CP3:</span> (sem feedback) </p>
                        <p className="text-white ml-10"><span className="text-amarelo">CP5:</span> (Feedback somente para o líder do grupo.)</p>
                        <p className="text-white ml-10"><span className="text-amarelo">CP6: (...)</span></p>
                        <h1 className=" mt-3 text-fiap ml-10 text-2xl">Software Engineering and Business Model:</h1>
                        <p className="text-white ml-10"><span className="text-amarelo">CP2:</span> 5 - HU retratam os requisitos sobre a perspectiva de um ator.</p>
                        <p className="text-white ml-10"><span className="text-amarelo">CP4:</span> (Sem feedback)</p>
                        <p className="text-white ml-10 mb-5"><span className="text-amarelo">CP5: </span> (Sem feedback)</p>
                    </div>
                </div>
                <div className="mr-10">
                    <div>
                        <div className="bg-fiap w-20 h-20 rounded-full flex items-center justify-center">
                            <h1 className="text-4xl text-white" >1º</h1>
                        </div>
                        <div className=" flex items-center justify-center">
                            <h1 className="text-4xl text-white flex justify-start mt-5">MÉDIA GERAL CHECKPOINT</h1>
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
                                    <th className="p-5">65</th>
 
                                </tr>
                                <tr className="border-solid border-2 border-black">
                                    <th className="border-solid border-2 border-black">Computational Thinking Using Python</th>
                                    <th className="p-5">74</th>
                                </tr>
                                <tr className="border-solid border-2 border-black">
                                    <th className="border-solid border-2 border-black">Domain Driven Using Java</th>
                                    <th className="p-5">96</th>
                                </tr>
                                <tr className="border-solid border-2 border-black">
                                    <th className="border-solid border-2 border-black">Front End Design Engineering</th>
                                    <th className="p-5">85</th>
                                </tr>
                                <tr className="border-solid border-2 border-black">
                                    <th className="border-solid border-2 border-black">Software Engineering and Business Model</th>
                                    <th className="p-5">77</th>
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