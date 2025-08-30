class Solution {
    static final long MOD = 1000000007;
    // gcd helper (Euclidean algorithm)
    static long gcd(long a, long b) {
        while (b != 0) {
            long temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    // lcm helper
    static long lcm(long a, long b) {
        return (a * b) / gcd(a, b);
    }

    // lcm of array
    static long lcmOfArray(int N, int A[]) {
        long res = A[0]; 
        for (int i = 1; i < N; i++) {
            long gcdVal = gcd(res, A[i]);
            res = ((res / gcdVal) % MOD * (A[i] % MOD)) % MOD;
        }
        
        return res % MOD;
    }
}