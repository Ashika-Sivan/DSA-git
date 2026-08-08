class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    print() {
        if (this.isEmpty()) {
            return "List is Empty";
        } else {
            let curr = this.head;
            let listValues = '';
            while (curr) {
                listValues += `${curr.value} `;
                curr = curr.next;
            }
            return listValues.trim();
        }
    }

    prepend(value) {
        let node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    append(value) {
        let node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let prev = this.head;
            while (prev.next) {
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size++;
    }

    insertAtIndex(value, index) {
        if (index < 0 || index > this.size) {
            return "Invalid index";
        }
        if (index === 0) {
            this.prepend(value);
            return;
        }
        let node = new Node(value);
        let curr = this.head;
        for (let i = 0; i < index - 1; i++) {
            curr = curr.next;
        }
        node.next = curr.next;
        curr.next = node;
        this.size++;
    }

    insertAfterValue(value, targetValue) {
        if (this.isEmpty()) {
            return "List is empty";
        }
        let curr = this.head;
        while (curr) {
            if (curr.value === targetValue) {
                let node = new Node(value);
                node.next = curr.next;
                curr.next = node;
                this.size++;
                return;
            }
            curr = curr.next;
        }
        return "Value not found";
    }

    deleteAtIndex(index) {
            if (index < 0 || index >= this.size) {
                return "Invalid index";
            }
            if (index === 0) {
                this.head = this.head.next;
            } else {
                let curr = this.head;
                for (let i = 0; i < index - 1; i++) {
                    curr = curr.next;
                }
                curr.next = curr.next.next;
            }
            this.size--;
    }

    // Delete element by value (first occurrence)
    deleteByValue(value) {
            if (this.isEmpty()) {
                return "List is empty";
            }
            if (this.head.value === value) {
                this.head = this.head.next;
                this.size--;
                return;
            }
            let curr = this.head;
            while (curr.next && curr.next.value !== value) {
                curr = curr.next;
            }
            if (!curr.next) {
                return "Value not found";
            }
            curr.next = curr.next.next;
            this.size--;
    }

    // Search for a value and return its index
    search(value) {
        let curr = this.head;
        let index = 0;
        while (curr) {
            if (curr.value === value) {
                return index;
            }
            curr = curr.next;
            index++;
        }
        return -1; // Not found
    }

    // Reverse the linked list
    reverse() {
        let prev = null;
        let curr = this.head;
        let next = null;
        while (curr) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
    }

    // Merge two sorted linked lists
    mergeSorted(list2) {
        let dummy = new Node(0);
        let curr = dummy;
        let p1 = this.head;
        let p2 = list2.head;

        while (p1 && p2) {
            if (p1.value <= p2.value) {
                curr.next = p1;
                p1 = p1.next;
            } else {
                curr.next = p2;
                p2 = p2.next;
            }
            curr = curr.next;
        }
        curr.next = p1 ? p1 : p2;
        this.head = dummy.next;
        this.size += list2.size;
    }

    // Convert array to linked list
    fromArray(arr) {
        this.head = null;
        this.size = 0;
        for (let value of arr) {
            this.append(value);
        }
    }

    // Remove nth node from the end
    removeNthFromEnd(n) {
        if (n <= 0 || n > this.size) {
            return "Invalid n";
        }
        let fast = this.head;
        let slow = this.head;
        for (let i = 0; i < n; i++) {
            fast = fast.next;
        }
        if (!fast) {
            this.head = this.head.next;
            this.size--;
            return;
        }
        while (fast.next) {
            slow = slow.next;
            fast = fast.next;
        }
        slow.next = slow.next.next;
        this.size--;
    }

    // Remove duplicates from an unsorted linked list
    removeDuplicates() {
        if (this.isEmpty()) return;
        let seen = new Set();
        let curr = this.head;
        let prev = null;
        while (curr) {
            if (seen.has(curr.value)) {
                prev.next = curr.next;
                this.size--;
            } else {
                seen.add(curr.value);
                prev = curr;
            }
            curr = curr.next;
        }
    }

    // Find second smallest element
    secondSmallest() {
        if (this.size < 2) {
            return "List has fewer than 2 elements";
        }
        let first = Infinity;
        let second = Infinity;
        let curr = this.head;
        while (curr) {
            if (curr.value < first) {
                second = first;
                first = curr.value;
            } else if (curr.value < second && curr.value !== first) {
                second = curr.value;
            }
            curr = curr.next;
        }
        return second === Infinity ? "No second smallest" : second;
    }

    // Print in reverse order (using recursion)
    printReverse(curr = this.head) {
        if (!curr) {
            return "";
        }
        return this.printReverse(curr.next) + `${curr.value} `.trim();
    }

    // Find middle of the linked list
    findMiddle() {
        if (this.isEmpty()) {
            return "List is empty";
        }
        let slow = this.head;
        let fast = this.head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow.value;
    }

    
    removeEven(){
        if(this.isEmpty()){
            return "list is empty"
        }if(this.head && this.head.value %2==0){
            this.head=this.head.next
            this.size--
        }else{
            let curr=this.head
            while(curr && curr.next){
                if(curr.next.value %2 ==0){
                    curr.next=curr.next.next
                    this.size--
                }else{
                    curr=curr.next
                }
            }
        }
    }

    sum(){
        if(this.isEmpty()){
            return "list is empty"
        }else{
            let sum=0
            let curr=this.head
            while(curr){
                sum+= curr.value
                curr=curr.next
            }
            return sum
        }
    }

    removeMiddle(){
        if(this.isEmpty()){
            return "list is empty"
        }
        if(this.size==1){
            this.head=null;
            this.size--
            return
        }
        let slow=this.head
        let fast=this.head
        let prev=null

        while(fast && fast.next){
            prev=slow
            slow=slow.next
            fast=fast.next.next
        }
        prev.next=slow.next
        this.size--
    }

}

// Example usage:
let list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
console.log(list.print()); // "1 2 3 4"

// Insert at index
list.insertAtIndex(5, 2);
console.log(list.print()); // "1 2 5 3 4"

// Insert after value
list.insertAfterValue(6, 5);
console.log(list.print()); // "1 2 5 6 3 4"

// Delete by index
list.deleteAtIndex(1);
console.log(list.print()); // "1 5 6 3 4"

// Delete by value
list.deleteByValue(6);
console.log(list.print()); // "1 5 3 4"

// Search
console.log(list.search(3)); // 2

// Reverse
list.reverse();
console.log(list.print()); // "4 3 5 1"

// Merge two sorted lists
let list2 = new LinkedList();
list2.append(2);
list2.append(6);
list.mergeSorted(list2);
console.log(list.print()); // "2 4 3 5 1 6" (assuming merge doesn't sort)

// Array to linked list
list.fromArray([1, 2, 3, 4]);
console.log(list.print()); // "1 2 3 4"

// Remove nth from end
list.removeNthFromEnd(2);
console.log(list.print()); // "1 2 4"

// Remove duplicates
list.fromArray([1, 2, 2, 3, 3]);
list.removeDuplicates();
console.log(list.print()); // "1 2 3"

// Second smallest
console.log(list.secondSmallest()); // 2

// Print in reverse
console.log(list.printReverse()); // "3 2 1"

// Find middle
console.log(list.findMiddle()); // 2












// BINARY TREE
// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head=null
//         this.size=0
//     }
//     isEmpty(){
//         return this.size===0
//     }
//     prepend(value){
//         let node=new Node(value)
//         if(this.isEmpty()){
//             this.head=node
//         }else{
//             node.next=this.head
//             this.head=node
//         }
//         this.size++
//     }
//     append(value){
//         let node=new Node(value)
//         if(this.isEmpty()){
//             this.head=node
//         }else{
//             let curr=this.head
//             while(curr.next){
//                 curr=curr.next
//             }
//             curr.next=node
//         }
//         this.size++
//     }
//     insertValueAtIndex(index,value){
//         if(index<0||index>this.size){
//             return 'invalid index'
//         }
//         let node=new Node(value)
        
//         if(index===1){
//             this.head=value
//             return 
//         }
//         let curr=this.head
//         for(let i=0;i<index-1;i++){
//             curr=curr.next
//         }
//         node.next=curr.next
//         curr.next=node
//         this.size++
//     }
//     insertAfterValue(target,value){
//         if(this.isEmpty()){
//             'list is empty'
//         }
//         let curr=this.head
//         while(curr){
//             if(curr.value===targetValue){
//                 let node=new Node(value)
//                 node.next=curr.next
//                 curr.next=node
//                 this.size++
//                 return 
//             }
//             curr=curr.next
//         }
//         return 'value not found'
//     }
    
//     deleteAtIndex(index){
//         if(index<0 || index>this.size){
//             return 'invalid index'
//         }
//         let curr=this.head
//         for(let i=0;i<index-1;i++){
//             curr=curr.next
            
//         }
//         curr.next=curr.next.next
//         this.size--
//         console.log(curr.value)
//     }
//     deleteByValue(value){
//         if(this.head===value){
//             this.head=this.head.next
//         }
//         let curr=this.head
//         while(curr.next&&curr.next.value!==value){
//             curr=curr.next
           
//         }
//         if(!curr.next){
//             return 'value not found'
//         }
//         curr.next=curr.next.next
//         this.size--
//     }
//     search(value){
//         let index=0
//         let curr=this.head
//         while(curr){
//             if(curr.value===value){
//                 return index
//             }
//             curr=curr.next
//             index++
//         }
//         return -1
//     }
//     reverse(){
//         let curr=this.head
//         let next=null
//         let prev=null
        
//         while(curr){
//             next=curr.next
//             curr.next=prev
//             prev=curr
//             curr=next
//         }
//         this.head=prev
//     }
//     sumOfEvenNode(){
//         let curr=this.head
//         let sum=0
//         while(curr){
//             if(curr.value%2===0){
//                 sum+=curr.value
//             }
//               curr=curr.next
//         }
//         return sum
//     }
//     search2(value){
//         if(!this.head){
//             return -1
//         }
//         let i=0
//         let curr=this.head
//         while(curr){
//             if(curr.value%2===0){
//                 return i
                
//             }
//             i++
//             curr=curr.next
//         }
//         return -1
        
//     }
//     // 1 2 3 4 5
//     // removeMiddle(){
//     //     let slow=this.head
//     //     let fast=this.head
//     //     let prev=null
//     //     let beforePrev=null
        
//     //     while(fast && fast.next){
//     //         beforePrev=prev
//     //         prev=slow
//     //         slow=slow.next
//     //         fast=fast.next.next
//     //     }
        
//     //     if(fast===null){
//     //         if(beforePrev===null){
//     //             this.head=this.head.next
//     //         }else{
//     //             beforePrev.next=prev.next
//     //         }
//     //     }else{
//     //         prev.next=slow.next
//     //     }
       
    
        
   
//     // }
//     // removeEvenIndex(){
//     //  let curr=this.head
//     //  let prev=null
//     //  let index=0
//     //  while(curr){
//     //      if(index%2===0){
//     //          if(prev===null){
//     //              this.head=curr.next
//     //          }else{
//     //              prev.next=curr.next
//     //          }
//     //      }else{
//     //          prev=curr
             
//     //      }
//     //      curr=curr.next
//     //      index++
//     //  }
        
//     // }
// //     removeEvenIndex() {
// //     // if (!this.head) return;

// //     // Remove index 0
// //     // this.head = this.head.next;
// //     // this.size--;

// //     let curr = this.head;
// //     let index = 0;

// //     while (curr && curr.next) {
// //         if (index% 2 === 0) {
// //             curr.next = curr.next.next;
// //             this.size--;
// //         } else {
// //             curr = curr.next;
// //         }
// //         index++;
// //     }
// // }
//     // sumSwap(){
//     // if(!this.head||!this.head.next ||!this.head.next.next){
//     //     return 
//     // }
//     // let prevOld=this.head.value
//     // let curr=this.head.next
//     // while(curr.next){
//     //     let currOld=curr.value
//     //     curr.value=prevOld+curr.next.value;
//     //     prevOld=currOld
//     //     curr=curr.next
//     // }
        
//     // }
//     // sumSwap(){
//     //     if(!this.head || !this.head.next || !this.head.next.next){
//     //         return 
//     //     }
//     //     let prevNode=this.head.value
//     //     let curr=this.head.next
//     //     while(curr.next){
//     //         let currNode=curr.value
//     //         curr.value=prevNode+curr.next.value
//     //         prevNode=currNode
//     //         curr=curr.next
//     //     }
//     // }
//     removeEvenIndex(){
//         let index=0
//         let curr=this.head
//         while(curr&&curr.next){
//             if(index%2===0){
//                 curr.next=curr.next.next
//                 this.size--
//             }else{
//                 curr=curr.next
//             }
//             index++
            
            
//         }
//     }
//     removeEvenNode(){
//         while(this.head && this.head.value%2===0){
//             this.head=this.head.next
//         }
//         let curr=this.head
//         let prev=null
//         while(curr&&curr.next){
//             if(curr.next.value%2===0){
//                 curr.next=curr.next.next
//             }
//             curr=curr.next
//         }
//     }
//     // removeGreaterRightVal(){
//     //   let curr=this.head
//     //   while(curr){
//     //       let temp=curr.next
//     //       let greateFound=false
           
//     //       while(temp){
//     //           if(temp.value>curr.value){
//     //               greateFound=true
//     //               break
//     //           }
//     //           temp=temp.next
//     //       }
//     //       if(!greateFound){
//     //           console.log(curr.value)
//     //       }
//     //       curr=curr.next
//     //   }
        
//     // }
//     // removeGreaterRightVal(){
//     //     let currNode=this.head
//     //     let currNext=this.head.next
//     //     let prev=null
//     //     let arr=[]
//     //     while(currNode){
//     //         if(currNode.value<currNext.value){
//     //           prev.next=currNode.next
//     //         }
           
//     //     }
        
//     //     console.log(arr)
//     //     // console.log(currNext.value)
//     // }
    
//     reverse(){
//         let next=null
//         let prev=null
//         let curr=this.head
//         while(curr){
//             next=curr.next
//             curr.next=prev
//             prev=curr
//             curr=next
//         }
//         this.head=prev
//     }
//     deleteGreaterOnRight(){
//         this.reverse()
//         let curr=this.head
//         let max=curr.value
        
//         while(curr&&curr.next){
//             if(curr.next.value<max){
//                 curr.next=curr.next.next
//             }else{
//                 curr=curr.next
//                 max=curr.value
//             }
//         }
//         this.reverse()
//     }
    
//     // removeDuplicates(){
//     //     let seen=new Set()
//     //     let curr=this.head
//     //     let prev=null
//     //     while(curr){
//     //         if(seen.has(curr.value)){
//     //             prev.next=curr.next
//     //             this.size--
//     //         }else{
//     //             seen.add(curr.value)
//     //             prev=curr
//     //         }
//     //         curr=curr.next
//     //     }
        
//     // }
//     removeDuplicates(){
//         let seen=new Set()
//         let curr=this.head
//         let prev=null
//         while(curr){
//             if(seen.has(curr.value)){
//                 prev.next=curr.next
//                 this.size--
//             }else{
//                 seen.add(curr.value)
//                 prev=curr
//             }
//             curr=curr.next
//         }
//     }
    
//     print(){
//         if(this.isEmpty()){
//             return 'list is empty'
//         }else{
//             let curr=this.head
//             let res=''
//             while(curr){
//                 res+=`${curr.value}=>`
//                 curr=curr.next
//             }
//             return res
//         }
        
//     }
    
// }
// const list=new LinkedList()
// list.append(12)
// list.append(5)
// list.append(10)
// list.append(3)
// list.append(5)
// list.append(5)
// list.append(2)
// list.append(3)
// // list.prepend(12)
// console.log(list.print())
// // list.insertValueAtIndex(2,25)
// // console.log(list.print())
// // list.deleteAtIndex(3)
// // console.log('after deleting',list.print())
// // list.reverse()
// // console.log('reverse',list.print())
// // console.log(list.sumOfEvenNode())
// // // list.removeEvenIndex()
// // // console.log(list.print())
// // list.removeEvenNode()
// // console.log(list.print())
// // list.removeEvenIndex()
// // console.log(list.print())
// // list.removeMiddle()
// // console.log('after removal of mid',list.print())
// // list.sumSwap()
// // console.log(list.print())
// // console.log(list.deleteGreaterOnRight())
// list.removeDuplicates()
// console.log(list.print())

