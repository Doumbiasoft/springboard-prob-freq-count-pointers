// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {

    const strNum1 = num1.toString();
    const strNum2 = num2.toString();

    if (strNum1.length !== strNum2.length)return false;

    const num1frequency = countFrequencies(strNum1);
    const num2frequency = countFrequencies(strNum2);

    for(let key in num1frequency){
        if (num1frequency[key] !== num2frequency[key])return false;
    }

    return true;
}

function countFrequencies(data) {
    let frequencies = {};

    for(let val of data){
        let countVal = frequencies[val] || 0;
        frequencies[val]= countVal + 1;
    }
    return frequencies;
}
module.exports = { sameFrequency }