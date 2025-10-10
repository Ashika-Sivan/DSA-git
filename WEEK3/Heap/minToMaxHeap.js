//find the nth smallest

class Heap{
    constructor(){
        this.heap=[]
    }
    insert(val){
        this.heap.push(val)
        this.bubblesUp(this.heap.length-1)
    }

    bubblesUp(index){
        while(index>0){
            let parentIndex=Math.floor((index-1)/2)
            if(this.heap[parentIndex]>=this.heap[index]){
                break
            }
            [this.heap[parentIndex],this.heap[index]]=[this.heap[index],this.heap[parentIndex]]
            index=parentIndex
        }
    }
    deleteRooot(){
        if(this.heap.length===0){
            return null
        }
        if(this.heap.length===1){
            return this.heap.pop()
        }
        let root=this.heap[0]
        this.heap[0]=this.heap.pop()
        this.heapifyDown(0)
        return root
    }
    heapifyDown(index){
        while(index<this.heap.length){
            let largest=index
            let left=2*index+1
            let right=2*index+2

            if(left<this.heap.length && this.heap[largest]<this.heap[left]){
                largest=left
            }
            if(right<this.heap.length && this.heap[largest]<this.heap[right]){
                largest=right
            }

            if(largest===index){
                return
            }
            this.swap(largest,index)
            index=largest

        }
    

    }
    //nth smallest from min heap
     nthSmallest(n){
    if(n<=0||n>this.heap.length){
        return null
    }
    let temp=[...this.heap]
    let val
    for(let i=0;i<n;i++){
        val=this.deleteRooot()
    }
    this.heap=temp
    return val
}
    swap(i,j){
        [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]
    }

    print(){
        console.log(this.heap)
    }
    //nth smallest from max heap
  
}


function convertMinToMax(minHeapArr){
    let heap=new Heap()
    for(let val of minHeapArr){
        heap.insert(val)
    }
    return heap.heap
}

let heap=new Heap()
heap.insert(10)
heap.insert(20)
heap.insert(30)
heap.insert(40)
heap.insert(50)
heap.print()
console.log(heap.nthSmallest(4))
console.log(convertMinToMax([1,3,5,7,9]))

