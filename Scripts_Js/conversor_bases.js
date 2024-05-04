function decimal_base(numerodecimal, base) { // 123 , 16
    var restodapilha = [],
        resto,
        base_str = "",
        digitos = "0123456789ABCDEF"

    while (numerodecimal > 0) {     // 123>0 loop 7 > 0 loop 0==0
        resto = Math.floor(numerodecimal % base); // 123%16 loop 7%16 
        restodapilha.push(resto); // [11, 7]
        numerodecimal = Math.floor(numerodecimal / base); // 123/16 loop 7%16  loop
    }
    while (restodapilha.length > 0) {   // total de numeros na pilha até ser == 0 
        base_str += digitos[restodapilha.pop()];    // adicionar o digito na posição do array tirando oultimo item porem retornando ele  
    }
    return base_str; // retorna o valor diacordo com a sequencia dod digitos
}

console.log(decimal_base(23, 2)); // chama a funcão com parametros numnero decimal e a base para ser convertido 