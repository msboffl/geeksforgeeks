class Solution {
    nextLargerElement(arr) {
        let n = arr.length;
    let res = new Array(n).fill(-1);
    let stk = [];

    // Traverse the array from right to left
    for (let i = 2 * n - 1; i >= 0; i--) {

        // Pop elements from the stack that are less
        // than or equal to the current element
        while (stk.length > 0 &&
                stk[stk.length - 1] <= arr[i % n]) {
            stk.pop();
        }

        // If the stack is not empty, the top element
        // is the next greater element
        if (i < n && stk.length > 0) {
            res[i] = stk[stk.length - 1];
        }

        // Push the current element onto the stack
        stk.push(arr[i % n]);
    }

    return res;
    }
}