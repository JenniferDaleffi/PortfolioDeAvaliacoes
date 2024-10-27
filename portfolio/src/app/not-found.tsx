import Image from "next/image"
import errorImage from "../../public/images/errorimage.png"
import Link from "next/link"
 
export default function notError() {
    return (
        <section className="flex flex-col items-center justify-center text-neutral-50 bg-black h-screen">
            <h2 className="text-3xl m-4 text-fiap">OPS! error 404! Page not Found.</h2>
            <Image width={300} src={errorImage} alt="imagem de erro"></Image>
            <Link href={"/"} className="text-3xl m-16 border-2 border-solid border-white p-3 rounded-md hover:bg-fiap transition duration-500 hover:border-black">Voltar para Pagina principal</Link>
        </section>
    )
}