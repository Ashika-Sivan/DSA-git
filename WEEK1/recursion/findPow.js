
function findPower(base,pow){
    if(pow ===0)return 1
    return base*findPower(base,pow-1)
}
console.log(findPower(10,2))

