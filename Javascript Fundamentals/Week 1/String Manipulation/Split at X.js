function splitAtX(string) {
    let pos = string.indexOf("x");
    let a = string.slice(0,pos);
    let b = string.slice(pos+1);
    if(a.length > b.length){
        return a;
    } else{
        return b;
    }
}

module.exports = splitAtX;