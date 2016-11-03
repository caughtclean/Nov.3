// Goal: Implement the forEach function using
// for loops.

//Given an Array and a callback function
//myForEach should call the callback function
//on each element in the array



function myForEach(array, callback) {
  for(var item of array) {
    callback(item);
  }
}

var list = ["Apples", "Feta Cheese", "Milk", "Tomatoes"]


var totalItems = 0;
myForEach(list,function(fooditem) {
totalItems += 1;
})
console.log(totalItems)