const palindromes = function (palindrome) {
    palindrome = palindrome.toUpperCase()
   palindrome = palindrome.split("")
    let regEx = /^[a-z0-9]+$/i;
   palindrome = palindrome.filter((letter) => regEx.test(letter))
    console.log(palindrome)
    let j = palindrome.length - 1
    let i = 0
    while (i < j) {
        if (palindrome[i] === palindrome[j]) {
            i++
            j--
        } else {
            return false
            break
        }
    }
    return true
};
// Do not edit below this line
module.exports = palindromes;
