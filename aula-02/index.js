//Condicionais
/*
var numero = 2;

if (numero > 0){
    console.log(`O quadrado do número é ${numero * numero}`);
}

var nome = 'Carlos';

if (nome === 'Leo') {
    console.log("Legal esse é o seu nome mesmo!");
} else {
    console.log('Que pena, seu nome não é Leo');
}

//Ifs aninhados
if (nome === 'Leo') {
    console.log("Legal esse é o seu nome mesmo!");
} else if (nome === 'Carlos'){
    console.log("Tudo bem! Você também server.");
} else {
    console.log('Que pena, seu nome não é Leo ou Carlos.');
}
*/

//usando switch
var nome = 'Zeus';

switch (nome){
    case 'Leo':
        console.log("Legal esse é o seu nome mesmo!");
        break;
    case 'Carlos':
        console.log("Tudo bem! Você também server.");
        break;
    default:
        console.log('Que pena, seu nome não é Leo ou Carlos.');
        break;
}