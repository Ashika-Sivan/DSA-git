class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

function findDepth(node){
    if(!node){
        return 0
    }
    let leftDepth=findDepth(node.left)
    let rightDepth=findDepth(node.right)
    return Math.max(leftDepth,rightDepth)+1//counting each level +1
}

function isPerfect(node,depth,level=0){
    if(!node){
        return true
    }

    if(!node.left && !node.right){
        return depth===level+1
    }
    if(!node.left || !node.right){
        return false
    }
    return isPerfect(node.left,depth,level+1)&& isPerfect(node.right,depth,level+1)
}

function checkPerfectBinaryTree(root){
    const depth=findDepth(root)
    return isPerfect(root,depth)
}


const root = new Node(10);
root.left = new Node(10);
root.right = new Node(5);
root.left.right = new Node(20);
root.left.left = new Node(7);
root.right.left = new Node(30);
root.right.right = new Node(25);

console.log(checkPerfectBinaryTree(root));