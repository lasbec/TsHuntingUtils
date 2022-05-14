import { Sub, EmptyNumberSet, Q, Q0, Q0_Neg, Q0_Pos, Q_Neg, Q_Pos, TN, Z, Z0, Z0_Neg, Z0_Pos, Zero, Z_Neg, Z_Pos } from "../../src/numbers/true-number"
import { typeAssertEq } from "../../src/typeCalculus/type-testing"

describe("Subtracting true numbers", () => {
    describe("Sub type", () => {
        it("Q", () => {
            typeAssertEq<Sub<Q, Q>, Q>(true);
            typeAssertEq<Sub<Q, Q0>, Q>(true);
            typeAssertEq<Sub<Q, Q_Pos>, Q>(true);
            typeAssertEq<Sub<Q, Q_Neg>, Q>(true);
            typeAssertEq<Sub<Q, Q0_Pos>, Q>(true);
            typeAssertEq<Sub<Q, Q0_Neg>, Q>(true);
            typeAssertEq<Sub<Q, Z>, Q>(true);
            typeAssertEq<Sub<Q, Z0>, Q>(true);
            typeAssertEq<Sub<Q, Z_Pos>, Q>(true);
            typeAssertEq<Sub<Q, Z_Neg>, Q>(true);
            typeAssertEq<Sub<Q, Z0_Pos>, Q>(true);
            typeAssertEq<Sub<Q, Z0_Neg>, Q>(true);
            typeAssertEq<Sub<Q, Zero>, Q>(true);
            typeAssertEq<Sub<Q, EmptyNumberSet>, EmptyNumberSet>(true);
        })
        it("Q0", () => {
            typeAssertEq<Sub<Q0, Q>, Q>(true);
            typeAssertEq<Sub<Q0, Q0>, Q>(true);
            typeAssertEq<Sub<Q0, Q_Pos>, Q>(true);
            typeAssertEq<Sub<Q0, Q_Neg>, Q>(true);
            typeAssertEq<Sub<Q0, Q0_Pos>, Q>(true);
            typeAssertEq<Sub<Q0, Q0_Neg>, Q>(true);
            typeAssertEq<Sub<Q0, Z>, Q>(true);
            typeAssertEq<Sub<Q0, Z0>, Q>(true);
            typeAssertEq<Sub<Q0, Z_Pos>, Q>(true);
            typeAssertEq<Sub<Q0, Z_Neg>, Q>(true);
            typeAssertEq<Sub<Q0, Z0_Pos>, Q>(true);
            typeAssertEq<Sub<Q0, Z0_Neg>, Q>(true);
            typeAssertEq<Sub<Q0, Zero>, Q0>(true);
            typeAssertEq<Sub<Q0, EmptyNumberSet>, EmptyNumberSet>(true);
        })

        it("Q_Pos", () => {
            typeAssertEq<Sub<Q_Pos, Q>, Q>(true);
            typeAssertEq<Sub<Q_Pos, Q0>, Q>(true);
            typeAssertEq<Sub<Q_Pos, Q_Pos>, Q>(true);
            typeAssertEq<Sub<Q_Pos, Q_Neg>, Q_Pos>(true);
            typeAssertEq<Sub<Q_Pos, Q0_Pos>, Q>(true);
            typeAssertEq<Sub<Q_Pos, Q0_Neg>, Q0_Pos>(true);
            typeAssertEq<Sub<Q_Pos, Z>, Q>(true);
            typeAssertEq<Sub<Q_Pos, Z0>, Q>(true);
            typeAssertEq<Sub<Q_Pos, Z_Pos>, Q>(true);
            typeAssertEq<Sub<Q_Pos, Z_Neg>, Q_Pos>(true);
            typeAssertEq<Sub<Q_Pos, Z0_Pos>, Q>(true);
            typeAssertEq<Sub<Q_Pos, Z0_Neg>, Q0_Pos>(true);
            typeAssertEq<Sub<Q_Pos, Zero>, Q_Pos>(true);
            typeAssertEq<Sub<Q_Pos, EmptyNumberSet>, EmptyNumberSet>(true);
        })

        it("Q_Neg", () => {
            typeAssertEq<Sub<Q_Neg, Q>, Q>(true);
            typeAssertEq<Sub<Q_Neg, Q0>, Q>(true);
            typeAssertEq<Sub<Q_Neg, Q_Pos>, Q_Neg>(true);
            typeAssertEq<Sub<Q_Neg, Q_Neg>, Q>(true);
            typeAssertEq<Sub<Q_Neg, Q0_Pos>, Q0_Neg>(true);
            typeAssertEq<Sub<Q_Neg, Q0_Neg>, Q>(true);
            typeAssertEq<Sub<Q_Neg, Z>, Q>(true);
            typeAssertEq<Sub<Q_Neg, Z0>, Q>(true);
            typeAssertEq<Sub<Q_Neg, Z_Pos>, Q_Neg>(true);
            typeAssertEq<Sub<Q_Neg, Z_Neg>, Q>(true);
            typeAssertEq<Sub<Q_Neg, Z0_Pos>, Q0_Neg>(true);
            typeAssertEq<Sub<Q_Neg, Z0_Neg>, Q>(true);
            typeAssertEq<Sub<Q_Neg, Zero>, Q_Neg>(true);
            typeAssertEq<Sub<Q_Neg, EmptyNumberSet>, EmptyNumberSet>(true);
        })

        it("Q0_Pos", () => {
            typeAssertEq<Sub<Q0_Pos, Q>, Q>(true);
            typeAssertEq<Sub<Q0_Pos, Q0>, Q>(true);
            typeAssertEq<Sub<Q0_Pos, Q_Pos>, Q>(true);
            typeAssertEq<Sub<Q0_Pos, Q_Neg>, Q0_Pos>(true);
            typeAssertEq<Sub<Q0_Pos, Q0_Pos>, Q>(true);
            typeAssertEq<Sub<Q0_Pos, Q0_Neg>, Q0_Pos>(true);
            typeAssertEq<Sub<Q0_Pos, Z>, Q>(true);
            typeAssertEq<Sub<Q0_Pos, Z0>, Q>(true);
            typeAssertEq<Sub<Q0_Pos, Z_Pos>, Q>(true);
            typeAssertEq<Sub<Q0_Pos, Z_Neg>, Q0_Pos>(true);
            typeAssertEq<Sub<Q0_Pos, Z0_Pos>, Q>(true);
            typeAssertEq<Sub<Q0_Pos, Z0_Neg>, Q0_Pos>(true);
            typeAssertEq<Sub<Q0_Pos, Zero>, Q0_Pos>(true);
            typeAssertEq<Sub<Q0_Pos, EmptyNumberSet>, EmptyNumberSet>(true);
        })

        it("Q0_Neg", () => {
            typeAssertEq<Sub<Q0_Neg, Q>, Q>(true);
            typeAssertEq<Sub<Q0_Neg, Q0>, Q>(true);
            typeAssertEq<Sub<Q0_Neg, Q_Pos>, Q0_Neg>(true);
            typeAssertEq<Sub<Q0_Neg, Q_Neg>, Q>(true);
            typeAssertEq<Sub<Q0_Neg, Q0_Pos>, Q0_Neg>(true);
            typeAssertEq<Sub<Q0_Neg, Q0_Neg>, Q>(true);
            typeAssertEq<Sub<Q0_Neg, Z>, Q>(true);
            typeAssertEq<Sub<Q0_Neg, Z0>, Q>(true);
            typeAssertEq<Sub<Q0_Neg, Z_Pos>, Q0_Neg>(true);
            typeAssertEq<Sub<Q0_Neg, Z_Neg>, Q>(true);
            typeAssertEq<Sub<Q0_Neg, Z0_Pos>, Q0_Neg>(true);
            typeAssertEq<Sub<Q0_Neg, Z0_Neg>, Q>(true);
            typeAssertEq<Sub<Q0_Neg, Zero>, Q0_Neg>(true);
            typeAssertEq<Sub<Q0_Neg, EmptyNumberSet>, EmptyNumberSet>(true);
        })

        it("Z", () => {
            typeAssertEq<Sub<Z, Q>, Q>(true);
            typeAssertEq<Sub<Z, Q0>, Q>(true);
            typeAssertEq<Sub<Z, Q_Pos>, Q>(true);
            typeAssertEq<Sub<Z, Q_Neg>, Q>(true);
            typeAssertEq<Sub<Z, Q0_Pos>, Q>(true);
            typeAssertEq<Sub<Z, Q0_Neg>, Q>(true);
            typeAssertEq<Sub<Z, Z>, Z>(true);
            typeAssertEq<Sub<Z, Z0>, Z>(true);
            typeAssertEq<Sub<Z, Z_Pos>, Z>(true);
            typeAssertEq<Sub<Z, Z_Neg>, Z>(true);
            typeAssertEq<Sub<Z, Z0_Pos>, Z>(true);
            typeAssertEq<Sub<Z, Z0_Neg>, Z>(true);
            typeAssertEq<Sub<Z, Zero>, Z>(true);
            typeAssertEq<Sub<Z, EmptyNumberSet>, EmptyNumberSet>(true);
        })

        it("Z0", () => {
            typeAssertEq<Sub<Z0, Q>, Q>(true);
            typeAssertEq<Sub<Z0, Q0>, Q>(true);
            typeAssertEq<Sub<Z0, Q_Pos>, Q>(true);
            typeAssertEq<Sub<Z0, Q_Neg>, Q>(true);
            typeAssertEq<Sub<Z0, Q0_Pos>, Q>(true);
            typeAssertEq<Sub<Z0, Q0_Neg>, Q>(true);
            typeAssertEq<Sub<Z0, Z>, Z>(true);
            typeAssertEq<Sub<Z0, Z0>, Z>(true);
            typeAssertEq<Sub<Z0, Z_Pos>, Z>(true);
            typeAssertEq<Sub<Z0, Z_Neg>, Z>(true);
            typeAssertEq<Sub<Z0, Z0_Pos>, Z>(true);
            typeAssertEq<Sub<Z0, Z0_Neg>, Z>(true);
            typeAssertEq<Sub<Z0, Zero>, Z0>(true);
            typeAssertEq<Sub<Z0, EmptyNumberSet>, EmptyNumberSet>(true);
        })

        it("Z_Pos", () => {
            typeAssertEq<Sub<Z_Pos, Q>, Q>(true);
            typeAssertEq<Sub<Z_Pos, Q0>, Q>(true);
            typeAssertEq<Sub<Z_Pos, Q_Pos>, Q>(true);
            typeAssertEq<Sub<Z_Pos, Q_Neg>, Q_Pos>(true);
            typeAssertEq<Sub<Z_Pos, Q0_Pos>, Q>(true);
            typeAssertEq<Sub<Z_Pos, Q0_Neg>, Q0_Pos>(true);
            typeAssertEq<Sub<Z_Pos, Z>, Z>(true);
            typeAssertEq<Sub<Z_Pos, Z0>, Z>(true);
            typeAssertEq<Sub<Z_Pos, Z_Pos>, Z>(true);
            typeAssertEq<Sub<Z_Pos, Z_Neg>, Z_Pos>(true);
            typeAssertEq<Sub<Z_Pos, Z0_Pos>, Z>(true);
            typeAssertEq<Sub<Z_Pos, Z0_Neg>, Z0_Pos>(true);
            typeAssertEq<Sub<Z_Pos, Zero>, Z_Pos>(true);
            typeAssertEq<Sub<Z_Pos, EmptyNumberSet>, EmptyNumberSet>(true);
        })

        it("Z_Neg", () => {
            typeAssertEq<Sub<Z_Neg, Q>, Q>(true);
            typeAssertEq<Sub<Z_Neg, Q0>, Q>(true);
            typeAssertEq<Sub<Z_Neg, Q_Pos>, Q_Neg>(true);
            typeAssertEq<Sub<Z_Neg, Q_Neg>, Q>(true);
            typeAssertEq<Sub<Z_Neg, Q0_Pos>, Q0_Neg>(true);
            typeAssertEq<Sub<Z_Neg, Q0_Neg>, Q>(true);
            typeAssertEq<Sub<Z_Neg, Z>, Z>(true);
            typeAssertEq<Sub<Z_Neg, Z0>, Z>(true);
            typeAssertEq<Sub<Z_Neg, Z_Pos>, Z_Neg>(true);
            typeAssertEq<Sub<Z_Neg, Z_Neg>, Z>(true);
            typeAssertEq<Sub<Z_Neg, Z0_Pos>, Z0_Neg>(true);
            typeAssertEq<Sub<Z_Neg, Z0_Neg>, Z>(true);
            typeAssertEq<Sub<Z_Neg, Zero>, Z_Neg>(true);
            typeAssertEq<Sub<Z_Neg, EmptyNumberSet>, EmptyNumberSet>(true);
        })
        it("Z0_Pos", () => {
            typeAssertEq<Sub<Z0_Pos, Q>, Q>(true);
            typeAssertEq<Sub<Z0_Pos, Q0>, Q>(true);
            typeAssertEq<Sub<Z0_Pos, Q_Pos>, Q>(true);
            typeAssertEq<Sub<Z0_Pos, Q_Neg>, Q0_Pos>(true);
            typeAssertEq<Sub<Z0_Pos, Q0_Pos>, Q>(true);
            typeAssertEq<Sub<Z0_Pos, Q0_Neg>, Q0_Pos>(true);
            typeAssertEq<Sub<Z0_Pos, Z>, Z>(true);
            typeAssertEq<Sub<Z0_Pos, Z0>, Z>(true);
            typeAssertEq<Sub<Z0_Pos, Z_Pos>, Z>(true);
            typeAssertEq<Sub<Z0_Pos, Z_Neg>, Z0_Pos>(true);
            typeAssertEq<Sub<Z0_Pos, Z0_Pos>, Z>(true);
            typeAssertEq<Sub<Z0_Pos, Z0_Neg>, Z0_Pos>(true);
            typeAssertEq<Sub<Z0_Pos, Zero>, Z0_Pos>(true);
            typeAssertEq<Sub<Z0_Pos, EmptyNumberSet>, EmptyNumberSet>(true);
        })

        it("Z0_Neg", () => {
            typeAssertEq<Sub<Z0_Neg, Q>, Q>(true);
            typeAssertEq<Sub<Z0_Neg, Q0>, Q>(true);
            typeAssertEq<Sub<Z0_Neg, Q_Pos>, Q0_Neg>(true);
            typeAssertEq<Sub<Z0_Neg, Q_Neg>, Q>(true);
            typeAssertEq<Sub<Z0_Neg, Q0_Pos>, Q0_Neg>(true);
            typeAssertEq<Sub<Z0_Neg, Q0_Neg>, Q>(true);
            typeAssertEq<Sub<Z0_Neg, Z>, Z>(true);
            typeAssertEq<Sub<Z0_Neg, Z0>, Z>(true);
            typeAssertEq<Sub<Z0_Neg, Z_Pos>, Z0_Neg>(true);
            typeAssertEq<Sub<Z0_Neg, Z_Neg>, Z>(true);
            typeAssertEq<Sub<Z0_Neg, Z0_Pos>, Z0_Neg>(true);
            typeAssertEq<Sub<Z0_Neg, Z0_Neg>, Z>(true);
            typeAssertEq<Sub<Z0_Neg, Zero>, Z0_Neg>(true);
            typeAssertEq<Sub<Z0_Neg, EmptyNumberSet>, EmptyNumberSet>(true);
        })

        it("Zero", () => {
            typeAssertEq<Sub<Zero, Q>, Q>(true);
            typeAssertEq<Sub<Zero, Q0>, Q0>(true);
            typeAssertEq<Sub<Zero, Q_Pos>, Q_Neg>(true);
            typeAssertEq<Sub<Zero, Q_Neg>, Q_Pos>(true);
            typeAssertEq<Sub<Zero, Q0_Pos>, Q0_Neg>(true);
            typeAssertEq<Sub<Zero, Q0_Neg>, Q0_Pos>(true);
            typeAssertEq<Sub<Zero, Z>, Z>(true);
            typeAssertEq<Sub<Zero, Z0>, Z0>(true);
            typeAssertEq<Sub<Zero, Z_Pos>, Z_Neg>(true);
            typeAssertEq<Sub<Zero, Z_Neg>, Z_Pos>(true);
            typeAssertEq<Sub<Zero, Z0_Pos>, Z0_Neg>(true);
            typeAssertEq<Sub<Zero, Z0_Neg>, Z0_Pos>(true);
            typeAssertEq<Sub<Zero, Zero>, Zero>(true);
            typeAssertEq<Sub<Zero, EmptyNumberSet>, EmptyNumberSet>(true);
        })

        it("EmptyNumberSet", () => {
            typeAssertEq<Sub<EmptyNumberSet, Q>, EmptyNumberSet>(true);
            typeAssertEq<Sub<EmptyNumberSet, Q0>, EmptyNumberSet>(true);
            typeAssertEq<Sub<EmptyNumberSet, Q_Pos>, EmptyNumberSet>(true);
            typeAssertEq<Sub<EmptyNumberSet, Q_Neg>, EmptyNumberSet>(true);
            typeAssertEq<Sub<EmptyNumberSet, Q0_Pos>, EmptyNumberSet>(true);
            typeAssertEq<Sub<EmptyNumberSet, Q0_Neg>, EmptyNumberSet>(true);
            typeAssertEq<Sub<EmptyNumberSet, Z>, EmptyNumberSet>(true);
            typeAssertEq<Sub<EmptyNumberSet, Z0>, EmptyNumberSet>(true);
            typeAssertEq<Sub<EmptyNumberSet, Z_Pos>, EmptyNumberSet>(true);
            typeAssertEq<Sub<EmptyNumberSet, Z_Neg>, EmptyNumberSet>(true);
            typeAssertEq<Sub<EmptyNumberSet, Z0_Pos>, EmptyNumberSet>(true);
            typeAssertEq<Sub<EmptyNumberSet, Z0_Neg>, EmptyNumberSet>(true);
            typeAssertEq<Sub<EmptyNumberSet, Zero>, EmptyNumberSet>(true);
            typeAssertEq<Sub<EmptyNumberSet, EmptyNumberSet>, EmptyNumberSet>(true);
        })

    })

})