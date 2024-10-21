export default function Nav(){
    return (
        <div className="flex justify-around" >
            <div>
                <h1>NextJS</h1>
            </div>
            <div className="flex gap-8">
                <a href="">Home</a>
                <a href="">Challenge</a>
                <a href="">Global Solution</a>
                <a href="">Checkpoint</a>
                <a href="">Us</a>
            </div>
            <div>
                <button>Colorized</button>
            </div>
        </div>
    )
}