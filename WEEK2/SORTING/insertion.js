function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let numToIndex=arr[i]
        let j=i-1

        while(j>=0 && arr[j]>numToIndex){
            arr[j+1]=arr[j]
            j=j-1
            
        }
        arr[j+1]=numToIndex
    }
    return arr
}
console.log(insertionSort([-6,20,8,-2,4]))



function insertionSortStr(str){
    let arr=str.split('')
    for(let i=1;i<arr.length;i++){
        let numToInsert=arr[i]
        let j=i-1
        
        
        while(j>=0 && arr[j]>numToInsert){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=numToInsert
    }
    return arr.join('')
}
console.log(insertionSortStr('javascript'))

