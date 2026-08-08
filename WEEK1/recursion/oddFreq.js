

let arr=[1,3,2,4,5,7,3,9]
function countOdd(arr,index=0,freq={}){
    if(index===arr.length){
        let res=[]
        for(let key in freq){
            if(key%2!==0 && freq[key]>1){
                res.push(Number(key))
            }
        }
        return res
    }
    let curr=arr[index]
    freq[curr]=(freq[curr]||0)+1
    return countOdd(arr,index+1,freq)
}
console.log(countOdd(arr))