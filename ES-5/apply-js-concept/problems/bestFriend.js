function BestFriend(names)
{
    let Bigname=[0];
    for(let i=0;i<names.length;i++)
    {
        const index=i;
        const element=names[index];
        console.log(names[i]);
        if(element.length>Bigname.length)
            {
                Bigname=element;
            }
        
        
    }
    return Bigname;
    
}
const NamesOfArray=['adnan','rony','ajmol Fuad','habibur','kayem'];
const resultt=BestFriend(NamesOfArray);
console.log('best friend is:',resultt);