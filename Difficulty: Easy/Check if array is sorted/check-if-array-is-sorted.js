class Solution {
    checkSort(arr, n) {
        if(n == 0 || n == 1) return arr;
        return arr[n-1] >= arr[n-2] && this.checkSort(arr, n-1);
    }
    isSorted(arr) {
        // code here
        const n = arr.length;
        return this.checkSort(arr, n);
    }
}