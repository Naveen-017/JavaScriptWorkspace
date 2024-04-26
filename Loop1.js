for(let i = 0;  i<5;  i++){
    let row = "";
    for(let j = 0; j<5 -i - 1; j++){
        row += " ";

    }
    for(let k =0; k < 2*i + 1; k++){
        row += "*";
    }
console.log(row);
}