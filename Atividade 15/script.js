// Objeto com informações de cada curso
const cursosInfo = {
    ADS: {
        nome: "Análise e Desenvolvimento de Sistemas",
        descricao: "Tipo: Curso Superior de Tecnologia - Presencial. Eixo: Informação e Comunicação. Duração: 6 ou 8 semestres. Forma profissionais para desenvolver, analisar e manter sistemas de software, atuando em áreas como programação, bancos de dados e segurança da informação."
    },
    AMS: {
        nome: "Desenvolvimento de Sistemas – AMS",
        descricao: "Tipo: Articulação da Formação Profissional Média e Superior (AMS). Eixo: Informação e Comunicação. Duração: 3 semestres. Voltado para alunos egressos do ensino médio técnico, focando em programação, banco de dados e desenvolvimento de aplicações."
    },
    EA: {
        nome: "Eletrônica Automotiva",
        descricao: "Tipo: Curso Superior de Tecnologia - Presencial. Eixo: Controle e Processos Industriais. Duração: 6 semestres. Forma profissionais para atuar em manutenção, projeto e desenvolvimento de sistemas eletrônicos aplicados a veículos automotivos."
    },
    FM: {
        nome: "Fabricação Mecânica",
        descricao: "Tipo: Curso Superior de Tecnologia - Presencial. Eixo: Produção Industrial. Duração: 6 semestres. Capacita profissionais para atuar na fabricação de peças e sistemas mecânicos, envolvendo processos de usinagem, soldagem e automação."
    },
    GQ: {
        nome: "Gestão da Qualidade",
        descricao: "Tipo: Curso Superior de Tecnologia - Presencial. Eixo: Gestão e Negócios. Duração: 6 semestres. Foca em sistemas de gestão da qualidade, auditorias e melhoria de processos para aumentar a competitividade das empresas."
    },
    GEAD: {
        nome: "Gestão Empresarial – EAD",
        descricao: "Tipo: Curso Superior de Tecnologia na Modalidade à Distância. Eixo: Gestão e Negócios. Duração: 6 semestres. Forma gestores para áreas administrativas e estratégicas, com foco em finanças, marketing e recursos humanos em formato EAD."
    },
    LOG: {
        nome: "Logística",
        descricao: "Tipo: Curso Superior de Tecnologia - Presencial. Eixo: Gestão e Negócios. Duração: 6 semestres. Estuda o planejamento, implementação e controle de fluxos de mercadorias, transportes e cadeia de suprimentos."
    },
    LOGAMS: {
        nome: "Logística – AMS",
        descricao: "Tipo: Articulação da Formação Profissional Média e Superior (AMS). Eixo: Gestão e Negócios. Duração: 3 semestres. Curso articulado que prepara profissionais para atuar com transporte, armazenagem e distribuição de produtos."
    },
    MA: {
        nome: "Manufatura Avançada",
        descricao: "Tipo: Curso Superior de Tecnologia - Presencial. Eixo: Controle e Processos Industriais. Duração: 6 semestres. Prepara profissionais para atuar com tecnologias modernas de produção, como Indústria 4.0, automação e impressão 3D."
    },
    MAE: {
        nome: "Manutenção de Aeronaves",
        descricao: "Tipo: Curso Superior de Tecnologia - Presencial. Eixo: Controle e Processos Industriais. Duração: 6 semestres. Capacita técnicos e engenheiros para manutenção, inspeção e operação de aeronaves, atendendo normas nacionais e internacionais."
    },
    POL: {
        nome: "Polímeros",
        descricao: "Tipo: Curso Superior de Tecnologia - Presencial. Eixo: Produção Industrial. Duração: 6 semestres. Envolve o estudo, produção e processamento de plásticos e borrachas, focando em inovação de materiais e sustentabilidade."
    },
    PM: {
        nome: "Processos Metalúrgicos",
        descricao: "Tipo: Curso Superior de Tecnologia - Presencial. Eixo: Controle e Processos Industriais. Duração: 6 semestres. Forma profissionais para atuar com tratamento, fundição e conformação de metais, integrando tecnologia e gestão industrial."
    },
    PRM: {
        nome: "Projetos Mecânicos",
        descricao: "Tipo: Curso Superior de Tecnologia - Presencial. Eixo: Produção Industrial. Duração: 6 semestres. Foca no desenvolvimento de projetos e sistemas mecânicos, utilizando ferramentas de CAD, prototipagem e automação."
    },
    SB: {
        nome: "Sistemas Biomédicos",
        descricao: "Tipo: Curso Superior de Tecnologia - Presencial. Eixo: Ambiente e Saúde. Duração: 6 semestres. Prepara profissionais para trabalhar com equipamentos médicos, manutenção e suporte tecnológico em hospitais e clínicas."
    }
};

// Sua função atualizada para exibir as descrições
function abrirCurso() {
    const select = document.getElementById("cursoSelect");
    const curso = select.value;

    if (curso !== "") {
        const confirmar = confirm(`Deseja abrir informações sobre o curso: ${select.options[select.selectedIndex].text}?`);
        if (confirmar) {
            const info = cursosInfo[curso]; // pega as informações do curso no objeto
            const novaJanela = window.open("", "_blank", "width=600,height=300");
            novaJanela.document.write(`
                <html>
                    <head>
                        <title>${info.nome}</title>
                        <style>
                            body { 
                                font-family: Arial; 
                                background-color: #f3e5f5; 
                                color: #4a148c; 
                                padding: 20px; 
                            }
                            h2 { color: #6a1b9a; }
                        </style>
                    </head>
                    <body>
                        <h2>${info.nome}</h2>
                        <p>${info.descricao}</p>
                    </body>
                </html>
            `);
        }
    }
}
