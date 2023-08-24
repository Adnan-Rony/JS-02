

// function add(num1,num2)
// {
//     const result =num1+num2;
//     console.log(num1,num2,result);
//     return result;
// }

// const sum =add(2,4);
// const sum =add(4);      //undifined and NaN



//Default
function add(num1=0,num2=0)
{
    const result =num1+num2;
    console.log(num1,num2,result);
    return result;
}

// const sum =add(4,5); 
const sum =add(4); 


//
function fullNane (first,last='')
{
    const full =first+ ' ' + last;
    console.log(full);
    return full;
}

// const Name= fullNane('adu','jadu')
const Name= fullNane('adu')