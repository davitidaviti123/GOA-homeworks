function task5() {
    return new Promise((_, reject) => {
        setTimeout(() => reject("Task 3 failed"), 2000);
    }).catch(console.log);
}

task5();

function task6() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Task 1 complete"), Math.random() * 4000 + 1000);
    });
}

task6().then(console.log);

function task7() {
    return new Promise(resolve => {
        setTimeout(() => resolve("First"), Math.random() * 2000 + 1000);
    }).then(msg => {
        console.log(msg);
        return new Promise(resolve => {
            setTimeout(() => resolve("Second"), Math.random() * 2000 + 1000);
        });
    }).then(console.log);
}

task7();

function task8() {
    return new Promise((_, reject) => {
        setTimeout(() => reject("Task 3 failed"), Math.random() * 3000 + 1000);
    }).catch(console.log);
}

task8();

function task9() {
    return new Promise(resolve => {
        setTimeout(() => resolve(Math.random() > 0.5 ? "Task 1 complete" : "Task 1 was quick"), Math.random() * 4000 + 1000);
    });
}

task9().then(console.log);

function task10() {
    return new Promise((resolve, reject) => {
        setTimeout(() => Math.random() < 0.3 ? reject("Task 3 failed") : resolve("Task 3 complete"), Math.random() * 3000 + 1000);
    }).catch(console.log);
}

task10().then(console.log);
