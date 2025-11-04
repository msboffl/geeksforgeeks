/**
 * @param {Node} head
 * @param {number} key
 * @returns {boolean}
 */

/**
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {
    searchKey(head, key) {
        // Code here
        for(let curr = head; curr !== null; curr = curr.next) {
            if(curr.data === key) return true;
        }
        
        return false;
    }
}