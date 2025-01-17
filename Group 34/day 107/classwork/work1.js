function dotCalculator (equation) {
    const [left, operator, right] = equation.split(' ');
    const leftCount = left.length;
    const rightCount = right.length;
    let result = 0;

    switch (operator) {
        case '+':
            result = leftCount + rightCount;
            break;
        case '-':
            result = leftCount - rightCount;
            break;
        case '*':
            result = leftCount * rightCount;
            break;
        case '//':
            result = Math.floor(leftCount / rightCount);
            break;
    }

    return '.'.repeat(result);
}