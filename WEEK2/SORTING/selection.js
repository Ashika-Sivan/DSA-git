function selectionSort(arr){
    n=arr.length
    for(let i=0;i<arr.length-1;i++){
        let minIndex=i
        for(let j=i+1;j<arr.length;j++){
           if(arr[j]<arr[minIndex]){
            minIndex=j
           }
        }


        if(minIndex!==i){
            [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]]
        }
    }
    return arr
}

console.log(selectionSort([10,20,14,37,13]))

//set the minimum element as the first element .then after we have to check that any minimum elemnt is leass than the minIndex