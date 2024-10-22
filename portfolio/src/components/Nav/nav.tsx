export default function Nav() {
    return (
        <div className="bg-black flex justify-between items-center" >
            <div className="m-10">
                <h1 className="text-2xl  text-fiap">F I A P</h1>
            </div>
            <div className="flex gap-8 m-10">
                <a href="">Home</a>
                <a href="">Challenge</a>
                <a href="">Global Solution</a>
                <a href="">Checkpoint</a>
                <a href="">Us</a>
            </div>
            <div className="m-10">
                <button className="p-2 rounded-md border-black border-solid border-2">Colorized</button>
            </div>
        </div>
    )
}