class MinStack {
    private stack: Array<[number, number]>;
    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        const currentMin = 
        this.stack.length === 0
            ? val
            : Math.min(val, this.stack[this.stack.length - 1][1])

        this.stack.push([val, currentMin]);

    }

    /**
     * @return {void}
     */
    pop(): void {
        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack[this.stack.length - 1][0];
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.stack[this.stack.length - 1][1];
    }
}
