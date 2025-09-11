class Graph{
    constrctor(){
        this.adjecencyList={}
    }
    addVertex(vertex){
        if(!this.adjecencyList[vertex]){
            this.adjecencyList[vertex]=[]
        }
    }
    addEdge(vertex1,vertex2,weight){
        if(!this.adjecencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjecencyList[vertex2]){
            this.addVertex(vertex1)
        }
        this.adjecencyList[vertex1].push({node:vertex2,weight:weight})
        this.adjecencyList[vertex1].push({node:vertex2,weight:weight})
    }

    deleteEdge(){
        this.adjecencyList[vertex1]=this.adjecencyList[vertex1].filter((x)=>x.node!==vertex2)
        this.adjecencyList[vertex1]=this.adjecencyList[vertex1].filter((x)=>x.node!==vertex2)
    }
    DFS(start){
        const stack=[start]
        const res=[]
        const visited=new Set()
        while(stack.length){
            let curr=stack.pop()
            res.push(curr)
            this.adjecencyList[curr].forEach((x)=>{
                if(!visited.includes(x)){
                    visited.push(x)
                    stack.push(x)
                }
            })
        }
        return res
    }
}