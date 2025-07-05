/**
 * @param {number[]} arr
 * @returns {number[]}
 */
class Solution {
    maxSum(arr) {
        // code here
        const n = arr.length;
        let res = arr[0] + arr[1];
    for (let i = 1; i < n - 1; i++)
        res = Math.max(res, arr[i] + arr[i + 1]);

    return res;
    }
}