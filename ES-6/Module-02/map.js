
const numbers =[2,3,4,5,6,7,8];

const doubled =[];
for(const num of numbers)
{
    const double=num*2;
    doubled.push(double);
}
console.log(doubled);
 //[
//     4,  6,  8, 10,
//     12, 14, 16
//   ]



//map used
const number = [12,13,16,144,677];

const double =number.map(num => num *2)

// console.log(double);
//[ 24, 26, 32, 288, 1354 ]

const fiveBonus =number.map(num => num +5)

// console.log(fiveBonus);
//[ 17, 18, 21, 149, 682 ]

const halves =number.map(numm => numm /2);


// console.log(halves);
//[ 6, 6.5, 8, 72, 338.5 ]


//array length

const friends =['adu','jadu','maduuu'];

const lengths=friends.map(frnd =>frnd.length);


// console.log(lengths);
//[ 3, 4, 6 ]


//per name first latter 

const firstLatter =friends.map(frnd => frnd[0])

// console.log(firstLatter);
//[ 'a', 'j', 'm' ]


























// const fNames=['adu','jaduuu','madu','koduu','modu'];

// const arr=[];
// for (names of fNames)
// {
//     if(names.length  % 2==0 ) 
//     {
//         arr.push(names);
//     }
    
    
// }
// console.log(arr);