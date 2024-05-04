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
console.log(decbin(23));