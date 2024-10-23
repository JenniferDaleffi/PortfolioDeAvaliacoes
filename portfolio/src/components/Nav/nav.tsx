import Link from "next/link"
 
export default function Nav() {
    return (
        <div className="bg-black flex justify-between items-center" >
            <div className="m-10">
                <h1 className="text-2xl  text-fiap">F I A P</h1>
            </div>
            <div className="flex gap-8 m-10">
                <nav className="text-white flex gap-6">
                    <Link href="">Home</Link>
                    <Link href="">Checkpoints</Link>
                    <Link href="">Global Solution</Link>
                    <Link href="">Challenge</Link>
                </nav>
            </div>
            <div className="m-10">
                <button className="text-white p-2 rounded-md border-white border-solid border-2">Colorized</button>
            </div>
        </div>
    )
}