//链表去重 LeetCode 83
const Node = require('./node')
const LinkedList = require('./LinkedList')





function  RemoveDuplicate(list) {
    if(list.head === null){
        return false
    }
    let p = list.head
    while(p!==null){
        let q = p
        while(q!==null&&q.next!==null){
            if(q.next.data === p.data){
                let k = q.next
                q.next = k.next
            }else{
                q = q.next
            }
        }
        p = p.next
    }
    return list
}
const list1 = new LinkedList()
list1.insertAtTail(10)
list1.insertAtTail(10)
list1.insertAtTail(10)
list1.insertAtTail(10)
list1.insertAtTail(10)
list1.insertAtTail(20)
list1.insertAtTail(20)
list1.insertAtTail(20)
list1.insertAtTail(30)
list1.insertAtTail(30)
console.log(list1.print())
let list2 = RemoveDuplicate(list1)
console.log(list2.print())



let list3 = new LinkedList()
list3.insertAtTail(1)
list3.insertAtTail(2)
list3.insertAtTail(3)
list3.insertAtTail(1)
list3.insertAtTail(3)
list3.insertAtTail(2)
list3.insertAtTail(1)
list3.insertAtTail(3)
list3.insertAtTail(1)
list3.insertAtTail(3)
console.log(list3.print())
let list4 = RemoveDuplicate(list3)
console.log(list4.print())
