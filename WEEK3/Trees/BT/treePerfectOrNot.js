//inorder to check the binary tree is perfect or not,we have to  check the depth of th etree

//HERE DEPTH MEANS :-levels
//so we have to iterate the tree from the  root to node===null,so first we have to find the depthe of the tree 

class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

function findDepth(node){
    let depth=0
    while(node!==null){
        depth++
        node=node.left
    }
    return depth
}


function isPerfect(node,depth,level=0){//here the start level that is root is 0
    //base case
    if(node==null){
        return true
    }
    //leaf node check
    if(node.left==null && node.right==null){
        return depth==level+1;
    }
    if(node.left==null||node.right==null){
        return false
    }
    return isPerfect(node.left,depth,level+1)&& isPerfect(node.right,depth,level+1)

}

function checkPerfectBinary(root){
    const depth=findDepth(root)
    return isPerfect(root,depth)
}