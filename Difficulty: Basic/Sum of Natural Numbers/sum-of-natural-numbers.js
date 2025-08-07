class Solution {
    /**
     * @param number n
     * @returns number
     */
    findSum(n) {
        // code here
        let sum = 0;
        function sumOfNaturals(i) {
            if(i > n) return;
            sum += i;
            
            sumOfNaturals(i+1);
        }
        
        let i = 1;
        sumOfNaturals(1)
        return sum;
    }
}
