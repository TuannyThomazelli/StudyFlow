# StudyFlow — Organizador de Estudos

O **StudyFlow** é uma aplicação web desenvolvida com React que simula um organizador de estudos. A interface permite visualizar atividades escolares, pesquisar por atividade ou matéria, filtrar tarefas por status e favoritar atividades importantes. Também é possível consultar os detalhes de cada tarefa e marcar atividades como concluídas.

O projeto tem como objetivo praticar os principais conceitos do React por meio de uma aplicação interativa, organizada e responsiva.

## Funcionalidades

- **Visualização de atividades:** exibe título, matéria, categoria, prazo e prioridade.
- **Busca:** permite pesquisar pelo título da atividade ou pelo nome da matéria.
- **Filtros:** mostra todas as atividades, somente as pendentes, as concluídas ou as favoritas.
- **Favoritos:** permite favoritar e desfavoritar atividades.
- **Detalhes:** abre uma janela com a descrição, o prazo, a prioridade e o status da atividade selecionada.
- **Conclusão de tarefas:** permite marcar uma atividade como concluída ou voltar a deixá-la pendente.
- **Resumo de progresso:** apresenta a quantidade de atividades, tarefas pendentes, tarefas concluídas e a porcentagem de progresso.
- **Renderização condicional:** exibe mensagens diferentes de acordo com os filtros, os resultados da pesquisa e o status das atividades.
- **Interface responsiva:** adapta a disposição dos cards para diferentes tamanhos de tela.

## Tecnologias utilizadas

- **React:** biblioteca JavaScript utilizada para construir a interface.
- **JavaScript:** linguagem usada na lógica e nas interações.
- **JSX:** sintaxe utilizada para descrever os elementos da interface dentro do JavaScript.
- **HTML:** estrutura da página renderizada a partir do JSX.
- **CSS:** estilização dos componentes e adaptação para dispositivos móveis.
- **Vite:** ferramenta usada para executar o ambiente de desenvolvimento e gerar a versão de produção.
- **Git e GitHub:** ferramentas que podem ser utilizadas para versionar e compartilhar o código-fonte.

## Conceitos de React aplicados

### 1. JSX

O JSX permite escrever uma estrutura semelhante ao HTML dentro do JavaScript. No StudyFlow, ele é utilizado para montar os cards, os filtros, o resumo de progresso e a janela de detalhes.

Exemplo:

```jsx
<h1>Seus estudos, <span>no seu ritmo.</span></h1>
```

### 2. Componentes

A interface foi dividida em componentes para facilitar a organização e a reutilização do código:

- `App`: componente principal, controla os estados e organiza a página.
- `ListaAtividades`: exibe a lista de atividades ou uma mensagem quando não há resultados.
- `AtividadeCard`: apresenta as informações de uma atividade e seus botões de ação.

### 3. Props

As props transmitem informações e funções entre componentes. O `AtividadeCard`, por exemplo, recebe a atividade que deve mostrar, se ela está favoritada e as funções para favoritar, abrir detalhes ou alterar o status.

### 4. Virtual DOM

O Virtual DOM é uma representação interna da interface utilizada pelo React para identificar mudanças e atualizar o DOM real. No projeto, é possível observar atualizações da interface ao favoritar atividades, pesquisar, aplicar filtros ou marcar tarefas como concluídas.

### 5. Listas e método `map()`

O método `map()` percorre a lista de atividades e cria um componente `AtividadeCard` para cada item. A propriedade `key`, baseada no identificador de cada atividade, ajuda o React a acompanhar os elementos da lista.

```jsx
{atividades.map((atividade) => (
  <AtividadeCard key={atividade.id} atividade={atividade} />
))}
```

### 6. Renderização condicional

A renderização condicional mostra conteúdos diferentes dependendo do estado da aplicação. Ela é usada para:

- Exibir uma mensagem quando a busca não encontra atividades.
- Mostrar a janela de detalhes apenas quando uma atividade é selecionada.
- Indicar se uma tarefa está pendente ou concluída.
- Alterar o texto do botão entre “Concluir” e “Desmarcar”.
- Destacar visualmente as atividades concluídas.

### 7. Estado com `useState`

O hook `useState` controla dados que mudam durante o uso da aplicação, como a lista de atividades, o texto da busca, o filtro atual, os favoritos e a atividade selecionada. Quando um estado é atualizado, o React atualiza a interface conforme necessário.

## Como executar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado.
- npm, instalado junto com o Node.js.
- Um editor de código, como o Visual Studio Code.

### Instalação

1. Extraia o arquivo do projeto e abra a pasta `studyflow` no Visual Studio Code.
2. Abra o terminal integrado.
3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Acesse no navegador o endereço exibido no terminal, normalmente `http://localhost:5173`.

Para verificar se o projeto pode ser compilado para produção, execute:

```bash
npm run build
```

## Estrutura do projeto

```text
studyflow/
├── public/
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── eslint.config.js
└── vite.config.js
```

## Objetivo acadêmico

O objetivo do StudyFlow é demonstrar como os conceitos fundamentais do React podem ser combinados na construção de uma aplicação web interativa. O projeto permite praticar componentização, passagem de props, gerenciamento de estado, renderização de listas, renderização condicional e criação de interfaces responsivas.

## Observação

As atividades iniciais estão definidas diretamente no código. O projeto não utiliza banco de dados nem armazenamento persistente; por isso, alterações feitas durante o uso, como favoritar atividades ou marcar tarefas como concluídas, são perdidas quando a página é recarregada. As datas de exemplo também podem ser alteradas no arquivo `src/App.jsx`.
"# StudyFlow" 
