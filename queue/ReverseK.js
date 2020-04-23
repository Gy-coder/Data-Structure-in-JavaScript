// 翻转队列的前K个元素

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




function ReverseK(queue,k){
    let mystack = new Stack()
    for(let i = 0;i < k;i++){
        mystack.push(queue.dequeue())
    }
    let size
    for(let i = 0;i < k;i++){
        queue.enqueue(mystack.pop())
        size = queue.size()
    }
    for(let i = 0;i < (size-k);i++){
        queue.enqueue(queue.dequeue())
    }
    return queue
}



let queue1 = new Queue()
for(let i=1;i<10;i++){
    queue1.enqueue(i)
}
console.log(queue1.item)

console.log(ReverseK(queue1,5))