class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

function kthSmallest(root, k) {
    let count = 0
    let result = null

    function inorder(node) {
        if (!node || result !== null) return

        inorder(node.left)

        count++
        if (count === k) {
            result = node.value
            return
        }

        inorder(node.right)
    }

    inorder(root)
    return result
}