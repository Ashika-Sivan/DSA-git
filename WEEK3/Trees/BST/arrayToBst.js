class TreeNode{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

function sortedArrBst(arr){
    if(!arr.length){
        return null
    }
    
    function buldBst(left,right){
        //base case
        if(left>right){
            return null 
        }
        let mid=Math.floor((left+right)/2)
        let node=new TreeNode(arr[mid])
        
        node.left=buldBst(left,mid-1)
        node.right=buldBst(mid+1,right)
        return node
    }
    return buldBst(0,arr.length-1)
}
let arr=[-10,-3,0,5,9]
let bstRoot=sortedArrBst(arr)
console.log(JSON.stringify(bstRoot,null,2))