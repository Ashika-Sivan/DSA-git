function balanced(root){
    function check(node){
        if(!node)return 0
    
    
    let leftHeight=check(node.left)
    if(leftHeight===-1)return -1
    
    let rightHeight=check(node.right)
    if(rightHeight===-1)
    
     if(Math.abs(leftHeight-rightHeight>1)) return -1
    return Math.max(leftHeight,rightHeight)+1
    }
    return check(root)!==-1
}




