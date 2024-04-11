//probably we could make "findFirstDigit" more generic, but it's not necessary according  to rule of three
function findFirstDigit(list: string, defaultValue = "", searchFromEnd = false): string { //we could solve it using recursion, but it's not more efficient
    //initialize the first index and the function to find the next index
    const firstIndex = searchFromEnd ? list.length - 1 : 0;
    const findNextIndex = searchFromEnd ? (index: number) => index - 1 : (index: number) => index + 1;
    const isEnd = searchFromEnd ? (index: number) => index >= 0 : (index: number) => index < list.length;

    for (let i = firstIndex; isEnd(i); i = findNextIndex(i)) {
        const current = list[i];
        if (!isNaN(parseInt(current))) {
            return current; //if we find a digit, there is no need to keep iterating
        }
    }
    return defaultValue;
}

const findFirstDigitOrMapping = (mapping: { [key: string]: string }) =>
    function (list: string, defaultValue = "", startFromEnd = false): string {
        //initialize the first index and the function to find the next index
        const startIndex = startFromEnd ? list.length - 1 : 0;
        const endIndex = startFromEnd ? -1 : list.length;
        const step = startFromEnd ? -1 : 1;

        for (let i = startIndex; startFromEnd ? i > endIndex : i < endIndex; i += step) {
            const currentChar = list[i];
            if (!isNaN(parseInt(currentChar))) { //same as findFirstDigit
                return currentChar;
            }

            for (const key of Object.keys(mapping)) { //extra step to check if the current substring is a key in the mapping
                const keyLength = key.length;
                const substr = startFromEnd
                    ? list.substring(i - keyLength + 1, i + 1)
                    : list.substring(i, i + keyLength);

                if (substr === key) {
                    return mapping[key];
                }
            }
        }

        return defaultValue; //if we don't find any digit or mapping, we return the default value
    };

export {findFirstDigit, findFirstDigitOrMapping};
