const Node = require('./node')
const LinkedList = require('./LinkedList')
const list1 = new LinkedList()
list1.insertAtHead(50)
list1.insertAtHead(40)
list1.insertAtHead(30)
list1.insertAtHead(20)
list1.insertAtHead(10)
console.log(list1.print())