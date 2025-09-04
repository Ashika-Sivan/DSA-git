
class Graph{
    constructor(){
        this.adjecencyList={}
    }
    addVertex(vertex){
        if(!this.adjecencyList[vertex]){
            this.adjecencyList[vertex]=[]
        }
    }
    addEdge(vertex1,vertex2){
        if(!this.adjecencyList[vertex1]){
            this.addVertex(vertex1)
        }
         if(!this.adjecencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjecencyList[vertex1].push(vertex2)
        this.adjecencyList[vertex2].push(vertex1)
        
    }
    deleteEdge(vertex1,vertex2){
        this.adjecencyList[vertex1]=this.adjecencyList[vertex1].filter((x)=>x!==vertex2)
        
        this.adjecencyList[vertex2]= this.adjecencyList[vertex2].filter((x)=>x!==vertex1)
    }
    DFS(start){
        let stack=[start]
        let res=[]
        let visited=[start]
        
        
        while(stack.length){
            let curr=stack.pop()
            res.push(curr)
            this.adjecencyList[curr].forEach((x)=>{
                if(!visited.includes(x)){
                    stack.push(x)
                    visited.push(x)
                }
            })
        }
        return res
        
    }
    
    print(){
        for(let vertex in this.adjecencyList){
            console.log(vertex,'->',this.adjecencyList[vertex].join(','))
        }
    }
    
}
let g=new Graph()
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
console.log("DFS from A:", g.DFS("A"));
g.print()