//console.log("Rocko")
//console.log("Olá, eu sou o Rocko")
//let nome = "Rocko"
//console.log(`Eu sou o ${nome}`)
//let sobrenome = "Starfire"
//console.log(`Olá, eu me chamo ${nome} ${sobrenome}`)
//let idade = 32

//console.log(`Olá, meu primeiro nome é ${nome}, meu segundo nome é ${sobrenome}, e eu tenho ${idade} anos.`)

//let preco1 = 15
//let preco2 = 25
//let precoTotal = (preco1 + preco2)
//console.log(`Comprei uma xicara por ${preco1} reais, e dois copos por ${preco2} reais.No total, gastei ${precoTotal} reais.`)


// function textReturn(text){
//     return text
// }
// console.log(textReturn('olá, estou sendo retornado pela funcao'))

// //s4-05 ex:1
// function somarDoisValores (valor1, valor2){
//     return valor1 + valor2
// }
// console.log(somarDoisValores(15, 876))

// //s4-05 ex:2
// function valorTipo (valor){
// return typeof (valor) 
// }

// console.log(valorTipo(true))


//s4-05 ex: 3 n sei colocar regra de só numero

// function somarNotas (nota1, nota2, nota3, nota4){
//     console.log(typeof nota1)
//     if (typeof nota1 != "number"|| typeof nota2 != "number"||typeof nota3 != "number"||typeof nota4 != "number"){
//     return 'O campo só pode receber números'
//     }
// else{    
//     return nota1+nota2+nota3+nota4}
// }
// console.log(somarNotas (5,6,7,8))

//s4-06 ex: 1

// function soma(nota1, nota2, nota3, nota4){
//     return nota1+nota2+nota3+nota4
//   }
//   let somaNotas=soma(6,8,9,7)
  

//   function media(total){
   
//     return total/4
// }

//   //console.log(media(soma(6,8,9,7)))

// function mostrarNaTela (){
//     console.log("oi")
// }
// mostrarNaTela()
// mostrarNaTela()
// mostrarNaTela()

//s4-06 ex:2

// function convertToCelsius(tipo, temp){
//     if (tipo == "kelvin"){
//         return temp - 273
//     }
//     if (tipo == "fahrenheit"){
//         return +((temp-32)/1.8).toFixed(2)
//     }
// }
// function convertToFahrenheit(tipo, temp){
//     if (tipo == "celsius"){
//         return temp * 1.8 +32
//     }
//     if (tipo == "kelvin"){
//         return (temp-273) * 1.8 + 32
//     }
// }
// function convertToKelvin(tipo, temp){
//     if (tipo == "celsius"){
//         return temp+273
//     }
//     if (tipo == "fahrenheit"){
//         return +((temp-32)*5/9 + 273).toFixed (2)
//     }
// }

// s4-09 

// let minhaPrimeiraLista = [
//     "Matemática",
//     "Química",
//     "Geografia",
//     "Português",
//     "Física",
//   ];
//   console.log(minhaPrimeiraLista[2])
//   minhaPrimeiraLista[2] = 'História'
//   console.log(minhaPrimeiraLista)

// s4-10 ex:01

// let nomeDosCompetidores = ["Maria", "Heric", "Roberta", "Rafael", "Lucas"]
// console.log(nomeDosCompetidores [0]);
// console.log(nomeDosCompetidores[4]);
// console.log(nomeDosCompetidores.length);
// let posicoesDoPodio = [1,2,3,4,5]

// console.log(nomeDosCompetidores[0],posicoesDoPodio[0]);
// console.log(nomeDosCompetidores[1], posicoesDoPodio[1]);
// console.log(nomeDosCompetidores[2], posicoesDoPodio[2]);
// console.log(nomeDosCompetidores[3], posicoesDoPodio[3]);
// console.log(nomeDosCompetidores[4], posicoesDoPodio[4]);

//s4-11 ex:01 (nao sei retornar falso se não tiver)

// const tiposDiversos =[1.5,"String",false,10]
// const tiposDiversos2 =[true,"String","boolen",'10']
  
// function qualTipoDeElemento(tiposDiversos, tiposDiversos2)
//     {if (tiposDiversos && tiposDiversos2,typeof "number")
//       return true}
     
