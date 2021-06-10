function solucao(largura, altura) {
    var largura;
    var altura;
    if (altura > largura){
        console.log("RETRATO");
    }
    else if (altura < largura){ 
        console.log("PAISAGEM");   
    }
    else if (largura === altura){
        console.log("QUADRADA"); 
    }
}