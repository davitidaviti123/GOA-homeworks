function isSubset(subset, superset) {
    for (let item of subset) {
        if (!superset.has(item)) {
            return false;
        }
    }
    return true;
}

function invertMap(map) {
    let inverted = new Map();
    for (let [key, value] of map) {
        inverted.set(value, key);
    }
    return inverted;
}

function maxKeys(map) {
    let maxVal = Math.max(...map.values());
    let keys = [];
    for (let [key, value] of map) {
        if (value === maxVal) {
            keys.push(key);
        }
    }
    return keys;
}