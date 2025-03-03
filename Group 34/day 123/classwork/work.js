function task1() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Task 1 complete"), 2000);
    });
}

task1().then(console.log);

function task2() {
    return new Promise((_, reject) => {
        reject("Task 2 failed");
    }).catch(console.log);
}

task2();

function task3() {
    return new Promise(resolve => resolve(5))
        .then(num => num * 2)
        .then(console.log);
}

task3();

function task4() {
    return new Promise(resolve => {
        setTimeout(() => resolve("First"), 2000);
    }).then(msg => {
        console.log(msg);
        return new Promise(resolve => {
            setTimeout(() => resolve("Second"), 1000);
        });
    }).then(console.log);
}

task4();

function task5() {
    return new Promise((_, reject) => {
        setTimeout(() => reject("Task 3 failed"), 2000);
    }).catch(console.log);
}

task5();
