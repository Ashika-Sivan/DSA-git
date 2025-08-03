function mergeSort(arr){
    //divide the array till its length is one
    if(arr.length<2){
        return arr
    }
    //divide arr
    const mid=Math.floor(arr.length/2)
    const leftArr=arr.slice(0,mid)
    const rightArr=arr.slice(mid)//the left and right contain more than one element.so we repete it 
    return merge(mergeSort(leftArr),mergeSort(rightArr))
    
}

function merge(leftArr,rightArr){
    let sortedArr=[]
    while(leftArr.length && rightArr.length){//check wheter both arrays are not empty
        //compare 2 aray and push the smaller element to the sorted array
        if(leftArr[0]<=rightArr[0]){//check the 1st element of both arr
        sortedArr.push(leftArr.shift())
            
        }else{
            sortedArr.push(rightArr.shift())//remove the element from the corresponding array
        }
        
    }
    //now onvce the array is empty we exit the group
    return [...sortedArr,...leftArr,...rightArr]
}
console.log(mergeSort([8,20,-2,4,-6]))