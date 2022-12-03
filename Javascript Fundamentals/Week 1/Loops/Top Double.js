function topDouble(value, top) {
    while(value < top){
        value *= 2;
        if (value >= top) {
            value /= 2;
            break;
        }
    }
    return value;
}

module.exports = topDouble;