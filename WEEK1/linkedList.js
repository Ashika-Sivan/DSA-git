class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class LinkedList{
    constructor(){
        this.head=null
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }
    getSize(){
        return this.size
    }

    prepend(value){
        let node=new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }

    append(value){
       let node=new Node(value)
       if(this.isEmpty()){
        this.head=node
       }else{
        let prev=this.head
        while(prev.nexr){
            prev=prev.next
        }
        prev.next=node;
       }
       this.size++
        
    }

    insertAtIndex(index){
        
    }
}