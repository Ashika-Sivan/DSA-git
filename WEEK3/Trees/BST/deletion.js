

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
    delete(value) {
    this.root = this.deleteNode(this.root, value);
}

deleteNode(root, value) {
    // 1️⃣ Base case: If tree is empty
    if (root === null) {
        return null;
    }

    // 2️⃣ Traverse to the correct node
    if (value < root.value) {
        root.left = this.deleteNode(root.left, value);
    } 
    else if (value > root.value) {
        root.right = this.deleteNode(root.right, value);
    } 
    else {
        // 3️⃣ Node found — handle 3 cases

        // 🟢 Case 1: No left child
        if (root.left === null) {
            return root.right;
        }

        // 🟢 Case 2: No right child
        else if (root.right === null) {
            return root.left;
        }

        // 🟢 Case 3: Node with 2 children
        // Find the smallest value in the right subtree (inorder successor)
        let minNode = this.findMin(root.right);
        root.value = minNode.value;

        // Delete the inorder successor node
        root.right = this.deleteNode(root.right, minNode.value);
    }

    // Return the (possibly new) root
    return root;
}

findMin(root) {
    while (root.left !== null) {
        root = root.left;
    }
    return root;
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