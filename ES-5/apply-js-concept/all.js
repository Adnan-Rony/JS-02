
const lyrics='tumi bondhu sada pakhu .ami jeno ki bosonto kale tumr dekhte .parini';
// console.log(lyrics.split(''));
//output
/*'t', 'u', 'm', 'i', ' ', 'b', 'o', 'n', 'd',
'h', 'u', ' ', 's', 'a', 'd', 'a', ' ', 'p',
'a', 'k', 'h', 'u', ' ', '.', 'a', 'm', 'i',
' ', 'j', 'e', 'n', 'o', ' ', 'k', 'i', ' ',
'b', 'o', 's', 'o', 'n', 't', 'o', ' ', 'k',
'a', 'l', 'e', ' ', 't', 'u', 'm', 'r', ' ',
'd', 'e', 'k', 'h', 't', 'e', ' ', 'p', 'a',
'r', 'i', 'n', 'i'*/




// 3
// console.log(lyrics.split('.'));
/* 
  'tumi bondhu sada pakhu ',
  'ami jeno ki bosonto kale tumr dekhte parini'*/






//3
//   console.log(lyrics.split(' '));
  /*  'tumi',   'bondhu',
  'sada',   'pakhu',
  '.ami',   'jeno',
  'ki',     'bosonto',
  'kale',   'tumr',
  'dekhte', 'parini' */

//   
const deletee=lyrics.slice(2,5);
// console.log(deletee);


// 
const output=lyrics.includes('tumiii');
// console.log(output);

const start=lyrics.startsWith('tumi');
// console.log(start);

const end=lyrics.endsWith('.parini');
// console.log(end);

const lines=[
    'tumi bondhu sada',
    ' pakhu .ami jeno ki',
    ' bosonto kale tumr dekhte parini'
];
const song=lines.join(':');
// console.log(song);


var fName='adnan';
var Lname='rony';
const result=fName + ' ' + Lname;
// console.log(result);

const p1='20';
const result2=parseInt(p1);
// console.log(result2);

const p2='20.33';
const result3=parseFloat(p2);

// console.log(result3);


const p3=20.34556667;
const adu=p3.toFixed(2);
// console.log(adu);


//

const p4=100;
// console.log(typeof p4);

//

const arr=[2,3,4,5,6,7,7,8,9];
// console.log(arr);


//

const names=['adnan','rony','sami','adu','jadu','mona','koliza','pagol'];
for(let i=0;i<names.length;i++)
{
    const result=names[i];
    // console.log(result);
}

//
var numbers=[12,13,14,15,16,17,18,19,20];
for(let i=0;i<numbers.length;i++)
{
    const result=numbers[i];
    // console.log(result);
}


//

var numbers=[12,13,14,15,16,17,18,19,20];
for(let i=0;i<numbers.length;i++)
{
    const result=numbers[i];
    if(result>15)
    {
        // break;
        continue;
    }
    // console.log(result);
}


//

let num=0;
while(num<=20)
{
// console.log(num);
num=num+2;

}


//
let num1=1;
while(num1<=20)
{
// console.log(num1);
// num1=num1+2;
num1+=2;

}





//

var numbers =[20,30,40,50,19];
// console.log(numbers[1]);

// console.log(numbers.length);

numbers[1]=200;
// console.log(numbers);

const positionOfIndex=numbers.indexOf(40);
// console.log(positionOfIndex);

// solved question





