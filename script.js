/* === [CAPÍTULO 1] BASE DE DADOS DOS INDICADORES E INICIATIVAS === */

/* --- [Seção] Indicadores do Mapa Tático --- */
const dbIndicadores = {
  obj1: {
    titulo: "OT 01 - Contribuir para a governança, a gestão de riscos e os controles internos",
    indicadores: [
      {
        nome: "IT 1.1 - Cumprimento do Plano de Auditoria",
        tipo: "Desempenho",
        descricao: "Mede o percentual de execução das ações de auditoria, monitoramento e consultoria para cada ano em relação ao total previsto.",
        instrumento: "Planilha de Controle de Avaliações | Painel Estatístico",
        calculo: "(Quantidade de ações executadas / Quantidade de ações previstas no PAA) x 100",
        linhaBase: "2021: Aud. (79%), Monit. (50%) | 2022: Aud. (54%), Monit. (33%), Consult. (100%) | 2023: Aud. (45%), Monit. (62%) | 2024: Aud. (54%), Monit. (80%), Consult. (100%)",
        metas: { '2026': "65%", '2027': "70%", '2028': "75%", '2029': "80%" },
        iniciativas: [
          "Fazer os registros históricos na Planilha de Controle de Avaliações a partir de 2021.",
          "Acompanhar a execução dos trabalhos planejados."
        ]
      },
      {
        nome: "IT 1.2 - Implementação de Recomendações",
        tipo: "Desempenho",
        descricao: "Mede a eficácia prática da auditoria pela adesão das unidades às recomendações expedidas.",
        instrumento: "Planilha de Controle de Avaliações | Painel Estatístico",
        calculo: "(Recomendações Implementadas / (Total de Recomendações - Recom. não aplicáveis)) x 100",
        linhaBase: "2021: 73% | 2022: 39% | 2023: 56% | 2024: 49%",
        metas: { '2026': "60%", '2027': "60%", '2028': "60%", '2029': "60%" },
        iniciativas: [
          "Executar as etapas de 1º e 2º ciclos de monitoramento das recomendações emitidas."
        ]
      }
    ]
  },
  obj2: {
    titulo: "OT 02 - Consolidar as avaliações do PAQ-AUD (Programa de Avaliação de Qualidade da Auditoria Interna)",
    indicadores: [
      {
        nome: "IT 2.1 - Avaliação Contínua de Auditorias",
        tipo: "Desempenho",
        descricao: "Consolida as notas de avaliações contínuas, realizadas após a conclusão de cada auditoria interna, levando em consideração as respostas dos seguintes atores: unidades clientes, gestor da unidade cliente, equipe de auditoria, coordenador do trabalho.",
        instrumento: "Questionários de Avaliação Contínua de Auditorias Internas (uma versão para cada um dos atores respondentes)",
        calculo: "Média ponderada dos índices de cada questionário respondido por cada actor",
        linhaBase: "2021: 97,04 | 2022: 95,43 | 2023: 95,84",
        metas: { '2026': "80%", '2027': "80%", '2028': "80%", '2029': "80%" },
        iniciativas: [
          "Disponibilizar os questionários após a conclusão de cada auditoria interna.",
          "Consolidar as lições aprendidas a partir dos resultados obtidos na avaliação."
        ]
      },
      {
        nome: "IT 2.2 - Avaliação Contínua de Consultorias",
        tipo: "Desempenho",
        descricao: "Consolida as notas de avaliações contínuas, realizadas após a conclusão de cada consultoria, levando em consideração as respostas dos seguintes atores: unidades clientes, gestor da unidade cliente, equipe de auditoria, coordenador do trabalho.",
        instrumento: "Questionários de Avaliação Contínua de Consultorias (uma versão para cada um dos atores respondentes).",
        calculo: "Média ponderada dos índices de cada questionário respondido por cada actor",
        linhaBase: "Sem histórico registrado.",
        metas: { '2026': "80%", '2027': "80%", '2028': "80%", '2029': "80%" },
        iniciativas: [
          "Disponibilizar os questionários após a conclusão de cada consultoria.",
          "Consolidar as lições aprendidas a partir dos resultados obtidos na avaliação."
        ]
      },
      {
        nome: "IT 2.3 - Avaliação Contínua de Auditorias Integradas",
        tipo: "Desempenho",
        descricao: "Consolida as notas de avaliações contínuas, realizadas após a conclusão de cada auditoria integrada, levando em consideração as respostas dos seguintes atores: auditorias internas dos TREs envolvidos, equipe de auditoria, coordenador do trabalho.",
        instrumento: "Questionários de Avaliação Contínua de Auditorias Integradas (uma versão para cada um dos atores respondentes).",
        calculo: "Média ponderada dos índices de cada questionário respondido por cada actor",
        linhaBase: "Sem histórico registrado.",
        metas: { '2026': "80%", '2027': "80%", '2028': "80%", '2029': "80%" },
        iniciativas: [
          "Disponibilizar os questionários após a conclusão de cada auditoria integrada.",
          "Consolidar as lições aprendidas a partir dos resultados obtidos na avaliação."
        ]
      },
      {
        nome: "IT 2.4 - Avaliação Periódica da Alta Administração",
        tipo: "Desempenho",
        descricao: "Consolida as notas de avaliações periódicas realizadas pela alta administração do TSE.",
        instrumento: "Questionário de Avaliação Periódica pela Alta Administração",
        calculo: "Média simples das notas do questionário respondido.",
        linhaBase: "2021: 97,87% | 2022: 94,92% | 2024: 97,52% | 2025: 100%",
        metas: { '2026': "95%", '2027': "95%", '2028': "95%", '2029': "95%" },
        iniciativas: [
          "Disponibilizar o questionário ao final da gestão à autoridade cujo mandato supere o período de 1 ano ou sempre que a conveniência e a oportunidade permitirem.",
          "Consolidar as lições aprendidas a partir dos resultados obtidos na avaliação."
        ]
      },
      {
        nome: "IT 2.5 - Avaliação Periódica do IA-CM",
        tipo: "Desempenho",
        descricao: "Consolida as notas de avaliações periódicas do nível de implementação do IA-CM, realizadas pela própria SAU e por um tribunal parceiro avaliador, escolhido no contexto do grupo de trabalho coordenado pelo CNJ.",
        instrumento: "Planilha de Autoavaliação do IA-CM | Validação externa por par (apontado no GT do CNJ).",
        calculo: "Média considerando autoavaliação e validação externa do tribunal parceiro.",
        linhaBase: "2023: 66% do Nível 2 | 2026: 82% do Nível 2 (homologado por avaliação de par).",
        metas: { '2026': "90% do Nível 2", '2027': "100% do Nível 2", '2028': "Autoav. Nível 3", '2029': "A ser definido" },
        iniciativas: [
          "Realizar ciclos periódicos de autoavaliação por meio da Comissão Técnica de Auditoria Interna da SAU (CTAI).",
          "Submeter relatórios e evidências de capacidade ao tribunal validador par."
        ]
      }
    ]
  },
  obj3: {
    titulo: "OT 03 - Aprimorar a qualidade dos processos de trabalho da SAU",
    indicadores: [
      {
        nome: "IT 3.1 - Mapeamento dos processos de auditoria interna",
        tipo: "Entrega",
        descricao: "Contabiliza a quantidade de macroprocessos da Secretaria mapeados e documentados.",
        instrumento: "Página de Processos de Trabalho da SAU no Sharepoint | SEI",
        calculo: "Soma de processos mapeados e documentados.",
        linhaBase: "2024: 1 macroprocesso de auditoria ordinária formalmente catalogado.",
        metas: { '2026': "2 proc.", '2027': "2 proc.", '2028': "2 proc.", '2029': "2 proc." },
        iniciativas: [
          "Mapear e padronizar os processos finalísticos da Secretaria.",
          "Incluir documentação dos processos de trabalho no SEI."
        ]
      },
      {
        nome: "IT 3.2 - Padronização dos papéis de trabalho e documentação afim",
        tipo: "Entrega",
        descricao: "Contabiliza a quantidade de templates, roteiros e papéis de trabalho eletrônicos criados.",
        instrumento: "Página de Processos de Trabalho da SAU no Sharepoint | SEI",
        calculo: "Soma dos documentos criados.",
        linhaBase: "Modelos básicos de auditoria ordinária revisados e documentados em 2024.",
        metas: { '2026': "1 ação", '2027': "1 ação", '2028': "1 ação", '2029': "1 ação" },
        iniciativas: [
          "Elaborar modelos de documentos para a atuação dos auditores.",
          "Incluir modelos de documentos no SEI."
        ]
      },
      {
        nome: "IT 3.3 - Institucionalização dos KPAs do IA-CM",
        tipo: "Desempenho",
        descricao: "Mede o percentual de macroprocessos-chave do modelo IA-CM implementados no TSE.",
        instrumento: "Planilha de Avaliação Periódica do IA-CM | Plano de Ação do IA-CM",
        calculo: "(Atividades do nível corrente implementadas / Total de atividades essenciais pendentes no nível corrente) x 100",
        linhaBase: "Nível 2 em fase final de institucionalização.",
        metas: { '2026': "90% do Nível 2", '2027': "100% do Nível 2", '2028': "Autoav. Nível 3", '2029': "A ser definido" },
        iniciativas: [
          "Desenvolver plano de ação para as atividades de nível 2 pendentes.",
          "Realizar a autoavaliação do nível 3."
        ]
      },
      {
        nome: "IT 3.4 - Aperfeiçoamento da comunicação com clientes",
        tipo: "Desempenho",
        descricao: "Contabiliza as ações realizadas para o aperfeiçoamento da comunicação.",
        instrumento: "Questionário de Avaliação Contínua para Clientes (Elemento: Comunicação dos Resultados) | Questionário de Avaliação Contínua para Gestores (Elemento: Comunicação dos Resultados) | Plano de Ação de Comunicação com Clientes",
        calculo: "Soma das ações de aperfeiçoamento da comunicação implementadas.",
        linhaBase: "Dimensão nova. Sem dados históricos consolidados.",
        metas: { '2026': "1 ação", '2027': "1 ação", '2028': "1 ação", '2029': "1 ação" },
        iniciativas: [
          "Instituir modelos de documentos e relatórios para a aplicação de linguagem simples, útil e padronizada."
        ]
      },
      {
        nome: "IT 3.5 - Inovação tecnológica quanto a gestão de dados e automatização",
        tipo: "Entrega",
        descricao: "Contabiliza as novas ferramentas digitais criadas para gestão, análise de dados e automação de trabalhos da Secretaria.",
        instrumento: "Ferramentas tecnológicas criadas pelo Núcleo de Pesquisa e Desenvolvimento da SAU",
        calculo: "Soma das soluções tecnológicas desenvolvidas no exercício.",
        linhaBase: "Sem dados históricos consolidados.",
        metas: { '2026': "1 ação", '2027': "1 ação", '2028': "1 ação", '2029': "1 ação" },
        iniciativas: [
          "Desenvolver planilha de gestão de dados de auditorias e consultorias da Secretaria.",
          "Desenvolver painel estatístico das atividades da SAU.",
          "Desenvolver página de repositório de documentos úteis da SAU.",
          "Desenvolver ferramentas para reduzir dependência de processos manuais de conferência."
        ]
      }
    ]
  },
  obj4: {
    titulo: "OT 04 - Estimular o desenvolvimento de competências profissionais",
    indicadores: [
      {
        nome: "IT 4.1 - Horas de Capacitação por Servidor",
        tipo: "Desempenho",
        descricao: "Mensura o percentual de servidores da SAU que atingiu o número mínimo de 50 horas anuais de capacitação.",
        instrumento: "Sistema SGRH",
        calculo: "(Servidores ativos que completaram >= 50h de curso / Total de servidores ativos) x 100",
        linhaBase: "2021: 80% dos servidores atingiram a meta de 40h.",
        metas: { '2026': "80%", '2027': "90%", '2028': "100%", '2029': "100%" },
        iniciativas: [
          "Ofertar trilhas e cursos especializados de auditoria governamental e ciência de dados.",
          "Acompanhar a execução das horas-aula acumuladas pelos servidores."
        ]
      },
      {
        nome: "IT 4.2 - Redução dos GAPs de competências",
        tipo: "Desempenho",
        descricao: "Mede a diminuição das lacunas de conhecimento técnico prioritário por meio do cálculo de gaps.",
        instrumento: "Questionário de Avaliação de Competências | Plano Anual de Capacitação.",
        calculo: "Fórmula considerando gaps prioritários (nível 9) e moderados (nível 6).",
        linhaBase: "2025-2026: Gap de 25%.",
        metas: { '2026': "A definir", '2027': "A definir", '2028': "A definir", '2029': "A definir" },
        iniciativas: [
          "Aplicar o questionário de avaliação de competências junto aos servidores da SAU.",
          "Estruturar o plano anual de capacitação focado primordialmente nos gaps graves e planos de sucessão técnica."
        ]
      }
    ]
  }
};

