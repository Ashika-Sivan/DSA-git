function thirdLargest(){
    let count=0
    let res=null
    function reversing(node){
        if(!node ||count>3)return 
        reversing(node.right)
        count++
        
        if(count===3){
            res=node.value
            retrun 
        }
        reversing(node.left)
        
    }
    reversing(this.root)
    return res
}