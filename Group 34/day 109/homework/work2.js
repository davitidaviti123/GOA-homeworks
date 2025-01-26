function manualAssign(target, ...sources) {
    for (const source of sources) {
        for (const key in source) {
            target[key] = source[key];
        }
    }
    return target;
}

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const obj3 = { d: 5 };

const result = manualAssign({}, obj1, obj2, obj3);
console.log(result);