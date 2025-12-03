
/*
class Node
{
    int data;
    Node next;
    Node(int data)
    {
        this.data = data;
        this.next = null;
    }
}*/

class Solution {
    public int[] displayList(Node head) {
        // code here
        Node temp = head;
        int count = 0;
        while(temp != null) {
            count++;
            temp = temp.next;
        }
        
        
        int[] ans = new int[count];
        
        int index = 0;
        while(head != null) {
            ans[index++] = head.data;
            head = head.next;
        }
        
        return ans;
    }
}
