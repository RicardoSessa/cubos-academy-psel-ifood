function solucao(produtos) {
	
    let somaTotal = 0;
    let somaTotalTop = 0;
    
    for(let i = 0; i < produtos.length; i++ ) {
        let precoAtual = produtos[i].preco
        if(precoAtual >= 10000){
            somaTotalTop += precoAtual;
        }
        somaTotal += precoAtual;
    }
    
    let resultado = {}
    resultado.totalTop = somaTotalTop;
    resultado.percentual = somaTotalTop/somaTotal;
    
    console.log(resultado);
    
}