class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

function removeMiddle(head,k){
    let fast=head
    let slow=head
    for(let i=0;i<6;i++){
        fast=fast.next
    }
    let prev=null
    
    while(fast){
        fast=fast.next
        slow=slow.next
        prev=slow
    }
    let temp=slow
    for(let i=0;i<6;i++){
        temp=temp.next
    }
     prev.next = temp;
     return head;
}
