class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

function kthSmall(){
    let res=null
    let count=0
    function inorder(node){
        if(!node||res!==null){
            inorder(node.left)
            count++
        }

        if(count===k){
            res.node.value
            return 
        }
          inorder(node.right)
    }
    inorder(root)
    return res 
}