let mergeSort = arr=>{
    if(arr.length<2){
        return arr
    }else{
        let mid = Math.floor(arr.length/2)
        let left,right = []
        left = arr.slice(0,mid)
        right = arr.slice(mid)
        return merge(mergeSort(left),mergeSort(right))
    }
}

let merge = (a,b) =>{
    let result = []
    while(a.length&&b.length){
        if(a[0]<b[0]){
            result.push(a[0])
            a = a.slice(1)
        }else{
            result.push(b[0])
            b = b.slice(1)
        }
    }
    while(a.length){
        result.push(a[0])
        a = a.slice(1)
    }
    while(b.length){
        result.push(b[0])
        b = b.slice(1)
    }
    return result
}

arr = [9,2,3,1,10,6,8,7]
console.log(mergeSort(arr))