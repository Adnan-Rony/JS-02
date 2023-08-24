function FindingBadData(numbers)
{
    let BadArray=[];
    for(let i=0;i<numbers.length;i++)
    {
        const element=numbers[i];
        // console.log(element);
        if(element<0)
        {
            BadArray.push(element);
        }
        else{
            continue;
        }
        
    }
    return BadArray.length;
}
const arr=[2,5,7,13,14];
const result=FindingBadData(arr);
console.log(result);