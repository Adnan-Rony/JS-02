function CubeNumber(number)
{
    if(typeof number !=='number' || number<0)
    {
        return 'please enter valid number';
    }
   
   
    
    const Cube=Math.pow(number,3)
   
   
    return Cube;
}
const result=CubeNumber(4);
console.log(result);




