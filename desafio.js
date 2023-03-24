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

    
      
      
console.log(`Bem vindo ao Black Jack!!!`)

// DECLARANDO VARIÁVEIS 
   let cartasUser = []
   let cartasPc = []
   let textoCartasUser = ``
   let textoCartasPc = ``
   let pontuacaoUser = 0
   let pontuacaoPc = 0
   
   let blackJack = confirm(`Bem vindo! Deseja iniciar?`)

   // COMEÇANDO O JOGO 
      if (blackJack) {           
        
         
         cartasUser.push(comprarCarta())
         cartasUser.push(comprarCarta())
         cartasPc.push(comprarCarta())
         cartasPc.push(comprarCarta())

         //CONDIÇÃO CASO VENHA DOIS ASES 
         if (((cartasUser[0].valor === 11) && (cartasUser[1].valor === 11)) || ((cartasPc[0].valor === 11 && cartasPc.valor[1] === 11))){
      
            confirm(`DEU DOIS ASES. \n Inicie novamente`)
                 

      }
      //PONTUAÇÃO DAS CARTAS
      


      for (let i = 0; i < cartasUser.length; i++){
         textoCartasUser += cartasUser[i].texto + ` `;
         pontuacaoUser += cartasUser[i].valor
      }
      for (let j = 0; j < cartasPc.length; j++){
         textoCartasPc += cartasPc[j].texto + ``;
         pontuacaoPc += cartasPc[j].valor
      }

      console.log(`Cartas do usuário: ${textoCartasUser} \n
                  Pontuação: ${pontuacaoUser}`)
      console.log(`Primeira carta do pc: ${cartasPc[0].texto} \n
      Pontuação: ${cartasPc[0].valor}`)
       // INDO PARA SEGUNDA COMPRA DE CARTAS
      
       let segundaRodada = confirm(`Suas cartas: ${textoCartasUser} \n
       A carta do PC: ${cartasPc[0].texto} \n Continue para revelar mais uma carta do PC`)

       let continuar = true 

       while (continuar) {
         if (pontuacaoUser >= 21){
            break 
         }
         if (segundaRodada === true){
            cartasUser.push(comprarCarta())
            cartasPc.push(comprarCarta())

            pontuacaoUser = 0
            textoCartasUser = ``
            pontuacaoPc = 0
            textoCartasPc = ``

               for (let i = 0; i < cartasUser.length; i++){
                  textoCartasUser += cartasUser[i].texto + ` `;
                  pontuacaoUser += cartasUser[i].valor
               }
               for (let j = 0; j < cartasPc.length; j++){
                  textoCartasPc += cartasPc[j].texto + ``;
                  pontuacaoPc += cartasPc[j].valor
               }

         } else {
            continuar === false 
         }
         // LÓGICA PARA OS RESULTADOS VÁLIDOS
         
         if ((pontuacaoPc > pontuacaoUser) && (pontuacaoPc <= 21)){
            console.log(`Suas Cartas: ${textoCartasUser} \n
            Sua pontuação: ${pontuacaoUser}`)
            console.log(`Cartas do PC: ${textoCartasPc} \n
            Pontuação do PC: ${pontuacaoPc}`)

            alert(`Sua Pontuação: ${pontuacaoUser} \n
            Pontuação do PC: ${pontuacaoPc} \n
            O PC GANHOU. QUEM SABE DA PRÓXIMA?`)

            break
         } else if ((pontuacaoUser > pontuacaoPc) && (pontuacaoUser <= 21)) {
            console.log(`Suas Cartas: ${textoCartasUser} \n
            Sua pontuação: ${pontuacaoUser}`)
            console.log(`Cartas do PC: ${textoCartasPc} \n
            Pontuação do PC: ${pontuacaoPc}`)

            alert(`Sua Pontuação: ${pontuacaoUser} \n
            Pontuação do PC: ${pontuacaoPc} \n
            PARABÉNS. VOCÊ GANHOU!! VAMOS DE NOVO?`)
            
            break
         } else if (pontuacaoPc === pontuacaoUser){
            console.log(`Suas Cartas: ${textoCartasUser} \n
            Sua pontuação: ${pontuacaoUser}`)
            console.log(`Cartas do PC: ${textoCartasPc} \n
            Pontuação do PC: ${pontuacaoPc}`)

            alert(`Sua Pontuação: ${pontuacaoUser} \n
            Pontuação do PC: ${pontuacaoPc} \n
            EMPATOU!!! JOGUE DE NOVO PARA DESEMPATAR.`)
            
            break
         }
         //LOGICA PARA OS RESULTADOS ESTOURADOS 
         if ((pontuacaoPc > pontuacaoUser) && (pontuacaoPc > 21)){
            console.log(`Suas Cartas: ${textoCartasUser} \n
            Sua pontuação: ${pontuacaoUser}`)
            console.log(`Cartas do PC: ${textoCartasPc} \n
            Pontuação do PC: ${pontuacaoPc}`)

            alert(`Sua Pontuação: ${pontuacaoUser} \n
            Pontuação do PC: ${pontuacaoPc} \n
            A PONTUAÇÃO DO PC ESTOUROU. VOCÊ VENCEU.`)

            break
         } else if ((pontuacaoUser > pontuacaoPc) && (pontuacaoUser > 21)) {
            console.log(`Suas Cartas: ${textoCartasUser} \n
            Sua pontuação: ${pontuacaoUser}`)
            console.log(`Cartas do PC: ${textoCartasPc} \n
            Pontuação do PC: ${pontuacaoPc}`)

            alert(`Sua Pontuação: ${pontuacaoUser} \n
            Pontuação do PC: ${pontuacaoPc} \n
            SUA PONTUAÇÃO ESTOUROU. VOCE PERDEU. `)

            break
       } else if ((pontuacaoPc === pontuacaoUser) && (pontuacaoPc > 21)){
         console.log(`Suas Cartas: ${textoCartasUser} \n
         Sua pontuação: ${pontuacaoUser}`)
         console.log(`Cartas do PC: ${textoCartasPc} \n
         Pontuação do PC: ${pontuacaoPc}`)

         alert(`Sua Pontuação: ${pontuacaoUser} \n
         Pontuação do PC: ${pontuacaoPc} \n
         EMPATARAM NO ESTOURO!!! AMBOS PERDEM? JOGUE DE NOVO PARA DESEMPATAR.`)
         
         break
      }
    } if (continuar === false){
      alert(`GAME OVER. ATUALIZE PARA JOGAR.`)
      

      
    }

   }
