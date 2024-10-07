import {Tree} from "./binarysearchtree.js"
let test = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

let tree = new Tree(test);


console.log(tree);


let nodeTest9 = tree.find(9);
console.log(nodeTest9);
console.log(tree.depth(nodeTest9));

let nodeTest67 = tree.find(67);
console.log(nodeTest67);
console.log(tree.depth(nodeTest67));


// tree.postOrder(print);
// function print(node){
//     console.log(node)
// }


