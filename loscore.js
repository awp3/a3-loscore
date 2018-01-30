const realUnderscore = require('underscore');

const _ = {
    // Function Signature: It takes two arguments, a collection/ list and an iterator.
    // The return value will be undefined
    // This function iterates through a collection of elements,
    // which then runs each element through an iterator
    each: function (collection, iterator) {

        if (Array.isArray(collection)) {
            for (let i = 0; i < collection.length; i += 1) {
                iterator(collection[i]);
            }
        } else {
            for (key in collection) {
                iterator(collection[key]);
            }
        }
    },

    // Function Signature: It takes two arguments, a collection / list and an iterator. 
    // It returns a new array of elements
    // This function will take a collection and map each value to the iterator.
    // The results from the iterator will be added to a new results array
    map: function (collection, iterator) {
        let newArray = [];

       _.each(collection, function (element) {
        newArray.push(iterator(element));
       });
       
        return newArray;
    },

    // Function Signature: takes two arguments which is a collection
    // and an iterator and returns a single value.
    // This function takes a collection of values
    // and executes the iterator on each one and returns the 
    // result of all the collection values into one value
    reduce: function (collection, iterator, memo) {
        for (let i = 0; i < collection.length; i += 1) {
            memo = iterator(memo, collection[i]);
        }
        return memo;
    },

    first: function (array, index) {
        // if the index argument is used...
        if (typeof index === 'number') {
            // create an array for the final result
            let result = [];
            // iterate through the array
            // using the index for the length
            for (let i = 0; i < index; i += 1) {
                // take the indexs element
                // and push it in the result array
                result.push(array[i]);
            }
            // change the array into a string with spaces and return it
            return result.join(' ');
        // ...if no index is given
        } else {
            // return the first element
            // in the array
            return array[0];
        }
    },

    initial: function (array, index) {
        // create an array for the final result
        let newResult = [];

        // if there is no index argument given...
        if (index === undefined) {
            // iterate through the array
            // with a shorter array length
            for (let i = 0; i < array.length - 1; i += 1) {
                // take the element
                // and put it in the final result array
                newResult.push(array[i]);
            }
        }
        // ...if an index is given
        // iterate through the array
        // using the index number to shorten the arrays length
        for (let i = 0; i < array.length - index; i += 1) {
            // take the individual element
            // and push it into the final result array
            newResult.push(array[i]);
        }
        // return the results
        return newResult;
    },

    last: function (array, numElements) {
        // check if there is a 2nd argument...
        if (typeof numElements === 'undefined') {
            // if no 2nd argument,
            // then return the last element in the given array
            console.log('no returnN value');
            return array[array.length - 1];
        }
        // ...otherwise, use the index in the (loop?) conditional
        let result = [];
        // and reverse how you iterate through the array
        for (let i = array.length - numElements; i < array.length; i += 1) {
            // and push the selected elements into an array
            result.push(array[i]);
        }
        // and then turn the array into a string with spaces
        // and return the array
        return result
    },

    find: function (array, iterator) {
        // iterate through array
        for (let i = 0; i < array.length; i++) {
            // execute iterator on each array element
            // if current element pass iterators condition
            if (iterator(array[i])) {
                // return current element
                return array[i];
            };
            // otherwise return undefined
        }
    },

    filter: function (array, iterator) {
        // create new array
        let result = [];

        // iterate through an array
        for (let i = 0; i < array.length; i += 1) {
            // execute the iterator on each element
            // if the element passes
            if (iterator(array[i])) {
                // it will be added to an array
                result.push(array[i]);
            }
        }
        // returns array when done
        return result;
    },

    reject: function (array, iterator) {
        // create a new array
        let result = [];
    
        // iterate through the collection
        for (let i = 0; i < array.length; i += 1) {
            // execute the callback on each element
            // if it doesnt pass the test
            if (!iterator(array[i])) {
                // put in result array
                result.push(array[i]);
            }
        }
        // return array when done
        return result;
    },

    every: function (array, iterator) {
        // iterate through the array
        for (let i = 0; i < array.length; i += 1) {
            // execute the iterator on each element
            // if it doesnt pass, return false
            if (!iterator(array[i])) {
                return false;
            }
        }
        // otherwise, return true
        return true;
    },

    where: function (collection, properties) {
        // new array
        let result = [];
        // iterate through collection
        for (let i = 0; i < collection.length; i += 1) {
            // iterate through each elements value
            for (let value of Object.values(collection[i])) {
                // if a value matches any of the properties values
                if (value === Object.values(properties)[i]) {
                    // put into an array
                    result.push(collection[i])
                }
            }
        }
        // return the array when done
        return result;
    },

    findWhere: function (collection, properties) {
        // create temp holders for the properties key and values
        let tempProperities;
        let tempPropValue;

        // iterate through properties
        for (let prop in properties) {
            // assign key and value to temp property variables
            tempProperities = prop;
            tempPropValue = properties[prop];
        }
        // iterate through collection
        for (let i = 0; i < collection.length; i += 1) {
            // create temp variable for current object
            let temp = collection[i];

            // iterate through the objects keys
            for (let key in temp) {
                // if key and tempProperties key matches
                if (key === tempProperities) {
                    // and if the current objects key value matches the tempProperties key value
                    if (temp[key] === tempPropValue) {
                        // return current object
                        return temp;
                    }
                }
            }
        }
        // if no match, return undefined
        return;
    },

    some: function (collection, iterator) {
        // iterate through the collection
        for (let currentElement = 0;
             currentElement < collection.length;
             currentElement += 1) {
            // execute the iterator on the current element
            if (iterator(collection[currentElement])) {
                // if it passes, return true
                return true;
            }
        }
        // else return, return false
        return false;
    },

    contains: function (collection, value) {
        // iterate through collection
        for (let currentElement = 0;
             currentElement < collection.length;
             currentElement += 1) {
            // if current element is equal to the value argument
            if (collection[currentElement] === value) {
                // return true
                return true;
            }
        }
        // if no value return false
        return false;
    },

    invoke: function (collection, methodName) {
        // create a result array
        let result = [];
        // iterate through collection
        for (let indexValue = 0; indexValue < collection.length; indexValue += 1) {
            // assign mini array to tempValue
            let tempValue = collection[indexValue];
            // apply methodName to tempValue  
            // **********    TROUBLE POINT    *************
            tempValue[methodName]();
            // push result to result array
            result.push(tempValue[methodName]());
        }
        // return array
        return result;
    },

    pluck: function (collection, propertyname) {
        // create result array
        let result = [];
        // iterate through collection
        for (let i = 0; i < collection.length; i += 1) {
            // save current value to temp variable
            let temp = collection[i];
            // how to access key of objects
            for (let key in temp) {
                if (key === propertyname) {
                    result.push(temp[key]);
                }
            }
        }
        return result;
    },

    max: function (collection) {
        // create variable to hold highest value
        let highestValue = 0;
        // iterate through collection
        for (let i = 0; i < collection.length; i += 1) {
            // create variable for current value in collection
            let currentValue = collection[i];
            // iterate through the objects
            for (key in currentValue) {
                // if type of the current value is number
                if (typeof currentValue[key] === 'number') {
                    // and if the highestValue is lower than the current value
                    if (highestValue < currentValue[key]) {
                        // assign current value to the highestValue
                        highestValue = currentValue[key];
                    }
                }
            }
        }
        // now, iterate through the array again
        for (let j = 0; j < collection.length; j += 1) {
            // and assign the current value to a variable
            let currentValue = collection[j];
            // and iterate through the selectedValue
            for (key in currentValue) {
                // if the currentValues value equals the highestValue
                if (currentValue[key] === highestValue) {
                    // return the current object
                    return currentValue;
                }
            }
        }
    }
}

