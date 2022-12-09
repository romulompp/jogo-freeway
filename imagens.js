//variavel imagem da estrada
let imagemDaEstrada;

//varivel imagem do ator
let imagemAtor;

//variavel imagem dos carros
let imagemCarros = [];

//sons do jogo

let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemAtor = loadImage("imagens/ator-1.png");
  
  for(i = 0; i < 6; i++){
    imagemCarros[i] = loadImage('imagens/carro-'+i+'.png');
  }

  somDaTrilha = loadSound("sons/trilha.mp3");
  somDaColisao = loadSound("sons/colidiu.mp3");
  somDoPonto = loadSound("sons/pontos.wav");
}