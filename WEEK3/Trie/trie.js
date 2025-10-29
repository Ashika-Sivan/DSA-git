class Node{
    constructor(){
        this.child={}
       this.isEnd=false
    }
}

class Trie{
    constructor(){
        this.root=new Node()
    }
    insert(word){
        let node=this.root
        for(let char of word){
            if(!node.child[char]){
                node.child[char]=new Node()
            }
            node=node.child[char]
        }
        node.isEnd=true

    }
    search(word){
        let node=this.root
        for(let char of word){
            if(!node.child[char]){
                return false
            }
            node=node.child[char]

        }
        return node.isEnd
    }
    startWithPrefix(prefix){
        let node=this.root
        for(let char of prefix){
            if(!node.child[char]){
                return false
            }
            node=node.child[char]
        }
        return true
        
    }

    autoComplete(prefix){
        let node= this.root
        let res=[]
        for(let char of prefix){
            if(!node.child[char]){
                return res
            }
            node=node.child[char]
        }
        this.collect(node,prefix,res)
        return res
    }
    collect(node,prefix,res){
        if(node.isEnd){
             res.push(prefix)
        }

        for(let char in node.child){
            this.collect(node.child[char],prefix+char,res)
        }
    }

    longestPrefix(word){
        let node=this.root
        let prefix=''
        let longest=''
        for(let char of word){
            if(!node.child[char]){
                break
            }
            node=node.child[char]
            prefix+=char
        }
        if(node.isEnd){
            longest=prefix
        }
        return longest
    }
}

let strs = ["flower","flow","flight"]
const trie=new Trie()
for(let word of strs){
    console.log(word)
    trie.insert(word)
}
// trie.insert('flower')
// trie.insert('flow')
// trie.insert('flight')
console.log(trie.longestPrefix())








// let trie=new Trie()
// trie.insert('as')
// trie.insert('ash')
// trie.insert('ashika')
// trie.insert('bel')
// trie.insert('belwin')
// trie.insert('devan')
// trie.autoComplete('as')
          