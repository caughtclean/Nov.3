var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];


var result = input.map(function(values) {
  var xySquared = Math.pow(values.x, 2) + Math.pow(values.y, 2);
  var result = Math.sqrt(xySquared);
  return result;


});


console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);