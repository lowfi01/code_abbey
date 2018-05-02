fs = require("fs");

var input = [];

// Read input & Sort inputs into array of single elements.
fs.readFile(
  "C:\\Users\\james\\Documents\\CodeAbbey\\minOfTwo.txt",
  "utf8",
  function(err, data) {
    if (err) {
      return console.log(err);
    }
    input = data.split(/[ \r\n]+/);
    calculation(input);
  }
);

//Calculation for Algorithm
function calculation(input) {
  let result = "";
  for (var i = 0; i < input.length; i += 2) {
    if (parseInt(input[i]) < parseInt(input[i + 1])) {
      result += input[i] + " ";
    } else {
      result += input[i + 1] + " ";
    }
  }

  console.log(result);
}
