const fs = require("fs");
const path = require("path");

// Read Inputs & sort into array
fs.readFile(path.join(__dirname, "/inputs", "MinOfThree.txt"), "utf8", function(
  err,
  data
) {
  if (err) {
    console.log(err);
  }

  // sort inputs from single string to array of inputs.
  let input = data.split(/[ \r\n]+/);
  algorithm(input);
});

// Minimum of three logic
function algorithm(input) {
  let sum = "";
  for (var i = 0; i < input.length; i += 3) {
    // find the lowest value in these 3 elements
    if (
      parseInt(input[i]) < parseInt(input[i + 1]) &&
      parseInt(input[i]) < parseInt(input[i + 2])
    ) {
      sum += input[i] + " "; // store if first number is lowest
    }
    if (
      parseInt(input[i + 1]) < parseInt(input[i]) &&
      parseInt(input[i + 1]) < parseInt(input[i + 2])
    ) {
      sum += input[i + 1] + " "; // store if second number is lowest
    }
    if (
      parseInt(input[i + 2]) < parseInt(input[i + 1]) &&
      parseInt(input[i + 2]) < parseInt(input[i])
    ) {
      sum += input[i + 2] + " "; // store if last number is lowest
    }
  }

  console.log(sum);
}
