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
    }
}

let anArray = [1, 2, 3, 4, 5];
let anObject = {one: 1, two: 2, three: 3};

function addNum(num) {
    let result = 0;
    result = num + 2;
    return result;
}

// _.each(anArray, console.log);
// console.log(_.map(anArray, addNum));
// console.log(_.reduce(anArray, addNum));
// console.log(_.first(anArray, 3));
// console.log(_.initial(anArray, 3));
console.log(_.last(anArray, 3));
