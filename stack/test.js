const Stack = require('./stack')


var myStack = new Stack();

for (var i = 0; i < 5; i++) {
    myStack.push(i);
}
console.log(myStack.item)
console.log(myStack.getTop())

console.log('当前出栈:'+ myStack.pop());
console.log('当前栈顶:'+ myStack.getTop())


console.log('当前出栈:'+ myStack.pop());
console.log('当前栈顶:'+ myStack.getTop())
console.log('当前出栈:'+ myStack.pop());
console.log('当前栈顶:'+ myStack.getTop())
console.log(myStack.item)