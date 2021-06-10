function solucao(precos) {
    
    let soma = 0;
    let menorValor = precos[0];
    
    for(let i = 0; i < precos.length; i++ ) {
        let precoAtual = precos[i]
        if(precoAtual < menorValor ){
            menorValor = precoAtual
        }
        soma += precoAtual;
    }
    if(precos.length >= 5){
         soma -= menorValor;   
    }
    console.log(soma);
}