// Question 1: Reverse an Array

// Problem: Write a function that takes an array and returns a new array with the elements in
// reverse order.

// Use Case: This function can be used in a web application where user reviews need to be
// displayed in reverse chronological order.

function reverseArray(arr) {
    return arr.slice().reverse();
}

const inputArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(inputArray);
console.log(reversedArray); // Output: [5, 4, 3, 2, 1]




// Question 2: Flatten an Array

// Problem: Write a function that takes a nested array and flattens it to a single-level array.

// Use Case: Useful for aggregating user-selected items from multiple categories into a single list
// for checkout.

function flattenArray(arr) {
    let result = [];
    
    arr.forEach(item => {
        if (Array.isArray(item)) {
            result = result.concat(flattenArray(item)); 
        } else {
            result.push(item); 
        }
    });
    
    return result;
}

// Example usage:
const inputArray = [1, [2, 3], [4, [5]]];
const flattenedArray = flattenArray(inputArray);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5]




// Question 3: Check for Duplicates

// Problem: Write a function that checks if an array contains duplicates.

// Use Case: Can be used to validate user inputs in forms, such as ensuring usernames are
// unique during registration.

function hasDuplicates(arr) {
    const seen = new Set();
    
    for (const item of arr) {
        if (seen.has(item)) {
            return true; 
        }
        seen.add(item); 
    }
    
    return false; 
}
console.log(hasDuplicates([1, 2, 3, 4, 5, 1]));  // Output: true
console.log(hasDuplicates([1, 2, 3, 4, 5]));  // Output: false



// Question 4: Merge Two Objects

// Problem: Write a function that merges two objects into one.

// Use Case: This can be used in a web application to combine user profile settings from different
// sources.

function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

const object1 = { a: 1, b: 2 };
const object2 = { b: 2, c: 4 };
const mergedObject = mergeObjects(object1, object2);
console.log(mergedObject); // Output: { a: 1, b: 2, c: 4 }


// Question 5: Find the Maximum Number in an Array

// Problem: Write a function that finds the maximum number in an array.

// Use Case: This function can help in analytics dashboards to find the highest sales figure or user
// activity.

function findMax(arr) {
    return Math.max(...arr);
}

const inputArray = [1, 3, 2, 8, 5];
const maxNumber = findMax(inputArray);
console.log(maxNumber); // Output: 8




// Question 6: Group Array of Objects by Property

// Problem: Write a function that groups an array of objects by a specific property.

// Use Case: Useful for organizing products by category in an e-commerce application.

function groupByProperty(arr, property) {
    return arr.reduce((accumulator, current) => {
        const key = current[property];
        if (!accumulator[key]) {
            accumulator[key] = []; 
        }
        accumulator[key].push(current);
        return accumulator;
    }, {});
}

const inputArray = [
    { id: 1, category: 'fruit' },
    { id: 2, category: 'vegetable' },
    { id: 3, category: 'fruit' }
];

const groupedObjects = groupByProperty(inputArray, 'category');
console.log(groupedObjects);
/*
Output:
{
    fruit: [ { id: 1, category: 'fruit' }, { id: 3, category: 'fruit' } ],
    vegetable: [ { id: 2, category: 'vegetable' } ]
}
*/




// Question 7: Find the Intersection of Two Arrays

// Problem: Write a function that returns the intersection of two arrays.

// Use Case: This can be used in social media applications to find mutual friends between users.


function intersectArrays(arr1, arr2) {
    return arr1.filter(item => arr2.includes(item));
}

const array1 = [1, 2, 3];
const array2 = [2, 3, 4];
const intersection = intersectArrays(array1, array2);
console.log(intersection); // Output: [2, 3]





// Question 8: Calculate the Sum of Array Elements

// Problem: Write a function that calculates the sum of all numbers in an array.

// Use Case: Useful in financial applications to calculate the total expenses or revenue.

function calculateSum(arr) {
    return arr.reduce((sum, current) => sum + current, 0);
}

const inputArray = [1, 2, 3, 4, 5];
const totalSum = calculateSum(inputArray);
console.log(totalSum); // Output: 15






// Question 9: Remove Falsy Values from an Array

// Problem: Write a function that removes all falsy values from an array.

// Use Case: This function can be used to clean up user inputs or configuration arrays.

function removeFalsyValues(arr) {
    return arr.filter(Boolean);
}

const inputArray = [0, 1, false, 2, '', 3];
const cleanedArray = removeFalsyValues(inputArray);
console.log(cleanedArray); // Output: [1, 2, 3]





// Question 10: Calculate Average of an Array

// Problem: Write a function that calculates the average of all numbers in an array.

// Use Case: This function is useful in educational applications where you need to compute the average score of students from an array of their grades.


function calculateAverage(arr) {
    if (arr.length === 0) return 0; // Handle empty array case
    const sum = arr.reduce((total, current) => total + current, 0);
    return sum / arr.length;
}

const inputArray = [1, 2, 3, 4, 5];
const average = calculateAverage(inputArray);
console.log(average); // Output: 3










