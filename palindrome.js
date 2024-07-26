let mstr = ""; //Write the word
let flag = true;  

for (let i = 0; i < mstr.length / 2; i++) {
    if (mstr[i] !== mstr[mstr.length - 1 - i]) {
        flag = false;  
        break; 
    }
}
if (flag) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}
