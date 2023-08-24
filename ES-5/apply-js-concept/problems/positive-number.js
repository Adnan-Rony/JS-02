function IsPositive(arr)
{
    const PositiveArr=[];
    for(let i=0;i<arr.length;i++)
    {
        let index=i;
        let element=arr[i];
        if(element>=0)
        {
            PositiveArr.push(element);
        }
        else
        {
            break;
        }
      
        // console.log(arr[i]);
    }
    return PositiveArr;
}
const num=[12,13,15,18,-28,34,56,87,99];
const Result =IsPositive(num);
console.log(Result);