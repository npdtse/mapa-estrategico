/* === [CAPÍTULO 1] BASE DE DADOS DOS INDICADORES E INICIATIVAS === */

const dbIndicadores = {
  obj1: {
    titulo: "OE 01 - Contribuir para a Governança, a Gestão de Riscos e os Controles Internos",
    indicadores: [
      {
        nome: "IE 1.1 - Satisfação da Alta Administração",
        tipo: "Desempenho",
        descricao: "Mede o nível de adequação e utilidade técnica dos trabalhos sob a ótica da alta administração do TSE.",
        instrumento: "Questionário de Avaliação Periódica pela Alta Administração (Anual).",
        calculo: "Média simples das notas de satisfação atribuídas pelo público avaliador.",
        linhaBase: "2021: 97,87% | 2022: 94,92% | 2024: 97,52% | 2025: 100%",
        metas: { '2026': "95%", '2027': "95%", '2028': "95%", '2029': "95%" },
        iniciativas: [
          "Promover as avaliações estruturadas conforme previsto no calendário do PAQ-AUD TSE."
        ]
      },
      {
        nome: "IE 1.2 - Implementação de Recomendações",
        tipo: "Desempenho",
        descricao: "Mede a eficácia prática da auditoria pela adesão das unidades às recomendações expedidas.",
        instrumento: "Planilha de Controle de Avaliações da SAU | Painel Estatístico da SAU.",
        calculo: "(Recomendações Implementadas / (Total de Recomendações - Recomendações não mais aplicáveis)) x 100",
        linhaBase: "2021: 73% | 2022: 39% | 2023: 56% | 2024: 49%",
        metas: { '2026': "60%", '2027': "60%", '2028': "60%", '2029': "60%" },
        iniciativas: [
          "Executar as etapas de 1º e 2º ciclos de monitoramento das recomendações emitidas."
        ]
      },
      {
        nome: "IE 1.3 - Satisfação da Unidade Cliente",
        tipo: "Desempenho",
        descricao: "Mede o grau de satisfação sobre os trabalhos realizados na perspectiva da unidade cliente.",
        instrumento: "Questionário de Avaliação Contínua - Unidades Clientes.",
        calculo: "Média simples do índice de satisfação das unidades clientes.",
        linhaBase: "Sem histórico registrado sob o novo instrumento de avaliação.",
        metas: { '2026': "70%", '2027': "70%", '2028': "70%", '2029': "70%" },
        iniciativas: [
          "Disponibilizar os questionários de avaliação após o encerramento de cada trabalho desenvolvido."
        ]
      }
    ]
  },
  obj2: {
    titulo: "OE 02 - Aprimorar os processos de auditoria interna",
    indicadores: [
      {
        nome: "IE 2.1 - Mapeamento e Documentação dos Processos de Trabalho",
        tipo: "Entrega",
        descricao: "Contabiliza a padronização e documentação dos macroprocessos de trabalho da Secretaria.",
        instrumento: "Inventário de Processos de Trabalho da SAU.",
        calculo: "Soma absoluta acumulada de processos mapeados e documentados.",
        linhaBase: "1 macroprocesso de auditoria formalmente catalogado em suas etapas, participantes e artefatos.",
        metas: { '2026': "1 proc.", '2027': "2 proc.", '2028': "3 proc.", '2029': "4 proc." },
        iniciativas: [
          "Mapear e padronizar os 10 processos finalísticos (Auditoria Ordinária, Financeira, Integrada, Coordenada, Consultoria, PAA, PALP, Monitoramento, Atos de Pessoal e RGF).",
          "Elaborar templates de papéis de trabalho vinculados e inseri-los no Inventário de Processos de Trabalho da SAU."
        ]
      },
      {
        nome: "IE 2.2 - Institucionalização dos KPAs do IA-CM",
        tipo: "Desempenho",
        descricao: "Mensura o nível de conformidade da estrutura de auditoria interna com base no modelo internacional IA-CM.",
        instrumento: "Autoavaliação IA-CM do TSE.",
        calculo: "(KPAs de Nível 2 institucionalizados / Total de KPAs do Nível 2) x 100",
        linhaBase: "2023: 66% | 2026: 86%",
        metas: { '2026': "90% do Nível 2", '2027': "100% do Nível 2", '2028': "Autoav. Nível 3", '2029': "A ser definido" },
        iniciativas: [
          "Concluir formalmente a autoavaliação institucionalizada no nível 2 do IA-CM.",
          "Desenvolver o plano de ação preparatório para a autoavaliação do nível 3."
        ]
      },
      {
        nome: "IE 2.3 - Cumprimento do Plano de Auditoria",
        tipo: "Desempenho",
        descricao: "Mede o percentual de execução das ações de auditoria, monitoramento e consultoria para o ano em relação ao total previsto.",
        instrumento: "Planilha de Controle de Avaliações da SAU | Painel Estatístico da SAU.",
        calculo: "(Quantidade de atividades executadas / Quantidade de atividades previstas) x 100",
        linhaBase: "2024: Auditorias (54%), Monitoramentos (80%), Consultorias (100%).",
        metas: { '2026': "65%", '2027': "70%", '2028': "75%", '2029': "80%" },
        iniciativas: [
          "Acompanhar os cronogramas de ações com auxílio de dashboards internos.",
          "Sinalizar à alta administração os alertas de desvios críticos de prazo."
        ]
      }
    ]
  },
  obj3: {
    titulo: "OE 03 - Aprimorar a qualidade dos trabalhos da SAU",
    indicadores: [
      {
        nome: "IE 3.1 - Ações de Aprimoramento da Qualidade",
        tipo: "Entrega",
        descricao: "Mede a quantidade das entregas programadas no Programa de Avaliação da Qualidade da Auditoria Interna (PAQ-AUD).",
        instrumento: "Informação sobre a Execução do PAQ-AUD.",
        calculo: "Contagem simples de ações de aprimoramento finalizadas no ano.",
        linhaBase: "Sem dados históricos.",
        metas: { '2026': "1 ação", '2027': "1 ação", '2028': "1 ação", '2029': "1 ação" },
        iniciativas: [
          "Revisar o programa de qualidade PAQ-AUD da Secretaria.",
          "Acompanhar as entregas previstas no PAQ-AUD."
        ]
      },
      {
        nome: "IE 3.2 - Avaliação Contínua",
        tipo: "Desempenho",
        descricao: "Consolidação das avaliações multidimensionais pós-conclusão de trabalhos individuais.",
        instrumento: "Questionário de Encerramento Interno (Dimensões: Autoavaliação e Supervisão) | Questionário de Encerramento para Clientes (Dimensões: Satisfação Geral, Eficiência e Efetividade).",
        calculo: "Consolidação das notas dos questionários para clientes e para equipe interna pós-trabalho.",
        linhaBase: "2021: 97,04 | 2022: 95,43 | 2023: 95,84",
        metas: { '2026': "80%", '2027': "80%", '2028': "80%", '2029': "80%" },
        iniciativas: [
          "Aferir as notas de autoavaliação e de supervisão técnica após a conclusão de cada auditoria ou consultoria.",
          "Compilar anualmente as lições aprendidas para mitigar lacunas de supervisão das equipes."
        ]
      }
    ]
  },
  obj4: {
    titulo: "OE 04 - Aprimorar a comunicação com as unidades clientes",
    indicadores: [
      {
        nome: "IE 4.1 - Qualidade da Comunicação com Clientes",
        tipo: "Desempenho",
        descricao: "Avalia a clareza, objetividade e adoção de linguagem simples nos canais de comunicação com auditados e clientes de consultoria.",
        instrumento: "Questionário de Encerramento para Clientes (Dimensão: Comunicação).",
        calculo: "Média simples dos dados do grupo temático coletados anualmente.",
        linhaBase: "Dimensão nova. Sem dados históricos.",
        metas: { '2026': "70%", '2027': "70%", '2028': "70%", '2029': "70%" },
        iniciativas: [
          "Instituir templates de documentos para a aplicação de linguagem padronizada em comunicações.",
          "Redigir sumários executivos para otimizar o tempo de leitura dos gestores."
        ]
      }
    ]
  },
  obj5: {
    titulo: "OE 05 - Implementar tecnologia para automação de processos",
    indicadores: [
      {
        nome: "IE 5.1 - Automatização de processos da SAU",
        tipo: "Entrega",
        descricao: "Contabiliza a homologação de novas ferramentas digitais, planilhas, scripts ou robôs (RPA) de automação para gestão e análise de dados.",
        instrumento: "Relatório de Desenvolvimento de Soluções Tecnológicas da SAU.",
        calculo: "Soma das soluções homologadas e em ambiente de produção no exercício.",
        linhaBase: "Sem dados históricos consolidados.",
        metas: { '2026': "1 ação", '2027': "1 ação", '2028': "1 ação", '2029': "1 ação" },
        iniciativas: [
          "Desenvolver soluções automatizadas de extração de dados para processos de auditoria contínua.",
          "Desenvolver repositórios, planilhas e painéis estatísticos para a gestão e análise de dados da Secretaria."
        ]
      }
    ]
  },
  obj6: {
    titulo: "OE 06 - Estimular o desenvolvimento de competências profissionais",
    indicadores: [
      {
        nome: "IE 6.1 - Horas de Capacitação por Servidor",
        tipo: "Desempenho",
        descricao: "Mede o nível de adesão à capacitação profissional contínua para manutenção da proficiência técnica.",
        instrumento: "Sistema SGRH | Relatório de Gestão por Competências.",
        calculo: "(Servidores ativos que completaram >= 50h de curso / Total de servidores ativos) x 100",
        linhaBase: "2021 a 2024: 100% dos servidores ativos atingiram a meta histórica de 40h.",
        metas: { '2026': "80%", '2027': "90%", '2028': "100%", '2029': "100%" },
        iniciativas: [
          "Ofertar trilhas e cursos especializados de auditoria governamental e ciência de dados.",
          "Acompanhar as horas-aula acumuladas por servidor."
        ]
      },
      {
        nome: "IE 6.2 - Redução dos GAPs de competências",
        tipo: "Desempenho",
        descricao: "Mede a diminuição das lacunas de conhecimento técnico prioritário por meio do cálculo ponderado de gaps.",
        instrumento: "Questionário de Avaliação de Competências | Plano Anual de Capacitação.",
        calculo: "Fórmula ponderada considerando gaps graves (nível 9) e moderados (nível 6).",
        linhaBase: "2025-2026: Redução inicial esperada de 25%.",
        metas: { '2026': "Redução de 25%", '2027': "A definir", '2028': "A definir", '2029': "A definir" },
        iniciativas: [
          "Aplicar o questionário de avaliação de competências junto aos servidores da SAU.",
          "Estruturar o plano anual de capacitação focado primordialmente nos gaps graves apontados."
        ]
      }
    ]
  }
};

