"use client"

import { TipoMateria } from "@/types/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditarMaterias({ params }: { params: { id: number } }) {

  const navigate = useRouter();

  const [materia, setMateria] = useState<TipoMateria>({
    $id: "",
    disciplina: "",
    Jennifer: 0.0,
    Julia: 0.0,
    Leonardo: 0.0,
  });

  useEffect(() => {
    const chamaApi = async () => {
      const response = await fetch(`/api/base-disciplina/${params.id}`);
      const data = await response.json();
      setMateria(data);
    }
    chamaApi();
  }, [params.id])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    try {
      const response = await fetch(`/api/base-disciplina/${params.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(materia),
      });

      if (response.ok) {
        const data = await response.json();
        alert("Materia atualizado com sucesso!");
        setMateria({
          $id: "",
          disciplina: "",
          Jennifer: 0.0,
          Julia: 0.0,
          Leonardo: 0.0,
        });
        console.log(data);
        navigate.push("/materias");
      }
    } catch (error) {
      console.error("Falha na atualização: ", error);
    }
  }

  return (
    <div>
      <div className="m-10">
        <Link className="text-black p-2 rounded-md border-white border-solid border-2 hover:bg-fiap transition duration-500 hover:border-black" href="/">Home</Link>

      </div>
      <h1>Editar Materias</h1>

      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Disciplina:</label>
            <input type="text" name="disciplina" value={materia.disciplina} placeholder="Digite o nome da disciplina." required
              onChange={(e) => setMateria({ ...materia, disciplina: e.target.value })}
            />
          </div>
          <div>
            <label>Jennifer:</label>
            <input type="number" name="Jennifer" value={materia.Jennifer} placeholder="Digite a nota da jennifer." required
              onChange={(e) => setMateria({ ...materia, Jennifer: parseFloat(e.target.value) })} min={0} />
          </div>
          <div>
            <label>Julia:</label>
            <input type="number" name="Julia" value={materia.Julia} placeholder="Digite a nota da julia" required
              onChange={(e) => setMateria({ ...materia, Julia: parseFloat(e.target.value) })} min={0} />
          </div>
          <div>
            <label>Leonardo:</label>
            <input type="number" name="Leonardo" value={materia.Leonardo} placeholder="Digite a nota do leonardo." required
              onChange={(e) => setMateria({ ...materia, Leonardo: parseFloat(e.target.value) })} min={0} />
          </div>
          <div>
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      </div>

    </div>
  )
}