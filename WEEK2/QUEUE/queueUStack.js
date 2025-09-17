//implement queue using stack
class Stack{
    constructor(value){
        this.items=new Array()
    }
    isEmpty(){
        return this.items.length===0
    }
    push(value){
        this.items.push(value)
    }
    pop(){
        if(this.isEmpty()){
            return 'underflow'
        }
        return this.items.pop()
    }
    peek(){
        if(this.isEmpty()){
            return 'underflow'
        }
        return this.items[this.items.length-1]
    }
    print(){
        console.log(this.items.toString())
    }
}
class Queue{
    constructor(){
        this.stack1=new Stack()
        this.stack2=new Stack()
    }
    isEmpty(){
        return this.stack1.isEmpty()
    }
    enqueue(value){
        while(!this.stack1.isEmpty()){//now stack has some value
             this.stack2.push(this.stack1.pop())
        }
        this.stack1.push(value)
        while(!this.stack2.isEmpty()){
             this.stack1.push(this.stack2.pop())
        }
    }
    dequeue(){
        if(this.isEmpty()){
            return 'underflow'
        }
        return this.stack1.pop()
    }
    front(){
        if(this.stack1.isEmpty()){
            return null
        }
        return this.stack1.peek()
    }
    display(){
        this.stack1.print()
    }
}
let queue=new Queue()
queue.enqueue(4)
queue.enqueue(6)
queue.enqueue(7)
queue.display()
console.log(queue.dequeue())
console.log(queue.front())



























































