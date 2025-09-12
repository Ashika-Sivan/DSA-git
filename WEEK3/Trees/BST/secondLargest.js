class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

function secondlarge(root){
    if(!root && (!root.left && !root.right)){
        return null
    }
    if(!root.right &&root.left){
        let curr=root.left
        while(curr.right){
            curr=curr.right
        }
        return curr.value
    }
    if(root.right && !root.right.left && !root.right.right){
        return root.value
    }
    return secondlarge(root.right)
}
const root = new Node(20);
root.left = new Node(10);
root.right = new Node(30);
root.left.left = new Node(5);
root.left.right = new Node(15);
root.right.left = new Node(25);
root.right.right = new Node(40);
root.right.right.left = new Node(35);
root.right.right.right = new Node(50);
root.right.right.right.left = new Node(45);

console.log(secondlarge(root))