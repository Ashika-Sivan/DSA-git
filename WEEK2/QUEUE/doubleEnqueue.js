class doubleEnqueued{
    constructor(){
        this.items=[]
    }
    isEmpty(){
        return this.items.length===0
    }
    addFront(value){
        this.items.unshift(value)
    }
    addEnd(value){
        this.items.push(value)
    }
    removeFront(){
        if(this.isEmpty()){
            return 'under flow'
        }
        return this.items.shift()
    }
    removeBack(){
        if(this.isEmpty()){
            return 'under flow'
        }
        return this.items.pop()
    }
    getFront(){
        if(this.isEmpty()){
            return 'empty'
        }
        return  this.items[0]
    }
    getBack(){
        if(this.isEmpty()){
            return 'empty'
        }
        return this.items[this.items.length-1]
    }
    display(){
        console.log(this.items.join(' > '))
    }
}
const queue=new doubleEnqueued()
queue.addFront(20)
queue.addFront(10)
queue.addEnd(30)
queue.addEnd(40)
queue.display()











