# StudyFlow — Organizador de Estudos

O **StudyFlow** é uma aplicação web desenvolvida com React que simula um organizador de estudos. O projeto permite visualizar atividades acadêmicas, pesquisar tarefas, filtrar atividades por status, favoritar tarefas e consultar os detalhes de cada atividade.

A aplicação foi desenvolvida com o objetivo de colocar em prática os principais conceitos do React, incluindo JSX, componentes, props, DOM e Virtual DOM, listas e keys, renderização condicional e gerenciamento de estado com `useState`.

## Funcionalidades

- **Visualização de atividades:** exibe uma lista de atividades com título, matéria, descrição e status.
- **Busca de atividades:** permite pesquisar atividades pelo título ou pela matéria.
- **Filtro de atividades:** permite visualizar tarefas conforme seu status, como pendentes ou concluídas.
- **Lista de favoritos:** permite adicionar e remover atividades dos favoritos.
- **Detalhes das atividades:** apresenta informações adicionais sobre a atividade selecionada.
- **Conclusão de tarefas:** permite marcar atividades como concluídas ou reabri-las.
- **Indicador de progresso:** apresenta informações sobre o andamento das atividades.
- **Renderização condicional:** exibe mensagens e elementos conforme o estado das atividades e os resultados da pesquisa.
- **Interface responsiva:** adapta o layout para diferentes tamanhos de tela.

## Tecnologias utilizadas

- **React:** biblioteca JavaScript utilizada para construir a interface.
- **JavaScript:** linguagem utilizada para implementar a lógica da aplicação.
- **JSX:** sintaxe utilizada para descrever os elementos da interface dentro do JavaScript.
- **HTML:** estrutura dos elementos renderizados a partir do JSX.
- **CSS:** responsável pela estilização dos componentes e pela adaptação para dispositivos móveis.
- **Vite:** ferramenta utilizada para criar e executar o projeto durante o desenvolvimento.
- **Git e GitHub:** ferramentas que podem ser utilizadas para versionamento e armazenamento do código-fonte.

## Conceitos de React aplicados

### 1. JSX: sintaxe e expressões JavaScript

O JSX permite escrever estruturas semelhantes ao HTML dentro do JavaScript, facilitando a criação e a organização da interface.

No StudyFlow, o JSX é utilizado para construir os títulos, os cartões de atividades, os botões, os filtros e os demais elementos visuais.

**Onde está contemplado:** no arquivo `src/App.jsx` e nos demais componentes React que utilizam a extensão `.jsx`.

Exemplo:

```jsx
<h2>{atividade.titulo}</h2>
<p>{atividade.materia}</p>
```

As expressões JavaScript entre chaves permitem exibir dinamicamente as informações de cada atividade.

### 2. Componentes: criação, composição e reutilização

Os componentes permitem dividir a aplicação em partes menores, organizadas e reutilizáveis. Dessa forma, cada componente pode ter uma responsabilidade específica.

No projeto, a interface é organizada em componentes como:

- `App`: componente principal, responsável por organizar a aplicação e gerenciar suas funcionalidades.
- `ListaAtividades`: responsável por exibir a coleção de atividades.
- `AtividadeCard`: responsável por apresentar as informações e as ações de cada atividade.

**Onde está contemplado:** no arquivo `src/App.jsx` e nos arquivos em que os componentes `ListaAtividades` e `AtividadeCard` são definidos.

A reutilização acontece quando o componente `AtividadeCard` é utilizado para apresentar diferentes atividades, evitando a repetição desnecessária de código.

### 3. Props: passagem de dados entre componentes

As props permitem transmitir informações e funções de um componente pai para um componente filho.

No StudyFlow, os cartões recebem os dados das atividades e as funções necessárias para executar ações, como favoritar ou concluir uma tarefa.

**Onde está contemplado:** na comunicação entre `ListaAtividades` e `AtividadeCard`, por meio das propriedades enviadas durante a utilização dos componentes.

Exemplo:

```jsx
<AtividadeCard
  atividade={atividade}
  favorita={favoritos.includes(atividade.id)}
  aoFavoritar={aoFavoritar}
/>
```

Nesse exemplo:

- `atividade` contém as informações da tarefa.
- `favorita` indica se a atividade está nos favoritos.
- `aoFavoritar` é uma função recebida pelo componente para executar a ação de favoritar.

Assim, o componente filho recebe os dados necessários sem precisar concentrar toda a lógica da aplicação.

