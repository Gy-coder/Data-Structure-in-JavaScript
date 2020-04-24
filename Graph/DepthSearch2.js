const Graph = require('./AdjustMatrix')


class Stack{
    constructor() {
        this.item = []
        this.top = null
    }
    isEmpty(){
        return this.item.length === 0
    }
    getTop(){
        if(this.isEmpty()) return null
        return this.top
    }
    size(){
        return this.item.length
    }
    push(data){
        this.item.push(data)
        this.top = data
        return this
    }
    pop(){
        let del
        if(this.isEmpty()) {
            return false
        }else if(this.item.length === 1) {
            del = this.item.pop()
            this.top = null
        }else{
            this.top = this.item[this.item.length - 2]
            del = this.item.pop()
        }
        return del
    }
}




function dfs_search(g){
    if(g.vertices<1) return null
    let visited = []
    for(let i=0;i<g.vertices;i++){
        visited.push(false)
    }
    let obj = {result:''}
    for(let i=0;i<g.vertices;i++){
        dfs_search_help(g,i,visited,obj)
    }
    return obj.result
}


function dfs_search_help(g, source, visited, obj) {
    let stack = new Stack()
    stack.push(source)
    visited[source] = true
    while(!stack.isEmpty()){
        let CurrentNode = stack.pop()
        obj.result += String(CurrentNode)
        for(let i=0;i<g.vertices;i++){
            if(g.list[CurrentNode][i] === 1 && visited[i] === false && visited[CurrentNode] === false){
                stack.push(i)
                visited[i] = true
            }
        }
    }
}


let g1 = new Graph(5)
g1.addEdge(1,2)
g1.addEdge(1,0)
g1.addEdge(4,3)
g1.print()
console.log(dfs_search(g1))

let g2 = new Graph(4)
g2.addEdge(0,2)
g2.addEdge(0,1)
g2.addEdge(1,3)
g2.addEdge(2,3)
g2.print()
console.log(dfs_search(g2))