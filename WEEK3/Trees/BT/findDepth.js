//MAXIMUM DEPTH

function findDepth(node,level,targetLevel){
    if(node===null){
        return 0//reached target level
    }
const leftDepth=findDepth(node.left,level+1,targetLevel)
const rightDepth=findDepth(node.right,level+1,targetLevel)

return Math.max(leftDepth,rightDepth)+1
}


///////////////////////////////////////////////////////////////////////////////////////////////////////
function findMinDepth(root){
    if(root===null){
        return 0
    }

    if(root.left===null){
        return findDepth(root.right)+1
    }
    if(root.right===null){
        return findDepth(root.left)+1
    }
    return Math.min(findDepth(root.left)&& findDepth(root.right))+1
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.right = new Node(6);

// The shortest path is 1 -> 3 -> 6, with a depth of 3.
// The code will correctly handle the null left child of node 3.
console.log("The minimum depth of the tree is:", minDepth(root));