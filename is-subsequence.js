// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
    let i = 0; // Index for str1
    let j = 0; // Index for str2
  
    while (i < str1.length && j < str2.length) {
      if (str1[i] === str2[j]) {
        i++; // Move to the next character in str1
      }
      j++; // Always move to the next character in str2
    }
  
    // If we've successfully iterated through all characters in str1, it's a subsequence.
    return i === str1.length;
  }

  module.exports = {isSubsequence}
