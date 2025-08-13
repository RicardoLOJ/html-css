// seletor de módulos

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


// autoplay:

  document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', () => {
      const audio = document.getElementById('som');
      if (audio.paused) {
        audio.play();
      }
    }, { once: true });
  });


// menu burguer

const menuBurguer = document.querySelector('#menu-burguer'); // ícone burguer
const botoes = document.querySelectorAll('.modulos-nav > button'); // módulos

function atualizarMenu() {
    const largura = window.innerWidth;

    if (largura > 600) {
        // Desktop: módulos sempre visíveis, burguer oculto
        botoes.forEach(btn => btn.style.display = 'inline-block');
        menuBurguer.style.display = 'none';
    } else {
        // Mobile: módulos ocultos por padrão, burguer visível
        botoes.forEach(btn => btn.style.display = 'none');
        menuBurguer.style.display = 'block';
    }
}

function clickMenu() {
    // Alterna a visibilidade dos módulos no mobile
    botoes.forEach(btn => {
        btn.style.display = (btn.style.display === 'none' || btn.style.display === '') 
            ? 'block' 
            : 'none';
    });
}

// Evento de clique no burguer
menuBurguer.addEventListener('click', clickMenu);

// Evento de redimensionamento da tela
window.addEventListener('resize', atualizarMenu);

// Chama ao carregar a página
atualizarMenu();


