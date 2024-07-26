# JavaScript
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const bracketPairs = {')': '(', '}': '{', ']': '['};
    const stack = [];
    for (const char of s) {
        if (bracketPairs[char]) {
            const element = stack.length ? stack.pop() : '#';
            if (bracketPairs[char] !== element) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }
    return stack.length === 0;
};
