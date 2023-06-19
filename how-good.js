// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

function betterThanAverage(classPoints, yourPoints) {
  //creating a sum marks variable to get the sum
  let sumOfMarks = 0;
  // for loop is created for going through the array
  for (let i = 0; i < classPoints.length; i++) {
    // adding new number into sumOfMarks variable
    sumOfMarks += classPoints[i];
  }
  // getting the average of marks
  let average = sumOfMarks / classPoints.length;
  // return the true false in terms of its high or not
  return average < yourPoints ? true : false;
}
