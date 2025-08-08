// class Circle{
//     constructor(cap){
//         this.cap = cap
//         this.item = new Array()
//         this.front = 0
//         this.rear = -1
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size===0
//     }

//     isFull(){
//         return this.size===this.cap
//     }

//     enqueue(val){
//         if(this.isFull()){
//             return "Under flow"
//         }
//         this.rear = (this.rear+1)%this.cap
//         this.item[this.rear] = val
//         this.size++
//     }

//     dequeue(){
//         if(this.isEmpty()){
//             return "Under flow"
//         }

//         const rem = this.item[this.front]
//         this.front = (this.front+1)%this.cap
//         this.size--
//         return rem
//     }

//     getFront(){
//         if(this.isEmpty()){
//             return "Empty"
//         }

//         return this.item[this.front]
//     }

//     display(){
//         if(this.isEmpty()){
//             return "Empty"
//         }

//         let res = []
//         for(let i=0 ; i<this.size ; i++){
//             let index = (this.front+i)%this.cap
//             res.push(this.item[index])
//         }
//         console.log(res)
//     }
// }


// let queue = new Circle(5);

// queue.enqueue(1)
// queue.enqueue(3)
// queue.enqueue(4)
// queue.enqueue(9)
// queue.enqueue(8)

// queue.display()
// console.log("del: ", queue.dequeue())
// console.log("front: ", queue.getFront())


