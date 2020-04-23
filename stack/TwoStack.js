// implement two stacks using a single array?


class twoStack{
    constructor(s) {
        this.items = []
        this.top1 = -1
        this.top2 = s
        this.size = s
    }
    push1(value){
        if(this.top1 + 1 === this.top2){
            console.error('栈已满')
            return false
        }else{
            this.items[this.top1] = value
            this.top1++
            return this
        }
    }
    push2(value){
        if(this.top1 + 1 === this.top2){
            console.error('栈已满')
            return false
        }else{
            this.top2--
            this.items[this.top2] = value
            return this
        }
    }
    pop1(){
        if(this.top1 === -1){
            console.error('栈1已空')
            return false
        }else{
            let value = this.items[this.top1]
            this.top1--
            return value
        }
    }
    pop2(){
        if(this.top2 === this.size){
            console.error('栈1已空')
            return false
        }else{
            let value = this.items[this.top2]
            this.top2++
            return value
        }
    }
}



let stack = new twoStack(10)
stack.push1(20)
stack.push2(10)
stack.push1(30)
stack.push2(40)
stack.push1(60)
stack.push2(50)

console.log(stack.pop1())
console.log(stack.pop2())
console.log(stack.pop1())
console.log(stack.pop1())
console.log(stack.pop2())
console.log(stack.pop2())

console.log(stack.pop1())
console.log(stack.pop2())
