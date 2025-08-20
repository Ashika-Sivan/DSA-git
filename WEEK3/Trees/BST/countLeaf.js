//BST
class TreeNode{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
    
    function countLeafNode(root){
        if(root==null){
            return 0
        }
        if(root.left==null && root.right===null){
            return 1
            
        }
        return countLeafNode(root.left)+countLeafNode(root.right)
    }


    //if the node which doesnt have child node(left or right node) it is a leaf node    