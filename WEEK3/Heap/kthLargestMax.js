class Heap {
    constructor() {
        this.heap = []
    }

    heapInsert(val) {
        this.heap.push(val)
        this.bubblesUp(this.heap.length - 1) // FIXED
    }

    bubblesUp(index) {
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2)
            if (this.heap[parentIndex] > this.heap[index]) {
                break
            }
            this.swap(parentIndex, index)
            index = parentIndex
        }
    }

    deleteRoot() {
        if (this.heap.length === 0) return null
        if (this.heap.length === 1) return this.heap.pop()

        let root = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0)
        return root
    }

    heapifyDown(index) {
        while (true) {
            let largest = index
            let left = 2 * index + 1
            let right = 2 * index + 2

            if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
                largest = left
            }
            if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
                largest = right
            }

            if (largest !== index) {
                this.swap(largest, index)
                index = largest
            } else {
                break
            }
        }
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }

    print() {
        console.log(this.heap)
    }
}

function kthLargest(arr, k) {
    let heaping = new Heap()
    for (let num of arr) {
        heaping.heapInsert(num)
    }
    let res = null
    for (let i = 0; i < k; i++) {
        res = heaping.deleteRoot()
    }
    return res
}

console.log(kthLargest([5, 8, 1, 2, 9, 6], 3)) 
