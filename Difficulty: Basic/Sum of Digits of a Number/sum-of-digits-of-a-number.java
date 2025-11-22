class Solution {
    private static int sum(int num) {
        if(num == 0) return 0;
        return sum(num / 10) + (num % 10);
    }
    public static int sumOfDigits(int n) {
        // Code here
        return sum(n);
    }
}
