function findSecondLarges(root){
       if(!root || (!root.right && !root.left)){
           console.log('tree must have 2 node')
       }
       let curr=root
       while(curr){
           if(curr.right && !curr.right.left && !curr.right.left){
               return curr.value
           }
           
           if(!curr.right && curr.left){
               return 
           }
       }
   }
   function findLarges(node){
       while(node.right){
           node=node.right
       }
       return node.value
   }


//         10
//       /    \
//      5      15
//     / \    / \
//    2   7  12  20