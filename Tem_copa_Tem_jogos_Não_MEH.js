function solucao(ano) {
    if ((ano - 1930)%4 == 0) {
      console.log("COPA")
    }
    else if (( ano - 1896)%4 == 0) {
      console.log("JOGOS")
    }
    else {
      console.log("MEH")
    }
}