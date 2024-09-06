function inchToFeet(inch) {
    const feet = inch / 12;
    return feet;
}

// const myHeight = inchToFeet(65);
// console.log('my height:', myHeight);


function inchToFeet2(inch) {
    const feet = inch / 12;
    const feetInt = parseInt(feet)
    const feetNumber = inch % 12
    const resultFeet = `${feetInt} Ft ${feetNumber} Inch.`
    return resultFeet;
}

// const myHeight = inchToFeet2(75);
// console.log('my height:', myHeight);

function kiloMeterToMiles(kilo) {
    const mile = kilo * 0.621371
    return mile;
}

// const kilos = kiloMeterToMiles(12);
// console.log(kilos)


function milesToKiloMeter(mile){
    const kilo = mile * 1.60934
    return kilo;
}

const result = milesToKiloMeter(12);
console.log(result);