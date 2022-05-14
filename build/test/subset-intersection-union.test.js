"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_testing_1 = require("../src/typeCalculus/type-testing");
describe("TrueNumber", () => {
    describe("Relations", () => {
        it("R is Subset of", () => {
            (0, type_testing_1.typeAssertSubset)(true);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
        });
        it("R0 is Subset of", () => {
            (0, type_testing_1.typeAssertSubset)(true);
            (0, type_testing_1.typeAssertSubset)(true);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
        });
        it("R_Pos is Subset of", () => {
            (0, type_testing_1.typeAssertSubset)(true);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(true);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
        });
        it("R_Neg is Subset of", () => {
            (0, type_testing_1.typeAssertSubset)(true);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(true);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
        });
        it("R0_Pos is Subset of", () => {
            (0, type_testing_1.typeAssertSubset)(true);
            (0, type_testing_1.typeAssertSubset)(true);
            (0, type_testing_1.typeAssertSubset)(true);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(true);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
        });
        it("R0_Neg is Subset of", () => {
            (0, type_testing_1.typeAssertSubset)(true);
            (0, type_testing_1.typeAssertSubset)(true);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(true);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(true);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
        });
        it("Z is Subset of", () => {
            (0, type_testing_1.typeAssertSubset)(true);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(true);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
        });
        it("Z0 is Subset of", () => {
            (0, type_testing_1.typeAssertSubset)(true);
            (0, type_testing_1.typeAssertSubset)(true);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(true);
            (0, type_testing_1.typeAssertSubset)(true);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
        });
        it("Z_Pos is Subset of", () => {
            (0, type_testing_1.typeAssertSubset)(true);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(true);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(true);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(true);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
        });
        it("Z_Neg is Subset of", () => {
            (0, type_testing_1.typeAssertSubset)(true);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(true);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(true);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(true);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
        });
        it("Z0_Pos is Subset of", () => {
            (0, type_testing_1.typeAssertSubset)(true);
            (0, type_testing_1.typeAssertSubset)(true);
            (0, type_testing_1.typeAssertSubset)(true);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(true);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(true);
            (0, type_testing_1.typeAssertSubset)(true);
            (0, type_testing_1.typeAssertSubset)(true);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(true);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
        });
        it("Z0_Neg is Subset of", () => {
            (0, type_testing_1.typeAssertSubset)(true);
            (0, type_testing_1.typeAssertSubset)(true);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(true);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(true);
            (0, type_testing_1.typeAssertSubset)(true);
            (0, type_testing_1.typeAssertSubset)(true);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(true);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(true);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
        });
        it("Zero is Subset of", () => {
            (0, type_testing_1.typeAssertSubset)(true);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(true);
            (0, type_testing_1.typeAssertSubset)(true);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(true);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(true);
            (0, type_testing_1.typeAssertSubset)(true);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(false);
            (0, type_testing_1.typeAssertSubset)(true);
            (0, type_testing_1.typeAssertSubset)(false);
        });
        it("EmptyNumberSet is Subset of", () => {
            (0, type_testing_1.typeAssertSubset)(true);
            (0, type_testing_1.typeAssertSubset)(true);
            (0, type_testing_1.typeAssertSubset)(true);
            (0, type_testing_1.typeAssertSubset)(true);
            (0, type_testing_1.typeAssertSubset)(true);
            (0, type_testing_1.typeAssertSubset)(true);
            (0, type_testing_1.typeAssertSubset)(true);
            (0, type_testing_1.typeAssertSubset)(true);
            (0, type_testing_1.typeAssertSubset)(true);
            (0, type_testing_1.typeAssertSubset)(true);
            (0, type_testing_1.typeAssertSubset)(true);
            (0, type_testing_1.typeAssertSubset)(true);
            (0, type_testing_1.typeAssertSubset)(true);
            (0, type_testing_1.typeAssertSubset)(true);
        });
    });
    describe("intersections", () => {
        it("R intersected with", () => {
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
        });
        it("R0 intersected with", () => {
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
        });
        it("R_Pos intersected with", () => {
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
        });
        it("R_Neg intersected with", () => {
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
        });
        it("R0_Pos intersected with", () => {
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
        });
        it("R0_Neg intersected with", () => {
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
        });
        it("Z intersected with", () => {
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
        });
        it("Z0 intersected with", () => {
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
        });
        it("Z_Pos intersected with", () => {
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
        });
        it("Z_Neg intersected with", () => {
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
        });
        it("Z0_Pos intersected with", () => {
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
        });
        it("Z0_Neg intersected with", () => {
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
        });
        it("Zero intersected with", () => {
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
        });
        it("EmptyNumberSet intersected with", () => {
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
        });
    });
    describe("unions", () => {
        it("R united with", () => {
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
        });
        it("R0 united with", () => {
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
        });
        it("R_Pos united with", () => {
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            // typeAssertEq<R_Pos | Z,  >(true); // has no explicit result
            // typeAssertEq<R_Pos | Z0,  >(true);// has no explicit result
            (0, type_testing_1.typeAssertEq)(true);
            //typeAssertEq<R_Pos | Z_Neg, >(true); // has no explicit result
            (0, type_testing_1.typeAssertEq)(true);
            //typeAssertEq<R_Pos | Z0_Neg, >(true); // has no explicit result
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
        });
        it("R_Neg united with", () => {
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            // typeAssertEq<R_Neg | Z, >(true); // has no explicit result
            // typeAssertEq<R_Neg | Z0,>(true); // has no explicit result
            // typeAssertEq<R_Neg | Z_Pos,>(true); // has no explicit result
            (0, type_testing_1.typeAssertEq)(true);
            // typeAssertEq<R_Neg | Z0_Pos,>(true); // has no explicit result
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
        });
        it("R0_Pos united with", () => {
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            // typeAssertEq<R0_Pos | Z,  >(true); // has no explicit result
            // typeAssertEq<R0_Pos | Z0,  >(true);// has no explicit result
            (0, type_testing_1.typeAssertEq)(true);
            //typeAssertEq<R0_Pos | Z_Neg, >(true); // has no explicit result
            (0, type_testing_1.typeAssertEq)(true);
            //typeAssertEq<R0_Pos | Z0_Neg, >(true); // has no explicit result
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
        });
        it("R_Neg united with", () => {
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            // typeAssertEq<R0_Neg | Z, >(true); // has no explicit result
            // typeAssertEq<R0_Neg | Z0,>(true); // has no explicit result
            // typeAssertEq<R0_Neg | Z_Pos,>(true); // has no explicit result
            (0, type_testing_1.typeAssertEq)(true);
            // typeAssertEq<R_Neg | Z0_Pos,>(true); // has no explicit result
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
        });
        it("Z united with", () => {
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            // typeAssertEq<Z | R_Pos, >(true); // has no explicit result
            // typeAssertEq<Z | R_Neg, >(true); // has no explicit result
            // typeAssertEq<Z | R0_Pos, >(true); // has no explicit result
            // typeAssertEq<Z | R0_Neg, >(true); // has no explicit result
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
        });
        it("Z0 united with", () => {
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            // typeAssertEq<Z0 | R_Pos, >(true); // has no explicit result
            // typeAssertEq<Z0 | R_Neg, >(true); // has no explicit result
            // typeAssertEq<Z0 | R0_Pos, >(true); // has no explicit result
            // typeAssertEq<Z0 | R0_Neg, >(true); // has no explicit result
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
        });
        it("Z_Pos united with", () => {
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true); // has no explicit result
            // typeAssertEq<Z_Pos | R_Neg, >(true); // has no explicit result
            (0, type_testing_1.typeAssertEq)(true); // has no explicit result
            // typeAssertEq<Z_Pos | R0_Neg, >(true); // has no explicit result
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
        });
        it("Z_Neg united with", () => {
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            // typeAssertEq<Z_Neg | R_Pos, >(true); // has no explicit result
            (0, type_testing_1.typeAssertEq)(true); // has no explicit result
            // typeAssertEq<Z_Neg | R0_Pos, >(true); // has no explicit result
            (0, type_testing_1.typeAssertEq)(true); // has no explicit result
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
        });
        it("Z0_Pos united with", () => {
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true); // has no explicit result
            // typeAssertEq<Z0_Pos | R_Neg, >(true); // has no explicit result
            (0, type_testing_1.typeAssertEq)(true); // has no explicit result
            // typeAssertEq<Z0_Pos | R0_Neg, >(true); // has no explicit result
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
        });
        it("Z0_Neg united with", () => {
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            // typeAssertEq<Z0_Neg | R_Pos, >(true); // has no explicit result
            (0, type_testing_1.typeAssertEq)(true); // has no explicit result
            // typeAssertEq<Z0_Neg | R0_Pos, >(true); // has no explicit result
            (0, type_testing_1.typeAssertEq)(true); // has no explicit result
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
            (0, type_testing_1.typeAssertEq)(true);
        });
    });
});
