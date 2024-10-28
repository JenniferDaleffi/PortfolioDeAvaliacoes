import type { Metadata } from "next";

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
        
        {children}
      </body>

    </html>
  );
}
