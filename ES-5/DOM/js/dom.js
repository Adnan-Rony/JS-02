const sections=document.querySelectorAll('section');
// console.log(neww);
for(const section of sections)
{
    // console.log(sections);
    section.style.border='2px solid blue'
    section.style.padding='20px'
    section.style.textAlign='center'
    section.style.listStyle='none'
    section.style.fontSize='20px'
    section.style.borderRadius='20PX'
    section.style.margin='20px'
}

const heading=document.getElementById('visit-title');
heading.style.backgroundColor='orange';
heading.style.color='white';



