import { useState } from "react";
import "./App.css";

const atividadesIniciais = [
  {
    id: 1,
    titulo: "Revisar funções em JavaScript",
    materia: "Programação",
    categoria: "Prática",
    prazo: "2026-11-02",
    prioridade: "Alta",
    descricao: "Revisar funções, parâmetros, retorno e funções arrow. Depois, resolver três exercícios para praticar.",
    concluida: false,
  },
  {
    id: 2,
    titulo: "Resumo sobre Revolução Industrial",
    materia: "História",
    categoria: "Resumo",
    prazo: "2026-11-04",
    prioridade: "Média",
    descricao: "Preparar um resumo com as principais mudanças econômicas, sociais e tecnológicas da Revolução Industrial.",
    concluida: false,
  },
  {
    id: 3,
    titulo: "Lista de exercícios de matemática",
    materia: "Matemática",
    categoria: "Exercícios",
    prazo: "2026-10-30",
    prioridade: "Alta",
    descricao: "Resolver os exercícios de equações e conferir os resultados antes de entregar.",
    concluida: false,
  },
  {
    id: 4,
    titulo: "Leitura de artigo científico",
    materia: "Ciências",
    categoria: "Leitura",
    prazo: "2026-11-06",
    prioridade: "Baixa",
    descricao: "Ler o artigo indicado em aula e registrar as ideias principais em cinco tópicos.",
    concluida: true,
  },
  {
    id: 5,
    titulo: "Estudar seletores CSS",
    materia: "Desenvolvimento Web",
    categoria: "Revisão",
    prazo: "2026-11-01",
    prioridade: "Média",
    descricao: "Revisar seletores, classes, identificadores e pseudo-classes do CSS.",
    concluida: false,
  },
  {
    id: 6,
    titulo: "Praticar conversação em inglês",
    materia: "Inglês",
    categoria: "Prática",
    prazo: "2026-11-07",
    prioridade: "Baixa",
    descricao: "Treinar vocabulário do cotidiano e escrever um pequeno diálogo em inglês.",
    concluida: true,
  },
];

function formatarData(data) {
  if (!data) return "Sem prazo";
  const [ano, mes, dia] = data.split("-");
  return `${dia}/${mes}/${ano}`;
}

function AtividadeCard({ atividade, favorita, aoFavoritar, aoVerDetalhes, aoAlternarConclusao }) {
  return (
    <article className={`atividade-card ${atividade.concluida ? "card-concluido" : ""}`}>
      <div className="card-topo">
        <span className={`categoria categoria-${atividade.categoria.toLowerCase()}`}>{atividade.categoria}</span>
        <button
          className={`botao-favorito ${favorita ? "favorito-ativo" : ""}`}
          onClick={() => aoFavoritar(atividade.id)}
          aria-label={favorita ? "Remover dos favoritos" : "Adicionar aos favoritos"}
          title={favorita ? "Remover dos favoritos" : "Adicionar aos favoritos"}
        >
          {favorita ? "★" : "☆"}
        </button>
      </div>

      <h3>{atividade.titulo}</h3>
      <p className="materia">{atividade.materia}</p>
      <div className="detalhes-rapidos">
        <span>◷ {formatarData(atividade.prazo)}</span>
        <span className={`prioridade prioridade-${atividade.prioridade.toLowerCase()}`}>{atividade.prioridade} prioridade</span>
      </div>
      <div className="card-acoes">
        <button className="botao-secundario" onClick={() => aoVerDetalhes(atividade)}>Detalhes</button>
        <button className={`botao-concluir ${atividade.concluida ? "desfazer" : ""}`} onClick={() => aoAlternarConclusao(atividade.id)}>
          {atividade.concluida ? "Desmarcar" : "Concluir"}
        </button>
      </div>
      {atividade.concluida && <p className="selo-concluido">✓ Atividade concluída</p>}
    </article>
  );
}

function ListaAtividades({ atividades, favoritos, aoFavoritar, aoVerDetalhes, aoAlternarConclusao }) {
  if (atividades.length === 0) {
    return <div className="mensagem-vazia"><span>🔎</span><h3>Nenhuma atividade encontrada</h3><p>Tente mudar a pesquisa ou escolher outro filtro.</p></div>;
  }

  return (
    <section className="lista-atividades">
      {atividades.map((atividade) => (
        <AtividadeCard
          key={atividade.id}
          atividade={atividade}
          favorita={favoritos.includes(atividade.id)}
          aoFavoritar={aoFavoritar}
          aoVerDetalhes={aoVerDetalhes}
          aoAlternarConclusao={aoAlternarConclusao}
        />
      ))}
    </section>
  );
}

