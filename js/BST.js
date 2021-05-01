// Binary search tree
// each node can have two childs nodes only
// BST are balanced means 
// left child node < parent node
// right child > parent node

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function (node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
          } else {
            return searchTree(node.right);
          }
        } else {
          return null
        }
      }
      searchTree(node);
    }
  }

  findMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right
    };
    return current.data
  }

  find(data) {
    let current = this.root;
    if (current === null) {
      return null
    }
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left
      } else {
        current = current.right
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }

  isPresent(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left
      } else {
        current = current.right
      }
    }
    return false
  }

  remove(data) {
    const removeData = (node, data) =>{
      if (node === null) {
        return null;
      } else if (node.data === data) {
        // case1 - No child present
        if (node.left === null && node.right === null) {
          return null
        };
        // case 2- if one child is present
        if (node.left === null) {
          return node.right;
        }

        if (node.right === null) {
          return node.left
        }

        //case 3- two childs
        // finding min in right node
        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left
        }

        node.data = tempNode.data;
        node.right = removeData(node.right, tempNode.data);
        return node
      } else if (data < node.data) {
        node.left = removeData(node.left, data);
        return node;
      } else {
        node.right = removeData(node.right, data);
        return node
      }
    }

    this.root = removeData(this.root, data);
  }

  findMaxHeight(node = this.root){
    if (node === null) {
      return -1
    }

    const left = this.findMaxHeight(node.left);
    const right = this.findMaxHeight(node.right);

    if (left > right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }

  findMinHeight(node = this.root){
    if (node === null) {
      return -1
    }
    const left = this.findMinHeight(node.left);
    const right = this.findMinHeight(node.right);

    if (left < right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }

  isBalanced(node = this.root) {
    if (node === null) {
      return true;
    } else {
      const left = this.findMaxHeight(node.left);
      const right = this.findMaxHeight(node.right);
      return Math.abs(left - right) <= 1
    }
  }

  //[4,5,6,8,11,14,16,18]
  inOrder() {
    if (this.root === null) {
      return null
    };
    const result = [];
    function traverseInOrder(node) {
      node.left && traverseInOrder(node.left);
      result.push(node.data);
      node.right && traverseInOrder(node.right);
    }
    traverseInOrder(this.root);
    return result;
  }

  preOrder() {
    if (this.root === null) {
      return null
    };
    const result = [];
    function preOrderTraverse(node) {
      result.push(node.data);
      node.left && preOrderTraverse(node.left);
      node.right && preOrderTraverse(node.right);
    }
    preOrderTraverse(this.root);
    return result;
  }

  postOrder() {
    if (this.root === null) {
      return null
    };
    const result = [];
    function postOrderTraverse(node) {
      node.left && postOrderTraverse(node.left);
      node.right && postOrderTraverse(node.right);
      result.push(node.data);
      
    }
    postOrderTraverse(this.root);
    return result;
  }

  levelOrder() {
    const result = [];
    const Q = [];
    if (this.root !== null) {
      Q.push(this.root);
      while (Q.length > 0) {
        const node = Q.shift();
        result.push(node.data);
        if (node.left !== null) {
          Q.push(node.left);
        }
        if (node.right !== null) {
          Q.push(node.right);
        }
      }
      return result;
     } else {
      return null;
    }
  }
}







const bst = new BST();

bst.add(50);
bst.add(40);
bst.add(30);
bst.add(45);
bst.add(48);
bst.add(100);
bst.add(90);
bst.add(120);
bst.add(80);
bst.add(95);
bst.add(110);
bst.add(130);
bst.add(60);

console.log(bst.findMin());
console.log(bst.findMax());
bst.remove(17)
console.log(bst.findMax());
console.log(bst.find(6));
console.log(bst.isPresent(2));
console.log(bst.findMaxHeight())
console.log('inOrder: ' + bst.inOrder());

console.log('inOrder: ' + bst.inOrder());
console.log('preOrder: ' + bst.preOrder());
console.log('postOrder: ' + bst.postOrder());

console.log('levelOrder: ' + bst.levelOrder());
