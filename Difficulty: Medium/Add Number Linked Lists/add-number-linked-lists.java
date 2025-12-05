/*
class Node {
    int data;
    Node next;

    Node(int d) {
        data = d;
        next = null;
    }
}
*/

class Solution {
    private Node reverseLL(Node head) {
        Node curr = head;
        Node prev = null;
        
        while(curr != null) {
            Node next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        
        return prev;
    }
    public Node addTwoLists(Node head1, Node head2) {
        // code here
        Node l1 = reverseLL(head1);
        Node l2 = reverseLL(head2);
        
        Node dummy = new Node(-1);
        Node curr = dummy;
        int carry = 0;
        while(l1 != null || l2 != null) {
            int sum = carry;
            if(l1 != null) {
                sum += l1.data;
                l1 = l1.next;
            }
            if(l2 != null) {
                sum += l2.data;
                l2 = l2.next;
            }
            
            Node newNode = new Node(sum % 10);
            carry = sum / 10;
            
            curr.next = newNode;
            curr = curr.next;
        }
        
        if(carry > 0) {
            Node newNode = new Node(carry);
            curr.next = newNode;
        }
        
        Node head = reverseLL(dummy.next);
        
        while (head != null && head.data == 0 && head.next != null) {
            head = head.next;
        }

        return head;
        
        
    }
}