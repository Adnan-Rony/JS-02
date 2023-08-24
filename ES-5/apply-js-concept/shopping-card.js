// const shopping=[
//     {name:'pant',price:1200 ,quantity:5},
//     {name:'belt',price:420 ,quantity:15},
//     {name:'shoes',price:200 ,quantity:50},
//     {name:'laptop',price:42200 ,quantity:25},
// ];
// function ShoppingCard(products)
// {
//    let sum=0;
//     for(let i=0;i<products.length;i++)
//     {
       
//         const product=products[i];
//         sum=sum+product.price;

//         // console.log(product);
//     }
//     return sum;
// }
// const expence=ShoppingCard(shopping);
// console.log(expence);




// 

function ShoppingCard(products)
{
   let sum=0;
    for(let i=0;i<products.length;i++)
    {
       
        const product=products[i];
     
        const productTotal=product.price * product.quantity;
        
        sum=sum+productTotal;
        // console.log(product);
    }
    return sum;
}

const shopping=[
    {name:'pant',price:1200 ,quantity:5},
    {name:'belt',price:420 ,quantity:15},
    {name:'shoes',price:200 ,quantity:50},
    {name:'laptop',price:42200 ,quantity:25},
];
const expence=ShoppingCard(shopping);
console.log(expence);

