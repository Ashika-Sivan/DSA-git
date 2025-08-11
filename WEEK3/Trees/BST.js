class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class binarySearchTree{
    constructor(){
        this.root=null
    }

    isEmpty(){
        return this.root ===null
    }

    insert(value){
        let newNode=new Node(value)
        if(this.isEmpty()){
            this.root=newNode
        }else{
            this.insertValue(this.root,value)
        }
    }

    insertNode(root,value){
        if(newNode.value<this.root){
            if(root.left===null){
                root.left=newNode
            }else{
                this.insertNode(root.left,newNode)
            }

        }else{
            if(root.right===null){
                root.right=newNode
            }else{
                return this.insertNode(root.right,newNode)
            }
        }


    }
}
const bst=new binarySearchTree()
console.log('tree is empty ?',bst.isEmpty())
bst.insert(10)
bst.insert(20)
bst.insert(30)
