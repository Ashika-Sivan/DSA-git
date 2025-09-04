
class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

function isPerfect(root){
    let depth=findDepth(root)
    return checkPerfect(root,depth,0)
}

function findDepth(node){
    let depth=0
    while(node!==null){
        depth++
        node=node.left
    }
    return depth
}
function checkPerfect(node,depth,level){
    if(node==null){
        return true
    }
    
    if(node.left===null && node.right==null){
        return depth===level+1
    }
    
    if(node.left==null && node.right==null){
        return false
    }
    return checkPerfect(node.left,depth,level+1)
    checkPerfect(node.right,depth,level+1)
}
const  root=new Node(10)
root.left=new Node(10)
root.right=new Node(5)
root.left.right=new Node(20)
root.left.left=new Node(7)
root.right.left=new Node(30)
root.right.right=new Node(25)
console.log(isPerfect(root))