let anArray = [1, 2, 3, 4, 5, 6, 7, 8];
let posArray = [2, 4, 6];
let negArray = [1, 3, 5];
let arrayOfArrays = [[5, 1, 7], [3, 2, 1]];
let anObject = {one: 1, two: 2, three: 3};
let inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];
let arrayObjects = [{title: "Cymbeline", author: "Shakespeare", year: 1603}, {title: "The Tempest", author: "Shakespeare", year: 1611}, {title: "The Tempest2", author: "Shakespearez", year: 1614}];

function addNum(num) {
    let result = 0;
    result = num + 2;
    return result;
};

function addOne(memo, num) {
    return memo + num;
}

function isCherries(fruit) { 
    return fruit.name === 'cherries';
};


function evenNum(num) {
    return num % 2 == 0;
};

// _.each(anArray, console.log);
// realUnderscore.each(anArray, console.log);
console.log(_.map(anArray, addNum));
console.log('real_', realUnderscore.map(anArray, addNum));
// console.log('my function', _.reduce(posArray, addOne, 5));
// console.log('real_', realUnderscore.reduce(posArray, addOne, 5));
// console.log(_.first(anArray, 3));
// console.log(_.initial(anArray, 3));
// console.log(_.last(anArray, 3));
// console.log('real_', realUnderscore.last(anArray, 3));
// console.log(_.find(inventory, isCherries));
// console.log(_.filter(anArray, evenNum));
// console.log(_.reject(anArray,evenNum));
// console.log(_.every(negArray, evenNum));
// console.log(_.where(arrayObjects, {author: "Shakespeare", year: 1611}));
// console.log(_.findWhere(arrayObjects, {year: 1614}));
// console.log(_.some(negArray, evenNum));
// console.log(_.contains(anArray, 9));
// console.log(_.invoke(arrayOfArrays, 'sort'));
// console.log(_.pluck(arrayObjects, 'title'));
// console.log(_.max(inventory));



// write documentation first
// what you want the function to do
// func signature included as well
// put documentation on top of functions above