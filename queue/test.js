const Queue = require('./queue')
let myqueue = new Queue()
console.log('a new queue:'+ myqueue.item)
console.log(myqueue.item)

for(let i=0;i<5;i++){
    myqueue.enqueue(i)
    console.log(myqueue.item)
}
console.log(myqueue.size())
for(let i=0;i<myqueue.item.length;i++){
    console.log(`i:${i}`)
    console.log(`myqueue.item.length:${myqueue.item.length}`)
    myqueue.dequeue()
    console.log(myqueue.item)
}