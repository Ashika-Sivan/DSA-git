class NodeTree{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

function fullBinaryTree(root){
    function helperFunction(node){
        if(!node)return 0
        
        if(!node.left && !node.right){//check leaf node
            return 1
        }
        if(!node.left || !node.right){//check node has only one child,either one
            return false
        }
        let leftDepth=helperFunction(node.left)
        let rightDepth=helperFunction(node.right)
        
        if(leftDepth==false||rightDepth===false)return false
        
        if(leftDepth!==rightDepth)return false
        return leftDepth+1
        
    }
    return helperFunction(root)
}


// function fullBinaryTree(root){
//     function checkBinaryTree(node){
//         if(!node){
//             return null
//         }
//         if(!node.left && !node.right){
//             return 1
//         }
        
//         if(!node.left || !node.right){
//             return false
//         }
//         let leftSubTree=checkBinaryTree(node.left)
//         let rightSubTree=checkBinaryTree(node.right)
//         if(leftSubTree==false || rightSubTree=false)return false
//         if(leftSubTree!===rightSubTree)return false
//         retur
//     }
// }

let root=new NodeTree(1)
root.left=new NodeTree(2)
root.right=new NodeTree(3)
root.left.left=new NodeTree(4)
root.left.right=new NodeTree(5)
root.right.left=new NodeTree(6)
root.right.right=new NodeTree(7)
console.log(fullBinaryTree(root))
