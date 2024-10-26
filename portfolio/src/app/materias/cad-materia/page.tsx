"use client"


import { TipoMateria } from "@/types/types";
import { useRouter } from "next/navigation";
import { useState } from "react"

export default function CadProduto() {

  const navigate = useRouter();

  const [materia, setMateria] = useState<TipoMateria>({
    $disciplina:"",
    disciplina: "",
    Jennifer: 0.0,
    Julia: 0.0,
    Leonardo: 0.0,
  });

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
    
    e.preventDefault();
    try {
      const response = await fetch("/api/base-disciplina", {
        method: "POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(materia),
      });
      
        if (response.ok) {
          const data = await response.json();
          alert("Materia cadastrado com sucesso!");
          setMateria({
            $disciplina:"",
            disciplina: "",
            Jennifer: 0.0,
            Julia: 0.0,
            Leonardo: 0.0,
          });
          console.log(data);
          navigate.push("/materias");
        }
    } catch (error) {
      console.error("Falha no cadastramento: ",error);
    }
  }

  return (
    <div>
        <h1>Cadastro de Materias</h1>
        
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                  <label>Disciplina:</label>
                  <input type="text" name="nome" value={materia.disciplina} placeholder="Digite o nome da disciplina." required 
                    onChange={(e)=> setMateria({...materia, disciplina: e.target.value})}
                  />
                </div>
                <div>
                  <label>Jennifer:</label>
                  <input type="number" name="preco" value={materia.Jennifer} placeholder="Digite a nota da jennifer." required
                  onChange={(e)=> setMateria({...materia, Jennifer: parseFloat(e.target.value)})}  min={0}/>
                </div>
                <div>
                  <label>Julia:</label>
                  <input type="number" name="estoque" value={materia.Julia} placeholder="Digite a nota da julia" required
                  onChange={(e)=> setMateria({...materia, Julia: parseInt(e.target.value)})}  min={0}/>
                </div>
                <div>
                  <label>Leonardo:</label>
                  <input type="number" name="estoque" value={materia.Leonardo} placeholder="Digite a nota do leonardo." required
                  onChange={(e)=> setMateria({...materia, Leonardo: parseInt(e.target.value)})}  min={0}/>
                </div>
                <div>
                  <button type="submit">Cadastrar</button>
                </div>
            </form>
        </div>

    </div>
  )
}

