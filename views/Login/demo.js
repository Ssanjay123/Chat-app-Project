for(let i=1;i<5;i++){
    let str = ""
    console.log('1')
    let j=1;
    while(j<=i){
        str+=j
     j++;
    }
    while(j>=1){
        str+=j;
        j--
    }
    console.log(str);
}