class Graph{
    constructor(){
        this.adjList={}
    }
    addVertex(vertex){
        if(!this.adjList[vertex]){
            this.adjList[vertex]=[]
        }
    }
    addEdge(vertex1,vertex2){
        if(!this.adjList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjList[vertex2]){
            this.addVertex(vertex2)
        }

        this.adjList[vertex1].push(vertex2)
        this.adjList[vertex2].push(vertex1)
    }

    removeEdge(vertex1,vertex2){
        this.adjList[vertex1]=this.adjList[vertex1].filter((v)=>v!==vertex2)
        this.adjList[vertex2]=this.adjList[vertex2].filter((v)=>v!==vertex1)
    }

    DFS(){
        let stack=[]
        
    }
    

}