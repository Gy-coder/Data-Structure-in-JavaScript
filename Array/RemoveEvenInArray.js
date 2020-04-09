function RemoveEven(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i] % 2 === 0){
            arr.splice(i,1)
            i -= 1;
        }
    }
    return arr
}
function Remove(arr,k){
    for(let j=k;j<arr.length;j++){
        arr[j] = arr[j+1]
    }
    arr.length-=k
    return arr
}

let arr = [1,2,4,5,10,6,3]
let arr2 = RemoveEven(arr)
console.log(arr2)