/* --- [Seção] Fatores da Matriz SWOT --- */
const dbSwot = {
  forcas: {
    titulo: "Forças (Fatores Internos / Positivos)",
    color: "#10B981",
    icon: "fa-solid fa-circle-plus",
    itens: [
      {
        texto: "Independência técnica de atuação assegurada e estruturada formalmente no Estatuto de Auditoria Interna do TSE.",
        categoria: "Resultados",
        slug: "resultados",
        icone: "fa-solid fa-gavel"
      },
      {
        texto: "Corpo funcional da Secretaria de Auditoria (SAU) altamente capacitado e com qualificações acadêmicas consolidadas.",
        categoria: "Aprendizado e Crescimento",
        slug: "aprendizado",
        icone: "fa-solid fa-graduation-cap"
      },
      {
        texto: "Processos de auditoria planejados e plenamente orientados ao padrão global das normas profissionais (IIA/IPPF).",
        categoria: "Processos Internos",
        slug: "processos",
        icone: "fa-solid fa-gears"
      },
      {
        texto: "Proximidade, credibilidade e canais diretos de comunicação e assessoramento com a alta administração.",
        categoria: "Resultados",
        slug: "resultados",
        icone: "fa-solid fa-handshake"
      },
      {
        texto: "Forte engajamento técnico focado no Programa de Avaliação de Qualidade da Auditoria Interna (PAQ-AUD).",
        categoria: "Processos Internos",
        slug: "processos",
        icone: "fa-solid fa-shield-halved"
      },
      {
        texto: "Adoção sistemática de abordagens baseadas em riscos para elaboração do plano de auditoria.",
        categoria: "Processos Internos",
        slug: "processos",
        icone: "fa-solid fa-magnifying-glass"
      }
    ]
  },
  fraquezas: {
    titulo: "Fraquezas (Fatores Internos / Negativos)",
    color: "#F59E0B",
    icon: "fa-solid fa-circle-minus",
    itens: [
      {
        texto: "Instabilidade de fluxo e necessidade de consolidação metodológica para os processos de consultoria.",
        categoria: "Processos Internos",
        slug: "processos",
        icone: "fa-solid fa-gears"
      },
      {
        texto: "Ausência de ferramenta analítica estruturada para registro de apuração histórica de benefícios do controle.",
        categoria: "Processos Internos",
        slug: "processos",
        icone: "fa-solid fa-chart-line"
      },
      {
        texto: "Gaps de competência técnica interna voltados para Ciência de Dados, Análise Contínua e Inteligência Artificial.",
        categoria: "Aprendizado e Crescimento",
        slug: "aprendizado",
        icone: "fa-solid fa-laptop-code"
      },
      {
        texto: "Dependência acentuada de testes analíticos manuais provocada pela fragmentação dos sistemas internos de suporte.",
        categoria: "Processos Internos",
        slug: "processos",
        icone: "fa-solid fa-database"
      }
    ]
  },
  oportunidades: {
    titulo: "Oportunidades (Fatores Externos / Positivos)",
    color: "#06B6D4",
    icon: "fa-solid fa-arrow-trend-up",
    itens: [
      {
        texto: "Potencial ampliação e fortalecimento de auditorias coordenadas conjuntas com as secretarias dos TREs.",
        categoria: "Processos Internos",
        slug: "processos",
        icone: "fa-solid fa-network-wired"
      },
      {
        texto: "Trilhas de formação gratuitas e de excelência fornecidas diretamente pelo CNJ, TCU e escolas fazendárias.",
        categoria: "Aprendizado e Crescimento",
        slug: "aprendizado",
        icone: "fa-solid fa-graduation-cap"
      },
      {
        texto: "Fortalecimento da força de trabalho com novos servidores nomeados em concursos consolidados da Justiça Eleitoral.",
        categoria: "Aprendizado e Crescimento",
        slug: "aprendizado",
        icone: "fa-solid fa-user-plus"
      },
      {
        texto: "Avanço de softwares e frameworks analíticos de inteligência artificial de código aberto e seguros.",
        categoria: "Processos Internos",
        slug: "processos",
        icone: "fa-solid fa-robot"
      }
    ]
  },
  ameacas: {
    titulo: "Ameaças (Fatores Externos / Negativos)",
    color: "#EF4444",
    icon: "fa-solid fa-triangle-exclamation",
    itens: [
      {
        texto: "Transições sucessivas na alta administração do Tribunal, exigindo esforços constantes de aculturamento de controle.",
        categoria: "Resultados",
        slug: "resultados",
        icone: "fa-solid fa-users-gear"
      },
      {
        texto: "Limitações e rigidez no plano de cargos do funcionalismo, dificultando a retenção de especialistas de TI/Dados.",
        categoria: "Aprendizado e Crescimento",
        slug: "aprendizado",
        icone: "fa-solid fa-id-card-clip"
      },
      {
        texto: "Aumento recorrente de demandas urgentes enviadas por órgãos de controle externo (CNJ, TCU, CGU).",
        categoria: "Processos Internos",
        slug: "processos",
        icone: "fa-solid fa-triangle-exclamation"
      },
      {
        texto: "Contingenciamentos e limites orçamentários rígidos para a aquisição de licenças analíticas especializadas.",
        categoria: "Processos Internos",
        slug: "processos",
        icone: "fa-solid fa-sack-dollar"
      }
    ]
  }
};


