"use client"
;
import { TipoMateria } from "@/types/types";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Materias() {

    const [listaMaterias, setlistaMaterias] = useState<TipoMateria[]>([])
    
            const chamadaApi = async () => {
                const response = await fetch("http://localhost:3000/api/base-disciplina");
                const data = await response.json();
                const { documents } = data;
                console.log(documents);
                setlistaMaterias(documents);
            }

    useEffect(() => {
        chamadaApi();
    }, [])

    const handleDelete = async (id:string) =>{
        try {
            const response = await fetch(`http://localhost:3000/api/base-disciplina/${id}`,{
                method: 'DELETE',
            });
            if (response.ok) {
                alert("Meteria excluída com sucesso!");
                chamadaApi();
            }
        } catch (error) {
            console.error("Erro na exclusão da materia!", error);
        }
    }

  return (
    <div className="w-full h-screen bg-black">
        <div className="p-10">
            <Link className="text-white p-2 rounded-md border-white border-solid border-2 hover:bg-fiap transition duration-500 hover:border-black" href="/">Home</Link>
        </div>
        <h2 className="text-5xl mt-2 text-center p-6 text-fiap">Materias</h2>
            <table className="text-white bg-fiap rounded-lg mb-5 mt-5 flex flex-col mx-auto max-w-2xl text-xl">
                <thead className="">
                    <tr className="border-solid border-2 border-black">
                        <th scope="col" className="px-4">Disciplina</th>
                        <th scope="col" className="px-4">Jennifer</th>
                        <th scope="col" className="px-4">Julia</th>
                        <th scope="col" className="px-4">Leonardo</th>
                        <th scope="col" className="px-4">EDITAR | EXCLUIR</th>
                    </tr>
                </thead>
                <tbody>
                    {listaMaterias.map((m)=>(
                        <tr key={m.$id}>
                            <td className="border-solid border-2 border-black">{m.disciplina}</td>
                            <td className="border-solid border-2 border-black">{m.Jennifer}</td>
                            <td className="border-solid border-2 border-black">{m.Julia}</td>
                            <td className="border-solid border-2 border-black">{m.Leonardo}</td>
                            <td className="border-solid border-2 border-black"> <Link href={`/materias/${m.$id}`}>EDITAR </Link> |    
                            <Link href="#" onClick={()=> handleDelete(m.$id)}> EXCLUIR </Link></td>
                        </tr>
                    ))}
                </tbody>
                <tfoot className="mx-auto">
                    <tr>
                        <td colSpan={4} className="">
                            <h2 className="text-xl">Quantidade de registros:{listaMaterias.length}</h2>
                        </td>
                    </tr>
                </tfoot>
            </table> 
    </div>
  )
}
