//Pilhas Nos Trabalhamos com Classes. Estrutura da Clase de Pilha ->
// o Primeiro a entra é o ultimo a sair 
function pilha() {
    var items = [1];
    // Metodos 
    this.push = function (element) {
        //Adiciona um novo item a pilha
        items.push(element);
    }
    this.pop = function () {
        //remove o item do top da pilha
        return items.pop();
    }
    this.peek = function () {
        //devolve o elemento que está no topo da pilha        
        return items[items.length - 1];
    }
    this.isEmpty = function () {
        //informa se a pilha está vazia ou não 
        return items.length === 0;
    }
    this.clear = function () {
        //limpa a pilha
        items = [];
    }
    this.size = function () {
        //tamanho da pilha
        return items.length;
    }

    this.print = function () {
        //imprime a pilha no console
        console.log(items.toString());
    }
}

// Inatanciando para usar todos os metodos !
var pilha = new pilha();

//Push Adicionando itens 
pilha.push(1);
pilha.push(3);
pilha.push(5);
pilha.push(8);
pilha.push(11);

//pop removendo itens 
pilha.pop(); // Removemos o 11
pilha.pop(); // Removemos o 8

//peak mostra o ultimo item adicionado da lista 
console.log(pilha.peek());

//isEmpty True = se ela estiver vazia, False = caso tenha items
console.log(pilha.isEmpty());

//clear Limpa a lista deixando ela sem itens
pilha.clear();
console.log(pilha.isEmpty()); // Retorna True pois retiramos tudo com o clear

//size verifica o tamanho da Pilha
// Adicionando novos valores
pilha.push(2);
pilha.push(5);
pilha.push(6);
pilha.push(44);
pilha.push(7);
//Vendo o tamanho 
console.log(pilha.size()); // Return 5 pois temos 5 itens 

//Print Mostrando a pilha no console 
pilha.print(); //mostra como strings todos os itens 1 por 1