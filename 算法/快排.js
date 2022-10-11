
function failQuickSort(arr,l,r) {
    let key = arr[l];
    let i = l,j = r;
    while(i < j){
        while(i<j && arr[j]<=key)j--;
        while(i<j && arr[i]>=key)i++;
        if(i<j){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp
        }
    }

    // key和 终点arr[i]交换
    arr[l] = arr[i];
    arr[i] = key;
    return i
}

function quickSort(arr,l,r){
    let pointer = l;
    if(!arr.length) return arr;
    while(l<r){
        pointer = failQuickSort(arr,l,r);
        quickSort(arr,l,pointer-1);
        l = pointer + 1
    }
}

let arr = [2, 1, 4, 5, 6, 3, 4, 5, 8, 5, 2, 9, 4];
quickSort(arr,0,arr.length-1)
console.log(arr)