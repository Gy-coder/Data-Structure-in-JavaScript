module.exports = class Graph{
    constructor(vertices){
        this.vertices = vertices
        this.list = []
        for(let i=0;i<this.vertices;i++){
            let temp = []
            for(let j=0;j<this.vertices;j++){
                temp.push(0)
            }
            this.list.push(temp)
        }
    }
    addEdge(source,destination){
        if(source<this.vertices && destination<this.vertices){
            if(source !== destination){
                this.list[source][destination] = 1
                // this.list[destination][source] = 1  写了就是无向图
            }
        }
    }
    print(){
        console.log(this.list)
    }
}


// let g1 = new Graph(5)
// g1.addEdge(1,4)
// g1.addEdge(2,3)
// g1.print()