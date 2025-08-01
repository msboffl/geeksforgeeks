class Solution {
    countVC(str) {
    let vowels = 0,
      consonants = 0;
    for (const ch of str) {
      if (/[a-z]/.test(ch)) {
        if ("aeiou".includes(ch)) vowels++;
        else consonants++;
      }
    }
    return [vowels, consonants];
  }
    countBalanced(arr) {
        // code here
      let count = 0;
      let balance = 0;
      const balancedMap = new Map();
      balancedMap.set(0, 1);
    
      let totalOwvels = 0;
      let totalConsonants = 0;
    
      for (const str of arr) {
        const [v, c] = this.countVC(str);
    
        totalOwvels += v;
        totalConsonants += c;
    
        balance = totalOwvels - totalConsonants;
    
        if (balancedMap.has(balance)) {
          count += balancedMap.get(balance);
        }
    
        balancedMap.set(balance, (balancedMap.get(balance) || 0) + 1);
      }
    
      return count;
    }
}