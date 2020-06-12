/** Given a string s and a string t, check if s is subsequence of t.
* A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the 
* characters without disturbing the relative positions of the remaining characters.
*  (ie, "ace" is a subsequence of "abcde" while "aec" is not).
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//Approach 1
var isSubsequence = function(s, t) {
    const index = [];
    let start = 0;
    return s.split('')
        .every((char) => {
        const charIndex = t.indexOf(char,start);
        if( charIndex !== -1 && !(index.some((i) => i > charIndex))){
            index.push(charIndex);
            start = charIndex+1;
            return true;
        }
        else {
            return false;
        }
    });
};
//Approach 2
var isSubsequence = function(s, t) {
    t = t.split('');
    s = s.split('');
    t.forEach(char => s[0] === char ? s.shift() : null)
    return !s.length
};

