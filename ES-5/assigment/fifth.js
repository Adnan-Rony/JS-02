function canPay(changeArray,totalDue)
{
    if(changeArray[0]==null)
    return 'this is empty array.';

    let sum=0;
        for(let i=0;i<changeArray.length;i++)
      
        {
            sum=sum+changeArray[i];
            if(sum>=totalDue)
            {
                return true;
            }
                
            
        }
        return false;
    

}
const arr=[];
const number=10;
console.log(canPay(arr,number));