function validParanthesis(str){
    let stack=[]
    let brackets={'}':'{',']':'[',')':'('}
    for(let char of str){
        if(char=='('||char=='{'||char=='['){
            stack.push(char)
            // console.log(stack)
        }else{
            let top=stack.pop()
            if(top!==brackets[char]){
                return false
            }
        }
    }
    return stack.length===0
    
}
console.log(validParanthesis("()[]{}"))