class Solution {
    private static int power(int num, int pow) {
        if(pow == 0) return 1;
        if(pow == 1) return num;
        
        return power(num, pow-1) * num;
    }
    static int RecursivePower(int n, int p) {
        // Code here
        return power(n, p);
    }
}
