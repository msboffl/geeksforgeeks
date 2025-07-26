class Solution {
    // Function to remove duplicates from the given array.
    removeDuplicates(arr) {
        // code here
        const n = arr.length;
        
        if(n <= 1) return arr;
        
        const ans = [arr[0]];
        for(let i = 1; i < n; i++) {
            if(arr[i] != arr[i-1]) {
                ans.push(arr[i]);
            }
        }
        
        return ans;
    }
}
