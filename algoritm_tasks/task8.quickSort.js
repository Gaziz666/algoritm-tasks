function quickSort(array) { // [2,1,3]
  // Only change code below this line
  if(array.length <= 1){
    return array
  }
  const middleIndex = Math.floor(array.length/2)
  const middle = array[middleIndex]
  const smallArr = [] //[1]
  const bigArr = [] // [2, 3]
  for(let i = 0; i < array.length; i++){
    if(i === middleIndex){
      continue
    }
    if(array[i] < middle){
      smallArr.push(array[i])
    } else {
      bigArr.push(array[i])
    }
  }

  return [...quickSort(smallArr), middle, ...quickSort(bigArr)];
  // Only change code above this line
}