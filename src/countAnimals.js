const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const newObj = {};
    species.forEach((specie) => {
      newObj[specie.name] = specie.residents.length;
    });
    return newObj;
  } if (Object.keys(animal).length === 1) {
    return species.find((specie) => specie.name === animal.specie).residents.length;
  }
  return species
    .find((specie) => specie.name === animal.specie)
    .residents.filter((resident) => resident.sex === animal.sex).length;
}

module.exports = countAnimals;
