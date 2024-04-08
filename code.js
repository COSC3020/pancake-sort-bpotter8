function flip(array, n) {
    var start = 0;
    var end = n - 1;
    while (start < end){
        [array[start], array[end]] = [array[end], array[start]];
        start++;
        end--;
    }
    return array;
}

function maxNum(array, back){
    var temp = 0;
    for (let i = 0; i <= back; i++){
        
        if (array[i] > array[temp]){
            temp = i;
        }
    }
    return temp;
}

function pancakeSort(array) {
    for (let i = array.length - 1; i > 0; i--) {
        var max = maxNum(array, i);
        flip(array, max + 1);
        flip(array, i + 1);
    }
    return array;
}
