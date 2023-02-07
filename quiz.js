
function numdiv(n){
    for(let i=0;i<n;i++){
        let tres=i%3
        let cinco=i%5
        let msg=i+"";
        if(tres===0){
            msg+=" is divisible by 3"
        }
        if(cinco===0){
            msg+=" is divisible by 5"
        }
        console.log(msg)
    }
}

numdiv(6);

