/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

class Solution {
    sumOfModes(arr, k) {
        const freqMap = new Map(); // element -> frequency
        const freqCountMap = new Map(); // frequency -> set of elements
        let maxFreq = 0;
        let sum = 0;

        const add = (num) => {
            const oldFreq = freqMap.get(num) || 0;
            const newFreq = oldFreq + 1;
            freqMap.set(num, newFreq);

            // Remove from old frequency set
            if (oldFreq > 0) {
                freqCountMap.get(oldFreq).delete(num);
                if (freqCountMap.get(oldFreq).size === 0) freqCountMap.delete(oldFreq);
            }

            // Add to new frequency set
            if (!freqCountMap.has(newFreq)) freqCountMap.set(newFreq, new Set());
            freqCountMap.get(newFreq).add(num);

            maxFreq = Math.max(maxFreq, newFreq);
        };

        const remove = (num) => {
            const oldFreq = freqMap.get(num);
            const newFreq = oldFreq - 1;

            freqCountMap.get(oldFreq).delete(num);
            if (freqCountMap.get(oldFreq).size === 0) freqCountMap.delete(oldFreq);

            if (newFreq > 0) {
                freqMap.set(num, newFreq);
                if (!freqCountMap.has(newFreq)) freqCountMap.set(newFreq, new Set());
                freqCountMap.get(newFreq).add(num);
            } else {
                freqMap.delete(num);
            }

            // Update maxFreq if needed
            if (!freqCountMap.has(maxFreq)) {
                maxFreq--;
            }
        };

        const getMode = () => {
            return Math.min(...freqCountMap.get(maxFreq));
        };

        // Initialize first window
        for (let i = 0; i < k; i++) add(arr[i]);
        sum += getMode();

        // Slide the window
        for (let i = k; i < arr.length; i++) {
            remove(arr[i - k]);
            add(arr[i]);
            sum += getMode();
        }

        return sum;
    }
}
