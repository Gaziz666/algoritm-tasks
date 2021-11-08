function mergeSort(array) { // [1,2,3]
  if(array.length === 1) {
    return array
  }
  const middle = Math.floor(array.length / 2) // 1
  const left = mergeSort(array.slice(0,middle))
  const right = mergeSort(array.slice(middle)) 
  const result = mergeArr(left,right)
  return result;
}

function mergeArr(arr1, arr2) { // [1,2,7] [4,5,6]
  let resultArr = [] // [1,2,4,5,6]
  let i = 0
  let j = 0
  console.log(arr1, arr2)
  while (i < arr1.length && j < arr2.length) { // i = 2, j = 3
    if(arr1[i] < arr2[j]) {
      resultArr.push(arr1[i])
      i++
    } else {
      resultArr.push(arr2[j])
      j++
    }
  }
  
  return [...resultArr, ...arr1.slice(i), ...arr2.slice(j)]
}