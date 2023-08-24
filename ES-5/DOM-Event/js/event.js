
// option-1
//<button onclick="document.body.style.backgroundColor='Yellow'">Make Yellow</button>





//option-2:

/* <button onclick="makeRed()">make red</button> */
function makeRed()
{
    document.body.style.backgroundColor='red'
}




// option-3:

// <button id="make-blue">makes blue</button>
const makeBlueButton=document.getElementById('make-blue');
// console.log(makeBlueButton);
makeBlueButton.onclick=makeblue
function makeblue()
{
    document.body.style.backgroundColor='blue';
}




// option-3 another(aktu short)
//  <button id="make-tomato">make-tomato</button>

const makeTomatoButton=document.getElementById('make-tomato');
// console.log('adnannn');
makeTomatoButton.onclick=function makeTomato()
{
    document.body.style.backgroundColor='tomato'
}




// option:4
// <button id="make-pink">make-pink</button>
const pinkButton=document.getElementById('make-pink')
pinkButton.addEventListener('click',makepink)
function makepink()
{
    document.body.style.backgroundColor='pink'
}




// option-4 another
//    <button id="make-green">make green</button>
const makegreenButton=document.getElementById('make-green')
makegreenButton.addEventListener('click', function makegreen()
{
      document.body.style.backgroundColor='green';
}
)




// option-4 final
//   <button id="make-goldenrod">make goldenRod</button>

// document.getElementById('make-goldenrod').addEventListener('click',function(){})
document.getElementById('make-goldenrod').addEventListener('click',function (){
    document.body.style.backgroundColor='goldenRod'
})
 
