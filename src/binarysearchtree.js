
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
        console.log("array sorted and dupclicates removed")
        console.log(duplciatesRemoved);
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

            if(value < currentNode.data){
                if(currentNode.left == undefined){break}
                currentNode = currentNode.left;
            }
            else{
                if(currentNode.right == undefined){break}
                currentNode = currentNode.right;
            }
        }
        if(value<currentNode.data){
            currentNode.left = newNode;
        }
        else{
            currentNode.right = newNode
            }
    }
}

export {Tree}