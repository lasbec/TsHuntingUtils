"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_testing_1 = require("../typeCalculus/type-testing");
(0, type_testing_1.typeAssert)(true); // works as expected
(0, type_testing_1.typeAssert)(true); // works as expected
(0, type_testing_1.typeAssert)(true); // works as expected
(0, type_testing_1.typeAssert)(false); //CURIO
(0, type_testing_1.typeAssert)(true);
(0, type_testing_1.typeAssert)(true);
let xUnion = { p: [1] };
let x;
x = xUnion;
// xUnion = x;
