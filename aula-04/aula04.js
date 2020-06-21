//Funções
//Definindo ou declarando funções
//Função que não armazena valores
/*
function olaGama(nome){
    console.log('Olá Gama! O seu nome é ' + nome);
}

//Chamando uma função
olaGama('Léo');

//Função que armazena um resultado
function soma(operadorA, operadorB){
    resultado = operadorA + operadorB;
    return resultado;
}
//armazenando o resultado de uma função a uma variável
var resultadoDaSoma = soma(1, 2);

alert(`O resultado da soma é ${resultadoDaSoma}`);

//Chamando uma função a partir de uma mensagem
console.log(soma(2, 3));
*/
//Isso funciona apenas quando a definição da função usa a sintaxe function funcNome(){ }).
//O código a seguir não vai funcionar.
console.log(calcQuadrado(5));
var calcQuadrado = function (n) {
  return n * n;
}
/*
//Funções aninhadas ou Clousures
var pet = function(nome) {          // A função externa define uma variável "nome"
      var getNome = function() {
        return nome;                // A função interna tem acesso à variável "nome"  da função externa
      }

      return getNome;               // Retorna a função interna, expondo-a assim para escopos externos
    },
    meuPet = pet("Vivie");
    
console.log(meuPet());                            // Retorna "Vivie"

//Outro exemplo de Clousure
function somarQuadrados(a,b) {
    function quadrado(x) {
       return x * x;
    }
    return quadrado(a) + quadrado(b);
 }
 a = somarQuadrados(2,3); // retorna 13
 b = somarQuadrados(3,4); // retorna 25
 c = somarQuadrados(4,5); // retorna 41

 console.log('a = ' + a + ' b = ' + b + ' c = ' + c);
 */