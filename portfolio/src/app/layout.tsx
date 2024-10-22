import type { Metadata } from "next";

import Cp from "@/app/checkpoint/page";
import Cabecalho from "@/components/Cabecalho/cabecalho";
import Footer from "../components/Footer/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio dos alunos leonardo, jennifer, julia, com os projetos construidos no 1 e 2 semestre do curso de analise e desenvolvimento de sistemas",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Cabecalho />
        <Cp></Cp>
        <Footer></Footer>
        {children}
      </body>

    </html>
  );
}
