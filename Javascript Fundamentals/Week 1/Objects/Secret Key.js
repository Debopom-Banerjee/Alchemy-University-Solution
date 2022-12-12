function removeSecret(object) {
    return (delete object.secret);
}

module.exports = removeSecret;