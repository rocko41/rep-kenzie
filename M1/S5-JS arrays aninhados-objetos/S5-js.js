// let frutas = [
//     ['laranja', 'banana'],
//     ['limão', 'tangerina']
// ]
// frutas[0][1] = 'abacaxi'
// console.table(frutas)

// for(let i=0;i<frutas.length;i++){
//     for(let j=0;j<frutas[i].length;j++){
//         if(frutas[i][j]=='tangerina'){
//             frutas[i][j]='Tangerina'
//         }
//     }
// }
// let maisFrutas= ['pitaya','melancia']
// frutas.push(maisFrutas)
// frutas[0].push('morango')
// frutas[1].push('maçã')
// frutas[2].push('abacate')
// console.table(frutas)


//S5-02 | 💪 Atividade - Javascript: Arrays aninhados

// let caixaDeSuprimentos = []

// let higiene = ['sabonetes', 'toalhas', 'escovas', 'pasta de dente', 'papel higienico']
// let alimentacao = ['pão', 'salsichas', 'refrigerante', 'chocolate', 'marshmello']
// let cuidadosMedicos = ['band-aids', 'esparadrapo', 'antiseptico', 'dipirona', 'gaze']
// let lazer = ['bola', 'vara de pesca', 'board games', 'frisbee', 'baralho']
// let ferramentas = ['lanterna','martelo','alicate','isqueiro','tesoura']

// caixaDeSuprimentos.push(higiene)
// caixaDeSuprimentos.push(alimentacao)
// caixaDeSuprimentos.push(cuidadosMedicos)
// caixaDeSuprimentos.push(lazer)
// caixaDeSuprimentos.push(ferramentas)
// //caixaDeSuprimentos.push(ferramentas)

// function tudoPronto(caixa) {
//     let auxiliar="Podemos ir acampar."
//     for (let i = 0; i < caixa.length; i++) {      
//             if (caixa[i].length < 5) {
//                 auxiliar='Precisamos de mais itens desta seção'
//             }
//             else if (caixa[i].length > 5) {
//                 auxiliar='Tem itens demais, não precisamos de tantos'
//             }
       
//     }
//     if (caixa.length < 5) {
//         auxiliar='Algum amigo ainda não retornou com os itens.'
//     }
//     else if (caixa.length > 5) {
//         auxiliar='Acho que temos um intruso.'
//     }
//     return auxiliar
// }

// console.table(caixaDeSuprimentos)
// console.log(tudoPronto(caixaDeSuprimentos));


//S5-03 | 💪 Atividade - Lista Javascript: Praticando

//01

// function negativos(numeros){
//     let contador=0
//     for(let i=0;i<numeros.length;i++){
//         if(numeros[i]<0){
//             contador ++
//         }
//     }
//     return contador
// }


//02

// function somaNegativos(array){

//     let soma=0
//     for(let i=0;i<array.length;i++){
//         if(array[i]<0){

//             soma += array[i]
//         }
//     }
//     return soma
// }


//03

// function retornoPares(numero){
//     let pares=[]
//     for(let i=0;i<=numero;i++){
//         if(i %2 ==0 && i > 0){
//             pares.push(i)
//         }
//     }
//     return pares
// }


//04

// function arrayNegativo(array){
//     let negativos=[]

//     for(let i=0;i<array.length;i++){
//         if(array[i]<0){
//             negativos.push(array[i])
//         }
//     }
//     return negativos
// }


//05

// function arrayTrueOrFalse (array){
//        let soma=0
//     for(let i=0;i<array.length;i++){
//         soma += array[i]
//     }
//     if(soma>array.length){
//         return true
//     }
//     else{
//         return false
//     }
// }


//06

// function maisCinco(array){
//     let cinco=[]
//     for(let i=0;i<array.length;i++){
//         cinco.push(array[i]+5)
//     }
//     return cinco
// }


//07

// function mediaArray(array){
//     let media=[]
//     let soma=0
//     for(let i=0;i<array.length;i++){
//     soma += array[i]
//     }
//     let mediaNumero=soma/array.length
//     console.log(mediaNumero);
//     for(let i=0;i<array.length;i++){
//         if(array[i]>mediaNumero){
//             media.push(array[i])
//         }
//     }
//     return media
// }

//S5-06 | 💪 Atividade - Javascript: Exercitando Funções e Arrays

// let garden = [
//     [0,0,0,'G'],
//     [0,0,'G',0],
//     [0,'G',0,0],
//     ['G',0,0,0]
//     ]

//     function trimTheGrass(arr){
//         for(let i=0;i<garden.length;i++){
//             for(let j=0;j<garden[i].length;j++){
//             if(garden[i][j]=='G'){
//                 garden[i][j]=0
//             }
//             if(garden[i][j]!=0){
//                 return'Tarefa inacabada'
//             }
//         }
//         return 'Tarefa concluida.'
//     }
// }
//     console.log(garden);

