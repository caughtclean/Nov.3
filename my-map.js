var myArray = [];

function map(array,words) {
  array.forEach(function(element) {
    myArray.push(words(element));
});

  console.log(myArray);
}

function words(index)  {
  return index.length;
}

map(["dogs", "cats", "liards","horses"], words)