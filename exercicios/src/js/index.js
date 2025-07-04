const botoesModulos = document.querySelectorAll(".modulo-btn");

botoesModulos.forEach(botao => {
  botao.addEventListener("click", () => {
    // Desativa botão atual
    const botaoAtivo = document.querySelector(".modulo-btn.ativo");
    if (botaoAtivo) botaoAtivo.classList.remove("ativo");
    botao.classList.add("ativo");

    // Esconde conteúdo atual
    const aulaAtiva = document.querySelector(".Aulas-modulo.ativo");
    if (aulaAtiva) aulaAtiva.classList.remove("ativo");

    // Exibe novo conteúdo
    const idModulo = botao.id; // exemplo: "modulo3"
    const idConteudo = "Aulas-" + idModulo; // resultado: "Aulas-modulo3"
    const novaAula = document.getElementById(idConteudo);
    if (novaAula) novaAula.classList.add("ativo");
  });
});
