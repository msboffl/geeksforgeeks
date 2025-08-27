// User function Template for javascript
class Solution {
    /**
    * @param number date
    * @param number[] car
    * @param number[] fine

    * @returns string[]
    */
    totalFine(date, car, fine) {
        // code here
        const isEven = date % 2 === 0;
        
        let total = 0;
        for(let i = 0; i < car.length; i++) {
            if(isEven) {
                const isCarOdd = car[i] % 2 === 1;
                if(isCarOdd) total += fine[i]
            } else {
                const isCarEven = car[i] % 2 === 0;
                if(isCarEven) total += fine[i];
            }
        }
        
        return total;
    }
}