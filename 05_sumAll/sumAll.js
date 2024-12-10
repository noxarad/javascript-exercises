const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0){
        return "ERROR"
    }
    if (num1 !== parseInt(num1) || num2 !== parseInt(num2)){
        return "ERROR"
    }
    if (typeof num1 !== "number" || typeof num2 !== "number"){
        return "ERROR"
    }
    let low
    let high
    let sum = 0
    if (num1 < num2){
        high = num2
        low = num1
    } else {
        high = num1
        low = num2
    }
    for (let i = low; i <= high; i++){
        sum += i
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
