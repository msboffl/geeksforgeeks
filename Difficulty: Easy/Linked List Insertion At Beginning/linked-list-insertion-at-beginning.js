/*
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {
    insertAtFront(head, x) {
        // Code here
        let newNode = new Node(x);
        newNode.next = head;
        
        return newNode;
    }
}