function permAlone(str) { // 'aabb'
  let n = str.length // 4
  let array = str.split('') // [a,b,c,b]
  let count = 0;

  let checkRepeats = (x) => {
  return  /(.)+\1/g.test(x.join('')) 
  }
  
  let c = []; //[0,0,0,0]
  for(let i = 0; i < n; i++){
    c[i] = 0
  }
  
  checkRepeats(array) ? null : count++
  
  let i = 0; // 0,1,0,1,2,0,1,0,1,2,0,1,0,1,2,3
  while(i < n){ // 3 < 4
    if(c[i] < i){ // 0 < 3
      if(i % 2 == 0){  // 1
        [array[0], array[i]] = [array[i], array[0]]
      } else {
        [array[c[i]], array[i]] = [array[i], array[c[i]]]
      } // [d,b,a,c]
      checkRepeats(array) ? null : count++
      c[i] += 1 
      i = 0
    } else {
      c[i] = 0 
      i++
    } // c = [0,0,0,0]
  }
return count
}
// [a,b,c,d], 
// [b,a,c,d], 
// [c,a,b,d], 
// [a,c,b,d], 
// [b,c,a,d],
// [c,b,a,d]
// [d,b,a,c]
permAlone('aab');