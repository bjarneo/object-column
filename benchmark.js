const bench = require('nanobench');
const objectColumn = require('./index');
const data = require('./fixtures/data');

bench('get names as array elements 25.000.000 times', b => {
    b.start();

    for (let i = 0; i < 25000000; i++) {
        objectColumn(data, 'name')[7] === 'omine';
    }

    b.end();
});

bench('get objects with id as key and name as value 25.000.000 times', b => {
    b.start();

    for (let i = 0; i < 25000000; i++) {
        objectColumn(data, 'name', 'id')[7]['8'] === 'omine';
    }

    b.end();
});
