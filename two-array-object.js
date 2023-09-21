// add whatever parameters you deem necessary
function twoArrayObject(arrKeys, arrValues) {
    let obj = {};

    for (let i = 0; i < arrKeys.length; i++) {
        // If there are enough values, use the corresponding value; otherwise, use null.
        obj[arrKeys[i]] = i < arrValues.length ? arrValues[i] : null;
      }
 
    return obj;
}

module.exports = { twoArrayObject }