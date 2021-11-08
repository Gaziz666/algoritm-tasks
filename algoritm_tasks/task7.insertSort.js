function insertionSort(array) {
  // Only change code below this line
  for(let i = 1; i < array.length; i++){
    for(let j = i; j > 0; j--){
      if(array[j] < array[j - 1]) {
        const tmp = array[j]
        array[j] = array[j - 1]
        array[j - 1] = tmp
      }
    }
  }
  return array;
  // Only change code above this line
}