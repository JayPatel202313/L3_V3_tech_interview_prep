// Reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}
  
// Find max in array
function findMax(arr) {
    return Math.max(...arr);
}

// Check if palindrome
function isPalindrome(word) {
    for(let i=0; i < Math.floor(word.length/2); i++){
        if(word[i] != word[word.length-i-1])
            return false;
    }
    return true;
}

module.exports = { reverseString, findMax, isPalindrome };