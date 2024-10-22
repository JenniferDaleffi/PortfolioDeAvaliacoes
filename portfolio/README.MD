# Portfólio de Avaliação

↦ Professor Alexandre Carlos de Jesus
↦ FIAP - Faculdade de Informática e administração Paulista

# FrontEnd 

<img width="96" height="96" src="https://img.icons8.com/color/96/typescript.png" alt="typescript"/> 

# INTEGRANTES:

↦ Jennifer Eduarda Vieira Daleffi - RM557137

↦ Julia Vasconcelos Oliveira - RM558785

↦ Leonardo Cadena - RM557528

# Descrição Geral: 

Neste projeto, iremos construir uma aplicação web utilizando o framework Next.js com TypeScript. O tema do projeto será a criação de um Portfólio sobre 
os nossos trabalhos criados até agora aqui na FIAP. 

# Requisitos Técnicos: 

Framework: O projeto deve ser desenvolvido em NEXT.js utilizando TypeScript, seguindo as 
melhores práticas de desenvolvimento e organização de código.

# Recursos do NEXT.js:

 - **Image Component**: Utilizar o componente `Image` do Next.js para exibir imagens de projetos ou logos 
das avaliações, suportando tanto imagens locais quanto remotas.

 - **RouterHandlers**: Implementar rotas para gerenciar os métodos HTTP (`GET`, `POST`, `PUT`, `DELETE`) 
com `RouterHandlers`, permitindo adicionar, editar e remover avaliações.

 - **Navegação por Rotas**: O projeto deve ter uma navegação fluida entre as diferentes páginas 
(CheckPoints, GlobalSolution, Challenger Sprints) utilizando roteamento estático e dinâmico.

 - **Fallback e Loading States**: Criar estados de fallback e páginas de carregamento para rotas dinâmicas.

 - **Efeitos com Templates**: Utilizar efeitos visuais e templates para destacar seções importantes do 
portfólio

 - **Páginas de Erros**: Desenvolver páginas de erro personalizadas para lidar com erros 404, 500 e outros.

 - **Rotas Dinâmicas**: Implementar rotas dinâmicas para visualizar detalhes das avaliações, possibilitando a 
filtragem de notas, categorias, e outras informações relevantes.

 - **Estilização com Tailwind CSS**: Todo o projeto deve ser estilizado utilizando **Tailwind CSS**, sem 
dependências de outras bibliotecas de CSS.

 - **Hooks**: Utilizar os hooks `useState`, `useEffect` e `useRouter` para manipular estado, efeitos colaterais e 
navegação entre rotas.

 - **Tratamento de Erros**: Implementar tratamento de erros com `try/catch` em todas as requisições 
assíncronas e operações críticas.

 - **NextRequest e NextResponse**: Manipular requisições e respostas no lado do servidor utilizando 
`NextRequest` e `NextResponse` para personalizar as respostas HTTP.

3. **Deploy**: O projeto deve ser publicado na **Vercel**, aproveitando a integração nativa com o NEXT.js.
4. **Versionamento**: O desenvolvimento deve ser versionado no **GitHub**, com um mínimo de **10 
commits** relevantes, demonstrando a evolução do projeto e boas práticas de versionamento.
Estrutura do Portfólio: 
- **Página Inicial (Dashboard)**: Apresentar um resumo das categorias de avaliações com links para as 
páginas detalhadas de CheckPoints, GlobalSolution e Challenger Sprints. Mostrar gráficos ou resumos das 
notas e desempenho dos alunos.

- **CheckPoints**: Listagem e detalhamento de todas as avaliações de CheckPoints realizadas, com data, 
notas e feedback.

- **GlobalSolution**: Página dedicada às avaliações integradoras (GlobalSolution), com links para cada 
avaliação, notas e descrição dos projetos realizados.

- **Challenger Sprints**: Listagem dos desafios rápidos (Challenger Sprints) com as notas e descrição dos 
desafios.

- **Página Detalhada de Avaliação**: Acesso individual a cada avaliação através de rotas dinâmicas, 
permitindo visualizar notas, feedbacks e informações adicionais sobre a avaliação.

- **Formulários de Inserção e Edição**: Formulários para adicionar novas avaliações ou editar avaliações 
existentes (via rotas POST e PUT).

# Critérios de Avaliação: 
- **Funcionalidade**: O portfólio deve permitir que os alunos visualizem suas avaliações e notas, além de 
possibilitar a adição e edição de avaliações via formulários.

- **Interface e Estilização**: O uso do **Tailwind CSS** para criar um design limpo e responsivo será avaliado, 
assim como a organização e navegação intuitiva entre as páginas.

- **Performance e Otimização**: O site deve ser otimizado para desempenho, com o uso adequado de 
páginas fallback e tratamento de loading.

- **Qualidade do Código**: Código bem estruturado, com uso correto de hooks, roteamento dinâmico e 
tratamento de erros. 

- **Deploy e Versionamento**: O projeto deve estar publicado corretamente na **Vercel**, e o repositório 
no **GitHub** deve conter commits claros e bem descritos. 