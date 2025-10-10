function heapSort(arr){
    let n=arr.length
    for(let i=Math.floor(n/2)-1;i>=0;i--){
        heapify(arr,i,n)
    }

    for(let i=n-1;i>0;i--){
        [arr[0],arr[i]=arr[i],arr[0]]
    }
    return arr
}