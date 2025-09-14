class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

function finding(root){
    let depth=findDepth(root)
    return isPrfect(root,depth,level)
}

function findDepth(node){
    let depth=0
    while(node){
        depth++
        node=node.left
    }
    return depth
}

function isPrfect(node,depth,level=1){
    if(node==null)return true

    if(node.left==null && node.right===null){
        return depth===level
    }

    if(node.left==null || node.right===null){
        return false
    }
    return isPrfect(node.left,depth,level+1)&&isPrfect(node.right,depth,level+1)
}