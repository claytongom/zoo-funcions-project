const data = require('../data/zoo_data');

function object(idObj, first, last, speciesObj, local) {
  return { id: idObj, fullName: `${first} ${last}`, species: speciesObj, locations: local };
}

function a(animais) {
  return animais.map((element) => data.species.find((find) => find.id === element).name);
}

function aL(animais) {
  return animais.map((element) => data.species.find((find) => find.id === element).location);
}

function objCorrect(name, peopleName, id, peopleId) {
  if (name !== undefined && peopleName) {
    const employee = data.employees.find((people) =>
      people.firstName === name || people.lastName === name);
    return object(employee.id, employee.firstName, employee.lastName,
      a(employee.responsibleFor), aL(employee.responsibleFor));
  }
  if (id !== undefined && peopleId) {
    const nameOrId = data.employees.find((achar) => achar.id === id);
    return object(id, nameOrId.firstName, nameOrId.lastName,
      a(nameOrId.responsibleFor),
      aL(nameOrId.responsibleFor));
  }
  throw new Error('Informações inválidas');
}

function notParam() {
  return data.employees.map((employee) => ({
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: a(employee.responsibleFor),
    locations: aL(employee.responsibleFor),
  }));
}

function getEmployeesCoverage(obj) {
  if (obj === undefined) {
    return notParam();
  }
  const { name, id } = obj;
  const idObj = data.employees.some((check) => check.id === id);
  const nameObj = data.employees.some((checking) =>
    checking.firstName === name || checking.lastName === name);

  return objCorrect(name, nameObj, id, idObj);
}

module.exports = getEmployeesCoverage;
