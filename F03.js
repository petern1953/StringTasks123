// Írj egy függvényt, ami első paraméterként egy karaktert kap, 
// a többi paraméter pedig tetszőleges számú, stringeket tartalmazó tömb!
// A függvény:
// összefűzi egy tömbbe az összes elemet,
//     eltávolítja az ismétlődő elemeket,
//         eltávolítja az összes olyan stringet, ami tartalmazza az első paraméterként megadott karaktert,
//             eltávolítja a stringek végén lévő white space karaktert
// visszaadja ezt az új tömböt.

'use strict';

function flatArray(...stringArrays) {
    return [...stringArrays].flat(Infinity);
};

function combinedFun(char, ...stringArrays) {
    const flatArr = flatArray(...stringArrays);
    // console.log('Flat arr: ', flatArr);
    const singlesArr = elimRepeated(flatArr);
    // console.log(singlesArr);
    const sievedArr = elimWithChar(char, singlesArr);
    // console.log(sievedArr);
    const trimmedArr = truncEnds(sievedArr);
    return trimmedArr;
}

const complexArr = combinedFun('a', ['asd ', 'j', 'gtzu    '], ['s', 'király'], ['király', 'vezér', 'lovag', 'a'], ['j', 'gtzu   ']);

console.log('A tömb végső állapota: ', complexArr);

function elimRepeated(flatArr) {
    let inputArray = [...flatArr];
    let testValue;
    let outArray1 = [];
    let outArray2 = [];
    let i = 0;
    while (i < inputArray.length - 1) {
        testValue = inputArray[0];
        // console.log('testValue: ', testValue);
        outArray1 = inputArray.filter(item => item != testValue);
        // console.log('outArray1: ', outArray1);
        outArray2 = [...outArray1, testValue];
        // console.log('outArray2: ', outArray2);
        inputArray = [...outArray2];
        i += 1;
    };
    return outArray2
};

function elimWithChar(char, singles) {
    return singles.filter(item => !item.includes(char));
}

function truncEnds(arr) {
    return arr.map(item => item.trimEnd());
}