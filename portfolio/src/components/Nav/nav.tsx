import Link from "next/link"
 
export default function Nav() {
    return (
        <div className="bg-black flex justify-between items-center" >
            <div className="m-10">
                <h1 className="text-2xl  text-fiap">F I A P</h1>
            </div>
            <div className="flex gap-8 m-10">
                <nav className="text-white flex gap-10">
                    <Link className="text-white p-2 rounded-md border-white border-solid border-2 hover:bg-fiap transition duration-500 hover:border-black" href="/us/jennifer">Checkpoints</Link>
                    <Link className="text-white p-2 rounded-md border-white border-solid border-2 hover:bg-fiap transition duration-500 hover:border-black" href="">Global Solution</Link>
                    <Link className="text-white p-2 rounded-md border-white border-solid border-2 hover:bg-fiap transition duration-500 hover:border-black" href="">Challenge</Link>
                </nav>
            </div>
            <div className="m-10">
                <Link className="text-white p-2 rounded-md border-white border-solid border-2 hover:bg-fiap transition duration-500 hover:border-black" href="/">Home</Link>
            </div>
        </div>
    )
}