/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    console.log(`Bem vindo ao jogo de BlackJack!!!`)

    let jogo = confirm("Iniciar nova rodada?")

    // COMPRANDO CARTAS

    if(jogo){
      let primeiraCartaUser = comprarCarta()
      let segundaCartaUser = comprarCarta()
      let primeiraCartaPc = comprarCarta()
      let segundaCartaPc = comprarCarta()

      // CALCULANDO PONTOS
      let pontosUser = primeiraCartaUser.valor + segundaCartaUser.valor
      let pontosPc = primeiraCartaPc.valor + segundaCartaPc.valor

      // IMPRIMINDO CARTAS E VALOR EM STRING
      console.log(`Usuário - cartas: ${primeiraCartaUser.texto} + ${segundaCartaUser.texto}
      \n Pontuação total: ${pontosUser}`)
      console.log(`Computador - Cartas: ${primeiraCartaPc.texto} + ${segundaCartaPc.texto} \n
      Pontuação: ${pontosPc}`)

      // LÓGICA PARA OBTENÇÃO DOS RESULTADOS VÁLIDOS
         if ((pontosUser > pontosPc) && (pontosUser <= 21)){
            console.log(`Você Venceu! Parabéns.`)
         } else if (pontosPc === pontosUser) {
            console.log(`EMPATOU!`)
         } else if ((pontosPc > pontosUser) && (pontosPc <= 21)){
            console.log(`O PC Venceu. Quem sabe da próxima?`)
         }
      
      // LÓGICA PARA OBTENÇÃO DE RESULTADOS ESTOURADOS 
         if ((pontosUser > pontosPc) && (pontosUser > 21)){
            console.log(`Sua Pontuação estourou. Vitória do PC.`)
         } else if ((pontosPc > pontosUser) && (pontosPc > 21)){
            console.log(`A pontuação do PC estourou. Parabéns, você venceu!`)
         } else if ((pontosPc > 21) && (pontosUser > 21)){
            console.log(`Estouro duplo.`)
         }
      
      // Último senão, para acabar e começar uma nova partida 

    } else {
      console.log(`Fim do jogo. Caso queira jogar outra partida, recarregue a página do navegador.`)
    }

   