/* === [CAPÍTULO 1] BASE DE DADOS DOS INDICADORES E INICIATIVAS === */

const dbIndicadores = {
  obj1: {
    titulo: "OE 01 - Contribuir para a Governança, a Gestão de Riscos e os Controles Internos",
    indicadores: [
      {
        nome: "IE 1.1 - Satisfação da alta administração",
        tipo: "Desempenho",
        descricao: "Mede o nível de adequação e utilidade técnica dos trabalhos sob a ótica da governança corporativa do TSE.",
        instrumento: "Pesquisa de Opinião de Governança Estratégica (Anual).",
        calculo: "Média simples das notas de satisfação atribuídas pelo público avaliador.",
        linhaBase: "2021: 97,87% | 2022: 94,92% | 2024: 97,52%",
        metas: { '2026': "95%", '2027': "95%", '2028': "95%", '2029': "95%" },
        iniciativas: [
          "Promover as avaliações estruturadas conforme previsto no calendário do PAQ-AUD TSE.",
          "Disseminar relatórios executivos sob linguagem simples para suporte rápido à tomada de decisão."
        ]
      },
      {
        nome: "IE 1.2 - Percentual de Recomendações Implementadas",
        tipo: "Desempenho",
        descricao: "Mede a eficácia prática da auditoria pela adesão das unidades às recomendações expedidas.",
        instrumento: "Sistema de Monitoramento de Recomendações de Auditoria.",
        calculo: "(Recomendações Implementadas / (Total de Recomendações - Recomendações não mais aplicáveis)) x 100",
        linhaBase: "2024: 49%. Histórico anterior descontinuado devido a mudança metodológica.",
        metas: { '2026': "60-70%", '2027': "Em def.", '2028': "Em def.", '2029': "Em def." },
        iniciativas: [
          "Promover reuniões periódicas de monitoramento consultivo junto às unidades auditadas.",
          "Acompanhar em dois ciclos anuais o status de implementação das recomendações emitidas."
        ]
      },
      {
        nome: "IE 1.3 - Satisfação da unidade cliente",
        tipo: "Desempenho",
        descricao: "Mede o grau de conformidade e o valor gerado durante a execução dos trabalhos na perspectiva da área auditada.",
        instrumento: "Questionário de Encerramento (Dimensões: Satisfação Geral, Eficiência e Efetividade).",
        calculo: "Média ponderada do índice de aprovação das áreas fiscalizadas pós-ciclo.",
        linhaBase: "Sem histórico estruturado sob o novo instrumento de avaliação.",
        metas: { '2026': "A definir", '2027': "A definir", '2028': "A definir", '2029': "A definir" },
        iniciativas: [
          "Disponibilizar os questionários de avaliação após o encerramento de cada ação de fiscalização.",
          "Tratar anualmente desvios metodológicos apontados nas dimensões de eficiência do processo."
        ]
      }
    ]
  },
  obj2: {
    titulo: "OE 02 - Aprimorar os processos de auditoria interna",
    indicadores: [
      {
        nome: "IE 2.1 - Processos de trabalho mapeados e documentados",
        tipo: "Entrega",
        descricao: "Contabiliza fisicamente a padronização e documentação dos macroprocessos de trabalho da secretaria.",
        instrumento: "Inventário de Mapeamento de Processos de Trabalho da SAU.",
        calculo: "Soma absoluta acumulada de processos homologados em SEI.",
        linhaBase: "1 processo de auditoria formalmente catalogado.",
        metas: { '2026': "2 proc.", '2027': "2 proc.", '2028': "2 proc.", '2029': "2 proc." },
        iniciativas: [
          "Mapear e padronizar os 10 processos finalísticos (Auditoria Ordinária, Financeira, Integrada, Coordenada, Consultoria, PAA, PALP, Monitoramento, Atos de Pessoal e RGF).",
          "Elaborar templates de papéis de trabalho vinculados e inseri-los no SEI."
        ]
      },
      {
        nome: "IE 2.2 - Índice de institucionalização dos KPAs do nível 2 do IA-CM",
        tipo: "Desempenho",
        descricao: "Mensura o nível de conformidade da estrutura de governança interna com base no modelo internacional IA-CM.",
        instrumento: "Relatório de Autoavaliação IA-CM do TSE.",
        calculo: "(KPAs de Nível 2 institucionalizados / Total de KPAs do Nível 2) x 100",
        linhaBase: "2023: 66% | 2026: 86%",
        metas: { '2026': "90%", '2027': "100%", '2028': "Nível 3", '2029': "Nível 3" },
        iniciativas: [
          "Concluir formalmente a autoavaliação institucionalizada no nível 2 do IA-CM.",
          "Desenvolver o plano de ação preparatório para a autoavaliação do nível 3."
        ]
      },
      {
        nome: "IE 2.3 - Cumprimento do Plano Anual de Auditoria (PAA)",
        tipo: "Desempenho",
        descricao: "Mede o percentual de execução das ações planejadas para o ano em relação ao total previsto.",
        instrumento: "Relatório Anual de Atividades da SAU.",
        calculo: "(Quantidade de atividades executadas / Quantidade de atividades programadas) x 100",
        linhaBase: "2024: Auditorias (54%), Monitoramentos (80%), Consultorias (100%).",
        metas: { '2026': "95%", '2027': "95%", '2028': "95%", '2029': "95%" },
        iniciativas: [
          "Acompanhar bimestralmente os cronogramas de fiscalização com auxílio de dashboards internos.",
          "Sinalizar tempestivamente ao Comitê Gestor os alertas de desvios críticos de prazo."
        ]
      }
    ]
  },
  obj3: {
    titulo: "OE 03 - Aprimorar a qualidade dos trabalhos da SAU",
    indicadores: [
      {
        nome: "IE 3.1 - Ações voltadas ao aprimoramento da qualidade",
        tipo: "Entrega",
        descricao: "Mede o andamento das entregas programadas no Programa de Avaliação da Qualidade da Auditoria Interna (PAQ-AUD).",
        instrumento: "Relatório de Execução do PAQ-AUD.",
        calculo: "Contagem simples de melhorias e guias finalizados no ano.",
        linhaBase: "Sem dados históricos.",
        metas: { '2026': "1 ação", '2027': "1 ação", '2028': "1 ação", '2029': "1 ação" },
        iniciativas: [
          "Revisar metodologicamente o programa de qualidade PAQ-AUD da secretaria.",
          "Implementar rotinas estruturadas de supervisão técnica e revisão cruzada de relatórios."
        ]
      },
      {
        nome: "IE 3.2 - Índice Geral de Avaliação Contínua",
        tipo: "Desempenho",
        descricao: "Consolidação das avaliações multidimensionais pós-conclusão de trabalhos individuais.",
        instrumento: "Questionário de Encerramento (Dimensões: Eficiência, Supervisão e Coordenação).",
        calculo: "Consolidação das notas dos questionários de autoavaliação e revisão técnica pós-trabalho.",
        linhaBase: "2021: 97,04 | 2022: 95,43 | 2023: 95,84",
        metas: { '2026': "80%", '2027': "80%", '2028': "80%", '2029': "80%" },
        iniciativas: [
          "Aferir os índices de autoavaliação técnica após a conclusão de cada ação de fiscalização.",
          "Compilar anualmente as lições aprendidas para mitigar lacunas de supervisão de equipes."
        ]
      }
    ]
  },
  obj4: {
    titulo: "OE 04 - Aprimorar a comunicação com as unidades clientes",
    indicadores: [
      {
        nome: "IE 4.1 - Índice de Qualidade da Comunicação",
        tipo: "Desempenho",
        descricao: "Avalia a clareza, objetividade e adoção de linguagem simples nos canais de comunicação com auditados.",
        instrumento: "Perguntas específicas do grupo 'Comunicação' nos questionários.",
        calculo: "Média simples dos dados do grupo temático coletados anualmente.",
        linhaBase: "Instrumento novo. Linha de base pendente de medição inicial.",
        metas: { '2026': "Em def.", '2027': "Em def.", '2028': "Em def.", '2029': "Em def." },
        iniciativas: [
          "Instituir oficinas e guias internos para a aplicação de linguagem simples em notas técnicas.",
          "Estruturar relatórios executivos sintéticos para otimizar o tempo de leitura dos gestores."
        ]
      }
    ]
  },
  obj5: {
    titulo: "OE 05 - Implementar tecnologia para automação de processos",
    indicadores: [
      {
        nome: "IE 5.1 - Ações automatizadas nos processos da SAU",
        tipo: "Entrega",
        descricao: "Contabiliza a homologação de novas ferramentas, scripts ou robôs (RPA) de automação e análise de dados.",
        instrumento: "Plano de Automação e Soluções Digitais da SAU.",
        calculo: "Soma das soluções homologadas e em ambiente de produção no exercício.",
        linhaBase: "Sem dados históricos consolidados.",
        metas: { '2026': "1 ação", '2027': "1 ação", '2028': "1 ação", '2029': "1 ação" },
        iniciativas: [
          "Desenvolver soluções automatizadas de extração (RPA) para processos de fiscalização contínua.",
          "Fomentar o uso de ferramentas corporativas de TI para análise integrada de base de dados do Tribunal."
        ]
      }
    ]
  },
  obj6: {
    titulo: "OE 06 - Estimular o desenvolvimento profissional dos auditores",
    indicadores: [
      {
        nome: "IE 6.1 - Percentual de servidores com meta de capacitação atingida",
        tipo: "Desempenho",
        descricao: "Mede o nível de adesão à capacitação profissional contínua para manutenção da proficiência técnica.",
        instrumento: "Relatório anual de desenvolvimento de pessoas da SAU.",
        calculo: "(Servidores ativos que completaram >= 50h de curso / Total de servidores ativos) x 100",
        linhaBase: "2021 a 2024: 100% dos servidores ativos atingiram a meta histórica de 40h.",
        metas: { '2026': "80%", '2027': "90%", '2028': "100%", '2029': "100%" },
        iniciativas: [
          "Ofertar anualmente trilhas e cursos especializados de auditoria governamental e ciência de dados.",
          "Acompanhar trimestralmente as horas acumuladas por servidor para evitar represamento de cursos."
        ]
      },
      {
        nome: "IE 6.2 - Índice de efetividade na redução de GAP de competências",
        tipo: "Desempenho",
        descricao: "Mede a diminuição das lacunas de conhecimento técnico prioritário por meio do cálculo ponderado de gaps.",
        instrumento: "Painel de Mapeamento Anual de Gaps da SAU.",
        calculo: "Fórmula ponderada considerando gaps graves (nível 9) e moderados (nível 6).",
        linhaBase: "2025-2026: Redução inicial esperada de 25%.",
        metas: { '2026': "25%", '2027': "A definir", '2028': "A definir", '2029': "A definir" },
        iniciativas: [
          "Aplicar o inventário anual de autoavaliação de competências junto à força de trabalho.",
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

function openDrawer(objectiveId) {
  const data = dbIndicadores[objectiveId];
  if (!data) return;

  const contentArea = document.getElementById("drawerContent");
  
  let html = `<h3 class="tech-sheet__title">${data.titulo}</h3>`;

  data.indicadores.forEach(ind => {
    html += `
      <div class="tech-sheet__indicator">
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

  contentArea.innerHTML = html;

  const drawer = document.getElementById("drawer");
  const overlay = document.getElementById("drawerOverlay");

  overlay.style.display = "block";
  gsap.to(overlay, { opacity: 1, duration: 0.2 });

  // Detecção do ambiente (Mobile vs Desktop) para determinar a direção do Drawer
  const isMobile = window.innerWidth <= 850;
  if (isMobile) {
    gsap.to(drawer, { bottom: "0%", right: 0, left: 0, duration: 0.35, ease: "power2.out" });
  } else {
    gsap.to(drawer, { right: "0%", bottom: "auto", left: "auto", duration: 0.35, ease: "power2.out" });
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