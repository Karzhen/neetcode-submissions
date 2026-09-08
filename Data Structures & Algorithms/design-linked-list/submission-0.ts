class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val: number, next: ListNode | null) {
        this.val = val;
        this.next = next;
    }
}

class MyLinkedList {
    head: ListNode | null;
    tail: ListNode | null;
    size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index: number): number {
        if (index < 0 || index >= this.size) {
            return -1;
        }

        let current = this.head;

        for (let i = 0; i < index; i++) {
            current = current.next;
        }

        return current.val;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val: number): void {
        const newNode = new ListNode(val, this.head);
        this.head = newNode;

        if (this.size === 0) {
            this.tail = newNode;
        }
        
        this.size++;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val: number): void {
        const newNode = new ListNode(val, this.tail);

        if (this.size === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.size++;
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index: number, val: number): void {
        if (index === 0) {
            this.addAtHead(val);
            return;
        } else if (index === this.size) {
            this.addAtTail(val);
            return;
        }

        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        const newNode = new ListNode(val, current.next);
        current.next = newNode;
        this.size++;
    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index: number): void {
        if (index < 0 || index >= this.size) {
            return;
        }

        if (index === 0) {
            this.head = this.head.next;
            if (this.size === 1) {
                this.tail = null;
            }
        } else {
            let current = this.head;
            for (let i = 0; i < index - 1; i++) {
                current = current.next;
            }

            current.next = current.next.next;

            if (index === this.size - 1) {
                this.tail = current;
            }
        }
        this.size--;
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
