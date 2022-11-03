const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => { });
it('Confere parâmetros de argumentos', () => {
  expect(getOpeningHours()).toEqual({
    Tuesday: { open: 8, close: 6 },
    Wednesday: { open: 8, close: 6 },
    Thursday: { open: 10, close: 8 },
    Friday: { open: 10, close: 8 },
    Saturday: { open: 8, close: 10 },
    Sunday: { open: 8, close: 8 },
    Monday: { open: 0, close: 0 },
  });
});
it('Verifica se é função', () => {
  expect(typeof getOpeningHours).toBe('function');
});
it('Se zoo está fechado domingo e 9h am', () => {
  expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
});
it('Se zoo está aberto terça e 9h am', () => {
  expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
});
it('Se zoo está fechado quarta e 9h am', () => {
  expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
});
it('Para os argumentos Thu e 09:00-AM deve lançar uma exceção com a mensagem: "The day must be valid. Example: Monday"', () => {
  expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow('The day must be valid. Example: Monday');
});
// W108 para correção test lint
it('Para os argumentos Fri e 09:00-ZM deve lançar uma exceção com a mensagem: "The abbreviation must be \'AM\' or \'PM\'', () => {
  expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow(/"The abbreviation must be 'AM' or 'PM'"/);
});
it('Para os argumentos Sat e C9:00-AM deve lançar uma exceção com a mensagem: "The hour should represent a number"', () => {
  expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow('The hour should represent a number');
});
it('Para os argumentos "Sunday" e "09:c0-AM" deve lançar uma exceção com a mensagem: "The minutes should represent a number"', () => {
  expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrow('The minutes should represent a number');
});
