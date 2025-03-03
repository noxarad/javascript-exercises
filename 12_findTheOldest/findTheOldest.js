const findTheOldest = function(people) {
    peoople = people.map((person) => {
        if (person.yearOfDeath === undefined){
            person.yearOfDeath = new Date().getFullYear()
        }
    })
    return people.sort((person1, person2) => (person2.yearOfDeath - person2.yearOfBirth) - (person1.yearOfDeath - person1.yearOfBirth))[0]
};

// Do not edit below this line
module.exports = findTheOldest;
