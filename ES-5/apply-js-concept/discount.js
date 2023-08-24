/*
first 100 ticket------->100tk
101-200 ticket ------> 90tk
200+ ticket --------->70tk
*/

function ticketPrice(ticketQuantity)
{
    const First100Rate=100;
    const Second100Rate=90;
    const rentTicketRate=70;
    
    if(ticketQuantity<=100)
    {
        const resultFirst=ticketQuantity * First100Rate;
        return resultFirst;
    }

    
    else if(ticketQuantity<=200 )
    {
        const First100Price=100 *First100Rate;
        const restTicketQuantity=ticketQuantity-100;
        const restTicketPrice=restTicketQuantity* Second100Rate;
        const totalPrice=First100Price + restTicketPrice;
        return totalPrice;
    }
    else{
        const First100Price=100 *First100Rate;
        const Second100Price=100 * Second100Rate;
        const restTicketQuantity=ticketQuantity-200;
        const restTicketPrice=restTicketQuantity * rentTicketRate;
        const totalCost=First100Price + Second100Price + restTicketPrice;
         return totalCost;
    }
}
 
const result=ticketPrice(320);
console.log(result);