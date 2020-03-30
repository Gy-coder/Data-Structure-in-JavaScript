const Node = require('./node')
const LinkedList = require('./LinkedList')


function detectLoop(list) {
    let cycle = false; //Set to true or false
    let p = list.head
    let q = list.head
    while(q!==null&&p!==null&&q.next.next!==null){
        p = p.next
        q = q.next.next
        if(p === q){
            cycle = true
            return cycle
        }
    }
    return cycle;
}
let list1 = new LinkedList()
for(let i=0;i<10;i++){
    list1.insertAtTail(i)
}
console.log(detectLoop(list1))

// ---------------------构造循环链表---------------------------
let list2 = new LinkedList()
for(let i=0;i<10;i++){
    list2.insertAtTail(i)
}
let p = list2.head
while(p.next!==null){
    p = p.next
}
p.next = list2.head
console.log(detectLoop(list2))

//----------------------------------------------------



