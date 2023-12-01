const anchors = document.querySelectorAll('.anchor');
const contents = document.querySelectorAll('.modalzinho');

anchors.forEach((anchor, index) => {
  const hideButton = anchor.querySelector('.close-button');

  anchor.addEventListener('click', (event) => {
    event.preventDefault();

    if (anchor.classList.contains('on')) {
      anchor.classList.remove('on');
      contents[index].style.display = 'none';
    } else {
      // Remover a classe "active" de todas as âncoras
      anchors.forEach(a => a.classList.remove('on'));

      // Adicionar a classe "active" à âncora clicada
      anchor.classList.add('on');

      // Ocultar todas as divs de conteúdo
      contents.forEach(content => content.style.display = 'none');

      // Exibir a div de conteúdo correspondente à âncora clicada
      contents[index].style.display = 'block';
    }
  });

  hideButton.addEventListener('click', (event) => {
    event.stopPropagation(); // Impedir que o clique no botão propague para a âncora
    anchor.classList.remove('on');
    contents[index].style.display = 'none';
  });
});