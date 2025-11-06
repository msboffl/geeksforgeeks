/**
 * @param {Node} head
 * @param {number} pos
 * @param {number} val
 * @returns {Node}

/*
class Node {
    constructor(x) {
        this.data = x;
        this.next = null;
    }
}
*/
class Solution {
    insertPos(head, pos, val) {
        // code here
        let newNode = new Node(val);
        
        if(pos < 1) return head;
        
        if(pos === 1) {
            newNode.next = head;
            
            return newNode;
        }
        
        let curr = head;
        
        for(let i = 1; i < pos-1 && curr !== null; i++) {
            curr = curr.next;
        }
        
        if(curr === null) return head;
        
        newNode.next = curr.next;
        curr.next = newNode;
        
        return head;
    }
}