// Q:01
// Array + Objects + Sets:
// Write a function that:
// Takes an array of objects and a Set of keys.
// Returns a new array where each object contains only the properties whose keys are in the Set.

// fake data generated using AI for testing
const objectsArray = [
  { id: 1, name: "Alice", age: 30, city: "New York", profession: "Engineer" },
  {
    id: 2,
    name: "Bob",
    age: 25,
    city: "San Francisco",
    profession: "Designer",
  },
  {
    id: 3,
    name: "Charlie",
    age: 35,
    city: "Los Angeles",
    profession: "Manager",
  },
  { id: 4, name: "David", age: 28, city: "Chicago", profession: "Developer" },
];

const keysSet = new Set(["id", "name", "profession"]);

function formattedArray (objectsArray, keysSet) {
    for (let obj of objectsArray) {
        for (let key in obj) {
            if (!keysSet.has(key)) delete obj[key];
        }
    }

    return objectsArray;
}

console.log(formattedArray(objectsArray, keysSet));