class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

function sumOfLeft(root){
    if(!root)return 0
    let sum=0
    function dfs(node){
        if(!node)return 
        if(node.left &&!node.left.left &&!node.left.right){
            sum+=node.left.value
        }
        dfs(node.left)
        dfs(node.right)
    }
    dfs(root)
    return sum
}
let root=new Node(10)
 root.left=new Node(20)
 root.right=new Node(30)
 root.left.left=new Node(40)
 root.left.right=new Node(50)
 root.right.right=new Node(60)
 root.right.left=new Node(70)
console.log(sumOfLeft(root))





