var shopping={
    books:3,
    pen:5,
    keyboard :6,
    Mouse:1,
    shoes:3,
    pendrive:30

}
// easy way
var keys=Object.keys(shopping); //all keys show
console.log(keys);
var values =Object.values(shopping);
console.log(values);

// loop used only for property keys
for(var i=0;i<keys.length;i++)
{
    console.log(keys[i]);
}


// loop used property keys and property values
for(var i=0;i<keys.length;i++)
{
    var propertyName=keys[i];
    var propertyValue=shopping[propertyName];
    // console.log(propertyName,propertyValue);
}


// loop in way
