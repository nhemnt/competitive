// functions
// push 
// pop
// peek 
// length


//FILO

// array as a stack

const Stack = function () {
  this.storage = {}
  this.count = 0;

  this.push = (val) => {
    this.storage[this.count] = val;
    this.count++;
  }

  this.pop = () => {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    const result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  this.size = () => {
    return this.count;
  }

  this.peek = () => {
    return this.storage[this.count - 1];
  }
}

const myStack = new Stack();

myStack.push(1)
myStack.push(2)
myStack.push(3)

console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.size());
console.log(myStack.pop());
console.log(myStack.peek());
