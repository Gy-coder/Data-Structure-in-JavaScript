//逆序链表，LeetCode 21题
const Node = require('./node')
const LinkedList = require('./LinkedList')


function ReverseList(list){
    if(list.isEmpty()){
        return null
    }else{
        let p = list.head
        while(p.next!==null) {
            let q = p.next
            p.next = q.next
            q.next = list.head
            list.head = q
        }
        return list
    }
}

// 1(p)->2(q)->3->4->5->null    p.next = q.next   1->3->4->5->null  2(q)         5->4->3->2->1->null
// 2->1->3->4->5->null
// 3->2->1->4->5->null
// 4->3->2->1->5->null
// 5->4->3->2->1->null

const list1 = new LinkedList()
list1.insertAtHead(50)
list1.insertAtHead(40)
list1.insertAtHead(30)
list1.insertAtHead(20)
list1.insertAtHead(10)
console.log(list1.print())

let list2 = ReverseList(list1)
console.log(list2.print())



let list3 = new LinkedList()
for(let i=0;i<5;i++){
    list3.insertAtTail(i)
}
console.log(list3.print())
console.log(ReverseList(list3).print())
