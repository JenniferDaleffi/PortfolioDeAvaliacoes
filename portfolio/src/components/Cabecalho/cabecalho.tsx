import Menu from "../Menu/menu";
import Nav from "../Nav/nav";
import Image from "next/image";
import Jennifer from "../../../public/images/jennifer.png"
import grafico from "../../../public/images/Blue and White Weekly House Expenses Chart Graph.png"
import dashboardJenni from "../../../public/images/dashboardjenni.png"
import dashboardLeo from "../../../public/images/dashboardleo.png"
import dashboardJulia from "../../../public/images/dashboardjulia.png"
import Book from "../../../public/images/book.png"
 
export default function Cabecalho() {
    return (
        <div className="text-white bg-black">
            <header>
                <Nav></Nav>
                <div className="flex justify-around">
                    <div className="text-left max-w-80">
                        <h1 className="text-5xl mt-20">Portfólio</h1>
                        <span className="text-fiap text-5xl">dos Estudantes</span>
                        <p className="break-all mt-10">Esse portfólio é composto por três estudantes da Faculdade FIAP do curso de Análise e Desenvolvimento de Sistemas e tem como intuito criar um site compartilhado sobre checkpoints, challenges e as globals solutions. De forma organizada os estudantes podem consultar suas médias gerais do 1º Semestre e 2º Semestre, uma maneira de observação com desempenho geral.</p>
                        <Image className="mt-10" width={300} src={Book} alt="imagem de um livro"></Image>
                    </div>
                    <div className="bg-black flex flex-col items-center gap-10">
                        <div className="flex justify-around mt-20 mb-10 bg-black gap-10">
                            <Image className="rounded-lg border-white border-2 border-solid p-5 hover:scale-110 hover:duration-300" width={500} src={dashboardJenni} alt="dashboard da jennifer"></Image>
                            <Image className="rounded-lg border-white border-2 border-solid p-5 hover:scale-110 hover:duration-300" width={500} src={dashboardLeo} alt="dashboard do leonardo"></Image>
                        </div>
                        <div>
                            <Image className="rounded-lg border-white border-2 border-solid p-5 hover:scale-110 hover:duration-300" width={500} src={dashboardJulia} alt="dashboard da julia"></Image>
                        </div>
                    </div>
                </div>
               
            </header>
            <Menu />
        </div>
 
    )
 
}