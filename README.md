# JavaScript
let marr = [25, 35, 19, 6, "apple"];
let number = prompt("Enter: ");
let index = -1;
for (let i = 0; i < marr.length; i++) {
    if (marr[i] == number) { 
        index = i;
        break;
    }
}
console.log(index);
