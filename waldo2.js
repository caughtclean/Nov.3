
function findWaldo(arr, found) {
  arr.forEach(function(name, index) {
    if (name === "Waldo") {
    found(index);
    }

  });
}

function actionWhenFound(index) {
  console.log("Found him at index " + index + "!");
}
var list = ["Alice", "Bob", "Waldo", "Winston"]


findWaldo(list, actionWhenFound);


//arr = array of names
//found action when found
//name = element in array
//index = 1