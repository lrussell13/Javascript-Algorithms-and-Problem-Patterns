/* Divide a data set into smaller chunks and then repeat a 
process with a subset of data */

function search(arr, val){
    let min = 0;
    let max = arr.length - 1;

    while(min <= max){
        let middle = Math.floor((min+max)/2);
        let currentElement = array[middle];

        if(array[middle] < val){
            min = middle + 1
        } else if (arr[middle]  > val){
            max = middle - 1;
        } else {
            return middle;
        }
    } 

    return -1;
}

search([1,2,3,4,5,6], 4) // 3