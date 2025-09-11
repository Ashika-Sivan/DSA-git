// convert sorted array into balancing BST

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function sortedArrayToBST(arr, start = 0, end = arr.length - 1) {
    if (start > end) return null;

    // Middle element as root
    let mid = Math.floor((start + end) / 2);
    let node = new Node(arr[mid]);

    // Recursively build left & right subtrees
    node.left = sortedArrayToBST(arr, start, mid - 1);
    node.right = sortedArrayToBST(arr, mid + 1, end);

    return node;
}

// Inorder Traversal (will print sorted array)
function inorder(root) {
    if (root) {
        inorder(root.left);
        console.log(root.value);
        inorder(root.right);
    }
}

// Example usage
let arr = [1, 2, 3, 4, 5, 6, 7];
let root = sortedArrayToBST(arr);

console.log("Inorder traversal of BST:");
inorder(root); // prints 1 to 7 in sorted order
