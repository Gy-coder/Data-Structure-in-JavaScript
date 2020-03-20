let swap = (arr,i,j) =>{
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] =temp
}

let selectSort = (arr) =>{
    for(let i=0;i<arr.length;i++){
        let minCurrent = arr[i]
        for(let j=i;j<arr.length;j++){
            if(arr[j]<minCurrent){
                minCurrent = arr[j]
            }
        }
        let minIndex = arr.indexOf(minCurrent)
        swap(arr,minIndex,i)
    }
    return arr
}



arr = [9,7,1,2,4,5,6]
console.log(selectSort(arr))