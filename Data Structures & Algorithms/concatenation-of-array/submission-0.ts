class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        const n = nums.length;
        const result = new Array<number>(2 * n);

        for (let i = 0; i < n; i++) {
            result[i] = nums[i];
            result[n + i] = nums[i];
        }

        return result;
    }
}

// Коротко return nums.concat(nums);
// Время O(n)
// Память O(n)