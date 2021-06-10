function solucao(letra, palavras) {
	var contador = 0;
    for (var i = 0; i < palavras.length; i++){
        if(letra != String(palavras[i])[0]){
            contador++;
        }
    }
    console.log(contador)
}