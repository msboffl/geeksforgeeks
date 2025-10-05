class Solution {
    getSecondLargest(arr) {
        const n = arr.length;
        // code here
        arr.sort((a, b) => a - b);
        // console.log(arr);
        const firstLarge = arr[n-1];
        let secondLarge = -1;
        for(let i = n-2; i >= 0; i--) {
            if(firstLarge !== arr[i]) {
                secondLarge = arr[i];
                break;
            }
        }
        
        return secondLarge;
    }
}