//CHECK THE BINARY TREE IS FULL
function fullBinaryTree(root){
    if(!root)return 0

    if(!root.left && !root.right){
        return 1
    }

    if(root.left && root.right){
        let lefttDepth=this.fullBinaryTree(root.left)
        let rightDepth=this.fullBinaryTree(root.right)
    }

    if(leftDepth===fasle || rightDepth===false)return false

    if(lefttDepth===rightDepth){
        return leftDepth + 1;
    }else{
        return false
    }
}