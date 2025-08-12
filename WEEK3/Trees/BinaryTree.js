//[10,20,30,40]
class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
class binaryTree{
    constructor(){
        this.root=null
    }
    isEmpty(){
        return this.root===null
    }

    insert(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.root=node
            return 
        }else{
            let queue=[this.root]
            while(queue.length){
                let curr=queue.shift()
                if(!curr.left){
                    curr.left=node
                    return
                }else{
                    queue.push(curr.left)

                }
                if(!curr.right){
                    curr.right=node
                    return 
                }else{
                    queue.push(curr.right)
                }
            }
        }
    }

    search(value,node=this.root){
        if(!node){
            return false
        }else{
            if(node.value===value){
                return true
            }else{
                return this.search(value,node.left)||this.search(value,node.right)
            }
        }
    }
       preOrder(node=this.root){
        if(node){
            console.log(node.value);
            this.preOrder(node.left)
            this.preOrder(node.right)
            
        }
       }

       postOrder(node=this.root){
        if(node){
            this.postOrder(node.left)
            this.postOrder(node.right)
            console.log(node.value)
        }
       }

       inOrder(node=this.root){
        this.inOrder(node.left)
        console.log(node.value);
        this.inOrder(node.right)
        
       }
}

// let tree=new binaryTree()
// tree.insert(10)
// tree.insert(20)
// tree.insert(30)
// tree.insert(0)
// tree.insert(2)
// tree.insert(7)
// tree.insert(20)
// tree.insert(9)
// tree.insert(1)
// tree.inOrder()


//BFS
// let queue=[this.root]
// while(queue.length){
//     let curr=queue.shift()
//     console.log(curr)
//     if(!curr.left){
//         queue.push(curr.left)
//     }else{
//         queue.push(curr.right)
//     }
// }





























