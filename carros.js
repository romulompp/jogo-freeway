//array referente a especificações dos carros

let xCarros = [600,300,370,30,10,0];

let yCarros = [40,150,260,96,320,210];

let velocidadeCarros = [8,4,6,6,8,9];

let comprimentoCarro = 50;

let alturaCarro = 40;


function mostraCarro(img,x,y,c,a){
  image(img,x,y,c,a);
}

function movimentaCarro(){
  
  for (i = 0; i < 6 ; i++){
    if(i < 3 ){
    xCarros[i] -= velocidadeCarros[i];
    }else{
      xCarros[i] += velocidadeCarros[i];
    }
  }      
}

function posicaoOriginalCarro(){
  for(i = 0 ; i < 3; i++){
    if(xCarros[i] < -30){
      xCarros[i] = 600;
    }
  }   
  for(i = 3; i < 6; i++){
   if(xCarros[i] > 630){
    xCarros[i] = 0;
    }
  }
}
  