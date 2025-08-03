//stack using queue
class Stack{
    constructor(value){
        const items=new Array()
    }
    isEmpty(){
        return this.items.length===0
    }
    push(value){
        return this.items.push(value)
    }
    pop(){
        if(this.isEmpty()){
            return 'underflow'
        }
        return this.items.pop()
    }
    peek(){
        if(this.isEmpty()){
            return 'list is emoty'
        }
        return this.items[this.items.length-1]
    }

    print(){
        console.log(this.items.toString());
        
    }
}

class Queue{
    constructor(){
        const stack1=new Stack()
        const stack2=new Stack()
    }
    isEmpty(){
        return this.stack1.length===0
    }

    enqueue(value){
        while(!this.stack1.isEmpty()){
            return this.stack2.push(this.stack1.pop())
        }
        this.stack1.push(value)
        while(!this.stack2.isEmpty()){
            return this.stack1.push(this.stack2.pop())
        }
    }

    front(){
        if(this.stack1.isEmpty()){
            return null
        }return stack1.peek()
    }

    display(){
        console.log(this.stack1.toString());
        
    }
}