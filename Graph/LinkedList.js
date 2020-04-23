"use strict"
const Node = require('./node')
module.exports = class LinkedList{
    constructor() {
        this.head = null
    }
    isEmpty(){
        return this.head === null
    }
    getHead(){
        return this.head
    }
    getLength(){
        if(this.isEmpty()){
            return null
        }else{
            let i = 0
            let p = this.head
            while(p !== null){
                i += 1
                p = p.next
            }
            return i
        }
    }
    print(){
        if(this.isEmpty()){
            return null
        }else{
            let p = this.head
            let st = ''
            while(p!==null){
                st += p.data
                st += '->'
                p = p.next
            }
            st += null
            return st
        }
    }
    find(value){
        let index = 0
        if(this.head === null){
            return false
        }else {
            let p =this.head
            while(p!==null){
                if(p.data === value){
                    return index
                }else{
                    index++
                    p = p.next
                }
            }
            return false
        }
    }
    findIndex(index){
        if(this.head === null){
            return false
        }else{
            let p = this.head
            let i=0
            while(p!==null){
                if(i === index){
                    return p.data
                }else {
                    i++
                    p = p.next
                }
            }
            return false
        }
    }
    insertAtHead(value){
        let newNode = new Node(value)
        if(this.isEmpty()){
            this.head = newNode
            return this.head
        }else{
            newNode.next = this.head
            this.head = newNode
        }
    }
    insertAtTail(value){
        let newNode = new Node(value)
        if(this.isEmpty()){
            this.head = newNode
            return this.head
        }else{
            let p = this.head
            while(p.next !== null){
                p = p.next
            }
            p.next = newNode
            return this.head
        }
    }
    //在POS之后插入一个节点
    insertAtPosition(pos,value){
        if(this.isEmpty()){
            return false
        }else{
            let i = 0;
            let p = this.head
            let newNode = new Node(value)
            while(p!==null){
                if(i !== pos){
                    i++
                    p = p.next
                }else{
                    newNode.next = p.next
                    p.next = newNode
                    return this
                }
            }
            return false
        }
    }
    deleteAtHead(){
        if(this.isEmpty()){
            return false
        }else{
            this.head = this.head.next
            return this
        }
    }
    deleteAtTail(){
        if(this.isEmpty()){
            return false
        }else{
            let p = this.head
            while(p.next.next != null){
                p = p.next
            }
            p.next = null
            return this
        }
    }
    deleteInNumber(number){
        if(this.isEmpty()){
            return false
        }else if(this.head.data === number){
            this.head = this.head.next
            console.log(`被删除的数据是`,number)
            return this
        }else {
            let p = this.head
            while(p.next !== null){
                if(p.next.data === number){
                    let q = p.next
                    p.next = q.next
                    console.log('被删除的数据是',q.data)
                    return this
                }else{
                    p = p.next
                }
            }
            console.log(`被删除的数据${number}不存在`)
            return false
        }
    }
}
