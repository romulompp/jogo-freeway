function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  for(i = 0 ; i < imagemCarros.length ; i++){
    mostraCarro(imagemCarros[i],xCarros[i],yCarros[i],comprimentoCarro,alturaCarro);  
  }
  movimentaCarro();
  movimentaAtor();
  posicaoOriginalCarro();
  verificaColisao();
  exibePontos();
  marcaPontos();
  
}

