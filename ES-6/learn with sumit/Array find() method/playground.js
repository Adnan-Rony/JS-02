
//array.find never chnage main array...

const number = [ 3, 4, 5, 6, 7, 8, 10];

const result = number.find((currentvalue,currenctindex,arr) => 
{
    return currentvalue > 5
})

console.log(result);