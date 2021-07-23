// How to build an array
// and use it

class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    //get item at index
    get(index) {
        return this.data[index];
    }

    //push item in array last index
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    // remove array item
    pop() {
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }

    // delete item at a particular index
    delete(index) {
        const item = this.data[index];
        this.shiftItems(index);
        return item;
    }

    shiftItems(startIndex){
        for (let index = startIndex; index < this.length - 1; index++)
        {
            this.data[index] = this.data[index+1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}

const newArray = new MyArray();
newArray.push('hi');
newArray.push('you');
newArray.push('!');
// newArray.pop();
// newArray.pop();
newArray.delete(1);
newArray.push('play');
newArray.push('nice');
newArray.delete(0);
newArray.delete(0);
console.log(newArray);