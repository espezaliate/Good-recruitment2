// 1. Please write a function that shows the usage of closures

const x = () => {
  const a = 1;
  const y = () => {
    console.log(a);
  };
  y();
};
const z = x();

z();

// 2. Please write a function that returns a sum of array items
// example input [9, 1, 22, 0, 2]
// example output 34
const sumArr = (arr) => arr.reduce((prevVal, currVal) => prevVal + currVal);

sumArr([9, 1, 22, 0, 2]);

// 3. Please write a recursive function that flattens a list of items
// example input [[2, [4, [44,5,6]]], [4,5,6], [[2,4], 4], 5]]
// example output [2, 4, 44, 5, 6, 4, 5, 6, 2, 4, 4, 5]

const flattenArray = (arr) => {
  return arr.flatMap((e) => {
    if (Array.isArray(e)) {
      return flattenArray(e);
    }
    return e;
  });
};

flattenArray([[2, [4, [44, 5, 6]]], [4, 5, 6], [[2, 4], 4], 5]);

// 4. Please write a function that finds all common elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['b', 4, 76]

const findCommon = (arr1, arr2) => {
  let results = [];
  arr1.forEach((item1) => {
    arr2.forEach((item2) => {
      if (item1 === item2) {
        results.push(item1);
      }
    });
  });
  return results;
};

const findCommonImproved = (arr1, arr2) => arr1.filter((e) => arr2.includes(e));

findCommon(["b", 3, 4, 76, "c"], ["a", "b", 4, 76, 21, "e"]);
findCommonImproved(["b", 3, 4, 76, "c"], ["a", "b", 4, 76, 21, "e"]);

// 5. Please write a function that finds all different elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['a', 3, 21, 'c', 'e']

const findDifference = (arr1, arr2) =>
  arr1
    .filter((e) => !arr2.includes(e))
    .concat(arr2.filter((e) => !arr1.includes(e)));

findDifference(["b", 3, 4, 76, "c"], ["a", "b", 4, 76, 21, "e"]);

// 6. Please write a function that takes two arrays of items and returns an array of tuples made from two input arrays at the same indexes. Excessive items should be dropped.
// example input [1,2,3], [4,5,6,7]
// example output [[1,4], [2,5], [3,6]]

const createTuples = (arr1, arr2) => {
  let results = [];
  const iterator = arr1 >= arr2 ? arr2.length : arr1.length;
  for (let i = 0; i < iterator; i++) {
    results.push([arr1[i], arr2[i]]);
  }
  return results;
};

createTuples([1, 2, 3], [4, 5, 6, 7]);

// 7. Please write a function which takes a path(path is an array of keys) and object, then returns value at this path. If value at path doesn't exists, return undefined.
// example inputs ['a', 'b', 'c', 'd'], { a: { b: { c: { d: '23' } } } }
// example output '23'

const pathFinder = (arr, obj) => {
  arr.forEach((e) => (obj = obj[e]));
  return obj;
};

pathFinder(["a", "b", "c", "d"], { a: { b: { c: "" } } });
pathFinder(["a", "b", "c", "d"], { a: { b: { c: { d: "23" } } } });

// 8. Please write compare function which compares 2 objects for equality.
// example input { a: 'b', c: 'd' }, { c: 'd', a: 'b' }  /// output true
// example input { a: 'c', c: 'a' }, { c: 'd', a: 'b', q: 's' }  /// output false

const equalityCheck = (obj1, obj2) => {
  return (
    JSON.stringify(Object.entries(obj2).sort()) ===
    JSON.stringify(Object.entries(obj1).sort())
  );
};

equalityCheck({ a: "b", c: "d" }, { c: "d", a: "b" });
equalityCheck({ a: "c", c: "a" }, { c: "d", a: "b", q: "s" });

// 9. Please write a function which takes a list of keys and an object, then returns this object, just without keys from the list
// example input ['color', 'size'], { color: 'Blue', id: '22', size: 'xl' }
// example output { id: '22' }

const removeKeys = (arr, obj) => {
  arr.forEach((e) => delete obj[e]);
  return obj;
};

removeKeys(["color", "size"], { color: "Blue", id: "22", size: "xl" });
