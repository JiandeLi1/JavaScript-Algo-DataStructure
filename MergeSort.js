const mergeSort = (arr) => {
    if (arr.length === 1) { return arr;}
    let m = Math.floor((arr.length - 1) / 2);
    return merge(mergeSort(arr.slice(0, m + 1)), mergeSort(arr.slice(m+1)));
    
}
const merge=(arr1, arr2)=>{
    let i = 0;
    let j = 0;
    let result = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            result.push(arr1[i++]);
        } else {
            result.push(arr2[j++]);
        }
    }
    if (i >= arr1.length) {
        result=result.concat(arr2.slice(j));
    }
    if (j >= arr2.length) {
        result=result.concat(arr1.slice(i));
    }
    return result;
}

let arr = [2, 5, 3, 6, 4, 7, 5, 7, 2, 3, 9, 0]
console.log('The array: ',arr)
console.log('After sorting: ',mergeSort(arr))