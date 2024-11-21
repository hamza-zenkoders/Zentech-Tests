
// Q:01
// Write a function that takes two sets and returns their symmetric difference 
// (elements in either set but not both).

function symmetricDifference (setA, setB) {
    return (setA.union(setB)).difference(setA.intersection(setB));
}

const setA = new Set([1,2,3]);
const setB = new Set([2,3,4]);

console.log(symmetricDifference(setA, setB));



// Q:02
// Given a Map, implement a function to group its values based on a callback function. 
// For example, given:
// map = new Map([['a', 1], ['b', 2], ['c', 3]]);
// callback = (val) => val % 2 === 0;
// The result should be { true: ['b'], false: ['a', 'c'] }.

function groupValuesOfMap (map, callback) {
    const newMap = new Map();
    for (let [key, val] of map) {
        let res = callback(val);
        if (newMap.has(res)) {
            newMap.set(res, [...newMap.get(res), key]);
        } else {
            newMap.set(res, [key])
        }
        
    }

    return newMap;
}

const mapTest = new Map([['a', 1], ['b', 2], ['c', 3]]);

console.log(groupValuesOfMap(mapTest, (val) => val % 2 === 0))


// Q:03
// Write a function to flatten a deeply nested Map into an object with dot notation. 
// For example, given:
// map = new Map([['a', new Map([['b', new Map([['c', 1]])]])]]);
// The result should be { 'a.b.c': 1 }.



// Q:04
// Implement a function that checks if a Set is a subset of another Set.

function checkSubset (setA, setB) {
    return setA.isSubsetOf(setB);
}

const setC = new Set([1,2,3]);
const setD = new Set([2,3]);

console.log(checkSubset(setC, setD));



// Q:05
// Write a function to create a bidirectional Map (i.e., a Map where keys can be looked up by 
// values and vice versa). Ensure it handles duplicate entries gracefully.
