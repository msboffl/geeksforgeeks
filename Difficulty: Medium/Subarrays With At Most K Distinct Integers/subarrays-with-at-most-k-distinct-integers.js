class Solution {
    countAtMostK(arr, k) {
        // code here
        let n = arr.length;
    let res = 0;

    // pointers to mark the left and right boundary
    let left = 0, right = 0;

    // frequency map
    let freq = new Map();
    while (right < n) {
        freq.set(arr[right], (freq.get(arr[right]) || 0) + 1);

        // if this is a new element in the window, 
        // decrement k by 1
        if (freq.get(arr[right]) === 1)
            k -= 1;

        // shrink the window until distinct element
        // count becomes <= k
        while (k < 0) {
            freq.set(arr[left], freq.get(arr[left]) - 1);
            if (freq.get(arr[left]) === 0)
                k += 1;
            left += 1;
        }

        // count of subarrays ending at "right" 
        // and having atmost k elements
        res += (right - left + 1);
        right += 1;
    }
    return res;
    }
}