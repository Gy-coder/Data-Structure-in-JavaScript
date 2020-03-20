let countSort = arr =>{
    let result =[]
    let hashTable = {}
    let max = 0
    for(let i=0;i<arr.length;i++){
        if(!(arr[i] in hashTable)){
            hashTable[arr[i]] = 1
        }else{
            hashTable[arr[i]] += 1
        }
        if(arr[i]>max){max = arr[i]}
    }
    for(let j=0;j<max;j++){
        if(j in hashTable){
            for(let i=0;i<hashTable[j];i++){
                result.push(j)
            }
        }
    }
    return result
}

arr = [9,2,3,1,10,6,8,7,8,7]
console.log(countSort(arr))