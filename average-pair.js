// add whatever parameters you deem necessary
function averagePair(arr,targetAverage) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        //get the current average
        let currentAverage = (arr[left] + arr[right])/2;
        //check if the current average is equal to the targetAverage and return true if it is
        if (currentAverage === targetAverage) {
         return true;
       // check if the current average is greater than the targetAverage and move the right towards the left position
        } else if (currentAverage > targetAverage) {
          right--;
        } else {
          left++;
        }
    }
    return false;
}

module.exports = { averagePair }