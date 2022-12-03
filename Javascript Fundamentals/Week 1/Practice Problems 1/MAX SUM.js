function maxSum(num) {
    sum = 0;
    for(let i=1;i<=num;i++){
        sum = sum+i;
    }
    return sum;
}

module.exports = maxSum;