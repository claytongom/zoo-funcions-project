const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;

function getOldestFromFirstSpecies(id) {
  const animalId = employees.find((employee) => employee.id === id).responsibleFor[0];
  const animal = species.find((specie) => specie.id === animalId).residents;

  return Object.values(animal.sort((a, b) => a.age - b.age)[animal.length - 1]);
}

module.exports = getOldestFromFirstSpecies;
