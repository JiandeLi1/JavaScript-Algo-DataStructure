const graph = new Map();
graph.set('A', new Array('B', 'C'));
graph.set('B', new Array('A', 'C', 'D'));
graph.set('C', new Array('A', 'B', 'D', 'E'));
graph.set('D', new Array('B', 'C', 'E', 'F'));
graph.set('E', new Array('C', 'D'));
graph.set('F', new Array('D'));

const BFS = (graph, start) => {
    let queue = [];
    let seen = [];
    queue.push(start);
    seen.push(start);
    console.log('BFS:')
    while (queue.length) {
        let per = queue.shift();
        let node = graph.get(per);
        node.forEach(item => {
            if (!seen.includes(item)) {
                queue.push(item);
                seen.push(item);
            }
        })
        console.log(per);
    }
    console.log('---------------------')
}



const DFS = (graph, start) => {
    let stack = [];
    let seen = [];
    stack.push(start);
    seen.push(start);
    console.log('BFS:')
    while (stack.length) {
        let per = stack.pop();
        let node = graph.get(per);
        node.forEach(item => {
            if (!seen.includes(item)) {
                stack.push(item);
                seen.push(item);
            }
        })
        console.log(per);
    }
    console.log('---------------------')
}

const shortestPath = (graph, start,end) => {
    let queue = [];
    let seen = [];
    let parent = new Map();
    queue.push(start);
    seen.push(start);
    console.log(`Shortest path for ${start} to ${end}:`)
    while (queue.length) {
        let per = queue.shift();
        let node = graph.get(per);
        node.forEach(item => {
            if (!seen.includes(item)) {
                queue.push(item);
                seen.push(item);
                parent.set(item,per);
            }
        })
    }
    let path = [end];
    let node = parent.get(end);
    while (node) {
        path.push(node);
        node = parent.get(node);
    }

    for (let i = path.length - 1; i >= 0; i--) {
        console.log(path[i])
    }

}

BFS(graph, 'A');
DFS(graph, 'A');
shortestPath(graph,'E','B')