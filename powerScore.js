const realUnderscore = require('underscore');

const _ = {
    /**
     * goes through each value in a collection 
     * and executes a callback function on them but returns undefined
     * @param any[] collection 
     * @param cb iterator
     * 
     * @returns undefined
     */
    each: function (collection, iterator) {

        if (Array.isArray(collection)) {
            collection.forEach(element => {
                iterator(element);
            })
        } else {
            for (key in collection) {
                iterator(element);
            }
        }
    },

    /**
     * takes each value from a collection, runs a callback function on them
     *  and returns the results in a new array
     * @param any[] collection
     * @param cb iterator
     * 
     * @returns any[]
     */
    map: function (collection, iterator) {
        let newResultsArray = [];

        _.each(collection, (element) => {
            newResultsArray.push(iterator(element)); 
        });
        return newResultsArray;
    },

    /**
     * take the value from a list, executes a function on it.
     * the result is added to the memo parameter which is returned when finished
     * @param number[] list
     * @param cb iterator
     * @param number memo is optional undefined
     * 
     * @returns number single value memo
     */
    reduce: function (collection, iterator, memo) {
        if (memo === undefined) {
            memo = 0;
        }
        _.each(collection, (element) => {
            memo = iterator(memo, element);
        })
        return memo;
    },

    /** 
     * returns the first array value, or extract the first n values based on index
     * @param number[] array 
     * @param number index is optional undefined
     * 
     * @return number[]
     */
    first: function (array, index) {
        let result = [];

        if (typeof index !== 'number') {
            result.push(array[0]);
        } else {
            _.each(array, (element) => {
                if (element <= index) {
                    result.push(element);
                }
            });
        }
        return result;
    },

    /**
     * takes an array and returns an array of all the values except
     * for the last value. If N is given, it will exclude the last
     * N values from the return array.
     * @param number[] array
     * @param number excludeN is optional undefined
     * @returns number[]
     */
    initial: function (array, excludeN) {
        let exclude = excludeN;

        if (exclude === undefined) {
            exclude = 1
        }
        return _.first(array, array.length - exclude)
    },

    /**
     * returns the last value in array
     * or returns the last numElements in array
     * @param number[] array
     * @param number numElements is optional undefined
     * @returns number[]
     */
    last: function (array, numElements) {
        let result = [];

        if (typeof numElements === 'undefined') {
            result.push(array.pop());
        }

        _.each(array, (element) => {
            if ((element + numElements) > array.length) {
                result.push(element);
            }
        })
        return result;
    },

    /**
     * iterates through array and returns first value
     * that passes iterator test. If not, returns undefined
     * @param any[] collection
     * @param callbackFunction iterator
     * @returns single value or undefined
     */
    find: function (collection, iterator) {
        return _.filter(collection, iterator)[0];
    },

    /**
     * iterates through array and returns
     * an array of values that pass iterators test
     * @param any[] array
     * @param cb iterator
     * @returns array of passed values
     */
    filter: function (array, iterator) {
        // create new array
        let result = [];

        _.each(array, (element) => {
            if (iterator(element)) {
                result.push(element);
            }
        })
        return result;
    },

    /**
     * iterates through array and returns an array of values
     * that dont pass the iterators test
     * @param any[] array
     * @param cb iterator
     * @returns array of failed values
     */
    reject: function (array, iterator) {
        // create a new array
        let result = [];
    
        _.each(array, (element) => {
            if (!iterator(element)) {
                result.push(element);
            }
        })
        return result;
    },

    /**
     * iterates through array and executes iterator on each value
     * if all values pass, return true, if one of the values fail,
     * return false
     * @param numbers[] array
     * @param cb iterator
     * @returns boolean
     */
    every: function (array, iterator) {
        let result = true;
        let rejectCheck = _.reject(array, iterator);

        if (rejectCheck.length !== 0) {
            result = false;
        }
        return result;
    },

    /**
     * iterates through objects properties and compares values
     * to properties values. Returns true if elements match
     * otherwise, returns false
     * @param {} collectionEntry
     * @param {} properties
     * @returns boolean
     */
    containsObject: function (collectionEntry, properties) {
        let arrayPropKeys = Object.keys(properties);
        let compareResult = true;

        for (let currentKey of arrayPropKeys) {
            let propValueNow = properties[currentKey];
            let collectionValueNow = collectionEntry[currentKey];

            if (propValueNow !== collectionValueNow) {
                compareResult = false;
             }
        }
        return compareResult;
    },

    /**
     * iterates through an array and returns the objects that 
     * match the key value pairs from the properties argument
     * @param objects[] collections
     * @param {} properties
     * @returns [] of objects
     */
    where: function (collection, properties) {
        return _.filter(collection, (element) => {
            return _.containsObject(element, properties);
        });
    },
    
    /**
     * iterates through collection and returns
     * the first value that matches the key-value
     * pairs and if not, returns undefined.
     * @param [] collections
     * @param {} properties
     * @returns {} || undefined
     */
    findWhere: function (collection, properties) {
        let tempProperities;
        let tempPropValue;

        for (let prop in properties) {
            tempProperities = prop;
            tempPropValue = properties[prop];
        }

        return _.find(collection, (element) => {
            for (let key in element) {
                if (element[key] === tempPropValue) {
                    return element;
                }
            }
        })
        return;
    },

    /**
     * iterates through array and returns
     * true when one of the values passes
     * @param [] collection
     * @param cb iterator
     * @returns boolean
     */
    firstBool: function (collection, iterator) {
        for (let element of collection) {
            if (iterator(element)) {
                return true;
            }
        }
        return false;
    },

    /**
     * iterates through collection and returns
     * true if any value passes, otherwise returns false
     * @param [] collection
     * @param cb iterator
     * @returns boolean
     */
    some: function (collection, iterator) {
        return _.firstBool(collection, iterator);
    },

    /**
     * iterates through collection and returns true
     * if element matches the index, otherwise it 
     * returns false
     * @param [] collection
     * @param number index
     * @returns boolean
     */
    contains: function (collection, value) {
        for (let element of collection) {
            console.log(value);
            if (element === value) {
                return true
            }
        }
        return false;
    },

    invoke: function (collection, methodName) {
        // create a result array
        let result = [];
        // iterate through collection
        for (let i = 0; i < collection.length; i += 1) {
            // assign mini array to tempValue
            let tempValue = collection[i];
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
let arrayObjects = [{title: "Cymbeline", author: "Shakespeare", year: 1603},
 {title: "The Tempest", author: "Shakespeare", year: 1611},
  {title: "The Tempest2", author: "Shakespearez", year: 1614}];

let arrayObjectsTwo = {
    sports: {
        title: "Cymbeline",
        author: "Shakespeare",
        year: 1603},
    business: {
        title: "The Tempest", 
        author: "Shakespeare", 
        year: 1611},
    movies: {
        title: "The Tempest2", 
        author: "Shakespearez", 
        year: 1614},
    cat: {
        name: 'meow',
        age: 1
    }
};

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
// realUnderscore.forEach(anArray, console.log);
// realUnderscore.each(anArray, console.log);
// console.log(_.map(anArray, addNum));
// console.log('real_', realUnderscore.map(anArray, addNum));
// console.log('my function', _.reduce(posArray, addOne));
// console.log('real_', realUnderscore.reduce(posArray, addOne));
// console.log(_.first(anArray));
// console.log('real', realUnderscore.first(anArray));
// console.log(_.initial(anArray, 5));
// console.log('real', realUnderscore.initial(anArray, 5));
// console.log(_.last(anArray, 5));
// console.log('real_', realUnderscore.last(anArray, 5));
// console.log('mine', _.find(anArray, evenNum));
// console.log('real', realUnderscore.find(anArray, evenNum));
// console.log('mine', _.find(inventory, isCherries));
// console.log('real', realUnderscore.find(inventory, isCherries));
// console.log(_.filter(anArray, evenNum));
// console.log('real', realUnderscore.filter(anArray, evenNum));
// console.log(_.reject(anArray,evenNum));
// console.log('real', realUnderscore.reject(anArray, evenNum));
// console.log(_.every(posArray, evenNum));
// console.log('real', realUnderscore.every(posArray, evenNum));
// console.log(_.where(arrayObjects, {author: "Shakespeare", year: 1611}));
// console.log('real', realUnderscore.where(arrayObjects, {author: "Shakespeare", year: 1611}));
// console.log(_.findWhere(arrayObjects, {year: 1614}));
// console.log('real', realUnderscore.findWhere(arrayObjects, {year: 1614}));
console.log(_.some(posArray, evenNum));
console.log('real', realUnderscore.some(posArray, evenNum));
console.log(_.contains(anArray, 2));
console.log('real', realUnderscore.contains(anArray, 2));
// console.log(_.invoke(arrayOfArrays, 'sort'));
// console.log(_.pluck(arrayObjects, 'title'));
// console.log(_.max(inventory));



// write documentation first
// what you want the function to do
// func signature included as well
// put documentation on top of functions above

