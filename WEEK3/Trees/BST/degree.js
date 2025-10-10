
// //calculate the degree of node
// class Node{
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }

// function degreeOfNode(node){
//     if(!node)return 0
//     let degree=0
//     if(node.left)degree++
//     if(node.right)degree++
//     return degree
// }
// function maxDegree(root){
//     if(!root)return 0
    
//     let currNode=degreeOfNode(root)
//     let leftNode=degreeOfNode(root.left)
//     let rightNode=degreeOfNode(root.right)
//     return Math.max(currNode,leftNode,rightNode)
    
// }

// let root = new Node('A');
// root.left = new Node('B');
// root.right = new Node('C');
// root.left.left = new Node('D');
// root.left.right = new Node('E');
// console.log('degree of node',degreeOfNode(root.left.right))
// console.log('max degree of node',maxDegree(root))


