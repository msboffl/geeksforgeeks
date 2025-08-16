class Solution {
    sieve(n) {
        if (n <= 1) return [];
        
        const isPrime = new Array(n + 1).fill(true);
        isPrime[0] = false;
        isPrime[1] = false;

        // main sieve logic
        for (let i = 2; i * i <= n; i++) {
            if (isPrime[i]) {
                for (let j = i * i; j <= n; j += i) {
                    isPrime[j] = false;
                }
            }
        }

        // collect primes
        const res = [];
        for (let i = 2; i <= n; i++) {
            if (isPrime[i]) {
                res.push(i);
            }
        }
        
        return res;
    }
}