/* === [CAPÍTULO 2] LOGICA SPA E CONTROLE DE TEMAS === */

let radarChartInstance = null;

document.addEventListener("DOMContentLoaded", () => {
  // Inicialização do Gráfico de Radar
  updateRadarChart(false);
});

function switchTab(tabId) {
  // Sincroniza estado de botões ativos (tanto na sidebar desktop quanto na barra inferior mobile)
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
    gsap.to(currentTab, {
      opacity: 0,
      y: -10,
      duration: 0.15,
      onComplete: () => {
        currentTab.classList.remove("active");
        targetTab.classList.add("active");
        
        // Reseta a rolagem do contêiner principal (desktop)
        const mainArea = document.getElementById("main-area");
        if (mainArea) {
          mainArea.scrollTop = 0;
        }
        
        // Reseta a rolagem da janela global (mobile) de forma instantânea antes da animação
        window.scrollTo(0, 0);

        gsap.fromTo(targetTab, 
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.25, ease: "power2.out" }
        );
      }
    });
  }
}

function toggleTheme() {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  const newTheme = isDark ? "" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);

  document.getElementById("theme-label").textContent = newTheme === "dark" ? "Modo Claro" : "Modo Escuro";
  document.getElementById("theme-icon").className = newTheme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-circle-half-stroke";

  // Re-inicialização do gráfico de radar com as cores corretas do tema ativo
  updateRadarChart(newTheme === "dark");
}

