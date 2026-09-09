class HistoryNode {
    url: string;
    prev: HistoryNode | null;
    next: HistoryNode | null;

    constructor(url: string) {
        this.url = url;
        this.prev = null;
        this.next = null;
    }
}

class BrowserHistory {
    current: HistoryNode;


    /**
     * @constructor
     * @param {string} homepage
     */
    constructor(homepage) {
        this.current = new HistoryNode(homepage);
    }

    /**
     * @param {string} url
     * @return {void}
     */
    visit(url) {
        const newPage = new HistoryNode(url);

        newPage.prev = this.current;
        this.current.next = newPage;
        this.current = newPage;
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    back(steps) {
        while (steps > 0 && this.current.prev !== null) {
            this.current = this.current.prev;
            steps--;
        }

        return this.current.url;
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    forward(steps) {
        while (steps > 0 && this.current.next !== null) {
            this.current = this.current.next;
            steps--;
        }

        return this.current.url;
    }
}
