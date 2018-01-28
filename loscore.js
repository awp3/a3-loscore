const _ = {
    each: function (collection, iterator) {
        // if the collection is an array
        if (Array.isArray(collection)) {
            // iterate through the collection
            for (let i = 0; i < collection.length; i += 1) {
                // execute the function on the individual element
                iterator(collection[i]);
            }
        // if not an array...
        } else {
            // iterate through the object
            for (key in collection) {
                // and execute the function on the individual element
                iterator(collection[key]);
            }
        }
    },

    map: function (collection, iterator) {
        // create an array for the final result
        let newArray = [];
        
        // if the collection is an actual array
        if (Array.isArray(collection)) {
            // iterate through it 
            for (let i = 0; i < collection.length; i += 1) {
                // run the element through the callback function
                // and push the result into the newArray
                newArray.push(iterator(collection[i]));
            }
        // if collection is not an array
        } else {
            // iterate through the object
            for (key in collection) {
                // and run the element through the callback function
                // and push the result in the newArray
                newArray.push(iterator(collection[key]));
            }
        }
        // return the results
        return newArray;
    },

    reduce: function (collection, iterator) {
        // create a result to return when function finishes
        let result = 0;

        // iterate through the collection
        for (let i = 0; i < collection.length; i += 1) {
            // run the element through the callback function
            // and add the result from the callback
            // to the result variable
            result += iterator(collection[i]);
        }
        // return the final result
        return result;
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
        for (let i = array.length - 1; i >= array.length - numElements; i -= 1) {
            // and push the selected elements into an array
            result.push(array[i]);
        }
        // and then turn the array into a string with spaces
        // and return the string
        return result.join(' ')
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
        // iterate through the collection
        let tempProperities;
        let tempPropValue;

        for (let prop in properties) {
            tempProperities = prop;
            tempPropValue = properties[prop];
        }
        for (let i = 0; i < collection.length; i += 1) {
            let temp = collection[i];

            for (let key in temp) {
                if (key === tempProperities) {
                    if (temp[key] === tempPropValue) {
                        return temp;
                    }
                }
            }
        }
        return;
    }
}

let anArray = [1, 2, 3, 4, 5, 6, 7, 8];
let posArray = [2, 4, 6];
let negArray = [1, 3, 5];
let anObject = {one: 1, two: 2, three: 3};
let inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];
let arrayObjects = [{title: "Cymbeline", author: "Shakespeare", year: 1611}, {title: "The Tempest", author: "Shakespeare", year: 1611}, {title: "The Tempest2", author: "Shakespearez", year: 1614}];

function addNum(num) {
    let result = 0;
    result = num + 2;
    return result;
};

function isCherries(fruit) { 
    return fruit.name === 'cherries';
};

function evenNum(num) {
    return num % 2 == 0;
};

// _.each(anArray, console.log);
// console.log(_.map(anArray, addNum));
// console.log(_.reduce(anArray, addNum));
// console.log(_.first(anArray, 3));
// console.log(_.initial(anArray, 3));
// console.log(_.last(anArray, 3));
// console.log(_.find(inventory, isCherries));
// console.log(_.filter(anArray, evenNum));
// console.log(_.reject(anArray,evenNum));
// console.log(_.every(negArray, evenNum));
// console.log(_.where(arrayObjects, {author: "Shakespeare", year: 1611}));
console.log(_.findWhere(arrayObjects, {year: 1614}));