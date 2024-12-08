const reverseString = function(text) {
    let splitText = text.split("");
    let returnText = ``;
    for (let i = splitText.length-1; i > -1; i--){
        returnText = `${returnText}${splitText[i]}`
    }
    return returnText;
};

// Do not edit below this line
module.exports = reverseString;