// console.log(qualTipoDeElemento(tiposDiversos))
// console.log(qualTipoDeElemento(tiposDiversos2))


//s4-11 ex:02 consegui mas sem usar a formula do exemplo

// let passageiros=["Rocko", "Ian", "Gaby"]

// let ganhador=Math.floor(Math.random() * passageiros.length);
// console.log (passageiros[ganhador])

// s4-14 ex:01

// function calculaIdade(anoNascimento){
//     return 2022 - anoNascimento
// }
// console.log(calculaIdade(1996));

// //s4-14 ex:02

// function calculaDiferencaAno(anoIni, anoFin){
//     let resultado = (anoIni - anoFin)
//     if(resultado <0)
//     return "A diferença é de " +(resultado * -1)+ " anos";
//    if(resultado > 0)
//    return "A diferença é de "+(resultado)+" anos";
// }
// console.log(calculaDiferencaAno(1200, 1900));

// //s4-14 ex:03

// function valorAPagar (macas){    
//     if (macas <= 11)
//     return 1.30 * macas;
//     if (macas >=12)
//     return 1 * macas;
// }

// console.log(valorAPagar(12));

// //s4-14 ex:04

// function calculaValorSalario(salario, vendas){
//     if (vendas <= 1500)
//     return vendas * 0.03 + salario;
//     if (vendas > 1500)
//     return vendas * 0.05 + salario;
// }

// console.log(calculaValorSalario(1200, 1500));

// s4-14 ex:05 - não sei referenciar o array na função

// let notas = [5, 7, 10, 3, 9, 5, 5, 2, 1, 9, 8, 3, 4, 6, 7, 6, 7, 8, 10, 7]

// function notaDaPosicao(lista, posicao){
    
//     return lista [posicao]
// }

// console.log(notaDaPosicao(notas, 0));

// // s4-14 ex:06

// function reprovadoOuAprovado(lista, posicao){
//     if(lista[posicao]>=7)
//     return "Aprovado";
//     if(lista[posicao]<7)
//     return "Reprovado"
// }
// console.log(reprovadoOuAprovado(notas,2));

// // s4-14 ex:07

// let listaNotas = []

// function adicionaNota(lista, nota){
// if(nota >0 && nota<=10)
// return lista.push(nota);
// if (nota <=0 || nota>10)
//     return "nota inválida";
//}

//s4-14 ex:08
// let notas = [5, 7, 10, 3, 9, 5, 5, 2, 1, 9, 8, 3, 4, 6, 7, 6, 7, 8, 10, 7]

// function alteraNota(lista,posicao,valor){
//     if(valor>0 && valor<=10)
//     return (lista[posicao]=valor);
//     if(valor<=0 || valor>10)
//     return "valor inválido"
// }  

//s4-14 ex:09
// let notas = [5, 7, 10, 3, 9, 5, 5, 2, 1, 9, 8, 3, 4, 6, 7, 6, 7, 8, 10, 7]
// function verificaTamanhoLista(lista){
//     return `o tamanho da lista é : ${lista.length}`
//}

//s4-15 ex:01

// let arrayNumeros = [5, 4, 7, 30, 16, 89]

// function encontrarNumerosPares(lista){

//     let numerosPares = []

//     for(let i=0; i<lista.length; i++){
//         let numeroAtual=lista[i]
//         if(numeroAtual % 2 == 0){
//             numerosPares.push(numeroAtual)
//         }
//     }

//     return numerosPares
// }
// let arrayPares = encontrarNumerosPares(arrayNumeros)
// console.log(arrayPares)

// s4-15 ex:02

let numeros = [1, '4', 9, 18]

let total = 0
function somar(lista){
 for(let i=0;i<lista.length;i++){  
total += parseInt(lista [i])}
return total
}
let totalSoma= somar(numeros)
console.log(totalSoma);

function monkeyCount(n) {
    let monkeys = []
    for(let i=1;i<=n;i++){
      monkeys.push(i)
    }
    return monkeys
      }
      console.log(monkeyCount(7))

      const array = 0 ;
function fillArray(n){
  for (let i=0;i<n-1;i++){
    array.push(i)
  }
  return arr
}
console.log(fillArray(6));
