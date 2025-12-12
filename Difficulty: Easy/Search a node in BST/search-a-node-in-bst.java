/*
class Node {
    int data;
    Node left;
    Node right;

    Node(int val) {
        data = val;
        left = right = null;
    }
}
*/

class Solution {
    private boolean findKey(Node node, int key) {
        if(node == null) return false;
        
        if(node.data == key) return true;
        
        if(key < node.data) {
            return findKey(node.left, key);
        } 
        return findKey(node.right, key);
    }
    
    public boolean search(Node root, int key) {
        // code here
        return findKey(root, key);
    }
}