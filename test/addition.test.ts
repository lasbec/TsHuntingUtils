import { R0_Neg, R0_Pos, R_Neg, R_Pos, TN, Z, Z0_Neg, Z0_Pos, Z_Neg, Z_Pos } from "../src/numbers/true-number"
import { Eq, typeAssert } from "../src/typeCalculus/type-testing"

describe("Adding true numbers", () => {
    describe("add integer", () => {
        const a: Z = TN(1) as Z;
        it(" and ...", () => {
            const IAndI = a.add(TN(7) as Z);
            typeAssert<Eq<typeof IAndI, Z>>(true);

            const IAndIPos = a.add(TN(7) as Z_Pos);
            typeAssert<Eq<typeof IAndIPos, Z>>(true);
        })
    })

    it("add positive integers", () => {
        const a = TN(8);
        const b = TN(2);
        if (a.isInteger() && a.isPositive() && b.isInteger() && b.isPositive()) {
            const result = a.add(b);
            typeAssert<Eq<typeof result, Z_Pos>>(true);
        }
    })

    it("add negative integers", () => {
        const a = TN(-8);
        const b = TN(-3);
        if (a.isInteger() && a.isNegative() && b.isInteger() && b.isNegative()) {
            const result = a.add(b);
            typeAssert<Eq<typeof result, Z_Neg>>(true);
        }
    })

    it("add not negative integers", () => {
        const a = TN(9);
        const b = TN(3);
        if (a.isInteger() && a.isNotNegative() && b.isInteger() && b.isNotNegative()) {
            const result = a.add(b);
            typeAssert<Eq<typeof result, Z0_Pos>>(true);
        }
    })

    it("add not positive integers", () => {
        const a = TN(-10);
        const b = TN(-3);
        if (a.isInteger() && a.isNotPositive() && b.isInteger() && b.isNotPositive()) {
            const result = a.add(b);
            typeAssert<Eq<typeof result, Z0_Neg>>(true);
        }
    })

    it("add positive", () => {
        const a = TN(1);
        const b = TN(6);
        if (a.isPositive() && b.isPositive()) {
            const result = a.add(b);
            typeAssert<Eq<typeof result, R_Pos>>(true);
        }
    })

    it("add negative", () => {
        const a = TN(1);
        const b = TN(6);
        if (a.isNegative() && b.isNegative()) {
            const result = a.add(b);
            typeAssert<Eq<typeof result, R_Neg>>(true);
        }
    })

    it("add not negative", () => {
        const a = TN(1);
        const b = TN(6);
        if (a.isNotNegative() && b.isNotNegative()) {
            const result = a.add(b);
            typeAssert<Eq<typeof result, R0_Pos>>(true);
        }
    })

    it("add not positive", () => {
        const a = TN(1);
        const b = TN(6);
        if (a.isNotPositive() && b.isNotPositive()) {
            const result = a.add(b);
            typeAssert<Eq<typeof result, R0_Neg>>(true);
        }
    })
})