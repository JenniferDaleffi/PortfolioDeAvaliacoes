import Image from "next/image"
import Link from "next/link"
import iconJava from "../../../../public/images/iconjava.png"
import iconPy from "../../../../public/images/icons8-python-100.png"
import Juliafoto from "../../../../public/images/juliavasco.jpg"
import iconType from "../../../../public/images/type.png"
import calendario from "../../../../public/images/calendario.png"
import Gsleoju from "../../../../public/images/gsleoju.jpg"
 
 
export default function Julia() {
    return (
        <div className="bg-black">
            <div className="bg-black flex justify-between items-center flex-wrap" >
                <div className="m-10">
                    <Link className="text-2xl text-fiap" href="/">F I A P</Link>
                </div>
                <div className="flex gap-8 m-10 flex-wrap">
                    <nav className="text-white">
                        <div className="flex gap-5 flex-wrap">
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
            <div className="ml-10 mt-10 flex justify-between flex-wrap">
                <div className="text-center">
                    <Image className="rounded-full w-80 h-80 " src={Juliafoto} alt="Foto da Julia" />
                    <h1 className="text-2xl mt-5 text-fiap" >Analista de Sistemas</h1>
                    <Image className="mt-20" width={350} src={calendario} alt="calendario"></Image>
                </div>
                <div className="max-w-xl">
                    <h1 className="text-5xl text-fiap mt-10" >Julia Vasconcelos</h1>
                    <p className="mt-5 text-xl break-words text-white">Desenvolvedora com afinidade por tecnologia e experiência em gestão de dados, utilizando ferramentas como Excel. Com fluência em inglês e conhecimentos principais em programação, procuro expandir minhas habilidades para contribuir em projetos inovadores no campo da tecnologia.</p>
                    <div className="flex mt-10 justify-center">
                        <Image width={90} src={iconPy} alt="python"></Image>
                        <Image width={90} src={iconJava} alt="java"></Image>
                        <Image width={90} src={iconType} alt="type"></Image>
                    </div>
                    <div className="mt-10">
                        <Image className="rounded-lg w-80 lg:w-11/12" src={Gsleoju} alt="imagem da gs da novaonda"></Image>
                        <h1 className="text-fiap text-xl mt-5">NovaOnda</h1>
                        <p className="text-white text-lg">NovaOnda é uma plataforma inovadora dedicada a garantir que as atividades humanas nos oceanos sejam ecologicamente responsáveis, socialmente inclusivas e economicamente viáveis a longo prazo. Criada para enfrentar os desafios críticos que nossos oceanos enfrentam, a NovaOnda promove práticas de gestão ambiental, tecnologias avançadas e a colaboração entre governos, empresas, ONGs e comunidades locais.</p>
                    </div>
                    <div className="mt-20 border-2 border-white border-solid rounded-lg shadow-2xl shadow-fiap hover:scale-110 hover:duration-300 mb-20 w-80 lg:w-11/12">
                        <h1 className="text-white p-10 text-3xl">Feedback <br /> <span className="text-fiap">Global Solution</span> </h1>
                        <h1 className="text-fiap ml-10 text-2xl">Artificial Inteligence:</h1>
                        <p className="text-white ml-10"><span className="text-amarelo">Fala grupo, perfeito!!! Consegui entender as varáives de contexto, entidades e inteções. Além do STT e TSS. A integração com front ficou showww!! Parabéns!</span></p>
                        <h1 className=" mt-3 text-fiap ml-10 text-2xl">Building Relational Database:</h1>
                        <p className="text-white ml-10"><span className="text-amarelo">Ponto de Atenção: - Repensem a utilização de campos obrigatórios para não quebrar o seu projeto, exemplo: na modelagem é possivel cadastrar uma ong somente com o ID_ONG preenchido; - A foto da modelagem relacional não ficou legal, parecendo que foi feito as pressas, com algumas informações cortadas.</span></p>
                        <h1 className=" mt-3 text-fiap ml-10 text-2xl">Computational Thinking Using Python:</h1>
                        <p className="text-white ml-10"><span className="text-amarelo">Faltou abordar a identificação do problema e a solução proposta. Foi apresentado apenas o Demo da Solução, porém, sem uma explicação do código.
                        </span></p>
                        <h1 className=" mt-3 text-fiap ml-10 text-2xl">Domain Driven Using Java:</h1>
                        <p className="text-white ml-10"><span className="text-amarelo">--
                        </span></p>
                        <h1 className=" mt-3 text-fiap ml-10 text-2xl">Front End Design Engineering:</h1>
                        <p className="text-white ml-10"><span className="text-amarelo">--
                        </span></p>
                        <h1 className=" mt-3 text-fiap ml-10 text-2xl">Software Engineering and Business Model:</h1>
                        <p className="text-white ml-10 mb-5"><span className="text-amarelo">Tem que analisar o contexto da aplicação para chegar numa solução específica e que mostre os resultados adequados para o problema que vocês estão trabalhando. Um requisito não-funcional pode ser tão ou mais importante que um requisito funcional.
                        </span></p>
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