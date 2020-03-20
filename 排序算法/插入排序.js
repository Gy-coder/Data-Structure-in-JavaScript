let insertSort = (arr)=>{
    let result = []
    for(let i=0;i<arr.length;i++){
        result.push(arr[i])
        for(j=result.length;j>0;j--){
            if(result[j]<result[j-1]){
                swap(result,j,j-1)
            }
        }
    }
    return result
}

function swap(arr,i,j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}


arr = [3,2,10,1,2,5,23,4,90,19]
console.log(insertSort(arr))