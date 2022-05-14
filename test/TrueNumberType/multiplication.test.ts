import { Mul, EmptyNumberSet, Q, Q0, Q0_Neg, Q0_Pos, Q_Neg, Q_Pos, TN, Z, Z0, Z0_Neg, Z0_Pos, Zero, Z_Neg, Z_Pos } from "../../src/TrueNumbers/TrueNumberType"
import { typeAssertEq } from "../../src/TypeProcessing/TypeAsserting"

describe("Multiply true numbers", () => {
    describe("Mul type", () => {
        it("Q", () => {
            typeAssertEq<Mul<Q, Q>, Q>(true);
            typeAssertEq<Mul<Q, Q0>, Q>(true);
            typeAssertEq<Mul<Q, Q_Pos>, Q>(true);
            typeAssertEq<Mul<Q, Q_Neg>, Q>(true);
            typeAssertEq<Mul<Q, Q0_Pos>, Q>(true);
            typeAssertEq<Mul<Q, Q0_Neg>, Q>(true);
            typeAssertEq<Mul<Q, Z>, Q>(true);
            typeAssertEq<Mul<Q, Z0>, Q>(true);
            typeAssertEq<Mul<Q, Z_Pos>, Q>(true);
            typeAssertEq<Mul<Q, Z_Neg>, Q>(true);
            typeAssertEq<Mul<Q, Z0_Pos>, Q>(true);
            typeAssertEq<Mul<Q, Z0_Neg>, Q>(true);
            typeAssertEq<Mul<Q, Zero>, Zero>(true);
            typeAssertEq<Mul<Q, EmptyNumberSet>, EmptyNumberSet>(true);
        })
        it("Q0", () => {
            typeAssertEq<Mul<Q0, Q>, Q>(true);
            typeAssertEq<Mul<Q0, Q0>, Q0>(true);
            typeAssertEq<Mul<Q0, Q_Pos>, Q>(true);
            typeAssertEq<Mul<Q0, Q_Neg>, Q>(true);
            typeAssertEq<Mul<Q0, Q0_Pos>, Q0>(true);
            typeAssertEq<Mul<Q0, Q0_Neg>, Q0>(true);
            typeAssertEq<Mul<Q0, Z>, Q>(true);
            typeAssertEq<Mul<Q0, Z0>, Q0>(true);
            typeAssertEq<Mul<Q0, Z_Pos>, Q>(true);
            typeAssertEq<Mul<Q0, Z_Neg>, Q>(true);
            typeAssertEq<Mul<Q0, Z0_Pos>, Q0>(true);
            typeAssertEq<Mul<Q0, Z0_Neg>, Q0>(true);
            typeAssertEq<Mul<Q0, Zero>, Zero>(true);
            typeAssertEq<Mul<Q0, EmptyNumberSet>, EmptyNumberSet>(true);
        })

        it("Q_Pos", () => {
            typeAssertEq<Mul<Q_Pos, Q>, Q>(true);
            typeAssertEq<Mul<Q_Pos, Q0>, Q>(true);
            typeAssertEq<Mul<Q_Pos, Q_Pos>, Q_Pos>(true);
            typeAssertEq<Mul<Q_Pos, Q_Neg>, Q_Neg>(true);
            typeAssertEq<Mul<Q_Pos, Q0_Pos>, Q_Pos>(true);
            typeAssertEq<Mul<Q_Pos, Q0_Neg>, Q_Neg>(true);
            typeAssertEq<Mul<Q_Pos, Z>, Q>(true);
            typeAssertEq<Mul<Q_Pos, Z0>, Q>(true);
            typeAssertEq<Mul<Q_Pos, Z_Pos>, Q_Pos>(true);
            typeAssertEq<Mul<Q_Pos, Z_Neg>, Q_Neg>(true);
            typeAssertEq<Mul<Q_Pos, Z0_Pos>, Q_Pos>(true);
            typeAssertEq<Mul<Q_Pos, Z0_Neg>, Q_Neg>(true);
            typeAssertEq<Mul<Q_Pos, Zero>, Zero>(true);
            typeAssertEq<Mul<Q_Pos, EmptyNumberSet>, EmptyNumberSet>(true);
        })

        it("Q_Neg", () => {
            typeAssertEq<Mul<Q_Neg, Q>, Q>(true);
            typeAssertEq<Mul<Q_Neg, Q0>, Q>(true);
            typeAssertEq<Mul<Q_Neg, Q_Pos>, Q_Neg>(true);
            typeAssertEq<Mul<Q_Neg, Q_Neg>, Q_Pos>(true);
            typeAssertEq<Mul<Q_Neg, Q0_Pos>, Q_Neg>(true);
            typeAssertEq<Mul<Q_Neg, Q0_Neg>, Q_Pos>(true);
            typeAssertEq<Mul<Q_Neg, Z>, Q>(true);
            typeAssertEq<Mul<Q_Neg, Z0>, Q>(true);
            typeAssertEq<Mul<Q_Neg, Z_Pos>, Q_Neg>(true);
            typeAssertEq<Mul<Q_Neg, Z_Neg>, Q_Pos>(true);
            typeAssertEq<Mul<Q_Neg, Z0_Pos>, Q_Neg>(true);
            typeAssertEq<Mul<Q_Neg, Z0_Neg>, Q_Pos>(true);
            typeAssertEq<Mul<Q_Neg, Zero>, Zero>(true);
            typeAssertEq<Mul<Q_Neg, EmptyNumberSet>, EmptyNumberSet>(true);
        })

        it("Q0_Pos", () => {
            typeAssertEq<Mul<Q0_Pos, Q>, Q>(true);
            typeAssertEq<Mul<Q0_Pos, Q0>, Q0>(true);
            typeAssertEq<Mul<Q0_Pos, Q_Pos>, Q_Pos>(true);
            typeAssertEq<Mul<Q0_Pos, Q_Neg>, Q_Neg>(true);
            typeAssertEq<Mul<Q0_Pos, Q0_Pos>, Q0_Pos>(true);
            typeAssertEq<Mul<Q0_Pos, Q0_Neg>, Q0_Neg>(true);
            typeAssertEq<Mul<Q0_Pos, Z>, Q>(true);
            typeAssertEq<Mul<Q0_Pos, Z0>, Q0>(true);
            typeAssertEq<Mul<Q0_Pos, Z_Pos>, Q_Pos>(true);
            typeAssertEq<Mul<Q0_Pos, Z_Neg>, Q_Neg>(true);
            typeAssertEq<Mul<Q0_Pos, Z0_Pos>, Q0_Pos>(true);
            typeAssertEq<Mul<Q0_Pos, Z0_Neg>, Q0_Neg>(true);
            typeAssertEq<Mul<Q0_Pos, Zero>, Zero>(true);
            typeAssertEq<Mul<Q0_Pos, EmptyNumberSet>, EmptyNumberSet>(true);
        })

        it("Q0_Neg", () => {
            typeAssertEq<Mul<Q0_Neg, Q>, Q>(true);
            typeAssertEq<Mul<Q0_Neg, Q0>, Q0>(true);
            typeAssertEq<Mul<Q0_Neg, Q_Pos>, Q_Neg>(true);
            typeAssertEq<Mul<Q0_Neg, Q_Neg>, Q_Pos>(true);
            typeAssertEq<Mul<Q0_Neg, Q0_Pos>, Q0_Neg>(true);
            typeAssertEq<Mul<Q0_Neg, Q0_Neg>, Q0_Pos>(true);
            typeAssertEq<Mul<Q0_Neg, Z>, Q>(true);
            typeAssertEq<Mul<Q0_Neg, Z0>, Q0>(true);
            typeAssertEq<Mul<Q0_Neg, Z_Pos>, Q_Neg>(true);
            typeAssertEq<Mul<Q0_Neg, Z_Neg>, Q_Pos>(true);
            typeAssertEq<Mul<Q0_Neg, Z0_Pos>, Q0_Neg>(true);
            typeAssertEq<Mul<Q0_Neg, Z0_Neg>, Q0_Pos>(true);
            typeAssertEq<Mul<Q0_Neg, Zero>, Zero>(true);
            typeAssertEq<Mul<Q0_Neg, EmptyNumberSet>, EmptyNumberSet>(true);
        })

        it("Z", () => {
            typeAssertEq<Mul<Z, Q>, Q>(true);
            typeAssertEq<Mul<Z, Q0>, Q>(true);
            typeAssertEq<Mul<Z, Q_Pos>, Q>(true);
            typeAssertEq<Mul<Z, Q_Neg>, Q>(true);
            typeAssertEq<Mul<Z, Q0_Pos>, Q>(true);
            typeAssertEq<Mul<Z, Q0_Neg>, Q>(true);
            typeAssertEq<Mul<Z, Z>, Z>(true);
            typeAssertEq<Mul<Z, Z0>, Z>(true);
            typeAssertEq<Mul<Z, Z_Pos>, Z>(true);
            typeAssertEq<Mul<Z, Z_Neg>, Z>(true);
            typeAssertEq<Mul<Z, Z0_Pos>, Z>(true);
            typeAssertEq<Mul<Z, Z0_Neg>, Z>(true);
            typeAssertEq<Mul<Z, Zero>, Zero>(true);
            typeAssertEq<Mul<Z, EmptyNumberSet>, EmptyNumberSet>(true);
        })

        it("Z0", () => {
            typeAssertEq<Mul<Z0, Q>, Q>(true);
            typeAssertEq<Mul<Z0, Q0>, Q0>(true);
            typeAssertEq<Mul<Z0, Q_Pos>, Q>(true);
            typeAssertEq<Mul<Z0, Q_Neg>, Q>(true);
            typeAssertEq<Mul<Z0, Q0_Pos>, Q0>(true);
            typeAssertEq<Mul<Z0, Q0_Neg>, Q0>(true);
            typeAssertEq<Mul<Z0, Z>, Z>(true);
            typeAssertEq<Mul<Z0, Z0>, Z0>(true);
            typeAssertEq<Mul<Z0, Z_Pos>, Z>(true);
            typeAssertEq<Mul<Z0, Z_Neg>, Z>(true);
            typeAssertEq<Mul<Z0, Z0_Pos>, Z0>(true);
            typeAssertEq<Mul<Z0, Z0_Neg>, Z0>(true);
            typeAssertEq<Mul<Z0, Zero>, Zero>(true);
            typeAssertEq<Mul<Z0, EmptyNumberSet>, EmptyNumberSet>(true);
        })

        it("Z_Pos", () => {
            typeAssertEq<Mul<Z_Pos, Q>, Q>(true);
            typeAssertEq<Mul<Z_Pos, Q0>, Q>(true);
            typeAssertEq<Mul<Z_Pos, Q_Pos>, Q_Pos>(true);
            typeAssertEq<Mul<Z_Pos, Q_Neg>, Q_Neg>(true);
            typeAssertEq<Mul<Z_Pos, Q0_Pos>, Q_Pos>(true);
            typeAssertEq<Mul<Z_Pos, Q0_Neg>, Q_Neg>(true);
            typeAssertEq<Mul<Z_Pos, Z>, Z>(true);
            typeAssertEq<Mul<Z_Pos, Z0>, Z>(true);
            typeAssertEq<Mul<Z_Pos, Z_Pos>, Z_Pos>(true);
            typeAssertEq<Mul<Z_Pos, Z_Neg>, Z_Neg>(true);
            typeAssertEq<Mul<Z_Pos, Z0_Pos>, Z_Pos>(true);
            typeAssertEq<Mul<Z_Pos, Z0_Neg>, Z_Neg>(true);
            typeAssertEq<Mul<Z_Pos, Zero>, Zero>(true);
            typeAssertEq<Mul<Z_Pos, EmptyNumberSet>, EmptyNumberSet>(true);
        })

        it("Z_Neg", () => {
            typeAssertEq<Mul<Z_Neg, Q>, Q>(true);
            typeAssertEq<Mul<Z_Neg, Q0>, Q>(true);
            typeAssertEq<Mul<Z_Neg, Q_Pos>, Q_Neg>(true);
            typeAssertEq<Mul<Z_Neg, Q_Neg>, Q_Pos>(true);
            typeAssertEq<Mul<Z_Neg, Q0_Pos>, Q_Neg>(true);
            typeAssertEq<Mul<Z_Neg, Q0_Neg>, Q_Pos>(true);
            typeAssertEq<Mul<Z_Neg, Z>, Z>(true);
            typeAssertEq<Mul<Z_Neg, Z0>, Z>(true);
            typeAssertEq<Mul<Z_Neg, Z_Pos>, Z_Neg>(true);
            typeAssertEq<Mul<Z_Neg, Z_Neg>, Z_Pos>(true);
            typeAssertEq<Mul<Z_Neg, Z0_Pos>, Z_Neg>(true);
            typeAssertEq<Mul<Z_Neg, Z0_Neg>, Z_Pos>(true);
            typeAssertEq<Mul<Z_Neg, Zero>, Zero>(true);
            typeAssertEq<Mul<Z_Neg, EmptyNumberSet>, EmptyNumberSet>(true);
        })
        it("Z0_Pos", () => {
            typeAssertEq<Mul<Z0_Pos, Q>, Q>(true);
            typeAssertEq<Mul<Z0_Pos, Q0>, Q0>(true);
            typeAssertEq<Mul<Z0_Pos, Q_Pos>, Q_Pos>(true);
            typeAssertEq<Mul<Z0_Pos, Q_Neg>, Q_Neg>(true);
            typeAssertEq<Mul<Z0_Pos, Q0_Pos>, Q0_Pos>(true);
            typeAssertEq<Mul<Z0_Pos, Q0_Neg>, Q0_Neg>(true);
            typeAssertEq<Mul<Z0_Pos, Z>, Z>(true);
            typeAssertEq<Mul<Z0_Pos, Z0>, Z0>(true);
            typeAssertEq<Mul<Z0_Pos, Z_Pos>, Z_Pos>(true);
            typeAssertEq<Mul<Z0_Pos, Z_Neg>, Z_Neg>(true);
            typeAssertEq<Mul<Z0_Pos, Z0_Pos>, Z0_Pos>(true);
            typeAssertEq<Mul<Z0_Pos, Z0_Neg>, Z0_Neg>(true);
            typeAssertEq<Mul<Z0_Pos, Zero>, Zero>(true);
            typeAssertEq<Mul<Z0_Pos, EmptyNumberSet>, EmptyNumberSet>(true);
        })

        it("Z0_Neg", () => {
            typeAssertEq<Mul<Z0_Neg, Q>, Q>(true);
            typeAssertEq<Mul<Z0_Neg, Q0>, Q0>(true);
            typeAssertEq<Mul<Z0_Neg, Q_Pos>, Q_Neg>(true);
            typeAssertEq<Mul<Z0_Neg, Q_Neg>, Q_Pos>(true);
            typeAssertEq<Mul<Z0_Neg, Q0_Pos>, Q0_Neg>(true);
            typeAssertEq<Mul<Z0_Neg, Q0_Neg>, Q0_Pos>(true);
            typeAssertEq<Mul<Z0_Neg, Z>, Z>(true);
            typeAssertEq<Mul<Z0_Neg, Z0>, Z0>(true);
            typeAssertEq<Mul<Z0_Neg, Z_Pos>, Z_Neg>(true);
            typeAssertEq<Mul<Z0_Neg, Z_Neg>, Z_Pos>(true);
            typeAssertEq<Mul<Z0_Neg, Z0_Pos>, Z0_Neg>(true);
            typeAssertEq<Mul<Z0_Neg, Z0_Neg>, Z0_Pos>(true);
            typeAssertEq<Mul<Z0_Neg, Zero>, Zero>(true);
            typeAssertEq<Mul<Z0_Neg, EmptyNumberSet>, EmptyNumberSet>(true);
        })

        it("Zero", () => {
            typeAssertEq<Mul<Zero, Q>, Zero>(true);
            typeAssertEq<Mul<Zero, Q0>, Zero>(true);
            typeAssertEq<Mul<Zero, Q_Pos>, Zero>(true);
            typeAssertEq<Mul<Zero, Q_Neg>, Zero>(true);
            typeAssertEq<Mul<Zero, Q0_Pos>, Zero>(true);
            typeAssertEq<Mul<Zero, Q0_Neg>, Zero>(true);
            typeAssertEq<Mul<Zero, Z>, Zero>(true);
            typeAssertEq<Mul<Zero, Z0>, Zero>(true);
            typeAssertEq<Mul<Zero, Z_Pos>, Zero>(true);
            typeAssertEq<Mul<Zero, Z_Neg>, Zero>(true);
            typeAssertEq<Mul<Zero, Z0_Pos>, Zero>(true);
            typeAssertEq<Mul<Zero, Z0_Neg>, Zero>(true);
            typeAssertEq<Mul<Zero, Zero>, Zero>(true);
            typeAssertEq<Mul<Zero, EmptyNumberSet>, EmptyNumberSet>(true);
        })

        it("EmptyNumberSet", () => {
            typeAssertEq<Mul<EmptyNumberSet, Q>, EmptyNumberSet>(true);
            typeAssertEq<Mul<EmptyNumberSet, Q0>, EmptyNumberSet>(true);
            typeAssertEq<Mul<EmptyNumberSet, Q_Pos>, EmptyNumberSet>(true);
            typeAssertEq<Mul<EmptyNumberSet, Q_Neg>, EmptyNumberSet>(true);
            typeAssertEq<Mul<EmptyNumberSet, Q0_Pos>, EmptyNumberSet>(true);
            typeAssertEq<Mul<EmptyNumberSet, Q0_Neg>, EmptyNumberSet>(true);
            typeAssertEq<Mul<EmptyNumberSet, Z>, EmptyNumberSet>(true);
            typeAssertEq<Mul<EmptyNumberSet, Z0>, EmptyNumberSet>(true);
            typeAssertEq<Mul<EmptyNumberSet, Z_Pos>, EmptyNumberSet>(true);
            typeAssertEq<Mul<EmptyNumberSet, Z_Neg>, EmptyNumberSet>(true);
            typeAssertEq<Mul<EmptyNumberSet, Z0_Pos>, EmptyNumberSet>(true);
            typeAssertEq<Mul<EmptyNumberSet, Z0_Neg>, EmptyNumberSet>(true);
            typeAssertEq<Mul<EmptyNumberSet, Zero>, EmptyNumberSet>(true);
            typeAssertEq<Mul<EmptyNumberSet, EmptyNumberSet>, EmptyNumberSet>(true);
        })

    })

})