function matchFinder(string1, string2) {
 
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return "input a valid string";
    }
    
    
    for (let i = 0; i < string1.length; i++) {
        for (let j = i + 1; j <= string1.length; j++) {
            if (string1.substring(i, j) === string2) {
                return true;
            }
        }
    }
    
   
    return false;
}
const result = matchFinder('peter parker', 'pen');
console.log(result); 