/* === [CAPÍTULO 2] CONTROLE DE SPA E ANIMAÇÃO DE ESTADOS === */

/* --- [Seção] Gerenciamento de Abas com Bloqueio de Concorrência --- */
let isTransitioning = false;

document.addEventListener("DOMContentLoaded", () => {
  // Inicialização estável da SPA
});

function switchTab(tabId) {
  if (isTransitioning) return; // Bloqueio defensivo contra cliques repetitivos rápidos

  const tabsAndButtons = document.querySelectorAll(".audit-tab, .mobile-nav__btn");
  tabsAndButtons.forEach(el => {
    el.classList.remove("active");
    if (el.getAttribute("data-tab") === tabId) {
      el.classList.add("active");
    }
  });

  const currentTab = document.querySelector(".tab-content.active");
  const targetTab = document.getElementById(tabId);

  if (currentTab && currentTab !== targetTab) {
    isTransitioning = true;

    gsap.to(currentTab, {
      opacity: 0,
      y: -10,
      duration: 0.15,
      onComplete: () => {
        currentTab.classList.remove("active");
        targetTab.classList.add("active");
        
        // Reset absoluto do foco de rolagem para o topo
        scrollToTop();

        gsap.fromTo(targetTab, 
          { opacity: 0, y: 10 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.25, 
            ease: "power2.out",
            onComplete: () => {
              isTransitioning = false;
            }
          }
        );
      }
    });
  }
}

