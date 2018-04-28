"use strict";

const input =
  "19 82 667 1051 961 586 128 365 185 735 1063 733 312 968 424 462 946 1064 350 913 1055 526 252 638 874 1158 885 65 476 294 1295 486 366 662 237 26 1238 356 381 123 1081 144 847 92 1103 1261 545 749 1025 885";

let inputs = input.split(" ");
let sum = 0;

for (var i = 0; i < inputs.length; i++) {
  sum += Number(inputs[i]);
}

console.log(sum);
