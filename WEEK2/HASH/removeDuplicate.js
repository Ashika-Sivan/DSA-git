//REMOVE DUPLICATE FROM STRING



function removeDuplicates(str){
    let seen={}
    let res=''
    for(let char of str){
        if(!seen[char]){
            res+=char;
            seen[char]=true
        }
    }
    return res
}


console.log(removeDuplicates("programming"));