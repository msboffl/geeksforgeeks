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
    private boolean checkBST(Node node, int min, int max) {
        if (node == null) return true;

        // Node must lie in (min, max)
        if (node.data <= min || node.data >= max) return false;

        return checkBST(node.left, min, node.data) &&
               checkBST(node.right, node.data, max);
    }

    public boolean isBST(Node root) {
        return checkBST(root, Integer.MIN_VALUE, Integer.MAX_VALUE);
    }
}
