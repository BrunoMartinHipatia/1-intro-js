

const invoice = {
    id: 10,
    name: 'Compras de oficina',
    date: new Date(),
    cliente: {
        id:2,
        name:'Bruno ',
        lastname:'Martin Hermoso',
        age:20,
    },
    items:[
        {
            producto: 'keyboard',
            price:50,
            quantity: 2,
        },
        {
            producto: 'mouse',
            price:30,
            quantity: 4,

        },
        {
            producto: 'speaker',
            price:100,
            quantity: 1,
        },
    ],
    total: function(){
        let total = 0;
        this.items.forEach(item=>{
            total= total + item.price * item.quantity;
            
        });
        return total;
    },
    greeting:function(){
        return `hola ${this.cliente.name} ${this.cliente.lastname} `;
    }
};
const invoice2 ={invoice};
const invoice3 = {...invoice};

//const invoice2 = invoice;
const result = invoice ===invoice2;

invoice2.id=22
invoice3.id=11
console.log(invoice)
console.log(invoice2)
console.log(invoice3)