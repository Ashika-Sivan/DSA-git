// function reverseStr(str){
//     if(str.length<=1){
//         return str
//     }
//     return reverseStr(str.slice(1))+str[0]
// }
// console.log(reverseStr('ashika'))



//ANOTHER METHOD

// function reverseStr(str,index=0){
//     if(index===str.length){
//         return ''
//     }
//     return reverseStr(str,index+1)+str[index]
// }
// console.log(reverseStr('ashika'))