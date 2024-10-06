
import {mergeSort} from "./mergeSort.js"

//node constructor
class Node {
    constructor(data,left,right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class Tree{
    constructor(array){
        //sort array
        let sortedArray = mergeSort(array);
        //remove duplicates
        let duplciatesRemoved = sortedArray.filter((element,index)=>{
            return sortedArray.indexOf(element) === index
        });
        this.root = this.buildTree(duplciatesRemoved);
    }
    buildTree(array){
        if(array.length == 0){return}
        else{
            let arrayLength = array.length;
            let rootIndex;
            if(arrayLength % 2 > 0){
                rootIndex = Math.round(arrayLength/2) -1;
            }
            else{ 
                rootIndex = ((arrayLength/2));
            }
            let rootData = array[rootIndex];
            //split array to left and right
            let arrayLeft = [];
            let arrayRight = [];
            for (let i=0;i<rootIndex;i++){
                arrayLeft.push(array[i]);
            }
            for (let i=rootIndex+1;i<arrayLength;i++){
                arrayRight.push(array[i]);
            }
            //recursion
            let left = this.buildTree(arrayLeft);
            let right =this.buildTree(arrayRight);
            let rootNode = new Node(rootData,left,right);
            return rootNode
        }

       

    }
    insert(value){
        let currentNode = this.root;
        let newNode = new Node(value);

        while(currentNode !== undefined){
            //do this until there is an empty node
            if(currentNode.left == undefined && currentNode.right == undefined){break}
            if(value == currentNode.data){return}

            if(value < currentNode.data){
                if(currentNode.left == undefined){break}
                currentNode = currentNode.left;
            }
            else{
                if(currentNode.right == undefined){break}
                currentNode = currentNode.right;
            }
        }
        if(value == currentNode.data){return}
        if(value<currentNode.data){
            currentNode.left = newNode;
        }
        else{
            currentNode.right = newNode
            }
    }
    deleteItem(value,currentNode = this.root){
        //base case
        if(currentNode == undefined){
            return currentNode
        }

        //if value is in this nodes subtree - traverse recursively until we find item
        if(currentNode.data > value){
            currentNode.left = this.deleteItem(value,currentNode.left)
        }
        else if(currentNode.data < value){
            currentNode.right = this.deleteItem(value,currentNode.right)
        }
        //if currentNode.data matches value
        else{
            //case 1 delete and end node (no children) or only right child
            if(currentNode.left == undefined && currentNode.right == undefined){
                return undefined
            }
            //case 2 delete a node with 1 child
            //return the child
            if(currentNode.left == undefined && currentNode.right !== undefined){
                return currentNode.right
            }
            if(currentNode.right == undefined && currentNode.left !==undefined){
                return currentNode.left
            }
            //case 3 delete a child with 2 children
            //get next biggest value 
            let successorNode = this.getSuccessor(currentNode);
            //change current notde tosuccesor node
            currentNode.data = successorNode.data;
            //delete original successorNode from tree
            currentNode.right = this.deleteItem(successorNode.data,currentNode.right);
        }
        return currentNode

    }
    getSuccessor(node){
        let rightNode = node.right;
        while(rightNode !== undefined && rightNode.left !== undefined){
            rightNode = rightNode.left
        }
        return rightNode
    }
    find(value){
        
    }

}

export {Tree}