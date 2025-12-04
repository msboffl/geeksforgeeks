/*
class Node
{
    int data;
    Node next;

    Node(int data)
    {
        this.data = data;
        this.next = next;
    }
}
*/

class Solution {
    public Node removeLastNode(Node head) {
        // code here
        if(head == null) return null;
        if(head.next == null) return null;
        
        Node secondLast = head;
        
        while(secondLast.next.next != null) {
            secondLast = secondLast.next;
        }
        
        secondLast.next = null;
        
        return head;
    }
}