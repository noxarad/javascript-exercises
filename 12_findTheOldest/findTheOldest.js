const findTheOldest = function(listOfPeople) {
    let oldestPerson = listOfPeople[0]
    if (oldestPerson.yearOfDeath === undefined){
        oldestPerson.yearOfDeath = 2024
    }
    for (person of listOfPeople){
        if (person.yearOfDeath === undefined){
            person.yearOfDeath = 2024
        }
        if (person.yearOfDeath - person.yearOfBirth > oldestPerson.yearOfDeath - oldestPerson.yearOfBirth){
            oldestPerson = person
        }
    }
    return oldestPerson
};

// Do not edit below this line
module.exports = findTheOldest;
