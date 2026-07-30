class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let current = 0;
        let max = 0;

        for (const num of nums) {
            if (num === 1) {
                current += 1;
            } else {
                current = 0;
            }
            max = Math.max(current, max);
        }

        return max;
    }
}
