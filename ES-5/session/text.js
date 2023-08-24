     // let total=0;
// function handle(target)
// {
//     const itemName = target.parentNode.childNodes[3].innerText;
//     const li = document.createElement('li');
//     li.innerText=itemName;

//     const selectedItemContainer = document.getElementById('selected-items');

//     selectedItemContainer.appendChild(li);


//     const price = target.parentNode.childNodes[5].innerText.split(" ")[0];

//     total=parseInt(total) + parseInt(price);

//    console.log(total);

//     document.getElementById('total').innerText=total;

  
// }


let total=0;
function handle(data)
{
    
    const itemList = data.parentNode.childNodes[3].innerText;

console.log(data.parentNode.childNodes);

   const li = document.createElement('li');
   li.innerText = itemList;
   
   const anotherSectionAdd = document.getElementById('selected-items');

   anotherSectionAdd.appendChild(li);

    
    const price=data.parentNode.childNodes[5].innerText.split(" ")[1];

    total = parseInt(total) + parseInt(price);
   
    document.getElementById('total').innerText = total;





}