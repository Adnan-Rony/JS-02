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






function matchFinder(string1, string2) {
 
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return "input a valid string";
    }
    
    
    for (let i = 0; i < string1.length; i++) {
        for (let j = i + 1; j <= string1.length; j++) {
            if (string1.substring(i, j) === string2) {
                return true;
            }
        }
    }
    
   
    return false;
}
const result = matchFinder('John Doe', 'ohn');
console.log(result);












function sortMaker(arr)
{
    if(arr[0] ==arr[1])
    {
        return 'equal';
    }
    if(arr[0]<0 || arr[1]<0)
    {
            return 'invalid input';
    }


    if(arr[0]>0 && arr[1]>0)
    if(arr[0]>arr[1])
    return arr;

    if(arr[0]<arr[1])
   
    {
            
            [arr[0],arr[1]]=[arr[1],arr[0]]
            
    }
    return arr;
   
    }
    const arr=[4,-2];
    const sortedArray=sortMaker(arr);
    console.log(sortedArray);










    function findAddress(obj) {
        const street = obj.street || '_';
        const house = obj.house || '_';
        const society = obj.society || '_';
        
        return house + ', ' + street + ', ' + society;
    }
    
    const obj = {
        street: 10,
        house: '15A',
        society: 'Earth Perfect'
    };
    
    console.log(findAddress(obj));










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