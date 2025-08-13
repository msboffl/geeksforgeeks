/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */

class Solution {
    minSoldiers(arr, k) {
        // code here
    const n = arr.length;
    const target = Math.ceil(n / 2);

    // Step 1: Count already lucky troops
    let luckyCount = 0;
    let costs = [];

    for (let soldiers of arr) {
        if (soldiers % k === 0) {
            luckyCount++;
        } else {
            // Soldiers needed to make this troop lucky
            const cost = (k - (soldiers % k)) % k;
            costs.push(cost);
        }
    }

    // Step 2: If we already have enough lucky troops
    if (luckyCount >= target) return 0;

    // Step 3: Sort costs (smallest first)
    costs.sort((a, b) => a - b);

    // Step 4: Take the smallest costs until we meet target
    let remaining = target - luckyCount;
    let totalAdded = 0;

    for (let i = 0; i < remaining; i++) {
        totalAdded += costs[i];
    }

    return totalAdded;

    }
}