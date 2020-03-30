const Node = require('./node')
const LinkedList = require('./LinkedList')


function findNth(list,k){
    let p = list.head
    let q = list.head
    let i=0;
    //k越界
    if(k > list.getLength()){
        return false
    }
    //先让p走k个位置
    while(i<k){
        p = p.next
        i++
    }
    //p不等于Null 就一起走 永远保持k距离的差距
    while(p!=null){
        p = p.next
        q = q.next
    }
    return q.data
}

let list1 = new LinkedList()
for(let i=0;i<10;i++){
    list1.insertAtTail(i)
}
console.log(list1.print())
console.log(findNth(list1,2))