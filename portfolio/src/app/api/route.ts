import { Databases, ID, Query } from "appwrite";
import client from "../../../lib/appwrite_client";
import { NextResponse } from "next/server";
import { TipoMateria } from "@/types/types";



const database = new Databases(client);

export async function GET() {
    try {
        const response = await database.listDocuments(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string, process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID as string,[Query.orderAsc("$createdAt")]);
        return NextResponse.json(response);
    } catch (error) {
        return NextResponse.json({error: "Falha na obtenção das informações."+ error}, {status:500})
    }
}


export async function POST(request:Request) {
    try {
        const{disciplina, Jennifer, Julia, Leonardo} = await request.json();
        const materia = {disciplina, Jennifer, Julia, Leonardo} as TipoMateria;
        const response = await database.createDocument(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string, process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID as string, ID.unique(), materia);

        return NextResponse.json(response,{status:201});
    } catch (error) {
        return NextResponse.json({error: "Falha na criação da disciplina: " + error},{status:500});
    }
}