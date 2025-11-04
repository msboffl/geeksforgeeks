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
        let temp = head;
        while(temp != null) {
            ans.push(temp.data);
            temp = temp.next;
        }
        
        return ans;
    }
}