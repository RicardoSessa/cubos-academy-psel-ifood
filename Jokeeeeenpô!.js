function solucao(joao, andre) {
    var joao;
    var andre;
   //Perdra ganha de tesoura, mas perde de papel
    if ( joao == "PEDRA" & andre == "TESOURA"  ) {
        console.log("JOAO")
    }
    if ( joao == "PEDRA" & andre == "PAPEL"  ) {
        console.log("ANDRE")
    }
    if ( joao == "PEDRA" & andre == "PEDRA"  ) {
        console.log("EMPATE")
    }
    if ( joao == "PAPEL" & andre == "TESOURA"  ) {
        console.log("ANDRE")
    }
    if ( joao == "PAPEL" & andre == "PAPEL"  ) {
        console.log("EMPATE")
    }
    if ( joao == "PAPEL" & andre == "PEDRA"  ) {
        console.log("JOAO")
    }
     if ( joao == "TESOURA" & andre == "TESOURA"  ) {
        console.log("EMPATE")
    }
     if ( joao == "TESOURA" & andre == "PAPEL"  ) {
        console.log("JOAO")
    }
     if ( joao == "TESOURA" & andre == "PEDRA"  ) {
        console.log("ANDRE")
    }
}