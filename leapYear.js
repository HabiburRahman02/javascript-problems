function isLeapYear(year) {
    if (year % 4 === 0) {
        return true
    }
    return false;
}

// const leapYear = isLeapYear(2052);
// console.log(leapYear)


function isLeapYear2(year) {
    if (year % 4 === 0 && year % 100 !== 0) {
        return true;
    }
    else if (year % 400 === 0 || year % 100 === 0) {
        return true;
    }
    else{
        return false;
    }
}

const leap = isLeapYear2(2190);
const leap2 = isLeapYear2(1900);
console.log(leap,leap2);