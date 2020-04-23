//使用邻接表实现

const Graph = require('./AdjustLinkedList.js')
const LinkedList = require('./LinkedList.js')
const Node = require('./node.js')
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
    let visited = []
    for(let i=0;i<g.vertices;i++){
        visited.push(false)
    }
    let obj = {result:'广度优先搜索:'}
    for(let i=0;i<g.vertices;i++){
        if(visited[i] === false){
            bfs_search_helper(g,i,visited,obj)
        }
    }
    return obj.result
}


function bfs_search_helper(g, i, visited, obj) {
    let queue = new Queue()
    queue.enqueue(i)
    visited[i] = true
    while(!queue.isEmpty()) {
        let CurrentNode = queue.dequeue()
        obj.result += String(CurrentNode)
        let temp = g.list[i].head
        while (temp !== null) {
            if (visited[temp.data] === false) {
                queue.enqueue(temp.data)
                visited[temp.data] = true
            }
            temp = temp.next
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