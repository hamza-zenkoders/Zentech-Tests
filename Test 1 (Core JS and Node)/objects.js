// Q:01
// Write a function to merge two deeply nested objects,
// where properties from the second object overwrite those in the first if there are conflicts.
// Ensure arrays are concatenated and not overwritten.

function mergeObjects(...objects) {
  const deepCopyObjects = objects.map((object) =>
    JSON.parse(JSON.stringify(object))
  );
  return deepCopyObjects.reduce(
    (merged, current) => ({ ...merged, ...current }),
    {}
  );
}

const countries = {
  USA: {
    capital: "Washington D.C.",
    emoji: "🇺🇸",
    population: 331000000,
  },
};

const countriesDetails = {
  USA: {
    language: "English",
    currency: "USD",
  },
  Germany: {
    capital: "Berlin",
    emoji: "🇩🇪",
    language: "German",
    currency: "EUR",
    population: 83000000,
  },
};

console.log(mergeObjects(countries, countriesDetails));



// Q:02
// Implement a function that finds all properties in an object whose values are functions
// and returns their names as an array.

function findFunctionsInObjects (obj) {
    let arr = [];
    for (let key in obj) {
        if (typeof obj[key] == 'function') arr.push(key);
    }

    return arr;
}

let testObj = {
    name: 'Hamza',
    age: 21,
    greet: function () {
        return `Hello ${this.name}!`;
    }
}

console.log(findFunctionsInObjects(testObj));



// Q:03
// Write a function that removes all properties from an object whose values are falsy 
// (null, undefined, false, 0, NaN, or an empty string).

function removeFalsyFromObject (obj) {
    for (let key in obj) {
        if (!obj[key]) delete obj[key];
    }

    return obj;
}

let obj = {
    name: 'Hamza',
    age: null,
    life: undefined,
    grade: false,
    class: NaN,
}

console.log(removeFalsyFromObject(obj));


// Q:04
// Create a function that calculates the deep difference between two objects. For example, given:
// obj1 = { a: 1, b: { c: 2, d: 3 } };
// obj2 = { a: 1, b: { c: 2, d: 4, e: 5 } };
// The result should be { b: { d: [3, 4], e: [undefined, 5] } }.



// Q:05
// Write a function that converts a flat object to a nested one based on its keys. For example,
// { 'a.b.c': 1, 'a.b.d': 2, 'e': 3 }
// should be converted to:
// { a: { b: { c: 1, d: 2 } }, e: 3 }
