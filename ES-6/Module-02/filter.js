//filter always return array
const numbers =[1,6,7,5,4,67,55];

const players =[56,76,89,58,63,84];

const friends =['adu','jadu','maduuu','bangladesh','pak'];

const selected =players.filter(p =>p >70);


// console.log(selected);
/* 
its works like condition
[ 76, 89, 84 ]

*/


const even =players.filter(p => p%2==0);


// console.log(even);
/* 
[ 56, 76, 58, 84 ]
*/


const oddfriends =friends.filter(p=> p.length >4);

console.log(oddfriends);

/* 
[ 'maduuu', 'bangladesh' ]
*/