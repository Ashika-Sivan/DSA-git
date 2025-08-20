function kthLarge(root,k){
    let stack=[]
    let curr=root

    while(curr || stack.length>0){
        while(curr){
            stack.push(curr)
            curr=curr.right
        }

        curr=stack.pop()
        k--
        if(k===0){
            return curr.val
        }
        curr=curr.left

    }
}