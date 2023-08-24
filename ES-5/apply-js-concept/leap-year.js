function IsLeapYear(years) {



    const remainder = years % 4;
    if (remainder == 0) {
        // console.log('leap years',IsLeapYear);
        return true;
    }
    else {
        // console.log('not leap year')
        return false;
    }


}
// const leap=2020;
const MyYear = IsLeapYear(2022);
const HerYear = IsLeapYear(2020);
console.log(MyYear, 'My year:');
console.log(HerYear, 'Her year:');