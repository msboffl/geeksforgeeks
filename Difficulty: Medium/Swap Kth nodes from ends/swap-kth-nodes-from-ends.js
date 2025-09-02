/*
class Node {
    constructor(x) {
        this.data = x;
        this.next = null;
    }
}
*/

class Solution {
    swapKth(head, k) {
        if (!head) return head;

        // Step 1: find length
        let n = 0;
        let temp = head;
        while (temp) {
            n++;
            temp = temp.next;
        }

        // Step 2: check if swap is possible
        if (k > n) return head;
        if (k === n - k + 1) return head; // same node

        // Step 3: find kth node from start
        let first = head;
        for (let i = 1; i < k; i++) {
            first = first.next;
        }

        // Step 4: find kth node from end (n - k + 1 th from start)
        let second = head;
        for (let i = 1; i < n - k + 1; i++) {
            second = second.next;
        }

        // Step 5: swap values
        let tempVal = first.data;
        first.data = second.data;
        second.data = tempVal;

        return head;
    }
}
