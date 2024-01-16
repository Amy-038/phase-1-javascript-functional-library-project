const myEach = (collection, callback) => {
    if(Array.isArray(collection)){
        for (const element of collection){
            callback(element);
        }
    } else if(typeof collection === 'object'){
        for (const key in collection) {
            callback(collection[key]);
        }
    }

    return collection;
}

const myMap = (collection, callback) => {
    const newArray = []

    if(Array.isArray(collection)){
        for (const element of collection){
            newArray.push(callback(element));
        }
    } else if(typeof collection === 'object'){
        for (const key in collection) {
            newArray.push(callback(collection[key]));
        }
    }

    return newArray;
}

const myReduce = (collection, callback, acc) => {
    let total;

    if (acc !== undefined) {
        total = acc;
    } else {
        if (Array.isArray(collection)) {
            total = collection[0];
            collection = collection.slice(1);
        } else if (typeof collection === 'object') {
            const entries = Object.entries(collection);
            total = entries[0][1];
            collection = Object.fromEntries(entries.slice(1));
        }
    }

    if (Array.isArray(collection)) {
        for (const element of collection) {
            total = callback(total, element);
        }
    } else if (typeof collection === 'object') {
        for (const [key, value] of Object.entries(collection)) {
            total = callback(total, value, key);
        }
    }

    return total;
};

  
const myFind = (collection, predicate) => {
    if(Array.isArray(collection)){
        for (const element of collection){
            if(predicate(element)){
                return element;
            }
        }
    } else if(typeof collection === 'object'){
        for (const key in collection) {
            if (predicate(collection[key])){
                return collection[key];
            }
        }
    }

    return undefined;
}

const myFilter = (collection, predicate) => {
    const newArray = [];

    if(Array.isArray(collection)){
        for (const element of collection){
            if(predicate(element)){
                newArray.push(element);
            }
        }
    } else if(typeof collection === 'object'){
        for (const key in collection) {
            if (predicate(collection[key])){
                newArray.push(collection[key]);
            }
        }
    }

    return newArray;
}

const mySize = collection => {
    if(Array.isArray(collection)){
        return collection.length;
    } else if(typeof collection === 'object'){
        const objectKeys = Object.keys(collection);
        return objectKeys.length;
    }
}

const myFirst = (array, n) => {
    if(n === undefined){
        return array[0]
    } else {
        const selectedElements = array.slice(0, n)
        return selectedElements;
    }
}

const myLast = (array, n) => {
    if(n === undefined){
        const selectedElement = array.slice(-1)
        return selectedElement[0]; 
    } else {
        const selectedElements = array.slice(-n)
        return selectedElements;
    }
}

const myKeys = object => {
    return Object.keys(object)
}

const myValues = object => Object.values(object)