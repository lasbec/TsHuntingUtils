import { Add, EmptyNumberSet, Q, Q0, Q0_Neg, Q0_Pos, Q_Neg, Q_Pos, TN, Z, Z0, Z0_Neg, Z0_Pos, Zero, Z_Neg, Z_Pos } from "../src/numbers/true-number"
import { Eq, typeAssert } from "../src/typeCalculus/type-testing"

describe("Adding true numbers", () => {
    describe("Add type", () => {
        it("Z", () => {
            typeAssert<Eq<Add<Z, Q>, Q>>(true);
            typeAssert<Eq<Add<Z, Q0>, Q>>(true);

            typeAssert<Eq<Add<Z, Z>, Z>>(true);
            typeAssert<Eq<Add<Z, Z0>, Z>>(true);
            typeAssert<Eq<Add<Z, Z_Pos>, Z>>(true);
            typeAssert<Eq<Add<Z, Z_Neg>, Z>>(true);
            typeAssert<Eq<Add<Z, Z0_Pos>, Z>>(true);
            typeAssert<Eq<Add<Z, Z0_Neg>, Z>>(true);
            typeAssert<Eq<Add<Z, Zero>, Z>>(true);
            typeAssert<Eq<Add<Z, EmptyNumberSet>, EmptyNumberSet>>(true);
        })

        it("Z0", () => {
            typeAssert<Eq<Add<Z0, Z>, Z>>(true);
            typeAssert<Eq<Add<Z0, Z0>, Z>>(true);
            typeAssert<Eq<Add<Z0, Z_Pos>, Z>>(true);
            typeAssert<Eq<Add<Z0, Z_Neg>, Z>>(true);
            typeAssert<Eq<Add<Z0, Z0_Pos>, Z>>(true);
            typeAssert<Eq<Add<Z0, Z0_Neg>, Z>>(true);
            typeAssert<Eq<Add<Z0, Zero>, Z0>>(true);
            typeAssert<Eq<Add<Z0, EmptyNumberSet>, EmptyNumberSet>>(true);
        })

        it("Z_Pos", () => {
            typeAssert<Eq<Add<Z_Pos, Z>, Z>>(true);
            typeAssert<Eq<Add<Z_Pos, Z0>, Z>>(true);
            typeAssert<Eq<Add<Z_Pos, Z_Pos>, Z_Pos>>(true);
            typeAssert<Eq<Add<Z_Pos, Z_Neg>, Z>>(true);
            typeAssert<Eq<Add<Z_Pos, Z0_Pos>, Z0_Pos>>(true);
            typeAssert<Eq<Add<Z_Pos, Z0_Neg>, Z>>(true);
            typeAssert<Eq<Add<Z_Pos, Zero>, Z_Pos>>(true);
            typeAssert<Eq<Add<Z_Pos, EmptyNumberSet>, EmptyNumberSet>>(true);
        })

        it("Z_Neg", () => {
            typeAssert<Eq<Add<Z_Neg, Z>, Z>>(true);
            typeAssert<Eq<Add<Z_Neg, Z0>, Z>>(true);
            typeAssert<Eq<Add<Z_Neg, Z_Pos>, Z>>(true);
            typeAssert<Eq<Add<Z_Neg, Z_Neg>, Z_Neg>>(true);
            typeAssert<Eq<Add<Z_Neg, Z0_Pos>, Z>>(true);
            typeAssert<Eq<Add<Z_Neg, Z0_Neg>, Z0_Neg>>(true);
            typeAssert<Eq<Add<Z_Neg, Zero>, Z_Neg>>(true);
            typeAssert<Eq<Add<Z_Neg, EmptyNumberSet>, EmptyNumberSet>>(true);
        })

        it("Z0_Pos", () => {
            typeAssert<Eq<Add<Z0_Pos, Z>, Z>>(true);
            typeAssert<Eq<Add<Z0_Pos, Z0>, Z>>(true);
            typeAssert<Eq<Add<Z0_Pos, Z_Pos>, Z0_Pos>>(true);
            typeAssert<Eq<Add<Z0_Pos, Z_Neg>, Z>>(true);
            typeAssert<Eq<Add<Z0_Pos, Z0_Pos>, Z0_Pos>>(true);
            typeAssert<Eq<Add<Z0_Pos, Z0_Neg>, Z>>(true);
            typeAssert<Eq<Add<Z0_Pos, Zero>, Z0_Pos>>(true);
            typeAssert<Eq<Add<Z0_Pos, EmptyNumberSet>, EmptyNumberSet>>(true);
        })

        it("Z0_Neg", () => {
            typeAssert<Eq<Add<Z0_Neg, Z>, Z>>(true);
            typeAssert<Eq<Add<Z0_Neg, Z0>, Z>>(true);
            typeAssert<Eq<Add<Z0_Neg, Z_Pos>, Z>>(true);
            typeAssert<Eq<Add<Z0_Neg, Z_Neg>, Z0_Neg>>(true);
            typeAssert<Eq<Add<Z0_Neg, Z0_Pos>, Z>>(true);
            typeAssert<Eq<Add<Z0_Neg, Z0_Neg>, Z0_Neg>>(true);
            typeAssert<Eq<Add<Z0_Neg, Zero>, Z0_Neg>>(true);
            typeAssert<Eq<Add<Z0_Neg, EmptyNumberSet>, EmptyNumberSet>>(true);
        })
    })

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
            typeAssert<Eq<typeof result, Q_Pos>>(true);
        }
    })

    it("add negative", () => {
        const a = TN(1);
        const b = TN(6);
        if (a.isNegative() && b.isNegative()) {
            const result = a.add(b);
            typeAssert<Eq<typeof result, Q_Neg>>(true);
        }
    })

    it("add not negative", () => {
        const a = TN(1);
        const b = TN(6);
        if (a.isNotNegative() && b.isNotNegative()) {
            const result = a.add(b);
            typeAssert<Eq<typeof result, Q0_Pos>>(true);
        }
    })

    it("add not positive", () => {
        const a = TN(1);
        const b = TN(6);
        if (a.isNotPositive() && b.isNotPositive()) {
            const result = a.add(b);
            typeAssert<Eq<typeof result, Q0_Neg>>(true);
        }
    })
})