### 4. DOM e Virtual DOM: renderização e reconciliação

O DOM representa a estrutura dos elementos da página no navegador. O React utiliza o Virtual DOM como parte de seu mecanismo de atualização da interface.

Quando o estado de um componente muda, o React identifica as alterações necessárias e atualiza o DOM real para refletir a nova interface.

**Onde está contemplado:** no funcionamento dos componentes React, especialmente em `src/App.jsx`, `ListaAtividades` e `AtividadeCard`.

Esse conceito pode ser observado ao pesquisar atividades, alterar filtros, adicionar favoritos ou marcar tarefas como concluídas. A interface é atualizada sem a necessidade de recarregar a página.

O Virtual DOM e a reconciliação são mecanismos internos do React, portanto não precisam ser implementados manualmente no projeto.

### 5. Listas e Keys: renderização de coleções de dados

O React permite renderizar coleções de dados por meio de métodos JavaScript, como `map()`. A propriedade `key` fornece uma identificação estável para cada elemento da lista.

No StudyFlow, o método `map()` é utilizado para percorrer as atividades e gerar um cartão para cada item.

**Onde está contemplado:** no componente `ListaAtividades`, no trecho responsável por percorrer e renderizar as atividades.

Exemplo:

```jsx
{atividades.map((atividade) => (
  <AtividadeCard
    key={atividade.id}
    atividade={atividade}
  />
))}
```

Nesse exemplo, o método `map()` cria um componente para cada atividade, enquanto `key={atividade.id}` identifica cada item para ajudar o React a acompanhar as alterações da lista.

### 6. Renderização condicional: controle de exibição da interface

A renderização condicional permite exibir ou ocultar elementos de acordo com condições definidas no código.

No StudyFlow, esse conceito é utilizado para apresentar mensagens e elementos diferentes conforme as interações do usuário.

**Onde está contemplado:** nos componentes que exibem o status das atividades, os resultados da pesquisa e os detalhes da tarefa selecionada.

Exemplos de utilização:

- Exibir uma indicação quando uma atividade está concluída.
- Mostrar uma mensagem quando nenhuma atividade corresponde à pesquisa.
- Abrir os detalhes somente quando uma atividade é selecionada.
- Indicar visualmente as atividades adicionadas aos favoritos.

Exemplo:

```jsx
{atividade.concluida && (
  <p>Atividade concluída!</p>
)}
```

Nesse caso, a mensagem é exibida somente quando a propriedade `concluida` da atividade é verdadeira.

### 7. Estado com useState

O hook `useState` permite armazenar e atualizar informações que podem mudar durante a execução da aplicação.

No StudyFlow, o gerenciamento de estado é necessário para controlar as interações do usuário.

**Onde está contemplado:** no componente `App` e nos componentes que utilizam estados próprios.

Entre as informações controladas estão:

- O texto digitado na pesquisa.
- O filtro selecionado.
- A lista de atividades favoritas.
- A situação de conclusão das atividades.
- A atividade selecionada para visualizar os detalhes.

Quando esses estados são atualizados, o React renderiza novamente os componentes afetados, mantendo a interface sincronizada com os dados da aplicação.

## Como executar o projeto

### Pré-requisitos

- Node.js instalado.
- npm instalado.
- Git instalado, caso deseje clonar o repositório.

### Instalação

1. Abra o terminal na pasta principal do projeto.

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

4. Acesse no navegador o endereço apresentado pelo terminal, normalmente:

```text
http://localhost:5173
```

## Estrutura do projeto

A estrutura principal esperada para o projeto é:

```text
studyflow/
├── public/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

Os componentes `ListaAtividades` e `AtividadeCard` podem estar definidos dentro de `App.jsx` ou em arquivos separados, dependendo de como o código foi organizado.

## Objetivo acadêmico

O objetivo do StudyFlow é demonstrar, de maneira prática, como os principais conceitos do React podem ser utilizados em conjunto para desenvolver uma aplicação web interativa e responsiva.

Por meio do projeto, é possível compreender a utilização do JSX, a criação e reutilização de componentes, a passagem de props, o gerenciamento de estados, a renderização de listas com keys e o controle de exibição de elementos por meio da renderização condicional.

## Observação

Os dados das atividades são definidos no código da aplicação. O projeto não utiliza banco de dados nem back-end.

As alterações realizadas durante a utilização são controladas pelo estado do React e, sem um mecanismo adicional de persistência, podem ser perdidas quando a página é recarregada.
