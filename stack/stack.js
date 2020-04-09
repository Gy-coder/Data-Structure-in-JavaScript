module.exports = class stack{
    constructor() {
        this.item = []
        this.top = null
    }
    isEmpty(){
        return this.item.length === 0
    }
    getTop(){
        if(this.isEmpty()) return null
        return this.top
    }
    size(){
        return this.item.length
    }
    push(data){
        this.item.push(data)
        this.top = data
        return this
    }
    pop(){
        let del
        if(this.isEmpty()) {
            return false
        }else if(this.item.length === 1) {
            del = this.item.pop()
            this.top = null
        }else{
            this.top = this.item[this.item.length - 2]
            del = this.item.pop()
        }
        return del
    }
}


