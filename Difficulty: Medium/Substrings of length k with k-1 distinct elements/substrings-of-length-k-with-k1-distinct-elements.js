class Solution {
    substrCount(s, k) {
        // Edge case: window larger than string
  if (k > s.length) return 0;

  const n = s.length;
  
  // frequency array for 'a' … 'z'
  const cnt = new Array(26).fill(0);  
  let ans = 0;
  let distinctCnt = 0;

  // Preload first k-1 characters
  for (let i = 0; i < k - 1; i++) {
    const idx = s.charCodeAt(i) - 97;
    
    // new distinct char
    if (++cnt[idx] === 1) distinctCnt++; 
  }

  // Slide window of exact size k
  for (let i = k - 1; i < n; i++) {
    const addIdx = s.charCodeAt(i) - 97;
    if (++cnt[addIdx] === 1) distinctCnt++;   

    if (distinctCnt === k - 1) ans++;         

    const remIdx = s.charCodeAt(i - k + 1) - 97;
    if (--cnt[remIdx] === 0) distinctCnt--;   
  }

  return ans;
    }
}