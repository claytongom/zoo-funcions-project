const data = require('../data/zoo_data');

const { employees } = data;
// hof some verifica se id = parametro
function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}
// hof filter array employees, map retornar nome sobrenome empregados que gerente é responsavel
function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    return data.employees.filter((employee) => employee.managers.includes(managerId))
      .map((el) => `${el.firstName} ${el.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
