const _ = {
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

    map: function (collection, iterator) {
        let newArray = [];
        
        if (Array.isArray(collection)) {
            for (let i = 0; i < collection.length; i += 1) {
                newArray.push(iterator(collection[i]));
            }
        } else {
            for (key in collection) {
                newArray.push(iterator(collection[key]));
            }
        }
        return newArray;
    },

    reduce: function (collection, iterator) {
        let result = 0;

        for (let i = 0; i < collection.length; i += 1) {
            result += iterator(collection[i]);
        }
        return result;
    },

    first: function (array, index) {
        if (typeof index === 'number') {
            let result = [];
            for (let i = 0; i < index; i += 1) {
                result.push(array[i]);
            }
            return result.join(' ');
        } else {
            return array[0];
        }
    },

    initial: function (array, index) {
        let newResult = [];

        if (index === undefined) {
            for (let i = 0; i < array.length - 1; i += 1) {
                newResult.push(array[i]);
            }
        }
        for (let i = 0; i < array.length - index; i += 1) {
            newResult.push(array[i]);
        }
        return newResult;
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
console.log(_.first(anArray, 3));
// console.log(_.initial(anArray, 3));
