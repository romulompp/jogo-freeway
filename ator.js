//variavel ator

let xAtor = 100;
let yAtor = 366;
let velocidadeAtor = 3;
let comprimentoAtor = 30;
let alturaAtor = 30;

//variavel de colisão

let colisao = false;

// variavel referente aos pontos do jogador

let meusPontos = 0;

//apresenta o ator na tela

function mostraAtor(){
  image(imagemAtor, xAtor,yAtor, comprimentoAtor, alturaAtor);
}

//movimenta o ator na tela

function movimentaAtor(){
 
  
    if(keyIsDown(UP_ARROW)){
       yAtor -= velocidadeAtor;
     }
    if(keyIsDown(DOWN_ARROW)){
      if(limiteDoAtor()){
       yAtor += velocidadeAtor;
       }
    }
  if (keyIsDown(LEFT_ARROW)){
       xAtor -= velocidadeAtor;
     }
  if (keyIsDown(RIGHT_ARROW)){
       xAtor += velocidadeAtor;
     
  }
  
}

function verificaColisao(){
  for (i = 0 ; i < imagemCarros.length; i++){
    //função utilizada para colisão do circulo com retangulo
    colisao = collideRectCircle(xCarros[i],yCarros[i],comprimentoCarro,alturaCarro,xAtor,yAtor,10);
    if (colisao){
      voltaPosicaoOriginal();
      somDaColisao.play();
      if (pontosMaiorQueZero()){
        meusPontos -= 1;        
      }
      // print("colidiu");
    }
  } 
}

function voltaPosicaoOriginal(){
  yAtor = 366;
  xAtor = 100;
}

function exibePontos(){
  textAlign(CENTER);
  textSize(25)
  fill(color(255,240,60));
  text(meusPontos, width/5, 25);
}

function marcaPontos(){
  if(yAtor < 0){
    meusPontos += 1;
    voltaPosicaoOriginal();
    somDoPonto.play();
  }

}

function pontosMaiorQueZero(){
 return meusPontos > 0;
}

function limiteDoAtor(){
 return yAtor < 366;
}

