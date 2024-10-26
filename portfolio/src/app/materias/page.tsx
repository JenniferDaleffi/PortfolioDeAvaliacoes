"use client"
;
import { TipoMateria } from "@/types/types";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Produtos() {

    const [listaMaterias, setlistaMaterias] = useState<TipoMateria[]>([])
    
            const chamadaApi = async () => {
                const response = await fetch("/api/base-produtos");
                const data = await response.json();
                const { documents } = data;
                console.log(documents);
                setlistaMaterias(documents);
            }

    useEffect(() => {
        chamadaApi();
    }, [])

    const handleDelete = async (disciplina:string) =>{
        try {
            const response = await fetch(`/api/base-disciplina/${disciplina}`,{
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
    <div>
        <h2>Materias</h2>

            <table className="custom-table">
                <thead>
                    <tr>
                        <th>Disciplina</th>
                        <th>Jennifer</th>
                        <th>Julia</th>
                        <th>Leonardo</th>
                        <th>EDITAR | EXCLUIR</th>
                    </tr>
                </thead>
                <tbody>
                    {listaMaterias.map((m)=>(
                        <tr key={m.$disciplina}>
                            <td>{m.disciplina}</td>
                            <td>{m.Jennifer}</td>
                            <td>{m.Julia}</td>
                            <td>{m.Leonardo}</td>
                            <td> <Link href={`/materias/${m.$disciplina}`}>EDITAR </Link> |    
                                 <Link href="#" onClick={()=> handleDelete(m.$disciplina)}> EXCLUIR </Link></td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={4}>
                            <h2>Quantidade de registros:{listaMaterias.length}</h2>
                        </td>
                    </tr>
                </tfoot>
            </table> 

    </div>
  )
}
