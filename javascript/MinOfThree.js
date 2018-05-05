const fs = require("fs");
const path = require("path");

pathing = path.join(__dirname, "..", "MinOfThree.txt");

fs.readFile(pathing, "utf8", function(err, data) {
  if (err) {
    console.log(err);
  }

  let input = data.split(/[ \r\n]+/);
  algorithm(input);
});

function algorithm(input) {
  let sum = "";
  for (var i = 0; i < input.length; i += 3) {
    // find the lowest value in these 3 elements
    if (
      parseInt(input[i]) < parseInt(input[i + 1]) &&
      parseInt(input[i]) < parseInt(input[i + 2])
    ) {
      sum += input[i] + " ";
    }
    if (
      parseInt(input[i + 1]) < parseInt(input[i]) &&
      parseInt(input[i + 1]) < parseInt(input[i + 2])
    ) {
      sum += input[i + 1] + " ";
    }
    if (
      parseInt(input[i + 2]) < parseInt(input[i + 1]) &&
      parseInt(input[i + 2]) < parseInt(input[i])
    ) {
      sum += input[i + 2] + " ";
    }
  }

  console.log(sum);
}
