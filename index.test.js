'use strict';
const assert = require('assert');

const objectColumn = require('./index');

const data = require('./fixtures/data');

describe('object column', () => {
    it('should get first value from the objects as an array', () => {
        const names = objectColumn(data, 'name');

        assert(names[0] === 'Nanon');
        assert(names[7] === 'Omine');
    });

    it('should get first value from the objects with second as a key and first as value', () => {
        const idNames = objectColumn(data, 'name', 'id');

        assert('1' in idNames[0]);
        assert(idNames[0]['1'] === 'Nanon');

        assert('8' in idNames[7]);
        assert(idNames[7]['8'] === 'Omine');
    });

    it('should throw an exception (TypeError) if the input values are incorrect', () => {
        try {
            const fail = objectColumn(data, {});
        } catch (e) {
            assert(e.message === 'Check if your input values are correct');
        }

        try {
            const fail = objectColumn({}, 'first');
        } catch (e) {
            assert(e.message === 'Check if your input values are correct');
        }
    });
});