function App() {
  const [atividades, setAtividades] = useState(atividadesIniciais);
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState("todas");
  const [favoritos, setFavoritos] = useState([]);
  const [atividadeSelecionada, setAtividadeSelecionada] = useState(null);

  function alternarFavorito(id) {
    setFavoritos((atuais) => atuais.includes(id) ? atuais.filter((item) => item !== id) : [...atuais, id]);
  }

  function alternarConclusao(id) {
    setAtividades((atuais) => atuais.map((atividade) => atividade.id === id ? { ...atividade, concluida: !atividade.concluida } : atividade));
    setAtividadeSelecionada((atual) => atual && atual.id === id ? { ...atual, concluida: !atual.concluida } : atual);
  }

  const atividadesFiltradas = atividades.filter((atividade) => {
    const termo = busca.toLowerCase();
    const correspondeBusca = atividade.titulo.toLowerCase().includes(termo) || atividade.materia.toLowerCase().includes(termo);
    const correspondeFiltro = filtro === "todas" ||
      (filtro === "pendentes" && !atividade.concluida) ||
      (filtro === "concluidas" && atividade.concluida) ||
      (filtro === "favoritas" && favoritos.includes(atividade.id));
    return correspondeBusca && correspondeFiltro;
  });

  const totalConcluidas = atividades.filter((atividade) => atividade.concluida).length;
  const totalPendentes = atividades.length - totalConcluidas;
  const progresso = atividades.length ? Math.round((totalConcluidas / atividades.length) * 100) : 0;

  return (
    <main className="aplicacao">
      <header className="cabecalho">
        <div className="marca"><span className="marca-icone">✦</span><span>Study<span className="marca-destaque">Flow</span></span></div>
        <span className="etiqueta-cabecalho">SEU ESPAÇO DE APRENDIZADO</span>
      </header>

      <section className="boas-vindas">
        <div className="boas-vindas-texto">
          <p className="sobretitulo">ORGANIZE • ESTUDE • CONQUISTE</p>
          <h1>Seus estudos,<br /><span>no seu ritmo.</span></h1>
          <p className="descricao-cabecalho">Um passo de cada vez. Organize suas atividades e acompanhe seu progresso.</p>
        </div>
        <div className="ilustracao" aria-hidden="true"><span className="estrela estrela-um">✦</span><span className="livro-ilustrado">📚</span><span className="estrela estrela-dois">✧</span><span className="bolinha bolinha-um"></span><span className="bolinha bolinha-dois"></span></div>
      </section>

      <section className="resumo" aria-label="Resumo dos estudos">
        <article className="resumo-card"><span className="resumo-icone roxo">▤</span><div><p>Atividades totais</p><strong>{atividades.length}</strong></div></article>
        <article className="resumo-card"><span className="resumo-icone amarelo">◷</span><div><p>Pendentes</p><strong>{totalPendentes}</strong></div></article>
        <article className="resumo-card"><span className="resumo-icone verde">✓</span><div><p>Concluídas</p><strong>{totalConcluidas}</strong></div></article>
        <article className="progresso-card"><div className="progresso-titulo"><span>Seu progresso</span><strong>{progresso}%</strong></div><div className="barra-fundo"><div className="barra-preenchida" style={{ width: `${progresso}%` }}></div></div><p>Continue assim! Você está avançando.</p></article>
      </section>

      <section className="secao-atividades">
        <div className="titulo-secao"><div><p className="sobretitulo">PLANEJAMENTO</p><h2>Minhas atividades</h2></div><span className="contador">{atividadesFiltradas.length} atividade(s)</span></div>
        <div className="controles">
          <label className="campo-busca"><span>⌕</span><input type="search" placeholder="Buscar atividade ou matéria..." value={busca} onChange={(evento) => setBusca(evento.target.value)} aria-label="Buscar atividade ou matéria" /></label>
          <div className="filtros" aria-label="Filtrar atividades">
            <button className={filtro === "todas" ? "ativo" : ""} onClick={() => setFiltro("todas")}>Todas</button>
            <button className={filtro === "pendentes" ? "ativo" : ""} onClick={() => setFiltro("pendentes")}>Pendentes</button>
            <button className={filtro === "concluidas" ? "ativo" : ""} onClick={() => setFiltro("concluidas")}>Concluídas</button>
            <button className={filtro === "favoritas" ? "ativo" : ""} onClick={() => setFiltro("favoritas")}>★ Favoritas ({favoritos.length})</button>
          </div>
        </div>
        <ListaAtividades atividades={atividadesFiltradas} favoritos={favoritos} aoFavoritar={alternarFavorito} aoVerDetalhes={setAtividadeSelecionada} aoAlternarConclusao={alternarConclusao} />
      </section>

      <footer><span>✦ StudyFlow</span><p>Pequenos passos também levam longe.</p></footer>

      {atividadeSelecionada && (
        <div className="modal-fundo" onClick={() => setAtividadeSelecionada(null)}>
          <section className="modal" role="dialog" aria-modal="true" aria-labelledby="titulo-modal" onClick={(evento) => evento.stopPropagation()}>
            <button className="fechar-modal" onClick={() => setAtividadeSelecionada(null)} aria-label="Fechar detalhes">×</button>
            <span className="modal-icone">✦</span>
            <span className="categoria">{atividadeSelecionada.categoria}</span>
            <h2 id="titulo-modal">{atividadeSelecionada.titulo}</h2>
            <p className="modal-materia">Matéria: {atividadeSelecionada.materia}</p>
            <p className="modal-descricao">{atividadeSelecionada.descricao}</p>
            <div className="modal-infos"><span>Prazo: {formatarData(atividadeSelecionada.prazo)}</span><span>Prioridade: {atividadeSelecionada.prioridade}</span></div>
            <p className={atividadeSelecionada.concluida ? "status-modal concluido" : "status-modal pendente"}>{atividadeSelecionada.concluida ? "✓ Concluída" : "◷ Pendente"}</p>
            <button className="botao-concluir modal-botao" onClick={() => alternarConclusao(atividadeSelecionada.id)}>{atividadeSelecionada.concluida ? "Marcar como pendente" : "Marcar como concluída"}</button>
          </section>
        </div>
      )}
    </main>
  );
}

export default App;
