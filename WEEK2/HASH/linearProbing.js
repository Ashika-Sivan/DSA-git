class HashTable {
    constructor(size) {
        this.table = new Array(size).fill(null);
        this.size = size;
    }

    hash(key) {
        return key % this.size;
    }

    insert(key, value) {
        let index = this.hash(key);
        let startIndex = index;

        while (this.table[index] !== null && this.table[index].key !== key) {
            index = (index + 1) % this.size;
            if (index === startIndex) {//hash cheyth start indexlott vann appa cycle form cheyth 
                console.log("Hash table is full!");
                return;
            }
        }
        this.table[index] = { key, value };
    }

    search(key) {
        let index = this.hash(key);
        let startIndex = index;

        while (this.table[index] !== null) {
            if (this.table[index].key === key) {
                return this.table[index].value;
            }
            index = (index + 1) % this.size;
            if (index === startIndex) break;
        }
        return null;
    }
}

let ht = new HashTable(5);
ht.insert(1, "A");
ht.insert(6, "B"); // collision, goes to next slot
ht.insert(11, "C"); // collision chain
// console.log(ht.search(6)); // "B"
// console.log(ht.table);
