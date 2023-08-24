// const jim=84;
// const dela=75;
// if(jim>dela)
// {
//     console.log("jim cake pabe")
// }
// else{
//     console.log('dela cake pabe');
// }



//
const jim=84;
const dela=75;
const chinku=99;
if(jim>dela && jim>chinku)
{
    console.log("jim cake pabe")
}
else if(dela>jim && dela>chinku){
    console.log('dela cake pabe');
}
else if(chinku>jim && chinku>dela)
{
    console.log('chinku cake pabe');
}


//
function maximum(num1,num2,num3)

{
    const maxnumber=Math.max(num1,num2,num3);
    // console.log(maxnumber);
    return maxnumber;+
}
// maximum(3,2,5);
console.log(maximum(5,2,9));