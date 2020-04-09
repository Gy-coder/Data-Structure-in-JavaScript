


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
                arr[i] = arr[j]
            }
            while(i<j&&arr[i]<key){
                i++
            }
            if(arr[i]>key){
                arr[j] = arr[i]
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
let arr2 = [8,10,9,7,11,11,22,22,14,99,100,1001,1,-1,-10,-9,-90,-1002]
console.log(quickSort(arr2,0,arr2.length-1))
let arr3 = [10,0,-2,-9,11,19,25,-3,8,80,9,99]
console.log(quickSort(arr3,0,arr3.length-1))

