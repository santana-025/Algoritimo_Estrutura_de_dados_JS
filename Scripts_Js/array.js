//ARRAY são denominados com [] 
let carros = new Array();

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
// Com isso domingo é 0 e sabado é 7

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

//Remoção Personalizada
numeros.splice(3, 3);
console.log(numeros);
//Apartir do 3 remove 3items

//Adição Personalizada
numeros.splice(3, 0, 4, 5, 6, 10, 11, 12, 123);
console.log(numeros);
//Apartir do 3 remove 0 items e adiciona quantos quiser

//Array Bidimenssional
// Basicamente 2 Array dentro de apenas 1
let semanas = [];

let semana01 = [31, 25.5, 40, 66, 41, 88, 12];
let semana02 = [13, 28.5, 50, 69, 14, 48, 52];

semanas[0] = semana01;
semanas[1] = semana02;

// Para Acessar os ARRAYS
console.log(semanas[1][6]);
// semana2 item 6
console.log(semanas[0][4]);
// semana1 item 4

//Array multidimenssional
// Basicamente quantos Array for nescessario dentro de apenas 1
let mes = [];
let primeiras_semanas = [];
let ultimas_semanas = [];

let sem01 = [31, 25.5, 40, 66, 41, 88, 12];
let sem02 = [13, 28.5, 50, 69, 14, 48, 52];
let sem03 = [21, 22, 23, 24, 25, 26, 27];
let sem04 = [223, 244, 255, 214, 288, 246, 2667];

primeiras_semanas = [sem01, sem02];
ultimas_semanas = [sem03, sem04];

mes[0] = primeiras_semanas;
mes[1] = ultimas_semanas;
console.log(mes[0][1][4]);

// o array mes ele tem posição0 as primeiras semanas, e dentro dela temos a sem01 e sem02 respectivas as 2 primeiras semanas do mes, ja na mes posição 1 tem as ultimas semanas que dentro tem a sem03 e sem04, bastas seguir o caminho da arvore para pegar qualquer valor individual.

for (let x = 0; x < mes.length; x++) {
    for (let y = 0; y < mes[x].length; y++) {
        for (let z = 0; z < mes[x][y].length; z++) {
            console.log(mes[x][y][z]);
        }
    }
}
// Percorrendo todo o array !!

let animals = ["Macaco", "Aguia", "Avestruz", "Leão", "Cão"];

// Ver se tem algum animal no array 
console.log(animals.indexOf("Cão"));
// Se retornar -1 (Não existe esse animal)
// Se retornar  1 (vai passar a possição do animal no array)
// Para retornar false ou true >> console.log(animals.indexOf("Cão")> -1);


//Criar uma array personalizada com os animais com a letra e
const animaiscome =         // Animais.filter somente animais com a letra e
    animals.filter(animals => animals.indexOf('e') > -1)
console.log(animaiscome);

// Nova forma de saber se tem ou não no array
console.log(animals.includes('Cão')); // Retorna Verdaeiro ou Falso

// Transformando a array em strings 
console.log(animals.toString());

// Separando a array em por simbolos ou espaços
console.log(animals.join("*")); //Basta inserir o simbolo ou espaço

//Preencher uma array vazia com alguma coisa especifica
const arrayvazia = new Array(9); // Array vazia com tamanho 10 espaços
//Adicionando a essa array 9 elementos especificos
arrayvazia.fill("Aguardando...") // Adiciona nos 9 espaços
console.log(arrayvazia); // Não preenchido pra depois colocar o que quiser nela

// Copiar Array da forma correta 
animals2 = Array.from(animals); // Copia a 1 e voçê pode mudar quando quiser a segunda que não interfere na primeira array
animals2[1] = "Gato";

console.log(animals); // Continua original
console.log(animals2); // Personalizada

// Tenho uma lista de pessoas
//Metodos para não ter repetidas

// SET //

// Forma de Adicionar o metodo set
const pessoas = new Set([]);

// o push subistituido pelo add
pessoas.add("jorge")
pessoas.add("Luiz")

// Não aceita pessoas com o mesmo nome so vai uma 
pessoas.add("Thialy")
pessoas.add("Thialy")
pessoas.add("Thialy")
pessoas.add("Thialy")
pessoas.add("Miranda")

console.log(pessoas);

// Remove um especifico 
pessoas.delete("Miranda")


// Posso transformar ele em array depois
const paraarray = Array.from(pessoas);

console.log(paraarray);
//Porem com objetos não vai muito bem mas temos usamos >>

/*

const list_user = {
    nome: "Jorge", username: "Jhonn" 
    nome: "Jorge", username: "Jhonn"  // Não pode acontecer
}
 */
// Precisamos olhar a lista de usuarios para entra
const lista_usuarios = new Map();

lista_usuarios.set(
    "Jhonn",
    { nome: "Jorge", username: "Jhonn" }
)
lista_usuarios.set(
    "Jhonn",
    { nome: "Jorge", username: "Jhosasd" }
)

console.log(lista_usuarios.toString()); s