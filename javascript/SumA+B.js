const input = "5306 7151";
var sum = 0;
var inputs = input.split(" ");

for (var i = 0; i < inputs.length; i++) {
  sum += Number(inputs[i]);
}

console.log(sum);
