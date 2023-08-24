const phones=[
    {brand:'nokia',stroage:'32gb',price:32000,camera:'12px'},
    {brand:'mi',stroage:'64gb',price:22000,camera:'12px'},
    {brand:'iphone',stroage:'32gb',price:12000,camera:'12px'},
    {brand:'lg',stroage:'32gb',price:327000,camera:'12px'},
]
function cheapestPhone(pho)
{
    let chepest=phones[0];
    for(let i=0;i<phones.length;i++)
    {
        // console.log(phones[i]);
        const phn=phones[i];
        if(chepest.price>phn.price)
        {
            chepest=phn
            
        }
    }
    return chepest
}

 console.log( cheapestPhone(phones));