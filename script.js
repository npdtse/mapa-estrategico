/* === [CAPÍTULO 1] BASE DE DADOS DOS INDICADORES E INICIATIVAS === */

const dbIndicadores = {
    obj1: {
        titulo: "OE 01 - Contribuir para a Governança, a Gestão de Riscos e os Controles Internos",
        indicadores: [
            {
                nome: "IE 1.1 - Satisfação da alta administração",
                tipo: "Desempenho",
                descricao: "Mede o nível de adequação e utilidade técnica dos trabalhos sob a ótica da governança corporativa do TSE.",
                instrumento: "Instrumento B - Pesquisa de Opinião de Governança Estratégica (Anual).",
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
                descricao: "Mede a aderência e eficácia do processo de monitoramento sobre as auditorias concluídas.",
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
                instrumento: "Instrumento A - Questionário de Encerramento (Dimensões: Satisfação Geral, Eficiência e Efetividade).",
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
                    "Sinalizar tempestivamente ao Comitê Gestor os alertas de desvios críticos de recursos."
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
                instrumento: "Acompanhamento do cronograma físico do PAQ-AUD.",
                calculo: "Contagem simples de melhorias e guias finalizados no ano.",
                linhaBase: "Sem dados históricos parametrizados.",
                metas: { '2026': "1 ação", '2027': "1 ação", '2028': "1 ação", '2029': "1 ação" },
                iniciativas: [
                    "Revisar metodologicamente o programa de qualidade PAQ-AUD da secretaria.",
                    "Implementar rotinas estruturadas de supervisão técnica e revisão cruzada de relatórios."
                ]
            },
            {
                nome: "IE 3.2 - Índice Geral de Avaliação Contínua",
                tipo: "Desempenho",
                descricao: "Mede a conformidade global, integrando a supervisão e o processo produtivo da auditoria interna.",
                instrumento: "Instrumento A - Questionário de Encerramento (Dimensões: Eficiência, Supervisão e Coordenação).",
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
                descricao: "Avalia a clareza, objetividade e adoção de linguagem simples em nossos relatórios na perspectiva do auditado.",
                instrumento: "Instrumentos A e B - Perguntas específicas do grupo 'Comunicação'.",
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
                metas: { '2026': "1 ação", '2027': "1 ação", '2028': "1 action", '2029': "1 action" },
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

/* === [CAPÍTULO 2] CONTROLE DE NAVEGAÇÃO SPA (GSAP) === */

document.addEventListener("DOMContentLoaded", () => {
    // Inicialização de Ícones Lucide
    lucide.createIcons();

    // Eventos de Tab (Desktop e Mobile)
    const tabButtons = document.querySelectorAll(".header__nav-btn, .mobile-nav__btn");
    tabButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            const targetTab = e.currentTarget.getAttribute("data-tab");
            switchTab(targetTab);
        });
    });

    // Eventos do Mapa Estratégico
    const objectiveCards = document.querySelectorAll(".objective-card");
    objectiveCards.forEach(card => {
        card.addEventListener("click", () => {
            const objectiveId = card.getAttribute("data-objective");
            openDrawer(objectiveId);
        });
    });

    // Eventos de Fechamento do Drawer
    document.getElementById("drawerClose").addEventListener("click", closeDrawer);
    document.getElementById("drawerOverlay").addEventListener("click", closeDrawer);

    // Inicialização do Gráfico Radar
    initRadarChart();
});

function switchTab(tabId) {
    const activeButtons = document.querySelectorAll(`[data-tab="${tabId}"]`);
    const allButtons = document.querySelectorAll(".header__nav-btn, .mobile-nav__btn");
    
    // Atualização de Estados Ativos nos botões
    allButtons.forEach(btn => btn.classList.remove("active"));
    activeButtons.forEach(btn => btn.classList.add("active"));

    // Transição de Telas via GSAP
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
                gsap.fromTo(targetTab, 
                    { opacity: 0, y: 10 },
                    { opacity: 1, y: 0, duration: 0.25, ease: "power2.out" }
                );
            }
        });
    }
}

/* === [CAPÍTULO 3] CONTROLE DO DRAWER (FICHA TÉCNICA) === */

function openDrawer(objectiveId) {
    const data = dbIndicadores[objectiveId];
    if (!data) return;

    const contentArea = document.getElementById("drawerContent");
    
    // Construção semântica do conteúdo da Ficha Técnica
    let html = `
        <h3 class="tech-sheet__title">${data.titulo}</h3>
    `;

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
                <h5 class="tech-sheet__section-title" style="color: #0f5132;">Iniciativas de Viabilização</h5>
                ${ind.iniciativas.map(init => `
                    <p class="tech-sheet__initiative-item">${init}</p>
                `).join('')}
            </div>

            <hr style="border: 0; border-top: 1px solid var(--color-border); margin: 32px 0 24px 0;">
        `;
    });

    contentArea.innerHTML = html;

    // Animação de exibição via GSAP
    const drawer = document.getElementById("drawer");
    const overlay = document.getElementById("drawerOverlay");

    overlay.style.display = "block";
    gsap.to(overlay, { opacity: 1, duration: 0.2 });
    gsap.to(drawer, { right: "0%", duration: 0.35, ease: "back.out(1)" });
}

function closeDrawer() {
    const drawer = document.getElementById("drawer");
    const overlay = document.getElementById("drawerOverlay");

    gsap.to(drawer, { right: "-100%", duration: 0.25, ease: "power2.in" });
    gsap.to(overlay, { 
        opacity: 0, 
        duration: 0.2, 
        onComplete: () => {
            overlay.style.display = "none";
        } 
    });
}

/* === [CAPÍTULO 4] CONFIGURAÇÃO DO GRÁFICO DE RADAR === */

let radarChartInstance = null;

function initRadarChart() {
    const ctx = document.getElementById('radarChart');
    if (!ctx) return;

    const data = {
        labels: ['Satisfação', 'Comunicação', 'Eficiência', 'Efetividade'],
        datasets: [{
            label: 'Avaliação Contínua (%)',
            data: [95, 92, 88, 85],
            fill: true,
            backgroundColor: 'rgba(32, 201, 151, 0.2)',
            borderColor: '#20C997',
            pointBackgroundColor: '#20C997',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#20C997'
        }]
    };

    const config = {
        type: 'radar',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false // Oculta legenda padrão do Chart.js
                }
            },
            scales: {
                r: {
                    angleLines: {
                        color: '#E9ECEF'
                    },
                    grid: {
                        color: '#E9ECEF'
                    },
                    pointLabels: {
                        color: '#212529',
                        font: {
                            family: 'Inter',
                            size: 11,
                            weight: '600'
                        }
                    },
                    ticks: {
                        backdropColor: 'transparent',
                        color: '#6C757D',
                        font: {
                            size: 9
                        }
                    },
                    suggestedMin: 50,
                    suggestedMax: 100
                }
            }
        }
    };

    radarChartInstance = new Chart(ctx, config);
}