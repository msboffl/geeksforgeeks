/*
class Node {
    int data;
    Node next;

    Node(int d) {
        data = d;
        next = null;
    }
}*/

class Solution {
    private Node cloneList(Node head) {
        if(head == null) return null;
        
        Node newHead = new Node(head.data);
        Node temp = newHead;
        head = head.next;
        
        while(head != null) {
            temp.next = new Node(head.data);
            temp = temp.next;
            head = head.next;
        }
        
        return newHead;
    }
    private Node reverseLL(Node head) {
        Node prev = null;
        Node curr = head;
        
        while(curr != null) {
            Node next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        
        return prev;
    }
    public boolean isPalindrome(Node head) {
        // code here
        Node copy = cloneList(head);
        Node l1 = reverseLL(copy);
        
        Node temp = head;
        while(temp != null && l1 != null) {
            if(temp.data != l1.data){
                return false;
            }
            
            temp = temp.next;
            l1 = l1.next;
        }
        
        return true;
    }
}