function sum(a, b) {
    return a + b
}

module.exports = sum

console.log(sum(1, 2))
console.log(module.filename);
console.log(module.id);
console.log(module.exports);