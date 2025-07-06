class MaxHeap {
    constructor() {
        this.heap = [];
    }

    push(element) {
        this.heap.push(element);
        // Sort the heap to maintain max-heap property (descending order)
        this.heap.sort((a, b) => b[0] - a[0]);
    }

    pop() {
        return this.heap.shift();
    }

    size() {
        return this.heap.length;
    }
}
class Solution {
    topKSumPairs(a, b, k) {
        // code here
        let n = a.length;
    // Sort both arrays in descending order
    a.sort((x, y) => y - x);
    b.sort((x, y) => y - x);

    const heap = new MaxHeap();
    const used = new Set();

    // Start from the largest pair (0, 0)
    heap.push([a[0] + b[0], 0, 0]);
    used.add(`0,0`);

    const res = [];

//Driver Code Starts
    // Extract top k combinations
    while (res.length < k) {
        const [sum, i, j] = heap.pop();
        res.push(sum);

        // Next element from a
        if (i + 1 < n && !used.has(`${i + 1},${j}`)) {
            heap.push([a[i + 1] + b[j], i + 1, j]);
            used.add(`${i + 1},${j}`);
        }

        // Next element from b
        if (j + 1 < n && !used.has(`${i},${j + 1}`)) {
            heap.push([a[i] + b[j + 1], i, j + 1]);
            used.add(`${i},${j + 1}`);
        }
    }

    return res;
    }
}