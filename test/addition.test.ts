import { random, range } from "lodash"
import { R0_Neg, R0_Pos, R_Neg, R_Pos, TN, Z, Z0_Neg, Z0_Pos, Z_Neg, Z_Pos } from "../src/numbers/true-number"
import { Eq, typeAssert } from "../src/typeCalculus/type-testing"

describe("Adding true numbers", () => {
    it("add integers", () => {
        const five = TN(5);
        const seven = TN(7);
        if (five.isInteger()) {
            if (seven.isInteger()) {
                const result = five.add(seven);
                typeAssert<Eq<typeof result, Z>>(true);
            }
        }
    })

    it("add positive integers", () => {
        const five = TN(8);
        const seven = TN(2);
        if (five.isInteger() && five.isPositive() && seven.isInteger() && seven.isPositive()) {
            const result = five.add(seven);
            typeAssert<Eq<typeof result, Z_Pos>>(true);
        }
    })

    it("add negative integers", () => {
        const five = TN(-8);
        const seven = TN(-3);
        if (five.isInteger() && five.isNegative() && seven.isInteger() && seven.isNegative()) {
            const result = five.add(seven);
            typeAssert<Eq<typeof result, Z_Neg>>(true);
        }
    })

    it("add not negative integers", () => {
        const five = TN(9);
        const seven = TN(3);
        if (five.isInteger() && five.isNotNegative() && seven.isInteger() && seven.isNotNegative()) {
            const result = five.add(seven);
            typeAssert<Eq<typeof result, Z0_Pos>>(true);
        }
    })

    it("add not positive integers", () => {
        const five = TN(-10);
        const seven = TN(-3);
        if (five.isInteger() && five.isNotPositive() && seven.isInteger() && seven.isNotPositive()) {
            const result = five.add(seven);
            typeAssert<Eq<typeof result, Z0_Neg>>(true);
        }
    })

    it("add positive", () => {
        const five = TN(1);
        const seven = TN(6);
        if (five.isPositive() && seven.isPositive()) {
            const result = five.add(seven);
            typeAssert<Eq<typeof result, R_Pos>>(true);
        }
    })

    it("add negative", () => {
        const five = TN(1);
        const seven = TN(6);
        if (five.isNegative() && seven.isNegative()) {
            const result = five.add(seven);
            typeAssert<Eq<typeof result, R_Neg>>(true);
        }
    })

    it("add not negative", () => {
        const five = TN(1);
        const seven = TN(6);
        if (five.isNotNegative() && seven.isNotNegative()) {
            const result = five.add(seven);
            typeAssert<Eq<typeof result, R0_Pos>>(true);
        }
    })

    it("add not positive", () => {
        const five = TN(1);
        const seven = TN(6);
        if (five.isNotPositive() && seven.isNotPositive()) {
            const result = five.add(seven);
            typeAssert<Eq<typeof result, R0_Neg>>(true);
        }
    })
})