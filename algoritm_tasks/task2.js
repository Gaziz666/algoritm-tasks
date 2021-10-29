function updateInventory(arr1, arr2) {
  const resultObj = {}
  arr1.concat(arr2).forEach((arr) => {
      if(resultObj[arr[1]]) {
          resultObj[arr[1]] = resultObj[arr[1]] + arr[0]
      } else {
          resultObj[arr[1]] = arr[0]
      }
  })
  const resultArr = Object.entries(resultObj).sort((a,b) => {
      if(a[0] < b[0]) return -1
      if(a[0] > b[0]) return 1
      if(a[0] === b[0]) return 0
    })
  const newResult = resultArr.map((arr) => {
      const newArr = []
      newArr.push(arr[1], arr[0])
      return newArr
  })
  return newResult
}
// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

updateInventory(curInv, newInv)