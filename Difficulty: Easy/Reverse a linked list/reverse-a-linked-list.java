/*
class Node {
    int data;
    Node next;

    Node(int x) {
        data = x;
        next = null;
    }
}
*/

class Solution {
    Node reverseList(Node head) {
        // code here
        Stack<Integer> st = new Stack<>();
        
        Node temp = head;
        
        while(temp != null) {
            st.push(temp.data);
            temp = temp.next;
        }
        
        // System.out.println(st);
        
        temp = head;
        
        while(temp != null) {
            temp.data = st.peek();
            st.pop();
            temp = temp.next;
        }
        
        return head;
    }
}