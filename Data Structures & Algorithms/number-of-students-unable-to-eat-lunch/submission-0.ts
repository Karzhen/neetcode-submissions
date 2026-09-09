class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students: number[], sandwiches: number[]): number {
        const count = [0, 0];
        // Таким образом мы заполняем массив, какие студенты хотят сендвичи [0] и [1]
        for (const student of students) count[student]++;
        for (const sandwich of sandwiches) {
            if (count[sandwich] > 0) {
                count[sandwich]--;
            } else {
                break;
            }
        }

        return count[0] + count[1];
    }
}
