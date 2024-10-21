import Footer from "../Footer/footer";
import Menu from "../Menu/menu";
import Nav from "../Nav/nav";

export default function Cabecalho() {
    return (
        <div>
            <header>
                <h1 className="text-center text-3xl mt-32">Portfólio do Estudades</h1>
            </header>
            <Menu />
            <Footer />
        </div>


    )

}