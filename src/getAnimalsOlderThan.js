const species = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return species
    .species.find((specie) => specie.name === animal).residents
    .every((resident) => resident.age >= age);
}
console.log(getAnimalsOlderThan('elephants', 4));
module.exports = getAnimalsOlderThan;
