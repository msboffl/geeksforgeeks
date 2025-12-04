/* Structure of node
class Node
{
    int data;
    Node next;
    Node(int d) {data = d; next = null; }
} */

class Solution {

    // Function to find the data of kth node from
    // the end of a linked list.
    int getKthFromLast(Node head, int k) {
        // Your code here
        Node temp = head;
        
        int length = 0;
        
        while(temp != null) {
            length++;
            temp = temp.next;
        }
        
        if(length < k) return -1;
        
        temp = head;
        for(int i = 1; i < length - k + 1; i++) {
            temp = temp.next;
        }
        
        return temp.data;
    }
}