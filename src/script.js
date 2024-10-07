import {Tree} from "./binarysearchtree.js"
let test = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

let tree = new Tree(test);


console.log(tree);
tree.insert(122);
tree.insert(132);

console.log(tree.isBalanced())
tree.rebalance();
console.log(tree)
// tree.postOrder(print);
// function print(node){
//     console.log(node)
// }


