function hasCycleDirected(graph){
    let visited=new Set()
    let visiting=new Set()
    function DFS(node){
        if(visiting.has(node))return true
        if(visited.has(node))return false
        visiting.add(node)
        
        for(let neighbour of graph.get(node)||[]){
            if(DFS(neighbour))return true
        }
        //delete the path
        visiting.delete(node)//A
        visited.add(node)//A
        
        return false
    }
    //all node for disconnected graph
    for(let node of graph.keys()){
        if(!visited.has(node)){
            if(DFS(node))return true
        }
    }
   return false
}

const graph = new Map([
  ['A', ['B']],
  ['B', ['C']],
  ['C', ['A']],  // forms a cycle A → B → C → A
  ['D', ['E']],
  ['E', []]      // no cycle here
]);

const res=hasCycleDirected(graph)
if(res){
    console.log('cyle found in graph')
}else{
    console.log('graph has no cycle')
}














// function hasCycleDirected(graph) {
//     let visited = new Set();
//     let visiting = new Set();

//     function DFS(node) {
//         if (visiting.has(node)) return true;   // found a cycle
//         if (visited.has(node)) return false;   // already checked this node

//         visiting.add(node);

//         for (let neighbor of graph.get(node) || []) {
//             if (DFS(neighbor)) return true;
//         }

//         visiting.delete(node); // finished exploring node
//         visited.add(node);

//         return false;
//     }

//     // start DFS from your first node (since connected)
//     return DFS("A");
// }
// //