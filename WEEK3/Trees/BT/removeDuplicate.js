
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
function removeDuplicate(root,seen=new Set()){
    if(!root)return null
    if(seen.has(root.value)){
        return null
    }
    seen.add(root.value)
    root.left=removeDuplicate(root.left,seen)
    root.right=removeDuplicate(root.right,seen)
    return root
    
}

let root = new Node(10);
root.left = new Node(5);
root.right = new Node(15);
root.left.left = new Node(10);   // duplicate
root.left.right = new Node(7);
root.right.left = new Node(5);   // duplicate

console.log(removeDuplicate(root))