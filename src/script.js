import {Tree} from "./binarysearchtree.js"
let numbers = [];

//66 randomn number
for(let i=0;i<66;i++){
    numbers.push(getRandom())
}
//create tree
let tree = new Tree(numbers);
console.log(tree);

//confirm balanced
console.log(tree.isBalanced());

//level,pre,post,inorder
tree.levelOrder(print)
tree.preOrder(print);
tree.postOrder(print);
tree.inOrder(print);

//unbalance by adding 7 numbers
tree.insert(99);
tree.insert(98);
tree.insert(97);
tree.insert(96);
tree.insert(95);
tree.insert(94);
tree.insert(93);
console.log(tree.isBalanced());
//rebalance
tree.rebalance();
console.log(tree.isBalanced());

//level,pre,post,inorder
tree.levelOrder(print)
tree.preOrder(print);
tree.postOrder(print);
tree.inOrder(print);

function getRandom() {
    return Math.round(Math.random()*100);
  }
function print(node){
     console.log(node)
}


