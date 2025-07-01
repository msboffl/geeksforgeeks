// User function Template for javascript
function searchCharacter(s, ch) {
    // code here
    for(let i = 0; i < s.length; i++) {
        if(s[i] == ch) {
            return i;
        }
    }
    
    return -1;
}