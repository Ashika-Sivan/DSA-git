class Stack{
    constructor(value){
        this.items=new Array()
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
            return 'list is empty'
        }
        return this.items[this.items.length-1]
    }

    print(){
        console.log(this.items.toString())
    }
}
const stack=new Stack()