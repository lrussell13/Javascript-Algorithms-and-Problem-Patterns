function countDown(num){
    if(num <= 0){
        console.log("All done!");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}

//countDown(5);

//Factorial examples >>
//Factorial = 4! or 4 * 3 * 2 * 1

function factorial(num){
    if(num === 1) return 1
    return num * factorial(num - 1)
}

factorial(3) 
    // >> return 3 * factorial(2)
    //                  >> return 2 * factorial(1)
    //                                  >> return 1
    //                  >> return 2 * 1
    // >> return 3 * 2
// >> 6
