function ConcatSortedArray(arr1,arr2){
    let i = 0;
    let j = 0;
    let result = [];
        while(i<arr1.length&&j<arr2.length){
            if(arr1[i]<arr2[j]){
                result.push(arr1[i])
                i++
            }else{
                result.push(arr2[j])
                j++
            }
        }
        while(j<arr2.length){
            result.push(arr2[j])
            j++
        }
        while(i<arr1.length){
            result.push(arr1[i])
            i++
        }
        return result;
}


let arr1 = [1,3,4,5]
let arr2 = [2,6,7,8]
console.log(ConcatSortedArray(arr1,arr2))