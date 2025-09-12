function countLeftLeaf(root){
    if(root===null){
        return 0
    }
    let count=0
   if(root.left &&(!root.left.left && !root.left.right)){
       count+=1
   }
    count+=countLeftLeaf(root.left)
    count+=countLeftLeaf(root.right)
    return count
}
let root=new Node(10)
 root.left=new Node(20)
 root.right=new Node(30)
 root.left.left=new Node(40)
 root.left.right=new Node(50)
 root.right.right=new Node(60)
 root.right.left=new Node(70)
console.log(countLeftLeaf(root))