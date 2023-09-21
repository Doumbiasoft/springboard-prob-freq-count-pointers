// add whatever parameters you deem necessary
function countPairs(arr, target) {
    const numCounts = new Map(); // Create an empty object to store counts of numbers
  
    // Initialize the count of pairs to 0
    let count = 0;
  
    // Iterate through the array
    for (const num of arr) {
      // Calculate the difference between the target and the current number
      const diff = target - num;
  
      // Check if the difference is in the object
      if (numCounts.has(diff)) {
        // If it is, increment the count by the number of times the difference has been seen
        count += numCounts.get(diff);
      }
  
      // Increment the count of the current number in the object
      let currentCount = (numCounts.get(num) || 0);
      numCounts.set(num, currentCount + 1);
    }
  
    return count;
  }

module.exports = { countPairs }
