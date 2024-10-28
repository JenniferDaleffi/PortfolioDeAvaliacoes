"use client"


import { TipoMateria } from "@/types/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CadProduto() {

  const navigate = useRouter();

  const [materia, setMateria] = useState<TipoMateria>({
    $id: "",
    disciplina: "",
    Jennifer: 0.0,
    Julia: 0.0,
    Leonardo: 0.0,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    try {
      const response = await fetch("/api/base-disciplina", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(materia),
      });

      if (response.ok) {
        const data = await response.json();
        alert("Materia cadastrado com sucesso!");
        setMateria({
          $id: "",
          disciplina: "",
          Jennifer: 0.0,
          Julia: 0.0,
          Leonardo: 0.0,
        });
        console.log(data);
        navigate.push("/boletim");
      }
    } catch (error) {
      console.error("Falha no cadastramento: ", error);
    }
  }

  return (
    <div className="w-full h-screen bg-black">
      <div className="p-10 flex gap-6 items-center justify-center">
        <Link className="text-white p-2 rounded-md border-white border-solid border-2 hover:bg-fiap transition duration-500 hover:border-black px-6" href="/">Home</Link>
        <Link className="text-white p-2 rounded-md border-white border-solid border-2 hover:bg-fiap transition duration-500 hover:border-black px-6" href="/materias">Notas</Link>
      </div>


      <h1 className="text-5xl mt-20 text-white text-center p-6">Cadastro<span className="text-fiap"> de Materias</span> </h1>

      <div className="flex items-center justify-center h-[40rem]">
        <form onSubmit={handleSubmit} className="flex flex-col w-1/4 h-3/4 px-8 justify-center gap-6 bg-fiap rounded-xl">
          <div className="flex items-center justify-center" >
            <label className="text-2xl text-white p-3">Disciplina:</label>
            <input className="px-4 py-2 rounded-md w-96" type="text" name="disiciplina" value={materia.disciplina} placeholder="Digite o nome da disciplina." required
              onChange={(e) => setMateria({ ...materia, disciplina: e.target.value })}
            />
          </div>
          <div className="flex items-center justify-center">
            <label className="text-2xl text-white p-3">Jennifer:</label>
            <input className="px-4 py-2 rounded-md w-96" type="number" name="Jennifer" value={materia.Jennifer} placeholder="Digite a nota da jennifer." required
              onChange={(e) => setMateria({ ...materia, Jennifer: parseFloat(e.target.value) })} min={0} />
          </div>
          <div className="flex items-center justify-center">
            <label className="text-2xl text-white p-3">Julia:</label>
            <input className="px-4 py-2 rounded-md w-96" type="number" name="Julia" value={materia.Julia} placeholder="Digite a nota da julia" required
              onChange={(e) => setMateria({ ...materia, Julia: parseFloat(e.target.value) })} min={0} />
          </div>
          <div className=" flex items-center justify-center">
            <label className="text-2xl text-white p-3">Leonardo:</label>
            <input className="px-4 py-2 rounded-md w-96" type="number" name="Leonardo" value={materia.Leonardo} placeholder="Digite a nota do leonardo." required
              onChange={(e) => setMateria({ ...materia, Leonardo: parseFloat(e.target.value) })} min={0} />
          </div>
          <div className="text-center">
            <button className="px-4 py-2 bg-white rounded-2xl hover:bg-black hover:text-white text-xl hover:duration-500" type="submit">Cadastrar</button>
          </div>
        </form>
      </div>

    </div>
  )
}

