class Node{
    constructor(values){
        this.values=values
        this.left=null
        this.right=null
        
    }
}

function height(root){
    if(root==null){
        return -1
    }
    let leftHeight=height(root.left)
    let rightHeight=height(root.right)
    
    
    return Math.max(leftHeight,rightHeight)+1
}

let root=new Node(0)
root.left=new Node(10)
 root.right=new Node(10)
root.left.left=new Node(10)
root.left.right=new Node(10)
 root.right.left=new Node(10)
  root.right.left.left=new Node(10)
 console.log(height(root))


 