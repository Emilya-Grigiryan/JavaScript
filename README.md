# JavaScript
let marr = [21, 58, 69, 12, 35, 5];
let tmp = 0;
for (let i = 0; i < marr.length; i++) {
    for (let j = 0; j < marr.length - i - 1; j++) {
        if (marr[j] > marr[j+1]) {
            tmp = marr[j];
            marr[j] = marr[j+1];
            marr[j+1] = tmp;
        }
    }
}
console.log(marr);
