// add whatever parameters you deem necessary
function constructNote(message, letters) {
    if (message.length > letters.length) return false;

    let letterCounts = countFrequencies(letters);

    // Check if we can construct the message using the available letters
        for (let char of message) {
            if (letterCounts.has(char) && letterCounts.get(char) > 0) {
            // Decrement the count of the used letter
            letterCounts.set(char, letterCounts.get(char) - 1);
            } else {
            // If the letter is not available, return false
            return false;
            }
        }

    return true;
}

function countFrequencies(elements) {
    let frequencies = new Map();

    for(let val of elements){
        if(/[A-Z0-0]/i.test(val)){
            val = val.toLowerCase();
            let countVal = frequencies.get(val) || 0;
            frequencies.set(val, countVal + 1);
        }
    }
    return frequencies;
}

module.exports = { constructNote };