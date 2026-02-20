class Node{
    constructor(value){
        this.value=value
        this.head=null
    }
}
class LinkedList{
    constructor(){
        this.head=null
    }
    isEmpty(){
        return this.head===null
    }
    prepend(value){
        let node=new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }
    }
    splitList(head){
        let fast=head
        let slow=head
        let prev=null
        while(fast&&fast.next){
            prev=slow
            slow=slow.next
            fast=fast.next.next
        }
        if(prev){
            prev.next=null
        }
        
        return {
            firstHalf:head,
            secHalf:slow
        }
    }
    
    mergeList(l1,l2){
        const list1=l1.splitList(l1.head)
        const list2=l2.splitList(l2.head)
        
        const fHalf=list1.firstHalf
        const sHalf=list2.secHalf
        
        let curr=fHalf
        
        while(curr.next){
            curr=curr.next
        }
        curr.next=sHalf
        
        const newList=new LinkedList()
        newList.head=fHalf
        return newList
        
    }
    
    print(){
        if(this.isEmpty()){
            return 'list is empty'
        }
        let curr=this.head
        let res=''
        while(curr){
            res+=curr.value+'=>'
            curr=curr.next
        }
        return res+'null'
    }
    
}
const l1=new LinkedList()
const l2=new LinkedList()
l1.prepend(10)
l1.prepend(20)
l1.prepend(30)
l1.prepend(40)
l2.prepend(50)
l2.prepend(60)
l2.prepend(70)
l2.prepend(80)
console.log(l1.print())
console.log(l1.splitList())
const merged=l1.mergeList(l1,l2)
console.log(merged.print())