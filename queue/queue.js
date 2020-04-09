module.exports = class queue{
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