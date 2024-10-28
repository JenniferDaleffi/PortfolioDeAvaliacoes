import Link from "next/link"
 
export default function Nav() {
    return (
        <div className="bg-black flex justify-between items-center flex-wrap" >
            <div className="m-10">
                <h1 className="text-2xl text-fiap">F I A P</h1>
            </div>
            <div className="flex gap-8 m-10 flex-wrap">
                <nav className="text-white flex gap-10 flex-wrap">
                    <Link className="text-white p-2 rounded-md border-white border-solid border-2 hover:bg-fiap transition duration-500 hover:border-black" href="/checkpoint/jennifer">Checkpoints</Link>
                    <Link className="text-white p-2 rounded-md border-white border-solid border-2 hover:bg-fiap transition duration-500 hover:border-black" href="/gs/cadena">Global Solution</Link>
                    <Link className="text-white p-2 rounded-md border-white border-solid border-2 hover:bg-fiap transition duration-500 hover:border-black" href="/challenge/julia">Challenge</Link>
                    <Link className="text-white p-2 rounded-md border-white border-solid border-2 hover:bg-fiap transition duration-500 hover:border-black" href="/boletim">Notas</Link>
                    <Link className="text-white p-2 rounded-md border-white border-solid border-2 hover:bg-fiap transition duration-500 hover:border-black" href="/boletim/cad-materia">Cadastro de notas</Link>
                </nav>
            </div>
            <div className="m-10">
                <Link className="text-white p-2 rounded-md border-white border-solid border-2 hover:bg-fiap transition duration-500 hover:border-black" href="/">Home</Link>
            </div>
        </div>
    )
}