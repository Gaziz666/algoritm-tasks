function sym(...args) {
  const concatArr = args.reduce((concat,arr) => {
    const set = new Set(arr)
    concat = [...concat,...Array.from(set)]
    return concat.sort((a,b) => a-b)
  },[])

  const resultArr = []
  let i = 0
  while(i < concatArr.length){
    if(concatArr[i] === concatArr[i+1]){
      i++
    }else {
      resultArr.push(concatArr[i])
    }
    
    i++
  }
  return resultArr
}

sym([1, 2, 3], [5, 2, 1, 4]);
