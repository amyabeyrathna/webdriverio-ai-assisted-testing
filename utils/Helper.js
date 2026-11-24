class Helper {
    static isSorted(values, direction) {
        if (direction !== 'ascending' && direction !== 'descending') {
            throw new Error(`Unsupported sort direction: ${direction}`);
        }

        for (let index = 1; index < values.length; index += 1) {
            const previous = values[index - 1];
            const current = values[index];
            let comparison;

            if (typeof previous === 'number' && typeof current === 'number') {
                comparison = previous - current;
            } else if (typeof previous === 'string' && typeof current === 'string') {
                comparison = previous.localeCompare(current);
            } else {
                throw new TypeError('Sorted values must all be strings or all be numbers');
            }

            if (direction === 'ascending' && comparison > 0) {
                return false;
            }

            if (direction === 'descending' && comparison < 0) {
                return false;
            }
        }

        return true;
    }
}

export default Helper;
