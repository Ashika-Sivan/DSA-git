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

// function reverseStack(arr){
//     let stack=[]
//     while(arr.length){
//         stack.push(arr.pop())
//     }
//     return stack
// }
// console.log(reverseStack([1,2,3,4,5,6]))