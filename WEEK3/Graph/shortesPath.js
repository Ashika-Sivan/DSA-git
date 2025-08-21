function shortestPath(g, start, end) {
    let queue = [[start]];
    let visited = new Set([start]);

    while (queue.length) {
        let path = queue.shift();
        let node = path[path.length - 1];

        if (node === end) {
            return path;
        }

        for (let neighbor of g.adjList.get(node)) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push([...path, neighbor]);
            }
        }
    }
    return null;
}
