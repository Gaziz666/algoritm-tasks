function pairwise(arr, arg) {
  let usedIndexArr = []
  let indexCount = 0;
  for(let i = 0; i < arr.length; i++){
    if(usedIndexArr.indexOf(i) > -1) {
      continue
    }
    for(let j = i + 1; j < arr.length; j++){
      if(usedIndexArr.indexOf(j) > -1) {
        continue
      }
      if(arr[i] + arr[j] === arg) {
        indexCount += i + j
        usedIndexArr.push(i, j)
        break
      }
    }
  }
  return indexCount;
}

pairwise([1,4,2,3,0,5], 7);