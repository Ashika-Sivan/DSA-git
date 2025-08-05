function reverseStr(str){
    let stack=[]

    for(let char of str){
    stack.push(char)
    }

    let rev=''
    while(stack.length>0){
        rev+=stack.pop()
    }
    return rev
}
console.log(reverseStr('ashika'))