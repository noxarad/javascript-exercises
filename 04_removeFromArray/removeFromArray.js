const removeFromArray = function(array, ...itemsToBeRemoved) {
    for (const item of itemsToBeRemoved){
        const index = array.indexOf(item)
        if (index !== -1){
            array.splice(index,1)
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
