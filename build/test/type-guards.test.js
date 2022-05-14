"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const true_number_1 = require("../src/numbers/true-number");
const type_testing_1 = require("../src/typeCalculus/type-testing");
describe("TrueNumber typeguards", () => {
    const r = (0, true_number_1.TN)(1);
    it("integer", () => {
        if (r.isInteger())
            (0, type_testing_1.typeAssertEq)(true);
    });
    it("isPositive", () => {
        if (r.isPositive()) {
            if (r.isInteger()) {
                if (r.isInteger())
                    (0, type_testing_1.typeAssertEq)(true);
            }
        }
    });
    it("isNegativ", () => {
        if (r.isNegative()) {
            if (r.isInteger())
                (0, type_testing_1.typeAssertEq)(true);
            if (r.isPositive())
                (0, type_testing_1.typeAssertEq)(true);
        }
    });
    it("isNotNegativ", () => {
        if (r.isNotNegative()) {
            if (r.isInteger())
                (0, type_testing_1.typeAssertEq)(true);
            if (r.isPositive())
                (0, type_testing_1.typeAssertEq)(true);
            if (r.isNegative())
                (0, type_testing_1.typeAssertEq)(true);
        }
    });
    it("isNotPositiv", () => {
        if (r.isNotPositive()) {
            if (r.isInteger())
                (0, type_testing_1.typeAssertEq)(true);
            if (r.isPositive())
                (0, type_testing_1.typeAssertEq)(true);
            if (r.isNegative())
                (0, type_testing_1.typeAssertEq)(true);
            if (r.isNotNegative())
                (0, type_testing_1.typeAssertEq)(true);
        }
    });
    it("isZero", () => {
        if (r.isZero()) {
            if (r.isInteger())
                (0, type_testing_1.typeAssertEq)(true);
            if (r.isPositive())
                (0, type_testing_1.typeAssertEq)(true);
            if (r.isNegative())
                (0, type_testing_1.typeAssertEq)(true);
            if (r.isNotNegative())
                (0, type_testing_1.typeAssertEq)(true);
            if (r.isNotPositive())
                (0, type_testing_1.typeAssertEq)(true);
        }
    });
    it("isNotZero", () => {
        if (r.isNotZero()) {
            if (r.isInteger())
                (0, type_testing_1.typeAssertEq)(true);
            if (r.isPositive())
                (0, type_testing_1.typeAssertEq)(true);
            if (r.isNegative())
                (0, type_testing_1.typeAssertEq)(true);
            if (r.isNotNegative())
                (0, type_testing_1.typeAssertEq)(true);
            if (r.isNotPositive())
                (0, type_testing_1.typeAssertEq)(true);
        }
    });
});
