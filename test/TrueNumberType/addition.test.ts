import { Add, EmptyNumberSet, Q, Q0, Q0_Neg, Q0_Pos, Q_Neg, Q_Pos, TN, Z, Z0, Z0_Neg, Z0_Pos, Zero, Z_Neg, Z_Pos } from "../../src/numbers/true-number"
import { Eq } from "../../src/typeCalculus/SimpleBasics"
import { typeAssert, typeAssertEq } from "../../src/typeCalculus/type-testing"

describe("Adding true numbers", () => {
    describe("Add type", () => {
        it("Q", () => {
            typeAssertEq<Add<Q, Q>, Q>(true);
            typeAssertEq<Add<Q, Q0>, Q>(true);
            typeAssertEq<Add<Q, Q_Pos>, Q>(true);
            typeAssertEq<Add<Q, Q_Neg>, Q>(true);
            typeAssertEq<Add<Q, Q0_Pos>, Q>(true);
            typeAssertEq<Add<Q, Q0_Neg>, Q>(true);
            typeAssertEq<Add<Q, Z>, Q>(true);
            typeAssertEq<Add<Q, Z0>, Q>(true);
            typeAssertEq<Add<Q, Z_Pos>, Q>(true);
            typeAssertEq<Add<Q, Z_Neg>, Q>(true);
            typeAssertEq<Add<Q, Z0_Pos>, Q>(true);
            typeAssertEq<Add<Q, Z0_Neg>, Q>(true);
            typeAssertEq<Add<Q, Zero>, Q>(true);
            typeAssertEq<Add<Q, EmptyNumberSet>, EmptyNumberSet>(true);
        })
        it("Q0", () => {
            typeAssertEq<Add<Q0, Q>, Q>(true);
            typeAssertEq<Add<Q0, Q0>, Q>(true);
            typeAssertEq<Add<Q0, Q_Pos>, Q>(true);
            typeAssertEq<Add<Q0, Q_Neg>, Q>(true);
            typeAssertEq<Add<Q0, Q0_Pos>, Q>(true);
            typeAssertEq<Add<Q0, Q0_Neg>, Q>(true);
            typeAssertEq<Add<Q0, Z>, Q>(true);
            typeAssertEq<Add<Q0, Z0>, Q>(true);
            typeAssertEq<Add<Q0, Z_Pos>, Q>(true);
            typeAssertEq<Add<Q0, Z_Neg>, Q>(true);
            typeAssertEq<Add<Q0, Z0_Pos>, Q>(true);
            typeAssertEq<Add<Q0, Z0_Neg>, Q>(true);
            typeAssertEq<Add<Q0, Zero>, Q0>(true);
            typeAssertEq<Add<Q0, EmptyNumberSet>, EmptyNumberSet>(true);
        })

        it("Q_Pos", () => {
            typeAssertEq<Add<Q_Pos, Q>, Q>(true);
            typeAssertEq<Add<Q_Pos, Q0>, Q>(true);
            typeAssertEq<Add<Q_Pos, Q_Pos>, Q_Pos>(true);
            typeAssertEq<Add<Q_Pos, Q_Neg>, Q>(true);
            typeAssertEq<Add<Q_Pos, Q0_Pos>, Q0_Pos>(true);
            typeAssertEq<Add<Q_Pos, Q0_Neg>, Q>(true);
            typeAssertEq<Add<Q_Pos, Z>, Q>(true);
            typeAssertEq<Add<Q_Pos, Z0>, Q>(true);
            typeAssertEq<Add<Q_Pos, Z_Pos>, Q_Pos>(true);
            typeAssertEq<Add<Q_Pos, Z_Neg>, Q>(true);
            typeAssertEq<Add<Q_Pos, Z0_Pos>, Q0_Pos>(true);
            typeAssertEq<Add<Q_Pos, Z0_Neg>, Q>(true);
            typeAssertEq<Add<Q_Pos, Zero>, Q_Pos>(true);
            typeAssertEq<Add<Q_Pos, EmptyNumberSet>, EmptyNumberSet>(true);
        })

        it("Q_Neg", () => {
            typeAssertEq<Add<Q_Neg, Q>, Q>(true);
            typeAssertEq<Add<Q_Neg, Q0>, Q>(true);
            typeAssertEq<Add<Q_Neg, Q_Pos>, Q>(true);
            typeAssertEq<Add<Q_Neg, Q_Neg>, Q_Neg>(true);
            typeAssertEq<Add<Q_Neg, Q0_Pos>, Q>(true);
            typeAssertEq<Add<Q_Neg, Q0_Neg>, Q0_Neg>(true);
            typeAssertEq<Add<Q_Neg, Z>, Q>(true);
            typeAssertEq<Add<Q_Neg, Z0>, Q>(true);
            typeAssertEq<Add<Q_Neg, Z_Pos>, Q>(true);
            typeAssertEq<Add<Q_Neg, Z_Neg>, Q_Neg>(true);
            typeAssertEq<Add<Q_Neg, Z0_Pos>, Q>(true);
            typeAssertEq<Add<Q_Neg, Z0_Neg>, Q0_Neg>(true);
            typeAssertEq<Add<Q_Neg, Zero>, Q_Neg>(true);
            typeAssertEq<Add<Q_Neg, EmptyNumberSet>, EmptyNumberSet>(true);
        })

        it("Q0_Pos", () => {
            typeAssertEq<Add<Q0_Pos, Q>, Q>(true);
            typeAssertEq<Add<Q0_Pos, Q0>, Q>(true);
            typeAssertEq<Add<Q0_Pos, Q_Pos>, Q0_Pos>(true);
            typeAssertEq<Add<Q0_Pos, Q_Neg>, Q>(true);
            typeAssertEq<Add<Q0_Pos, Q0_Pos>, Q0_Pos>(true);
            typeAssertEq<Add<Q0_Pos, Q0_Neg>, Q>(true);
            typeAssertEq<Add<Q0_Pos, Z>, Q>(true);
            typeAssertEq<Add<Q0_Pos, Z0>, Q>(true);
            typeAssertEq<Add<Q0_Pos, Z_Pos>, Q0_Pos>(true);
            typeAssertEq<Add<Q0_Pos, Z_Neg>, Q>(true);
            typeAssertEq<Add<Q0_Pos, Z0_Pos>, Q0_Pos>(true);
            typeAssertEq<Add<Q0_Pos, Z0_Neg>, Q>(true);
            typeAssertEq<Add<Q0_Pos, Zero>, Q0_Pos>(true);
            typeAssertEq<Add<Q0_Pos, EmptyNumberSet>, EmptyNumberSet>(true);
        })

        it("Q0_Neg", () => {
            typeAssertEq<Add<Q0_Neg, Q>, Q>(true);
            typeAssertEq<Add<Q0_Neg, Q0>, Q>(true);
            typeAssertEq<Add<Q0_Neg, Q_Pos>, Q>(true);
            typeAssertEq<Add<Q0_Neg, Q_Neg>, Q0_Neg>(true);
            typeAssertEq<Add<Q0_Neg, Q0_Pos>, Q>(true);
            typeAssertEq<Add<Q0_Neg, Q0_Neg>, Q0_Neg>(true);
            typeAssertEq<Add<Q0_Neg, Z>, Q>(true);
            typeAssertEq<Add<Q0_Neg, Z0>, Q>(true);
            typeAssertEq<Add<Q0_Neg, Z_Pos>, Q>(true);
            typeAssertEq<Add<Q0_Neg, Z_Neg>, Q0_Neg>(true);
            typeAssertEq<Add<Q0_Neg, Z0_Pos>, Q>(true);
            typeAssertEq<Add<Q0_Neg, Z0_Neg>, Q0_Neg>(true);
            typeAssertEq<Add<Q0_Neg, Zero>, Q0_Neg>(true);
            typeAssertEq<Add<Q0_Neg, EmptyNumberSet>, EmptyNumberSet>(true);
        })

        it("Z", () => {
            typeAssertEq<Add<Z, Q>, Q>(true);
            typeAssertEq<Add<Z, Q0>, Q>(true);
            typeAssertEq<Add<Z, Q_Pos>, Q>(true);
            typeAssertEq<Add<Z, Q_Neg>, Q>(true);
            typeAssertEq<Add<Z, Q0_Pos>, Q>(true);
            typeAssertEq<Add<Z, Q0_Neg>, Q>(true);
            typeAssertEq<Add<Z, Z>, Z>(true);
            typeAssertEq<Add<Z, Z0>, Z>(true);
            typeAssertEq<Add<Z, Z_Pos>, Z>(true);
            typeAssertEq<Add<Z, Z_Neg>, Z>(true);
            typeAssertEq<Add<Z, Z0_Pos>, Z>(true);
            typeAssertEq<Add<Z, Z0_Neg>, Z>(true);
            typeAssertEq<Add<Z, Zero>, Z>(true);
            typeAssertEq<Add<Z, EmptyNumberSet>, EmptyNumberSet>(true);
        })

        it("Z0", () => {
            typeAssertEq<Add<Z0, Q>, Q>(true);
            typeAssertEq<Add<Z0, Q0>, Q>(true);
            typeAssertEq<Add<Z0, Q_Pos>, Q>(true);
            typeAssertEq<Add<Z0, Q_Neg>, Q>(true);
            typeAssertEq<Add<Z0, Q0_Pos>, Q>(true);
            typeAssertEq<Add<Z0, Q0_Neg>, Q>(true);
            typeAssertEq<Add<Z0, Z>, Z>(true);
            typeAssertEq<Add<Z0, Z0>, Z>(true);
            typeAssertEq<Add<Z0, Z_Pos>, Z>(true);
            typeAssertEq<Add<Z0, Z_Neg>, Z>(true);
            typeAssertEq<Add<Z0, Z0_Pos>, Z>(true);
            typeAssertEq<Add<Z0, Z0_Neg>, Z>(true);
            typeAssertEq<Add<Z0, Zero>, Z0>(true);
            typeAssertEq<Add<Z0, EmptyNumberSet>, EmptyNumberSet>(true);
        })

        it("Z_Pos", () => {
            typeAssertEq<Add<Z_Pos, Q>, Q>(true);
            typeAssertEq<Add<Z_Pos, Q0>, Q>(true);
            typeAssertEq<Add<Z_Pos, Q_Pos>, Q_Pos>(true);
            typeAssertEq<Add<Z_Pos, Q_Neg>, Q>(true);
            typeAssertEq<Add<Z_Pos, Q0_Pos>, Q0_Pos>(true);
            typeAssertEq<Add<Z_Pos, Q0_Neg>, Q>(true);
            typeAssertEq<Add<Z_Pos, Z>, Z>(true);
            typeAssertEq<Add<Z_Pos, Z0>, Z>(true);
            typeAssertEq<Add<Z_Pos, Z_Pos>, Z_Pos>(true);
            typeAssertEq<Add<Z_Pos, Z_Neg>, Z>(true);
            typeAssertEq<Add<Z_Pos, Z0_Pos>, Z0_Pos>(true);
            typeAssertEq<Add<Z_Pos, Z0_Neg>, Z>(true);
            typeAssertEq<Add<Z_Pos, Zero>, Z_Pos>(true);
            typeAssertEq<Add<Z_Pos, EmptyNumberSet>, EmptyNumberSet>(true);
        })

        it("Z_Neg", () => {
            typeAssertEq<Add<Z_Neg, Q>, Q>(true);
            typeAssertEq<Add<Z_Neg, Q0>, Q>(true);
            typeAssertEq<Add<Z_Neg, Q_Pos>, Q>(true);
            typeAssertEq<Add<Z_Neg, Q_Neg>, Q_Neg>(true);
            typeAssertEq<Add<Z_Neg, Q0_Pos>, Q>(true);
            typeAssertEq<Add<Z_Neg, Q0_Neg>, Q0_Neg>(true);
            typeAssertEq<Add<Z_Neg, Z>, Z>(true);
            typeAssertEq<Add<Z_Neg, Z0>, Z>(true);
            typeAssertEq<Add<Z_Neg, Z_Pos>, Z>(true);
            typeAssertEq<Add<Z_Neg, Z_Neg>, Z_Neg>(true);
            typeAssertEq<Add<Z_Neg, Z0_Pos>, Z>(true);
            typeAssertEq<Add<Z_Neg, Z0_Neg>, Z0_Neg>(true);
            typeAssertEq<Add<Z_Neg, Zero>, Z_Neg>(true);
            typeAssertEq<Add<Z_Neg, EmptyNumberSet>, EmptyNumberSet>(true);
        })
        it("Z0_Pos", () => {
            typeAssertEq<Add<Z0_Pos, Q>, Q>(true);
            typeAssertEq<Add<Z0_Pos, Q0>, Q>(true);
            typeAssertEq<Add<Z0_Pos, Q_Pos>, Q0_Pos>(true);
            typeAssertEq<Add<Z0_Pos, Q_Neg>, Q>(true);
            typeAssertEq<Add<Z0_Pos, Q0_Pos>, Q0_Pos>(true);
            typeAssertEq<Add<Z0_Pos, Q0_Neg>, Q>(true);
            typeAssertEq<Add<Z0_Pos, Z>, Z>(true);
            typeAssertEq<Add<Z0_Pos, Z0>, Z>(true);
            typeAssertEq<Add<Z0_Pos, Z_Pos>, Z0_Pos>(true);
            typeAssertEq<Add<Z0_Pos, Z_Neg>, Z>(true);
            typeAssertEq<Add<Z0_Pos, Z0_Pos>, Z0_Pos>(true);
            typeAssertEq<Add<Z0_Pos, Z0_Neg>, Z>(true);
            typeAssertEq<Add<Z0_Pos, Zero>, Z0_Pos>(true);
            typeAssertEq<Add<Z0_Pos, EmptyNumberSet>, EmptyNumberSet>(true);
        })

        it("Z0_Neg", () => {
            typeAssertEq<Add<Z0_Neg, Q>, Q>(true);
            typeAssertEq<Add<Z0_Neg, Q0>, Q>(true);
            typeAssertEq<Add<Z0_Neg, Q_Pos>, Q>(true);
            typeAssertEq<Add<Z0_Neg, Q_Neg>, Q0_Neg>(true);
            typeAssertEq<Add<Z0_Neg, Q0_Pos>, Q>(true);
            typeAssertEq<Add<Z0_Neg, Q0_Neg>, Q0_Neg>(true);
            typeAssertEq<Add<Z0_Neg, Z>, Z>(true);
            typeAssertEq<Add<Z0_Neg, Z0>, Z>(true);
            typeAssertEq<Add<Z0_Neg, Z_Pos>, Z>(true);
            typeAssertEq<Add<Z0_Neg, Z_Neg>, Z0_Neg>(true);
            typeAssertEq<Add<Z0_Neg, Z0_Pos>, Z>(true);
            typeAssertEq<Add<Z0_Neg, Z0_Neg>, Z0_Neg>(true);
            typeAssertEq<Add<Z0_Neg, Zero>, Z0_Neg>(true);
            typeAssertEq<Add<Z0_Neg, EmptyNumberSet>, EmptyNumberSet>(true);
        })

        it("Zero", () => {
            typeAssertEq<Add<Zero, Q>, Q>(true);
            typeAssertEq<Add<Zero, Q0>, Q0>(true);
            typeAssertEq<Add<Zero, Q_Pos>, Q_Pos>(true);
            typeAssertEq<Add<Zero, Q_Neg>, Q_Neg>(true);
            typeAssertEq<Add<Zero, Q0_Pos>, Q0_Pos>(true);
            typeAssertEq<Add<Zero, Q0_Neg>, Q0_Neg>(true);
            typeAssertEq<Add<Zero, Z>, Z>(true);
            typeAssertEq<Add<Zero, Z0>, Z0>(true);
            typeAssertEq<Add<Zero, Z_Pos>, Z_Pos>(true);
            typeAssertEq<Add<Zero, Z_Neg>, Z_Neg>(true);
            typeAssertEq<Add<Zero, Z0_Pos>, Z0_Pos>(true);
            typeAssertEq<Add<Zero, Z0_Neg>, Z0_Neg>(true);
            typeAssertEq<Add<Zero, Zero>, Zero>(true);
            typeAssertEq<Add<Zero, EmptyNumberSet>, EmptyNumberSet>(true);
        })

        it("EmptyNumberSet", () => {
            typeAssertEq<Add<EmptyNumberSet, Q>, EmptyNumberSet>(true);
            typeAssertEq<Add<EmptyNumberSet, Q0>, EmptyNumberSet>(true);
            typeAssertEq<Add<EmptyNumberSet, Q_Pos>, EmptyNumberSet>(true);
            typeAssertEq<Add<EmptyNumberSet, Q_Neg>, EmptyNumberSet>(true);
            typeAssertEq<Add<EmptyNumberSet, Q0_Pos>, EmptyNumberSet>(true);
            typeAssertEq<Add<EmptyNumberSet, Q0_Neg>, EmptyNumberSet>(true);
            typeAssertEq<Add<EmptyNumberSet, Z>, EmptyNumberSet>(true);
            typeAssertEq<Add<EmptyNumberSet, Z0>, EmptyNumberSet>(true);
            typeAssertEq<Add<EmptyNumberSet, Z_Pos>, EmptyNumberSet>(true);
            typeAssertEq<Add<EmptyNumberSet, Z_Neg>, EmptyNumberSet>(true);
            typeAssertEq<Add<EmptyNumberSet, Z0_Pos>, EmptyNumberSet>(true);
            typeAssertEq<Add<EmptyNumberSet, Z0_Neg>, EmptyNumberSet>(true);
            typeAssertEq<Add<EmptyNumberSet, Zero>, EmptyNumberSet>(true);
            typeAssertEq<Add<EmptyNumberSet, EmptyNumberSet>, EmptyNumberSet>(true);
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