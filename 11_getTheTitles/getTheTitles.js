const getTheTitles = function(listOfBooks) {
    let titles = []
    for (book of listOfBooks){
        titles.push(book.title)
    }
    return titles
};

// Do not edit below this line
module.exports = getTheTitles;
