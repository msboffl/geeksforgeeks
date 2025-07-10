/**
 * @param {string[]} words
 * @returns {string}
 */

class Solution {
    longestString(words) {
        const wordSet = new Set(words);

        // Sort by descending length, then lex ascending
        words.sort((a, b) => {
            if (b.length !== a.length) return b.length - a.length;
            return a.localeCompare(b);
        });

        for (const word of words) {
            let valid = true;
            for (let i = 1; i <= word.length; i++) {
                const prefix = word.substring(0, i);
                if (!wordSet.has(prefix)) {
                    valid = false;
                    break;
                }
            }
            if (valid) {
                return word;
            }
        }

        return ""; // fallback in case nothing matches
    }
}
