//ARRAY são denominados com [] 
let avgTemp = []


avgTemp[0] = 30.4; //Janeiro
avgTemp[1] = 32.5; //Fevereiro
avgTemp[2] = 31.2; //Março
avgTemp[3] = 28.4; //Abril
avgTemp[4] = 25.4; //Maio

// Pegar o ARRAY completo
console.log(avgTemp);

// Pegar por mês separados 
console.log(avgTemp[2]); // Março

// Saber Quantos temos 
console.log(avgTemp.length);

// Podemos comerçar ja com valores
let diaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"];
// Com isso domingo é 0 e por ai sabado é 7

// Mostra Todos com o uso do FOR
for (let i = 0; i < diaSemana.length; i++) {
    console.log(diaSemana[i]);
}
// Fibonacci soma dos anteriores e o valor do posterior

let fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;
fibonacci[2] = 1;

for (let i = 3; i < 20; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
console.log(fibonacci);
// o valor i - 1 para pegar seu anterio
// valor de i - 2 para pegar seu ante-penultimo


// Mostrando todos os fibonacci ate 20

for (let i = 0; i < fibonacci.length; i++) {
    console.log(fibonacci[i]);
}

//Adicionando numeros a ARRAY
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Forma01
numeros[10] = 10;
console.log(numeros[10]);
// como eu sei o final so acresentar a ultima possição

//Forma02
numeros[numeros.length] = 11;
console.log(numeros[11]);
//Vai acresentar na ultima possição do ARRAY


//Forma03
numeros.push(12);
numeros.push(13);
numeros.push(14);
console.log(numeros[14]);
//Vai acresentar na ultima possição do ARRAY

// Adicionar antes de 0
numeros.unshift(-1);
numeros.unshift(-2);
numeros.unshift(-3);
numeros.unshift(-4);
console.log(numeros[0]);
// -4 se torna a posição 0 e impurra todos os outros na seguencia 

//Subistituir uma possição existente ex:
numeros[0] = 0;
//Ele Sobreescreve o valor antigo 
console.log(numeros[0]);
console.log(numeros);
//Remover o Ultimo Elemento 
let qtd = numeros.length;
numeros.pop();
numeros.pop();
numeros.pop();
numeros.pop();
numeros.pop();
numeros.pop();

//Remover do inicio 
numeros.shift();
numeros.shift();
numeros.shift();
numeros.shift();

console.log(numeros);
