import Image from "next/image"
import Jennifer from "../../../public/images/jennifer.png"

export default function Checkpoint() {
    return (
        <div className="flex justify-around">
            <div>
                <Image className="rounded-full" src={Jennifer} width={150} alt="Foto Jennifer"></Image>
                <p>Jennifer Daleffi</p>
            </div>
        </div>
    )
}