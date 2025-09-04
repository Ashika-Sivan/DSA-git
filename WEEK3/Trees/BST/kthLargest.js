// function kthSmallest(root,k){
//     let count=0
//     let res=null
    
//     function reverseOrder(node){
//         if(!node || res!==null){
//             return
//         }
//         inorderTraversal(node.right)
//         count++
        
//         if(count==k){
//             res=node.value
//             return 
//         }
//         inorderTraversal(node.left)
        
        
//     }
//     inorderTraversal(root)
//     return res
// }


class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findLargest(root) {

  if (root === null) {
    return null; 
  }

  let current = root;

  while (current.right !== null) {
    current = current.right;
  }


  return current.value;
}


const root = new Node(15);
root.left = new Node(10);
root.right = new Node(20);
root.left.left = new Node(8);
root.left.right = new Node(12);
root.right.left = new Node(18);
root.right.right = new Node(25);

// Find the largest element
const largestValue = findLargest(root);
console.log("The largest element in the BST is:", largestValue); // Output: 25