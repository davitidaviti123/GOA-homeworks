function mergeSets(sets) {
    let result = new Set();
    for (let set of sets) {
        for (let item of set) {
            result.add(item);
        }
    }
    return result;
}
console.log(mergeSets([new Set([1, 2]), new Set([2, 3]), new Set([3, 4])]));