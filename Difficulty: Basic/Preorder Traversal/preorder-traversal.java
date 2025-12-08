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
    private void traversePreOrder(Node root, ArrayList<Integer> ans) {
        if(root == null) return;
        
        ans.add(root.data);
        traversePreOrder(root.left, ans);
        traversePreOrder(root.right, ans);
    }
    public ArrayList<Integer> preOrder(Node root) {
        //  code here
        ArrayList<Integer> ans = new ArrayList<>();
        
        traversePreOrder(root, ans);
        
        return ans;
    }
}