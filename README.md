object-column
--
![Travis](https://travis-ci.org/bjarneo/object-column.svg?branch=master)

Return the values from a single column from the array of objects

Install
--

```js
$ npm i --save object-column
```

Usage
--

```js
const objectColumn = require('object-column');

objectColumn(
    array, // Your array with objects 
    column, // The column you want to fetch 
    key // Optional. Key for your returned object
);

```

```js
const data = [{
    id: 1,
    name: 'Nanon',
    repository: 'https://github.com/bjarneo/nanon'
}, {
    id: 2,
    name: 'Instantly',
    repository: 'https://github.com/bjarneo/instantly'
}, {
    id: 3,
    name: 'Roc',
    repository: 'https://github.com/rocjs/roc'
}, {
    id: 4,
    name: 'Object Column',
    repository: 'https://github.com/bjarneo/object-column'
}];

const names = objectColumn(data, 'name');
// [ 'Nanon', 'Instantly', 'Roc', 'Object Column' ] 

const nameRepo = objectColumn(data, 'repository', 'name');
/*
[{
    Nanon: 'https://github.com/bjarneo/nanon'
}, {
    Instantly: 'https://github.com/bjarneo/instantly'
}, {
    Roc: 'https://github.com/rocjs/roc'
}, {
    'Object Column': 'https://github.com/bjarneo/object-column'
}]
*/

```

Contribution
--
Contributions are appreciated.

License
--
MIT-licensed. See LICENSE.
