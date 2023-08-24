// let total=0;
// function CardHandle(data)
// {
//     // console.log();
//     const JuicesName=data.parentNode.childNodes[3].innerText;


//     const NewContainer =document.getElementById('container');


//     const li =document.createElement('li');

//     li.innerText=JuicesName;

//     NewContainer.appendChild(li)

//     // 
//     const priceElemet =data.parentNode.childNodes[5].innerText.split(' ')[1];

   

//     total =parseFloat(total) + parseFloat(priceElemet);

//     document.getElementById('price').innerText=total;



// }

let total=0;
function CardHandle(data)
{
    const Juices =data.childNodes[1].childNodes[3].innerText;

    const newElementAdd= document.getElementById('container');

    const li=document.createElement('li');
    li.innerText=Juices;

    newElementAdd.appendChild(li)

    // 
    const price =data.childNodes[1].childNodes[5].innerText.split(" ")[1];

    total =parseFloat(total) + parseFloat(price);

    document.getElementById('price').innerText=total


}
