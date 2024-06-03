function findTheOldest(people) {
  const sortedPeople = people.sort((person, nextPerson) => {
      return getAge(nextPerson) - getAge(person)
  })
  return sortedPeople[0]
}

function getAge(person) {
  return person.yearOfDeath ? (person.yearOfDeath - person.yearOfBirth) : (new Date().getFullYear() - person.yearOfBirth)
}


// Do not edit below this line
module.exports = findTheOldest;
