class Solution {
    compare(a, b) {
        let a1 = (1.0 * a[0]) / a[1];
        let b1 = (1.0 * b[0]) / b[1];
        
        return b1 - a1;
    }
    
    fractionalknapsack(val, wt, capacity) {
        // code here
        const n = val.length;
        const items = [];
        
        for(let i = 0; i < n; i++) {
            items.push([val[i], wt[i]]);
        }
        
        items.sort(this.compare)
        
        let res = 0.0;
        let currentCapacity = capacity;
        
        for(let i = 0; i < n; i++) {
            if(items[i][1] <= currentCapacity) {
                res += items[i][0];
                currentCapacity -= items[i][1]
            } else {
                res += (1.0 * items[i][0] / items[i][1]) * currentCapacity;
                break;
            }
        }
        
        return res;
    }
}