/*
class Node {
  constructor(x){
    this.data = x;
    this.next = null;
  }
}

/**
 * @param {Node} head
 */
class Solution {
    printList(head) {
        // code here
        const ans = [];
        
        let curr = head;
        
        while(curr !== null) {
            ans.push(curr.data);
            curr = curr.next;
        }
        
        return ans;
    }
}