/* --- [Seção] Controle de Temas (Claro / Escuro) --- */
function toggleTheme() {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  const newTheme = isDark ? "" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);

  document.getElementById("theme-label").textContent = newTheme === "dark" ? "Modo Claro" : "Modo Escuro";
  document.getElementById("theme-icon").className = newTheme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-circle-half-stroke";
}


/* === [CAPÍTULO 3] CONTROLADORES DE MODAL E DRAWER (BOTTOM SHEET) === */

/* --- [Seção] Gerenciador Unificado de Entrada/Saída do Drawer --- */
let lastActiveElement = null; // Armazena o elemento focado de origem para restauração de acessibilidade (A11y)

function showDrawer(htmlContent, onCompleteCallback) {
  // Guarda o elemento ativo antes da abertura do diálogo
  lastActiveElement = document.activeElement;

  const contentArea = document.getElementById("drawerContent");
  contentArea.innerHTML = htmlContent;

  const drawer = document.getElementById("drawer");
  const overlay = document.getElementById("drawerOverlay");

  if (drawer) {
    drawer.scrollTop = 0;
  }

  overlay.style.display = "block";
  gsap.to(overlay, { opacity: 1, duration: 0.2 });

  const isMobile = window.innerWidth <= 850;
  if (isMobile) {
    gsap.to(drawer, { 
      bottom: "0%", 
      right: 0, 
      left: 0, 
      duration: 0.35, 
      ease: "power2.out",
      onComplete: () => {
        // Envia foco visual para o controle de fechamento do diálogo
        document.getElementById("drawerClose").focus();
        if (onCompleteCallback) onCompleteCallback();
      }
    });
  } else {
    gsap.to(drawer, { 
      right: "0%", 
      bottom: "auto", 
      left: "auto", 
      duration: 0.35, 
      ease: "power2.out",
      onComplete: () => {
        document.getElementById("drawerClose").focus();
        if (onCompleteCallback) onCompleteCallback();
      }
    });
  }
}

