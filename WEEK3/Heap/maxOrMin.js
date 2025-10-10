//inorder to find the minimum from the max heap

function findMin(){
    // let length=this.heap.length
    if(this.heap.length===0){
        return null
    }
    let start=Math.floor(this.heap.length/2)
    let min=this.heap[start]
    for(let i=start+1;i<this.heap.length;i++){
        if(this.heap[i]<min){
            min=this.heap[i]
        }
    }
    return min

}

//inorder to find the max from min heap

function maxHeap(){
    if(this.heap.length===0)return null
    let start=Math.floor(this.heap.length/2)
    let max=this.heap[start]
    for(let i=start+1;i<this.heap.length;i++){
        if(this.heap[i]>this.heap[max]){
            max=this.heap[i]
        }
    }
    return max

}

//inorder to find the maximum from max heap
return this.heap[0]
// inorder to find the minimum from min heap
return this.heap[0]