class Queue{
    constructor(){
        this.item=new Array()
    }
    isEmpty(){
        return this.item.length===0
    }

    enqueue(value){
        return this.item.push(value)
    }
    dequeue(){
        if(this.isEmpty()){
            return 'underflow'
        }
        return this.item.shift()
    }
    peek(){
        return this.item[0]
    }
    display(){
        console.log(this.item.toString())
    }
  

}

class Stack{
    constructor(){
        this. queue1=new  Queue()
        this. queue2=new Queue()
    }

    // isEmpty(){
    //     return this.queue1.length==0
    // }

    push(value){
        while(!this.queue1.isEmpty()){
            this.queue2.enqueue(this.queue1.dequeue())
        }
        this.queue1.enqueue(value)
        while(!this.queue2.isEmpty()){
            this.queue1.enqueue(this.queue2.dequeue())
        }
    }

    pop(){
        if(this.queue1.isEmpty()){
            return 'underflow'
        }
        return this.queue1.dequeue()
    }

    front(){
        if(this.queue1.isEmpty()){
            return 'it is empty'
        }
        return this.queue1.peek()
    }

    display(){
        console.log('element are',this.queue1.item.toString());   
    }
}

const stack=new Stack()
stack.push(5)
stack.push(22)
stack.push(66)
stack.push(7)
stack.display()