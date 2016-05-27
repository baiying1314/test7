function fibonacci_series(n) {

    return calculateFiboncci(n);
}

function calculateFiboncci(n) {
    var finboncciArray = [0, 1];

    for (var i = 2; i <= n; i++) {
        var finboncciArray_a = finboncciArray[i - 1];
        var finboncciArray_b = finboncciArray[i - 2]
        finboncciArray.push(finboncciArray_a + finboncciArray_b);
    }

    return finboncciArray;
}

module.exports = fibonacci_series;
