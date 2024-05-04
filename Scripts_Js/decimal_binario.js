/*
- Para realizar a conversão de decimal para binário -> 
- Faz a divisão sucessiva por 2 (base do sistema binário)
- O resultado da conversão será dado pelo último quociente (MSB)
- e o agrupamento dos restos de divisão será o número binário. 
- A leitura do resultado é feita do último quociente para o primeiro resto.

*/

function decbin(numerodecimal) { // Quero saber 23 em binario 
    var restodapilha = [],
        rest,
        binario = "";

    while (numerodecimal > 0) { // 23>0 loop 11>0 loop 5>0 loop 2>0 loop 1>0 0==0 sai do loop 
        rest = Math.floor(numerodecimal % 2); //23%2=1 loop 11%2=1 loop 5%2=1 loop 2%2=0 loop 1%2=1
        restodapilha.push(rest); // adiciona > 1 loop 1 loop 1 loop 0 loop 1
        numerodecimal = Math.floor(numerodecimal / 2);//23/2=11 loop 11/2=5 loop 5/2=2 loop 2/2=1 loop 1/2=0
    }       // Smpre Arredondando pra baixo com o Math.floor

    while (restodapilha.length > 0) { //restodapilha tem 5 itens vai diminuindo a cada loop ate ficar == 0
        binario += restodapilha.pop().toString(); // remove o ultimo e adiciona a binario em forma de string  
    }           //.pop ele remove o ultimo mas ele retorna esse item  
    return binario
}
// chamando a função 
//console.log(decbin(23));

// Text2
function decimal_binario(numerodec) {
    var resto_pilha = [],
        resto,
        binario_str = "";

    while (numerodec > 0) {
        resto = Math.floor(numerodec % 2);
        resto_pilha.push(resto);
        numerodec = Math.floor(numerodec / 2);
    }
    while (resto_pilha.length > 0) {
        binario_str += resto_pilha.pop().toString();
    }
    return binario_str;
}

console.log(decimal_binario(23));