const fs = require("fs");
const path = require("path");

fs.readFile(path.join(__dirname, "inputs", "MaxOfArray.txt"), "UTF8", function(
  err,
  data
) {
  if (err) {
    console.log(err);
  }

  input = data.split(/[ /r/n]+/);
  algorithm(input);
});

// Find the highest & lowest value within the array
function algorithm(inputs) {
  if (!inputs) {
    console.log("Houston we have a problem!");
  }
  let highest = 0;
  let lowest = 0;
  for (var i = 0; i < inputs.length; i++) {
    if (highest < parseInt(inputs[i])) {
      highest = parseInt(inputs[i]);
    }
    if (lowest > parseInt(inputs[i])) {
      lowest = parseInt(inputs[i]);
    }
  }
  console.log(highest + " " + lowest);
}
