const products=[
    {id:1,name:'xiaomi phone',price:23000},
    {id:2,name:'i phone',price:223000},
    {id:3,name:'xiaomi laptop',price:26000},
    {id:4,name:'lenovo laptop',price:23000},
    {id:5,name:'vivo phone',price:29000},
    {id:6,name:'macbook laptop',price:223000}
]

function matchFound(products,search)

{
    const matched=[];
    for(const product of products)  
{
    if(product.name.includes(search))
    {
        matched.push(product);
    }
    
   
    
}
return matched;

}
const result=matchFound(products,'phone')
console.log(result);