function redirecionarParaID(id) {
    const elemento = document.getElementById(id);

    if (elemento) {
        window.scrollTo({
            top: elemento.offsetTop,
            behavior: 'smooth'
        });
    }
}
// Obtém todos os botões com a classe "botao-redirecionar"
const botoes = document.querySelectorAll('.redirection-button');

// Adiciona um evento de clique a cada botão
botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    // Redireciona para outra página
    window.open('https://delivery.yooga.app/cantub-burger');
  });
});