let swap = (arr,i,j) =>{
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}


let quickSort = (arr,begin,end) =>{
    if(begin<end){
        let i = begin
        let j = end
        let key = arr[i]
        while(i<j){
            while(i<j&&arr[j]>key){
                j--
            }
            if(arr[j]<key){
                swap(arr,i,j)
            }
            while(i<j&&arr[i]<key){
                i++
            }
            if(arr[i]>key){
                swap(arr,i,j)
            }
        }
        arr[i] = key
        quickSort(arr,begin,i-1)
        quickSort(arr,i+1,end)
        return arr
    }
}


let arr = [9,7,10,2,4,5,6]
console.log(quickSort(arr,0,6))