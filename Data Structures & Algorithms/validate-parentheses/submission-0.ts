class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack: string[] = [];

        const pairs: Record<string, string> = {
            ")": "(",
            "]": "[",
            "}": "{",
        };

        for (const char of s) {
            if (char === "(" || char === "[" || char === "{") {
                stack.push(char);
            } else {
                if (stack.pop() !== pairs[char]) {
                    return false;
                }
            }
        }

        return stack.length === 0;
    }
}

// Время: O(n)
// Память: O(n)
