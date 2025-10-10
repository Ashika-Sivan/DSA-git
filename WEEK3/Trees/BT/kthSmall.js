function kthSmall(root,k){
    let arr=[]
    function dfs(node){
        if(!node)return 

        dfs(node.left)
        arr.push(node.value)
        dfs(node.right)

    }
    dfs(root)
    arr.sort((a,b)=>a-b)
    return arr[k-1]
    
}