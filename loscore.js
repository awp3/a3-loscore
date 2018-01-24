const _ = {
    each: (collection, iterator) => {
        if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i += 1) {
            iterator(collection[i]);
            }
        }
        for (key in collection) {
            iterator(collection[key]);
        }
    },

    map: (collection, iterator) => {
        let newArray = [];
        for (let i = 0; i < collection.length; i += 1) {
            newArray.push(iterator(collection[i]));
        }
        return newArray;
    }
}
let anArray = [1, 2, 3];
let anObject = {one: 1, two: 2, three: 3};

function addNum(num) {
    let result = 0;
    result = num + 2;
    return result;
}

// console.log(_.each(anObject, addNum));
console.log(_.map(anArray, addNum));
