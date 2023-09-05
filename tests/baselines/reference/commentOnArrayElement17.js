//// [tests/cases/compiler/commentOnArrayElement17.ts] ////

//// [commentOnArrayElement17.ts]
var arr1 = [
    1, //first
    2, //second
    3 //third
]
var arr1WithTrailingComma = [
    1, //first
    2, //second
    3, //third
]
var arr2 = [
    1, /*first*/
    2, /*second*/
    3 /*third*/
]
var arr3 = [1/*first*/,2/*second*/]
var arr4 = [1,/*first*/ 2/*second*/]