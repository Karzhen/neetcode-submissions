class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        let maxRight = -1;

        for (let i = arr.length - 1; i >= 0; i--) {
            const current = arr[i];

            arr[i] = maxRight;
            maxRight = Math.max(maxRight, current);
        }

        return arr;
    }
}

// Сложность по времени O(n), так как один проход по массиву с конца в начало
// Сложность по памяти O(1), так как добавляется одна доп переменная
