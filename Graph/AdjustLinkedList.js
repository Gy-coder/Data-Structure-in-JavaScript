const Node = require('./node')
const LinkedList = require('./LinkedList')

module.exports = class Graph{
    constructor(vertices) {
        this.vertices = vertices
        this.list = []
        for(let i=0;i<this.vertices;i++){
            let temp = new LinkedList()
            this.list.push(temp)
        }
    }
    addEdge(source,destination){
        if(source<this.vertices && destination<this.vertices){
            if(source !== destination){
                this.list[source].insertAtTail(destination)
            }
        }
    }
    print(){
        console.log(`<<-----AdjustLinkedList----->>`)
        for(let i=0;i<this.vertices;i++){
            let st = `[${i}]:`
            let p = this.list[i].head
            while(p!==null){
                st += p.data
                st += '->'
                p = p.next
            }
            st += 'null'
            console.log(st)
        }
    }
}



// let g = new Graph(4)
// g.addEdge(0,1)
// g.addEdge(0,3)
// g.addEdge(1,2)
// g.addEdge(2,1)
// // console.log(g.list)
// g.print()