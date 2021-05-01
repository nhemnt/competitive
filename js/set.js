// functions
// has 
// values
// add 
// remove
// size
// union
// intersection
// difference
// subset



const mySet = function () {
  const collection = []
  // has
  // this method will check for the presence of an element and return true or false
  this.has = (element) => {
    return (collection.indexOf(element) !== -1)
  }
  // values
  // this method will return all the values in the set
  this.values = () => {
    return collection;
  }
  // add
  // this method will add an element to the set
  this.add = (element) => {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    } else {
      return false;
    }
  }

  // remove
  // this method will remove an element from a set
  this.remove = (element) => {
    if (this.has(element)) {
      const index = collection.indexOf(element);
      collection.splice(index, 1)
      return true
    } else {
      false
    }
  }
  
  // size
  // this method will return the size of the collection
  this.size = () => {
    return collection.length;
  }

  // union
  // this method will return the union of two sets
  this.union = (otherSet) => {
    const unionSet = new mySet();
    const firstSet = this.values();
    const secondSet = otherSet.values();
    firstSet.forEach((e) => {
      unionSet.add(e);
    })
    secondSet.forEach((e) => {
      unionSet.add(e);
    });
    return unionSet;
  }

  // intersection
  // this method will return the intersection of two sets as a new set
  this.intersection = (otherSet) => {
    const intersectionSet = new mySet();
    const firstSet = this.values();
  
    firstSet.forEach(e => {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    })

    return intersectionSet;
  }  
  
  // difference
  // this method will return the difference of two sets as a new set
  this.difference = (otherSet) => {
    const differenceSet = new mySet();
    const firstSet = this.values();
    firstSet.forEach(e => {
      if (!otherSet.has(e)) {
        differenceSet.add(e)
      }
    })
    return differenceSet;
  }

  // subset
  // this method will test if the set is a subset of a different set
  this.subset = (otherSet) => {
    const firstSet = this.values();
    return firstSet.every(e => otherSet.has(e));
  }

}


const setA = new mySet();
const setB = new mySet();

setA.add(1);
setA.add(2);
setA.add(1);
setA.add(3);
setA.add(1);
setA.add(4);
setA.add(1);
setA.add(5);
setA.add(1);

setB.add(1);
setB.add(4);
setB.add(1);
setB.add(5);
setB.add(12);
setB.add(13);
setB.add(14);
setB.add(12);

console.log(setA.values())
console.log(setA.has(1));
console.log(setA.remove(2))
console.log(setA.values())
console.log(setA.has(12));
console.log(setA.union(setB).values());
console.log(setA.intersection(setB).values());
console.log(setA.difference(setB).values())
console.log(setA.subset(setB));

console.log('*********')
console.log(setB.union(setA).values());
console.log(setB.intersection(setA).values());
console.log(setB.difference(setA).values())
console.log(setB.subset(setA));
