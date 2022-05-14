"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_testing_1 = require("../src/typeCalculus/type-testing");
(0, type_testing_1.typeAssertEq)(true); // works as expected
(0, type_testing_1.typeAssertEq)(true); // works as expected
(0, type_testing_1.typeAssertSubset)(true); // works as expected
(0, type_testing_1.typeAssertSubset)(false); //CURIO
(0, type_testing_1.typeAssertEq)(true);
(0, type_testing_1.typeAssertEq)(true);
let xUnion = { p: [1] };
let x;
x = xUnion;
// xUnion = x;
