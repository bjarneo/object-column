const isString = str => typeof str === 'string';

module.exports = function objectColumn(array, column, key) {
    if (!Array.isArray(array) || !isString(column)) {
        throw new TypeError('Check if your input values are correct');
    }

    const result = [];
    let len;

    for (let i = 0, len = array.length; i < len; i++) {
        if (!array[i][column]) {
            continue;
        }

        if (isString(key) && (key in array[i])) {
            result.push({
                [array[i][key]]: array[i][column]
            });

            continue;
        }

        result.push(array[i][column]);
    }

    return result;
}
