const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((ageGroup) => ageGroup.age < 18);
  const adult = entrants.filter((ageGroup) => ageGroup.age >= 18 && ageGroup.age < 50);
  const senior = entrants.filter((ageGroup) => ageGroup.age >= 50);
  return { child: child.length, adult: adult.length, senior: senior.length };
}

function calculateEntry(entrants) {
  if (!entrants) {
    return 0;
  }
  if (Object.keys(entrants).length === 0) {
    return 0;
  }
  const peoples = countEntrants(entrants);
  const countChild = peoples.child * data.prices.child;
  const countAdult = peoples.adult * data.prices.adult;
  const countSenior = peoples.senior * data.prices.senior;
  return countChild + countAdult + countSenior;
}

module.exports = { calculateEntry, countEntrants };
