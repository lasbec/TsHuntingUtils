"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_testing_1 = require("../src/typeCalculus/type-testing");
// The following Curios are behavior of the typesystem  that I hadn't expeced
// CURIO 1:
(0, type_testing_1.typeAssertSubset)(false); // <- this one is not what I would expect
// CURIO 2:
(0, type_testing_1.typeAssertEq)(true);
(0, type_testing_1.typeAssertEq)(true);
(0, type_testing_1.typeAssertEq)(true);
(0, type_testing_1.typeAssertEq)(true);
(0, type_testing_1.typeAssertEq)(true);
// CURIO 3:
(0, type_testing_1.typeAssertEq)(false);
// Testing other subset direction
(0, type_testing_1.typeAssertSubset)(true);
// pairwise comparison 
(0, type_testing_1.typeAssertEq)(true);
(0, type_testing_1.typeAssertEq)(true);
(0, type_testing_1.typeAssertEq)(true);
(0, type_testing_1.typeAssertEq)(true);
(0, type_testing_1.typeAssertEq)(true);
// Testing each single entry of the Intersection individual
(0, type_testing_1.typeAssertEq)(false);
(0, type_testing_1.typeAssertEq)(false);
(0, type_testing_1.typeAssertEq)(false);
(0, type_testing_1.typeAssertEq)(false);
(0, type_testing_1.typeAssertEq)(false);
(0, type_testing_1.typeAssertEq)(false);
(0, type_testing_1.typeAssertEq)(false);
(0, type_testing_1.typeAssertEq)(false);
(0, type_testing_1.typeAssertEq)(true);
(0, type_testing_1.typeAssertEq)(true);
(0, type_testing_1.typeAssertEq)(true);
(0, type_testing_1.typeAssertEq)(true);
(0, type_testing_1.typeAssertEq)(true);
(0, type_testing_1.typeAssertEq)(false);
(0, type_testing_1.typeAssertEq)(false);
(0, type_testing_1.typeAssertEq)(false);
(0, type_testing_1.typeAssertEq)(false);
(0, type_testing_1.typeAssertEq)(false);
(0, type_testing_1.typeAssertEq)(false);
(0, type_testing_1.typeAssertEq)(false);
// Testing each single entry of the Expected result individual
(0, type_testing_1.typeAssertEq)(false);
(0, type_testing_1.typeAssertEq)(false);
(0, type_testing_1.typeAssertEq)(false);
(0, type_testing_1.typeAssertEq)(false);
(0, type_testing_1.typeAssertEq)(false);
(0, type_testing_1.typeAssertEq)(false);
(0, type_testing_1.typeAssertEq)(false);
(0, type_testing_1.typeAssertEq)(false);
(0, type_testing_1.typeAssertEq)(true);
(0, type_testing_1.typeAssertEq)(true);
(0, type_testing_1.typeAssertEq)(true);
(0, type_testing_1.typeAssertEq)(true);
(0, type_testing_1.typeAssertEq)(true);
(0, type_testing_1.typeAssertEq)(false);
(0, type_testing_1.typeAssertEq)(false);
(0, type_testing_1.typeAssertEq)(false);
(0, type_testing_1.typeAssertEq)(false);
(0, type_testing_1.typeAssertEq)(false);
(0, type_testing_1.typeAssertEq)(false);
(0, type_testing_1.typeAssertEq)(false);