function closeDrawer() {
  const drawer = document.getElementById("drawer");
  const overlay = document.getElementById("drawerOverlay");

  const isMobile = window.innerWidth <= 850;
  if (isMobile) {
    gsap.to(drawer, { bottom: "-100%", duration: 0.25, ease: "power2.in" });
  } else {
    gsap.to(drawer, { right: "-100%", duration: 0.25, ease: "power2.in" });
  }

  gsap.to(overlay, { 
    opacity: 0, 
    duration: 0.2, 
    onComplete: () => {
      overlay.style.display = "none";
      // Restaura o foco na interface após o fechamento do diálogo (A11y)
      if (lastActiveElement) {
        lastActiveElement.focus();
      }
    } 
  });
}

/* --- [Seção] Renderizadores de Conteúdo Dinâmico (Fichas e SWOT) --- */
function openDrawer(objectiveId, onCompleteCallback) {
  const data = dbIndicadores[objectiveId];
  if (!data) return;

  let html = `<h3 class="tech-sheet__title">${data.titulo}</h3>`;

  if (data.indicadores && data.indicadores.length > 1) {
    html += `<div class="tech-sheet__nav">`;
    data.indicadores.forEach((ind, idx) => {
      const codigo = ind.nome.split(" - ")[0];
      html += `
        <button class="tech-sheet__nav-btn" onclick="scrollToIndicator('ind-${objectiveId}-${idx}')">
          <i class="fa-solid fa-location-arrow" style="font-size: 10px; opacity: 0.7;"></i> ${codigo}
        </button>
      `;
    });
    html += `</div>`;
  }

  data.indicadores.forEach((ind, idx) => {
    html += `
      <div class="tech-sheet__indicator" id="ind-${objectiveId}-${idx}">
        <h4 class="tech-sheet__indicator-title">${ind.nome}</h4>
        <span class="tech-sheet__indicator-meta">${ind.tipo}</span>
      </div>

      <div class="tech-sheet__section">
        <h5 class="tech-sheet__section-title">Descrição do Indicador</h5>
        <p class="tech-sheet__section-text">${ind.descricao}</p>
      </div>

      <div class="tech-sheet__section">
        <h5 class="tech-sheet__section-title">Instrumento de Medição</h5>
        <p class="tech-sheet__section-text">${ind.instrumento}</p>
      </div>

      <div class="tech-sheet__section">
        <h5 class="tech-sheet__section-title">Forma de Cálculo</h5>
        <p class="tech-sheet__section-text">${ind.calculo}</p>
      </div>

      <div class="tech-sheet__section">
        <h5 class="tech-sheet__section-title">Linha de Base Histórica</h5>
        <p class="tech-sheet__section-text">${ind.linhaBase}</p>
      </div>

      <div class="tech-sheet__section">
        <h5 class="tech-sheet__section-title">Metas Anuais Planejadas</h5>
        <div class="tech-sheet__goals-table">
          <div class="tech-sheet__goal-col">
            <span class="tech-sheet__goal-year">2026</span>
            <span class="tech-sheet__goal-value">${ind.metas['2026']}</span>
          </div>
          <div class="tech-sheet__goal-col">
            <span class="tech-sheet__goal-year">2027</span>
            <span class="tech-sheet__goal-value">${ind.metas['2027']}</span>
          </div>
          <div class="tech-sheet__goal-col">
            <span class="tech-sheet__goal-year">2028</span>
            <span class="tech-sheet__goal-value">${ind.metas['2028']}</span>
          </div>
          <div class="tech-sheet__goal-col">
            <span class="tech-sheet__goal-year">2029</span>
            <span class="tech-sheet__goal-value">${ind.metas['2029']}</span>
          </div>
        </div>
      </div>

      <div class="tech-sheet__initiatives">
        <h5 class="tech-sheet__section-title" style="color: var(--secondary);">Iniciativas de Viabilização</h5>
        ${ind.iniciativas.map(init => `
          <p class="tech-sheet__initiative-item">${init}</p>
        `).join('')}
      </div>

      <hr style="border: 0; border-top: 1px solid var(--border); margin: 32px 0 24px 0;">
    `;
  });

  showDrawer(html, onCompleteCallback);
}

