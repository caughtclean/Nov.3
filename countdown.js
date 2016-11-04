var countdownGenerator = function (x) {
   var count = 4;
   return function () {
    count -= 1;
    return count
   }
};

var countdown = countdownGenerator(3);
console.log(countdown(3) + (" T-minus 3..."))
console.log(countdown()  + (" T-minus 2..."))
console.log(countdown()  + (" T-minus 1..."))
console.log(countdown()  + (" Blast Off!"))
