const Graph = require('./AdjustMatrix')


class Queue{
    constructor() {
        this.item = []
    }
    isEmpty(){
        return this.item.length === 0
    }
    getFront(){
        if(this.isEmpty()){
            return null
        }else {
            return this.item[0]
        }
    }
    size(){
        return this.item.length
    }
    enqueue(value){
        this.item.push(value)
    }
    dequeue(){
        if(this.isEmpty()){
            return null
        }else{
            return this.item.shift()
        }
    }
}


function bfs_search(g){
    if(g.vertices<1) return null
    let obj = {result:'广度优先搜索:'}
    let visited = []
    for(let i=0;i<g.vertices;i++){
        visited.push(false)
    }
    for(let i=0;i<g.vertices;i++){
        if(visited[i] === false){
            bfs_search_help(g,i,visited,obj)
        }
    }
    return obj.result
}


function bfs_search_help(g, source, visited, obj) {
    let queue = new Queue()
    queue.enqueue(source)
    visited[source] = true
    while(!queue.isEmpty()){
        let CurrentNode = queue.dequeue()
        obj.result += String(CurrentNode)
        for(let j=0;j<g.vertices;j++){
            if(visited[j] === false && visited[CurrentNode] === false && g.list[CurrentNode][j] === 1){
                queue.enqueue(j)
                visited[source] = true
            }
        }
    }
}
let g1 = new Graph(5)
g1.addEdge(1,2)
g1.addEdge(1,0)
g1.addEdge(4,3)
g1.print()
console.log(bfs_search(g1))

let g2 = new Graph(4)
g2.addEdge(0,2)
g2.addEdge(0,1)
g2.addEdge(1,3)
g2.addEdge(2,3)
g2.print()
console.log(bfs_search(g2))