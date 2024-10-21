import Image from "next/image"
import Link from "next/link"
import checkpoint from "../../../public/images/checkpoint.png"
import global from "../../../public/images/global.png"
import challenge from "../../../public/images/challenge.png"

export default function Menu() {
    return (
        <div>
            <div className="flex items-center justify-center mt-32 w-full">
                <div className="flex flex-col items-center  w-1/3 m-10 min-h-80 shadow-lg ">
                    <Image src={checkpoint} alt="Checkpoint" width={100} height={50} className="my-4" />
                    <h2 className="text-2xl mb-4">Checkpoint</h2>
                    <p className="text-center mb-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, aliquid nobis? Non dolorem, in ad laborum adipisci ipsa modi provident!</p>
                    <Link href="/checkpoint" className="px-4 py-2 bg-fiap rounded-md text-white"> Checkpoint </Link>
                </div>
                <div className="flex flex-col items-center w-1/3 m-10 min-h-80 shadow-lg">
                    <Image src={challenge} alt="challenge" width={100} height={50} className="my-4" />
                    <h2 className="text-2xl mb-4">Checkpoint</h2>
                    <p className="text-center mb-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, aliquid nobis? Non dolorem, in ad laborum adipisci ipsa modi provident!</p>
                    <Link href="/checkpoint" className="px-4 py-2 bg-fiap rounded-md text-white"> Checkpoint </Link>
                </div>
                <div className="flex flex-col items-center w-1/3 m-10 min-h-80 shadow-lg">
                    <Image src={global} alt="Global Sollution" width={100} height={50} className="my-4" />
                    <h2 className="text-2xl mb-4">Checkpoint</h2>
                    <p className="text-center mb-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, aliquid nobis? Non dolorem, in ad laborum adipisci ipsa modi provident!</p>
                    <Link href="/checkpoint" className="px-4 py-2 bg-fiap rounded-md text-white"> Checkpoint </Link>
                </div>
            </div>
        </div>
    )

}