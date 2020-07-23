const Node = require('./Node.js')

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(newValue) {
    if (this.root === null) {
      this.root = new Node(newValue)
      return
    }
    let currntNode = this.root
    let parent
    while (currntNode !== null) {
      if (newValue < currntNode.value) {
        parent = currntNode
        currntNode = currntNode.left
      } else {
        parent = currntNode
        currntNode = currntNode.right
      }
    }
    if (newValue < parent.value) {
      parent.left = new Node(newValue)
    } else {
      parent.right = new Node(newValue)
    }
  }

  preOrderPrint(Node) {
    if (Node !== null) {
      console.log(Node.value);
      this.inOrderPrint(Node.left)
      this.inOrderPrint(Node.right)
    }
  }

  inOrderPrint(Node) {
    if (Node !== null) {
      this.inOrderPrint(Node.left)
      console.log(Node.value);
      this.inOrderPrint(Node.right)
    }
  }

  postOrderPrint(Node) {
    if (Node !== null) {
      this.inOrderPrint(Node.left)
      this.inOrderPrint(Node.right)
      console.log(Node.value);
    }
  }

  searchInTree(Node,value) {
    if (Node === null) {
      return false
    }
    let currentNode = this.root
    while (currentNode && (currentNode.value !== value)) {
      if (value < currentNode.value) {
        currentNode = currentNode.left
      } else {
        currentNode = currentNode.right
      }
    }
    return currentNode
  }

  deleteNode(Node,value) {
    if (Node === null) {
      return false
    }
    let currentNode = this.root
    let parentNode
    while (currentNode && (currentNode.value !== value)) {
      parentNode = currentNode
      if (value < currentNode.value) {
        currentNode = currentNode.left
      } else {
        currentNode = currentNode.right
      }
    }
    if (!currentNode) {
      return false
    } else if (currentNode.left === null && currentNode.right === null) {
      if (currentNode.value < parentNode.value) {
        parentNode.left = null
      } else {
        parentNode.right = null
      }
      return true
    } else if (currentNode.right === null) {
      if (currentNode.value < parentNode.value) {
        parentNode.left = currentNode.left
      } else {
        parentNode.left = currentNode.right
      }
      return true
    } else if (currentNode.left === null) {
      if (currentNode.value < parentNode.value) {
        parentNode.right = currentNode.left
      } else {
        parentNode.right = currentNode.right
      }
      return true
    } else {
      let rightSubTree = currentNode.right
      while (rightSubTree.left !== null) {
        rightSubTree = rightSubTree.left
      }
      let temp = rightSubTree.value
      this.deleteNode(this.root, temp)
      currentNode.value = temp
      return true
    }
  }
}

let n = 0

function preOrderNum(Node) {
  if (Node !== null) {
    if (Node.left !== null && Node.right !== null) {
      n++
    }
    preOrderNum(Node.left)
    preOrderNum(Node.right)
  }
}


var BST = new BinarySearchTree();
BST.insert(6)
BST.insert(4);
BST.insert(9);
BST.insert(5);
BST.insert(2);
BST.insert(8);
BST.insert(12);
BST.insert(3);
BST.insert(1);
console.log('BST的根是', BST.root);
BST.inOrderPrint(BST.root);
console.log("Delete 9!")
console.log(BST.deleteNode(BST.root,9));
BST.inOrderPrint(BST.root);

// preOrderNum(BST.root)
// // console.log(n);

var BST2 = new BinarySearchTree();
console.log(BST2.deleteNode(10));