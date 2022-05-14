"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_testing_1 = require("../typeCalculus/type-testing");
// The following Curios are behavior of the typesystem  that I hadn't expeced
// CURIO 1:
(0, type_testing_1.typeAssert)(false); // <- this one is not what I would expect
// CURIO 2:
(0, type_testing_1.typeAssert)(true);
(0, type_testing_1.typeAssert)(true);
(0, type_testing_1.typeAssert)(true);
(0, type_testing_1.typeAssert)(true);
(0, type_testing_1.typeAssert)(true);
// CURIO 3:
(0, type_testing_1.typeAssert)(false);
// Testing other subset direction
(0, type_testing_1.typeAssert)(true);
// pairwise comparison 
(0, type_testing_1.typeAssert)(true);
(0, type_testing_1.typeAssert)(true);
(0, type_testing_1.typeAssert)(true);
(0, type_testing_1.typeAssert)(true);
(0, type_testing_1.typeAssert)(true);
// Testing each single entry of the Intersection individual
(0, type_testing_1.typeAssert)(false);
(0, type_testing_1.typeAssert)(false);
(0, type_testing_1.typeAssert)(false);
(0, type_testing_1.typeAssert)(false);
(0, type_testing_1.typeAssert)(false);
(0, type_testing_1.typeAssert)(false);
(0, type_testing_1.typeAssert)(false);
(0, type_testing_1.typeAssert)(false);
(0, type_testing_1.typeAssert)(true);
(0, type_testing_1.typeAssert)(true);
(0, type_testing_1.typeAssert)(true);
(0, type_testing_1.typeAssert)(true);
(0, type_testing_1.typeAssert)(true);
(0, type_testing_1.typeAssert)(false);
(0, type_testing_1.typeAssert)(false);
(0, type_testing_1.typeAssert)(false);
(0, type_testing_1.typeAssert)(false);
(0, type_testing_1.typeAssert)(false);
(0, type_testing_1.typeAssert)(false);
(0, type_testing_1.typeAssert)(false);
// Testing each single entry of the Expected result individual
(0, type_testing_1.typeAssert)(false);
(0, type_testing_1.typeAssert)(false);
(0, type_testing_1.typeAssert)(false);
(0, type_testing_1.typeAssert)(false);
(0, type_testing_1.typeAssert)(false);
(0, type_testing_1.typeAssert)(false);
(0, type_testing_1.typeAssert)(false);
(0, type_testing_1.typeAssert)(false);
(0, type_testing_1.typeAssert)(true);
(0, type_testing_1.typeAssert)(true);
(0, type_testing_1.typeAssert)(true);
(0, type_testing_1.typeAssert)(true);
(0, type_testing_1.typeAssert)(true);
(0, type_testing_1.typeAssert)(false);
(0, type_testing_1.typeAssert)(false);
(0, type_testing_1.typeAssert)(false);
(0, type_testing_1.typeAssert)(false);
(0, type_testing_1.typeAssert)(false);
(0, type_testing_1.typeAssert)(false);
(0, type_testing_1.typeAssert)(false);
