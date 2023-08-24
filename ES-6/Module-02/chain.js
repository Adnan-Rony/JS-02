//data access

const data =[{id:221-15-5155,name:'adnan',address:'dottopara'}];


// console.log(data); 
//[ { id: -4949, name: 'adnan', address: 'dottopara' } ]

// console.log(data[0]);
//{ id: -4949, name: 'adnan', address: 'dottopara' }


// console.log(data[0].address);
//dottopara


//
const products ={
    count:5000,
    data:[
        {id:1,name:'hp',price:200000},
        {id:2,name:'dell',price:100000},
    ]

}
//second product of data :output:

console.log(products.data[1]);
//{ id: 2, name: 'dell', price: 100000 }

console.log(products.data[1].price);
//100000