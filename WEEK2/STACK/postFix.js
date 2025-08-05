function postFix(expr){
    let stack=[]
    let tokens=expr.split(' ')

    for(let token of tokens){
        if(!isNaN(token)){
            stack.push(Number(token))
        }else{
            let a=stack.pop()
            let b=stack.pop()

            switch(token){
                case '+':stack.push(a+b); 
                case '-':stack.push(a-b)
                case '*':stack.push(a*b)
                case '/':stack.push(a/b)
            }
        }
    }
    return stack.pop()

}
console.log(postFix('3 4 5 / *'))


