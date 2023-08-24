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


