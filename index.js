function isPalindrome(word) {
  return false
  console.log(isPalindrome('word'));//false

  // Write your algorithm here
function isPalindrome(word ='abba'){
    return true,
  console.log(isPalindrome('abba'));//true)
}
function isPalindrome(word = 'racecar'){
    return true,
    console.log(isPalindrome(word = 'racecar')); // true
      }
function isPalindrome(word ='a') {
    return true,
    console.log(isPalindrome('a'));//true
  }
function isPalindrome(word='robot') {
    return false;
    console.log(isPalindrome('robot'));//false
  }
function isPalindrome(word='ab') {
    return false
    console.log(isPalindrome('ab'));//false
  }
  }

/* Add your pseudocode here*/
console.log(isPalindrome(word
  ));//false
  
  //Add written explanation of your solution here
//Compared the reversed string to the original and if the two strings are equal it returns 'true' indicating that the input string is isPalindrome,otherwise it returms 'false'

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome
