//合并两个有序链表
//1->3->5->7->9->null
//0->2->4->6->8->null
//0->1->2->3->4->5->6->7->8->9->null

const Node = require('./node')
const LinkedList = require('./LinkedList')


function ConcatList(list1,list2){
    let p = list1.head
    let q = list2.head
    let resultList = new LinkedList()
    //两个链表都存在的情况
    while(p!==null&&q!==null){
        if(p.data < q.data){
            resultList.insertAtTail(p.data)
            p = p.next
        }else{
            resultList.insertAtTail(q.data)
            q = q.next
        }
    }
    //只有一个存在
    while(p){
        resultList.insertAtTail(p.data)
        p = p.next
    }
    while(q){
        resultList.insertAtTail(q.data)
        q = q.next
    }
    return resultList
}

let list1 = new LinkedList()
for(let i=1;i<10;i+=2){
    list1.insertAtTail(i)
}
console.log(list1.print())
let list2 = new LinkedList()
for(let i=0;i<3;i+=2){
    list2.insertAtTail(i)
}
console.log(list2.print())
list3 = ConcatList(list1,list2)
console.log(list3.print())


