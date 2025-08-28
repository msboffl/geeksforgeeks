// User function Template for javascript

class Solution {
    gcdOfTwoNumbers(a, b) {
        while(b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        
        return a;
    }
    gcd(arr, n) {
        // code here
        let res = arr[0];
        for(let i = 1; i < n; i++) {
            res = this.gcdOfTwoNumbers(res, arr[i]);
        }
        
        return res;
    }
}