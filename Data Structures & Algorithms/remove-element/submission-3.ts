class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums: number[], val: number): number {
        let writeIndex = 0;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== val) {
                nums[writeIndex] = nums[i];
                writeIndex++;
            }
        }

        return writeIndex;
    }
}

// Сложность по времени O(n), так как нужно пройти по каждому элементу
// Сложность по памяти O(1), так как всего два указателя