import { Databases } from "appwrite";
import { NextResponse } from "next/server";
import client from "../../../../../lib/appwrite_client";

  

const database = new Databases(client);

export async function GET(request:Request,{params}:{params:{id:string}}) {
    try {
        const response = await database.getDocument(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string, process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID as string, params.id);
    
        return NextResponse.json(response);

    } catch (error) {
        return NextResponse.json({error: "Falha na obtenção da informação."+ error}, {status:500})
    }
}


export async function PUT(request:Request,{params}:{params:{id:string}}) {
    
    try {
        const materia = await request.json();
        await database.updateDocument (process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string, process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID as string, params.id, materia);

        return NextResponse.json({msg:"materia alterada com sucesso!"});

    } catch (error) {
        console.error("Falha na atualização da materia: ", error);
        return NextResponse.json({error:"Falha na atualização da materia: "+error});
    }

}

export async function DELETE(request:Request,{params}:{params:{id:string}}) {
    
    try {
        await database.deleteDocument (process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string, process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID as string, params.id);
        return NextResponse.json({status:204});

    } catch (error) {
        console.error("Falha na exclusão da materia: ", error);
        return NextResponse.json({error:"Falha na exclusão da materia: "+error},{status:500});
    }

}
