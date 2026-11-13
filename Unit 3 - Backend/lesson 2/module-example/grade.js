function calculateAverage(grades) {
  let total = 0;

  for (let grade of grades) {
    total += grade;
  }

  return total / grades.length;
}

function checkPass(average) {
  return average >= 50;
}

module.exports = {
  calculateAverage: calculateAverage,
  checkPass: checkPass,
};
