function sortStackAscending(stack) {
    let temp = [];

    while (stack.length > 0) {
        let curr = stack.pop();


        while (temp.length > 0 && temp[temp.length - 1] < curr) {
            stack.push(temp.pop());
        }

        temp.push(curr);
    }

    while (temp.length > 0) {
        stack.push(temp.pop());
    }

    return stack;
}

let stack=[3,-4,2,1,9,0]
last=9
pop=0
