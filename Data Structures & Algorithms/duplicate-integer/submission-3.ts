class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const seen = new Set<Number>();

        for (const num of nums) {
            if (seen.has(num)) {
                return true;
            }

            seen.add(num);
        }
        return false;
    }
}

// Можно перебрать все - будет O(n2), по памяти O(1)
// Можно отсортировать - будет O(nlogn), по памяти O(1)
// Можно использовать хэш-таблицу - будет O(n), по памяти O(n)