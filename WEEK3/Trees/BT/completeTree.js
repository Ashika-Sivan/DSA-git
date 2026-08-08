
function complete(root){
    let found=false
    let queue=[root]
    while(queue.length){
        let curr=queue.shift()
        if(curr==null){
            found=true
        }else{
            if(found)return false//found a non nul after a null
            queue.push(curr.left)
            queue.push(curr.right)
        }
    }
    
    return true
}
let root2 = new Node(1);
root2.left = new Node(2);
root2.right = new Node(3);
root2.left.left = new Node(4);
root2.right.right = new Node(6); // missing left child → not complete

// console.log(isComplete(root2)); // 

console.log(complete(root2)); 
































