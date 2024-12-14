const fibonacci = function(place) {
    place = Number(place)
    if (place < 0){
        return "OOPS"
    }
    if (place === 1 || place === 2){
        return 1
    } else if (place === 0){
        return 0
    }
    return fibonacci(place - 1) + fibonacci(place - 2)
};

// Do not edit below this line
module.exports = fibonacci;
