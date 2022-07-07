//adicionando uma constante que seleciona a div container do meu slide e no outro as imagens dentro dele
const container = document.querySelector('.container')
const containerImgs = document.querySelectorAll('.container img')

//adicionando uma constante que seleciona os botões para voltar e avançar do slide
const previousButton = document.querySelector('.previous')
const nextButton = document.querySelector('.next')

//adicionando um contador e dando um valor inicial a ele
let counter = 0
//definindo o tamanho de size de acordo com as imagens dentro do slide
const size = 710

//esse arrow function tem o propósito de fazer o slide passar para a próxima imagem
const carrosel = () => {
//incrementando o contador
  counter++
//essa condicional diz que quando o valor do contador chegar a um número mais que a largura das imagens do slide - 1, o contador voltará a 0, significando que voltará pra a primeira imagem do slide
  if(counter > containerImgs.length - 1) {
    counter = 0
  }
//esse comando faz com que ele modifique o css do container, indo até transform e dando um novo valor ao translateX, que no começo era 0. Esse valor vai ser -contador multiplicado pelo tamanho de size, que fará com que o slide se mova determinados pixels a direita, fazendo com que ele apareça completamente a próxima imagem
  container.style.transform = `translateX(${-counter * size}px)`
}
//faz com que determinado evento aconteça a cada 5000 milissegundos(nesse caso são 5000 milissegundos)
setInterval(()=>{
  carrosel()
}, 5000)

  //adiciona um evento de clique no botão de avançar com o propósito de passar para a outra imagem
  //tudo que acontecerá dentro desse evento só acontecerá a partir de quando acontecer um clique nesse botão
nextButton.addEventListener('click', ()=>{
  //incrementando o contador
  counter++
  //essa condicional diz que quando o valor do contador chegar a um número mais que a quantidade das imagens do slide - 1, o contador voltará a 0, significando que voltará pra a primeira imagem do slide
  if(counter > containerImgs.length - 1){
    counter = 0
  }
  //esse comando faz com que ele modifique o css do container, indo até transform e dando um novo valor ao translateX, que no começo era 0. Esse valor vai ser -contador multiplicado pelo tamanho de size, que fará com que o slide se mova determinados pixels a direita, fazendo com que ele apareça completamente a próxima imagem
  container.style.transform = `translateX(${-counter * size}px)`
})
//adiciona um evento de clique no botão de voltar com o propósito de voltar para a outra imagem
//tudo que acontecerá dentro desse evento só acontecerá a partir de quando acontecer um clique nesse botão
previousButton.addEventListener('click', ()=>{
  //reduzindo o contador
  counter--
  //essa condicional faz com que quando o contador for menor que 0, o contador será igual a quantidade das imagens dentro do container - 1
  if(counter < 0){
    counter = containerImgs.length - 1
  }
  //esse comando faz com que ele modifique o css do container, indo até transform e dando um novo valor ao translateX, que no começo era 0. Esse valor vai ser -contador multiplicado pelo tamanho de size, que fará com que o slide se mova determinados pixels a esquerda(dessa vez é a esquerda porque o contador está reduzindo com o evento de clique), fazendo com que ele apareça completamente a próxima imagem
  container.style.transform = `translateX(${-counter * size}px)`
})