/*
class Node {
    int data;
    Node left, right;
    Node(int val){
        data = val;
        left = right = null;
    }
}
*/

class Solution {
    private void traversePostOrder(Node root, ArrayList<Integer> ans) {
        if(root == null) return;
        
        traversePostOrder(root.left, ans);
        traversePostOrder(root.right, ans);
        ans.add(root.data);
    }
    public ArrayList<Integer> postOrder(Node root) {
        // code here
        ArrayList<Integer> ans = new ArrayList<>();
        
        traversePostOrder(root, ans);
        
        return ans;
    }
}