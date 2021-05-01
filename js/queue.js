//  FIFO

// print
// enqueue
// dequeue
// front
// size
// isEmpty


// Real Life Example
// Serving requests on a single shared resource, like a printer, CPU task scheduling etc.
// In real life scenario, Call Center phone systems uses Queues to hold people calling them in an order, until a service representative is free.
// Handling of interrupts in real-time systems. The interrupts are handled in the same order as they arrive i.e First come first served.

const Queue = function () {
  collections = [];

  this.print = () => {
    console.log(collections);
  }

  this.enqueue = (element) => {
    collections.push(element);
  }

  this.dequeue = () => {
    return collections.shift();
  }

  this.front = () => {
    return collections[0];
  }

  this.size = () => {
    return collections.length;
  }

  this.isEmpty = () => {
    return collections.length === 0;
  }
}

const q = new Queue();
q.enqueue('a');
q.enqueue('b');
q.enqueue('c');
q.enqueue('d');
q.enqueue('e');
q.enqueue('f');
q.print();
q.dequeue()
console.log(q.front())
console.log(q.size());
console.log(q.isEmpty())
q.print()


//PriorityQueue

const PriorityQueue = function () {
  collections = [];
  this.printCollection = () => {
    console.log(collections);
  }

  this.isEmpty = () => {
    collections.length === 0;
  }

  this.enqueue = (element) => {
    if (this.isEmpty()) {
      collections.push()
    } else {
      let added = false;
      for (let i = 0; i < collections.length; i++) {
        if (element[1] < collections[i][1]) {
          collections.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        collections.push(element);  
      }
    }
  }

  this.dequeue = () => {
    const value = collections.shift();
    return value[0]
  }

  this.front = () => {
    return collections[0]
  }

  this.size = () => {
    return collections.length;
  }

}

console.log('************ Priority Queue *****************')

const pq = new PriorityQueue();
pq.enqueue(['a', 2]);
pq.enqueue(['b', 3]);
pq.enqueue(['c', 4]);
pq.enqueue(['d', 1]);
pq.enqueue(['f', 2]);
pq.printCollection();
pq.dequeue()
console.log(pq.front())
pq.printCollection();