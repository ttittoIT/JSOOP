function solve() {
    var arr = [];

    for (var i = 0; i < 10; i++) {
        arr.push(function () {
            console.log(i);
        });
    }

    return arr;
}

    var arr = solve();

    for (var i = 11; i < 20; i++) {
        arr[i - 10]();
    }

