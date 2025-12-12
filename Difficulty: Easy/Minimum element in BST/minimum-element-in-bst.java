/*
class Node {
    int data;
    Node left;
    Node right;
    Node(int data) {
        this.data = data;
        left = null;
        right = null;
    }
}
*/
class Solution {
    private int findMin(Node node) {
        
        if(node.left == null) {
            return node.data;
        }
        return findMin(node.left);
    }
    public int minValue(Node root) {
        // code here
        return findMin(root);
    }
}