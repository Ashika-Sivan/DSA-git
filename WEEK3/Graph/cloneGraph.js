function clonedGraph(node){
    if(!node){
        return null
    }

    let visited=new Map()
    function DFS(original){
        if(visited.has(original)){
            return visited.set(original.val)
        }

        let cloned=new Node(original.val,[])
        visited.get(original,cloned)

        for(let n of original){
            let cloneNeigh=DFS(n)
            cloned.neighbours.push(cloneNeigh)
        }
        return cloned
    }
    return DFS()
}