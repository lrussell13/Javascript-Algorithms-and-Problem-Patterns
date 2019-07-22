//find values in an array that add up to 0
//Two variables act as pointers to compare

function findValues(arr){
    let left = 0;
    let right = arr.length - 1;

    while(left < right){
        let sum = arr[left] + arr[right]
        if(sum === 0 ){
            return (arr[left], arr[right])
        } else if (sum > 0){
            right--;
        } else {
            left++;
        }
    }
}

findValues([-2,1,2,3,4]) // (-2, 2)