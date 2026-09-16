const projetos = [
    {
        titulo: "IA para Finanças Pessoais",
        descricao: "Ebook com dicas e estratégias para utilizar a inteligência artificial na gestão das finanças pessoais.",
        link: "financaspessoais.pdf"
    },
    {
        titulo: "Apostila de Conhecimentos Bancários",
        descricao: "Material completo com foco no concurso da Caixa Econômica Federal.",
        link: "Apostila_CB.pdf"
    },
    
];

const container = document.getElementById('container-projetos');

projetos.forEach(projeto => {
    const card = `
        <article class="card">
            <h3>${projeto.titulo}</h3>
            <p>${projeto.descricao}</p>
            <a href="${projeto.link}" class="botao">Ver Detalhes</a>
        </article>
    `;
    container.innerHTML += card;
});