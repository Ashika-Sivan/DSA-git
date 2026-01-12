function findMax(arr,index=0,max=-Infinity){
  if(index===arr.length){
      return max
  } 
  return findMax(arr,index+1,Math.max(max,arr[index]))
}
console.log(findMax([5,5,7,8,9,10,9]))