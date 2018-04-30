fs = require("fs");

var input = [];

// Read input file & splice out the white spaces & breaks
fs.readFile(
  "C:\\Users\\james\\Documents\\CodeAbbey\\SumsInLoopInput.txt",
  "utf8",
  function(err, data) {
    if (err) {
      return console.log(err);
    }
    input = data.split(/[ \r\n]+/);
    // console.log(input.length);
    // console.log(input);
    var c = "";
    for (var i = 0; i < input.length; i += 2) {
      c += parseInt(input[i]) + parseInt(input[i + 1]) + "  ";
    }
    // console.log(c);
    logThis(c);
  }
);

// testing passing read value, for future calculations
function logThis(x) {
  console.log(x);
}
