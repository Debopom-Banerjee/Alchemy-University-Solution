function startsWithX(string) {
    if(string.charAt(0) === 'x'){
        return true;
    }else if(string.charAt(0) === 'X'){
        return true;
    }else{
        return false;
    }
}

module.exports = startsWithX;