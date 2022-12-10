function sumEven(array) {
    let total = 0;
    for(let i = 0;i < array.length; i++){
        if(array[i] % 2 == 0){
            total += array[i];
        }
    }
    return total;
}

module.exports = sumEven;