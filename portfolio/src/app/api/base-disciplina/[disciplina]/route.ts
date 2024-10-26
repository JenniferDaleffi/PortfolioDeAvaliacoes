import { Databases } from "appwrite";
import { NextResponse } from "next/server";
import client from "../../../../../lib/appwrite_client";

  

const database = new Databases(client);

export async function GET(request:Request,{params}:{params:{disciplina:string}}) {
    try {

            const response = await database.getDocument(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string, process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID as string, params.disciplina);
        
        return NextResponse.json(response);

    } catch (error) {
        return NextResponse.json({error: "Falha na obtenção da informação."+ error}, {status:500})
    }
}


export async function PUT(request:Request,{params}:{params:{disciplina:string}}) {
    
    try {
        const nota = await request.json();
        await database.updateDocument (process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string, process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID as string, params.disciplina, nota);

        return NextResponse.json({msg:"Nota alterado com sucesso!"});

    } catch (error) {
        console.error("Falha na atualização da nota: ", error);
        return NextResponse.json({error:"Falha na atualização do produto: "+error});
    }

}

export async function DELETE(request:Request,{params}:{params:{disciplina:string}}) {
    
    try {
        await database.deleteDocument (process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string, process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID as string, params.disciplina);
        return NextResponse.json({status:204});

    } catch (error) {
        console.error("Falha na exclusão do produto: ", error);
        return NextResponse.json({error:"Falha na exclusão do produto: "+error},{status:500});
    }

}
