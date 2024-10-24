import Menu from "../Menu/menu";
import Nav from "../Nav/nav";
import Image from "next/image";
import Jennifer from "../../../public/images/jennifer.png"
import grafico from "../../../public/images/Blue and White Weekly House Expenses Chart Graph.png"
 
export default function Cabecalho() {
    return (
        <div className="text-white bg-black">
            <header>
                <Nav></Nav>
                <div className="flex justify-around">
                    <div className="text-left">
                        <h1 className="text-5xl mt-20">Portfólio <span className="text-fiap">dos Estudantes</span></h1>
                       
                    </div>
                </div>
            </header>
            <Menu />
        </div>
 
    )
 
}