/* === [CAPÍTULO 3] CONTROLE DO DRAWER LATERAL === */

// ATUALIZADO: Agora aceita um callback opcional de finalização de animação para evitar Race Conditions
function openDrawer(objectiveId, onCompleteCallback) {
  const data = dbIndicadores[objectiveId];
  if (!data) return;

  const contentArea = document.getElementById("drawerContent");
  
  let html = `<h3 class="tech-sheet__title">${data.titulo}</h3>`;

  // GERAÇÃO DA BARRA DE NAVEGAÇÃO DE ÂNCORA (OPÇÃO C)
  // Cria links para saltar diretamente aos indicadores se houver mais de 1 indicador.
  if (data.indicators && data.indicators.length > 1) { // Ajuste preventivo para dados estruturados
    html += `<div class="tech-sheet__nav">`;
    data.indicators.forEach((ind, idx) => {
      const codigo = ind.nome.split(" - ")[0];
      html += `
        <button class="tech-sheet__nav-btn" onclick="scrollToIndicator('ind-${objectiveId}-${idx}')">
          <i class="fa-solid fa-location-arrow" style="font-size: 10px; opacity: 0.7;"></i> ${codigo}
        </button>
      `;
    });
    html += `</div>`;
  } else if (data.indicadores && data.indicadores.length > 1) {
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

  const listToRender = data.indicadores || data.indicators; // Garante compatibilidade de nomenclatura

  listToRender.forEach((ind, idx) => {
    // Identificador único adicionado na div principal para suportar o salto de âncora
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
        <h5 class="tech-sheet__section-title" style="color: var(--secondary);">Iniciativa de Viabilização</h5>
        ${ind.iniciativas.map(init => `
          <p class="tech-sheet__initiative-item">${init}</p>
        `).join('')}
      </div>

      <hr style="border: 0; border-top: 1px solid var(--border); margin: 32px 0 24px 0;">
    `;
  });

  contentArea.innerHTML = html;

  const drawer = document.getElementById("drawer");
  const overlay = document.getElementById("drawerOverlay");

  // Reseta a rolagem do Drawer de forma instantânea para o topo antes de exibi-lo na tela
  if (drawer) {
    drawer.scrollTop = 0;
  }

  overlay.style.display = "block";
  gsap.to(overlay, { opacity: 1, duration: 0.2 });

  // Detecção do ambiente (Mobile vs Desktop) para determinar a direção do Drawer
  const isMobile = window.innerWidth <= 850;
  if (isMobile) {
    gsap.to(drawer, { 
      bottom: "0%", 
      right: 0, 
      left: 0, 
      duration: 0.35, 
      ease: "power2.out",
      onComplete: () => {
        if (onCompleteCallback) onCompleteCallback(); // Dispara a rolagem apenas quando a gaveta estiver 100% aberta no mobile
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
        if (onCompleteCallback) onCompleteCallback(); // Dispara a rolagem apenas quando a gaveta estiver 100% aberta no desktop
      }
    });
  }
}

// FUNÇÃO AUXILIAR DE ROLAGEM SUAVE (OPÇÃO C)
// Realiza a navegação instantânea mas suave para o contêiner do indicador correspondente dentro do Drawer
function scrollToIndicator(id) {
  const targetElement = document.getElementById(id);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// ATUALIZADO: Garante a rolagem sequencial perfeita, resolvendo o bug do salto instantâneo
function openDrawerWithAnchor(objectiveId, indicatorIndex) {
  // Passa a função de rolagem como callback do openDrawer para executar apenas após a abertura total do Drawer
  openDrawer(objectiveId, () => {
    scrollToIndicator(`ind-${objectiveId}-${indicatorIndex}`);
  });
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
    } 
  });
}

/* === [CAPÍTULO 4] CONFIGURAÇÃO DO GRÁFICO DE RADAR === */

function updateRadarChart(isDark) {
  const ctx = document.getElementById('radarChart');
  if (!ctx) return;

  if (radarChartInstance) {
    radarChartInstance.destroy();
  }

  // Definição dinâmica das cores de contraste para o radar
  const gridColor = isDark ? '#334155' : '#CDE0F5';
  const labelColor = isDark ? '#F1F5F9' : '#1A2733';
  const pointColor = isDark ? '#3399FF' : '#0073E6';
  const fillColor = isDark ? 'rgba(51, 153, 255, 0.15)' : 'rgba(0, 115, 230, 0.1)';

  const data = {
    labels: ['Satisfação', 'Comunicação', 'Eficiência', 'Efetividade'],
    datasets: [{
      label: 'Avaliação Contínua (%)',
      data: [95, 92, 88, 85],
      fill: true,
      backgroundColor: fillColor,
      borderColor: pointColor,
      pointBackgroundColor: pointColor,
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: pointColor
    }]
  };

  const config = {
    type: 'radar',
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        r: {
          angleLines: { color: gridColor },
          grid: { color: gridColor },
          pointLabels: {
            color: labelColor,
            font: {
              family: 'Source Sans 3',
              size: 11,
              weight: '600'
            }
          },
          ticks: {
            backdropColor: 'transparent',
            color: isDark ? '#94A3B8' : '#7D8FA3',
            font: { size: 9 }
          },
          suggestedMin: 50,
          suggestedMax: 100
        }
      }
    }
  };

  radarChartInstance = new Chart(ctx, config);
}

// FUNÇÃO AUXILIAR DE RESET DE ROLAGEM
function scrollToTop() {
  const mainArea = document.getElementById('main-area');
  if (mainArea) {
    mainArea.scrollTop = 0; // Reseta a rolagem interna do contêiner principal (Desktop)
  }
  window.scrollTo(0, 0); // Reseta a rolagem global do navegador (Mobile/Fallback)
}