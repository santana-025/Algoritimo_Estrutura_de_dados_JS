// Primeiro que entra, Primeiro que sai 
function queue() {
    var items = []

    this.enqueue = function (elemento) {
        // Adciciona item 
        items.push(elemento);
    }
    this.dequeue = function () {
        // Remove item 
        return items.shift();
    }
    this.front = function () {
        // Retorna o 1 item 
        return items[0];
    }
    this.isEmpty = function () {
        // Retorna se a fila está vazia
        return items.length === 0;
    }
    this.size = function () {
        // Retorna o Tamanho da fila 
        return items.length;
    }
    this.clear = function () {
        // Limpa a Fila
        items = [];
    }
    this.print = function () {
        // imprime no console os item da fila 
        console.log(items.toString());
    }
}

var queue = new queue(); // iportando todos os metodos da FILA

// Adicionando item 
queue.enqueue(2);
queue.enqueue(55);
queue.enqueue(89);
queue.enqueue(123);
queue.enqueue(10);

// A fila está Vazia ?
console.log(queue.isEmpty()); // Return Falso

//Mostra a Fila
queue.print();  // Return 2,55,89,123,10

// Retorna o Primeiro item
console.log(queue.front());// Return 2,

// Retorna o tamanho da fila 
console.log(queue.size()); // Retorna 5


// Removendo itens 
queue.dequeue();
queue.dequeue();
queue.dequeue();

// Mostra a fila 
queue.print(); // Retorna 123,10

// Remove todos da Fila
queue.clear();  // A fila fica = [ ]

// A fila está Vazia ?
console.log(queue.isEmpty()); //Retorna verdade

// Adicionando items novamente 
queue.enqueue(2);
queue.enqueue(55);
queue.enqueue(89);
queue.enqueue(123);
queue.enqueue(10);

//Mostra todos os items 
queue.print();  // 2,55,89,123,10

// A fila está Vazia ?
console.log(queue.isEmpty()); // Return Falso