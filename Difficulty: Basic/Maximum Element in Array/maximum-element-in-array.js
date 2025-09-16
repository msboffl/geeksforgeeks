
class Solution {
    /**
    * @param number[] arr

    * @returns number
    */
    largest(arr) {
        // code here
        let max = arr[0];
        
        for(let i = 1; i < arr.length; i++) {
            if(arr[i] > max) max = arr[i];
        }
        
        return max;
    }
}
