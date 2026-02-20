
class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
function perfectBt(root){
    let depth=findDepth(root)
    return checkPerfect(root,depth,0)
}

function findDepth(node){
    if(!node)return null
    let leftHeight=findDepth(node.left)
    let rightHeight=findDepth(node.right)
    return Math.max(leftHeight,rightHeight)+1
}

function checkPerfect(node,depth,level){
    if(!node)return true//empty subtree is always valid
    if(node.left===null && node.right===null){
        return depth===level+1
    }
    if(node.left==null ||node.right==null)return false
    return checkPerfect(node.left,depth,level+1)&&checkPerfect(node.right,depth,level+1)
}

const root = new Node(10);
root.left = new Node(15);
root.right = new Node(5);
root.left.right = new Node(20);
root.left.left = new Node(7);
root.right.left = new Node(30);
root.right.right = new Node(25);
console.log(perfectBt(root))