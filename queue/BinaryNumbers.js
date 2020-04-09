//Input : 3
//Output : [ '1', '10', '11' ]
// Input : 5
//Output : [ '1', '10', '11', '100', '101' ]

const Queue = require('./queue')

function GBN(number) {
    let s1,s2 = ''
    let result = []
    let queue = new Queue()
    queue.enqueue(1)
    for(let i=0;i<number;i++){
        result.push(String(queue.dequeue()))
        s1 = result[i] + '0'
        s2 = result[i] + '1'
        queue.enqueue(parseInt(s1))
        queue.enqueue(parseInt(s2))
    }

    return result;
}

console.log(GBN(3))
console.log(GBN(5))
console.log(GBN(7))