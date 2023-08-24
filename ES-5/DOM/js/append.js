const placesList=document.getElementById('placesUl');
console.log(placesList);
const li=document.createElement('li');
li.innerText='bangladesh';

placesList.appendChild(li);


// main container vitor new section add
// where to add 
const mainContainer=document.getElementById('main-container')
console.log(mainContainer);

// what to be added

const section=document.createElement('section');
const h1=document.createElement('h1')
h1.innerText='my subject list';
section.appendChild(h1);

const ul=document.createElement('ul')
const li1=document.createElement('li');
li1.innerText='CSE';
ul.appendChild(li1)

const li2=document.createElement('li');
li2.innerText='EEE';
ul.appendChild(li2)

const li3=document.createElement('li');
li3.innerText='SWE';
ul.appendChild(li3)

section.appendChild(ul);

mainContainer.appendChild(section);



// another easy Way
const sectionDress=document.createElement('section');
sectionDress.innerHTML=`
<h1>My Dress Section </h1>
<ul>
<li>t-shirt</li>
<li>pant</li>
<li>lungi</li>

</ul>

`
mainContainer.appendChild(sectionDress);