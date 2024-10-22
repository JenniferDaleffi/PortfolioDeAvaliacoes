import Menu from "../Menu/menu";
import Nav from "../Nav/nav"
import Image from "next/image";

export default function Cabecalho() {
    return (
        <div className="text-black bg-slate-100    ">
            <header>
                <Nav></Nav>
                <div className="text-center">
                <h1 className="text-5xl mt-2">Portfólio dos Estudantes</h1>
                </div>

            </header>
            <Menu />
        </div>

    )

}
