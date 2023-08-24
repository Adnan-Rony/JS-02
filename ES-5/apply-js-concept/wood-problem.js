function wood(bedQuantity,chairQuantity,tableQuantity)
{
    const perBed=3;
    const perChair=10;
    const perTable=50;

    const BedCost=bedQuantity*perBed;
    const ChairCost=chairQuantity*perChair;
    const tableCost=tableQuantity*perTable;

    const result=BedCost+ ChairCost+ tableCost;

    return result;
}
const total= wood(2,3,5);
console.log(total);