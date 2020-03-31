function findMin(arr){
    let min = arr[0]
    for(let i of arr){
        if(min > i){
            min = i
        }
    }
    return min
}


let arr = [9,1,2,8,7]
let arr2 = [10,80,90,9,5,7,8,6]
console.log(findMin(arr))
console.log(findMin(arr2))