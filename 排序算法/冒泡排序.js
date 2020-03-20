let swap =(arr,i,j) =>{
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}


let bubbleSort =  arr =>{
    for(let i=arr.length;i>1;i--){
        for(let j=0;j<arr.length;j++){
            if(arr[j]>arr[j+1]){
                swap(arr,j,j+1)
            }
        }
    }
    return arr
}


let arr = [9,7,10,2,4,5,6]
console.log(bubbleSort(arr))