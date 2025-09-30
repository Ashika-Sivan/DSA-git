
//BST
class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
class BST{
    constructor(){
        this.root=null
    }
    isEmpty(){
        return this.root===null
    }
    insert(value){
       let node=new Node(value)
       if(this.isEmpty()){
           this.root=node
           return 
       }else{
           this.insertNode(this.root,node)
       }
    }
    insertNode(root,node){
        if(node.value<root.value){
            if(root.left===null){
                root.left=node
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(root.right===null){
                root.right=node
            }else{
                this.insertNode(root.right,node)
            }
        }
    }

     search(root,value){
        if(root){
            if(root.value===value){
                return true
            }else if(value<root.value){
                this.search(root.left,value)
            }else{
                this.search(root.right,value)
            }
        }
        return false
    }
    
      preOrder(root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    
    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }
    
    BFS(){
        let queue=[this.root]
        while(queue.length){
            let curr=queue.shift()
            console.log(curr.value)
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }
}
const bst=new BST()
bst.insert(10)
bst.insert(20)
bst.insert(40)
bst.insert(30)
// bst.preOrder(bst.root)
bst.postOrder(bst.root)