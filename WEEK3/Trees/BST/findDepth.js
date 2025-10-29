// Simple node structure
class Node{ 
    constructor(){
         this.data = data;
    this.left = null;
    this.right = null;

    }
   
}

// Function to find depth
function getDepth(node, target) {
    if (!node) return -1;  // Node not found

    if (node.data === target) return 0; // Target found → depth 0 from itself

    // Search left subtree
    let left = getDepth(node.left, target);
    if (left !== -1) return left + 1;  // Found in left → add 1 for current edge

    // Search right subtree
    let right = getDepth(node.right, target);
    if (right !== -1) return right + 1; // Found in right → add 1 for current edge

    return -1; // Not found in either subtree
}

// Example tree
let root = new Node(10);
root.left = new Node(5);
root.right = new Node(15);
root.left.left = new Node(3);
root.left.right = new Node(7);
root.right.right = new Node(20);

console.log(getDepth(root, 3));  // Output: 2
console.log(getDepth(root, 7));  // Output: 2
console.log(getDepth(root, 15)); // Output: 1
console.log(getDepth(root, 20)); // Output: 2
