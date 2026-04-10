function thirdLargest(){
    let count=0
    let res=null
    function reversing(node){
        if(!node ||count>=3)return //if node is full or if we already visited more that 3 nodes
        reversing(node.right)
        count++
        
        if(count===3){
            res=node.value
            return 
        }
        reversing(node.left)
        
    }
    reversing(root)
    return res
}