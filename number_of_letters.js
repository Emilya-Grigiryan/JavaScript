let txt=prompt("Enter the sentence: ");
let tmp={};
for (let i=0; i<txt.length; i++) {
        if (txt[i] in tmp) {
            tmp[txt[i]]+=1;
        } else {
            tmp[txt[i]]=1;
        }
    }
console.log(tmp);
