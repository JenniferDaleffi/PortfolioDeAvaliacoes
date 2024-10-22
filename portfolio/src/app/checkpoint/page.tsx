import Image from "next/image"
import Jennifer from "../../../public/images/jennifer.png"
import Julia from "../../../public/images/juliavasco.jpg"
import Cadena from "../../../public/images/leocadena.png"

export default function Checkpoint() {
    return (
        <div className=" bg-black flex justify-around">
            <div>
                <Image className="rounded-full" src={Jennifer} width={150} alt="Foto Jennifer"></Image>
                <p className="mb-12 text-white py-8">Jennifer Daleffi</p>
            </div>
            <div>
                <Image className="rounded-full" src={Cadena} width={160} alt="Foto Cadena"></Image>
                <p className="mb-12 text-white py-8">Leonardo Cadena </p>
            </div>
            <div>
                <Image className="rounded-full" src={Julia} width={160} alt="Foto Julia"></Image>
                <p className="mb-12 text-white py-8">Julia Vasconcelos</p>
            </div>
        </div>
    )
}