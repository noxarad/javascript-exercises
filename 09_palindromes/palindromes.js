const palindromes = function (palindrome){
    palindrome = palindrome.toUpperCase()
    palindrome = palindrome.split("")
    let leftIndex = 0
    let rightIndex = palindrome.length - 1
    while (leftIndex <= rightIndex){
        if (!alphabetCheck(palindrome[leftIndex])){
            leftIndex += 1
            continue
        } else if (!alphabetCheck(palindrome[rightIndex])){
            rightIndex -= 1
            continue
        }
        if (palindrome[leftIndex] !== palindrome[rightIndex]){
            return false
            break
        }
        leftIndex += 1
        rightIndex -= 1
    }
    return true
};
const alphabetCheck = function (letter){
    if (letter === 'A' ||letter === 'B' ||letter === 'C' ||
        letter === 'D' ||letter === 'E' ||letter === 'F' ||
        letter === 'G' ||letter === 'H' ||letter === 'I' ||
        letter === 'J' ||letter === 'K' ||letter === 'L' ||
        letter === 'M' ||letter === 'N' ||letter === 'O' ||
        letter === 'P' ||letter === 'Q' ||letter === 'R' ||
        letter === 'S' ||letter === 'T' ||letter === 'U' ||
        letter === 'V' ||letter === 'W' ||letter === 'X' ||
        letter === 'Y' ||letter === 'Z' ||letter === '0' ||
        letter === '1' ||letter === '2' ||letter === '3' ||
        letter === '4' ||letter === '5' ||letter === '6' ||
        letter === '7' ||letter === '8' ||letter === '9') {
        return true
    } else {
        return false
    }
}
palindromes("r3ace3car")
// Do not edit below this line
module.exports = palindromes;
