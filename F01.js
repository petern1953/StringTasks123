// Írj egy függvényt, ami paraméterként tetszőleges darabszámú objektumot merge-öl össze, 
// majd visszatér ezzel az objektummal! Az összefűzést úgy hajtsa végre, hogy
// az új objektum property-jei egyszerű indexek (0, 1, 2 stb.) legyenek, amik tartalmazzák a részobjektumokat!
// Pl.:
// // A két objektum:
// const johnDoe = {
//     firstName: 'Jonh',
//     lastName: 'Doe'
// };

// const janeDoe = {
//     firstName: 'Jane',
//     lastName: 'Doe'
// }

// // A végeredmény:
// {
//     0: {
//         firstName: 'Jonh',
//             lastName: 'Doe'
//     },
//     1: {
//         firstName: 'Jane',
//             lastName: 'Doe'
//     }
// }
// 'use strict';

const johnDoe = {
    firstName: 'Jonh',
    lastName: 'Doe'
};

const janeDoe = {
    firstName: 'Jane',
    lastName: 'Doe'
};

function val(...objects) {
    return {
        ...[...objects]
            .map((objItem, idx) => this.idx = objItem)
    };
}

console.log(val(johnDoe, janeDoe));

// const mergedObjects = (...objects) => [...objects];
// const mappedObjectsArray = mergedObjects(johnDoe, janeDoe)

// const ma = mappedObjectsArray.map((object, idx) => (this.idx = object));
// const mama = { ...ma };

// ((...objects) => [...objects])

// const value = (...obj) => obj.map((obj, idx) => idx = obj);

// console.log(value(johnDoe, janeDoe));

// const val = (...objects) => [...objects];
// console.log(val(johnDoe, janeDoe))

// const val2 = val(johnDoe, janeDoe).map((objItem, idx) => this.idx = objItem)
// const val3 = { ...val2 }
// console.log(val3)