function openSwotDrawer(quadrante) {
  const data = dbSwot[quadrante];
  if (!data) return;

  let html = `
    <h3 class="tech-sheet__title" style="border-bottom-color: ${data.color};">
      <i class="${data.icon}" style="color: ${data.color}; margin-right: 8px;"></i>
      ${data.titulo}
    </h3>
    <p class="section-paragraph" style="font-size: 0.95rem; margin-bottom: 24px;">
      Abaixo estão os fatores mapeados organizados de forma coerente com as perspectivas estratégicas do Tribunal:
    </p>
    <div class="swot-detail-list">
  `;

  data.itens.forEach((item, index) => {
    html += `
      <div class="swot-detail-card">
        <div class="swot-detail-card__meta">
          <span class="swot-detail-card__code swot-detail-card__code--${quadrante}">
            ${quadrante.substring(0, 3).toUpperCase()} ${index + 1}
          </span>
          <span class="swot-detail-card__category swot-detail-card__category--${item.slug}">
            <i class="${item.icone}"></i> ${item.categoria}
          </span>
        </div>
        <div class="swot-detail-card__content">
          <div class="swot-detail-card__icon-wrapper">
            <i class="${item.icone}"></i>
          </div>
          <p class="swot-detail-card__text">${item.texto}</p>
        </div>
      </div>
    `;
  });

  html += `</div>`;

  showDrawer(html);
}

/* --- [Seção] Rolagem Interna e Microinterações do Drawer --- */
function openDrawerWithAnchor(objectiveId, indicatorIndex) {
  // Passa a função de âncora como callback de finalização do GSAP para prevenir pulos brutos
  openDrawer(objectiveId, () => {
    scrollToIndicator(`ind-${objectiveId}-${indicatorIndex}`);
  });
}

function scrollToIndicator(id) {
  const targetElement = document.getElementById(id);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    
    // Reinicialização do pulso de acendimento visual
    targetElement.classList.remove("highlight-active");
    void targetElement.offsetWidth; // Força re-flow do navegador
    targetElement.classList.add("highlight-active");
  }
}

function scrollToTop() {
  const mainArea = document.getElementById("main-area");
  if (mainArea) {
    mainArea.scrollTop = 0; // Limpa rolagem do container interno no desktop
  }
  window.scrollTo(0, 0); // Limpa rolagem geral do navegador no mobile
}