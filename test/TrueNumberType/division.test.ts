import { EmptyNumberSet, Q, Q0, Q0_Neg, Q0_Pos, Q_Neg, Q_Pos, TN, Z, Z0, Z0_Neg, Z0_Pos, Zero, Z_Neg, Z_Pos, DivisionByZero } from "../../src/TrueNumbers/TrueNumberType"
import { Div } from "../../src/TrueNumbers/TrueNumberTypeProcessing"
import { typeAssertEq } from "../../src/TypeProcessing/TypeAsserting"

describe("Divide true numbers", () => {
    describe("Div type", () => {
        it("Q", () => {
            typeAssertEq<Div<Q, Q>, Q | DivisionByZero>(true);
            typeAssertEq<Div<Q, Q0>, Q>(true);
            typeAssertEq<Div<Q, Q_Pos>, Q | DivisionByZero>(true);
            typeAssertEq<Div<Q, Q_Neg>, Q | DivisionByZero>(true);
            typeAssertEq<Div<Q, Q0_Pos>, Q>(true);
            typeAssertEq<Div<Q, Q0_Neg>, Q>(true);
            typeAssertEq<Div<Q, Z>, Q | DivisionByZero>(true);
            typeAssertEq<Div<Q, Z0>, Q>(true);
            typeAssertEq<Div<Q, Z_Pos>, Q | DivisionByZero>(true);
            typeAssertEq<Div<Q, Z_Neg>, Q | DivisionByZero>(true);
            typeAssertEq<Div<Q, Z0_Pos>, Q>(true);
            typeAssertEq<Div<Q, Z0_Neg>, Q>(true);
            typeAssertEq<Div<Q, Zero>, DivisionByZero>(true);
            typeAssertEq<Div<Q, EmptyNumberSet>, EmptyNumberSet>(true);
        })
        it("Q0", () => {
            typeAssertEq<Div<Q0, Q>, Q0 | DivisionByZero>(true);
            typeAssertEq<Div<Q0, Q0>, Q0>(true);
            typeAssertEq<Div<Q0, Q_Pos>, Q0 | DivisionByZero>(true);
            typeAssertEq<Div<Q0, Q_Neg>, Q0 | DivisionByZero>(true);
            typeAssertEq<Div<Q0, Q0_Pos>, Q0>(true);
            typeAssertEq<Div<Q0, Q0_Neg>, Q0>(true);
            typeAssertEq<Div<Q0, Z>, Q0 | DivisionByZero>(true);
            typeAssertEq<Div<Q0, Z0>, Q0>(true);
            typeAssertEq<Div<Q0, Z_Pos>, Q0 | DivisionByZero>(true);
            typeAssertEq<Div<Q0, Z_Neg>, Q0 | DivisionByZero>(true);
            typeAssertEq<Div<Q0, Z0_Pos>, Q0>(true);
            typeAssertEq<Div<Q0, Z0_Neg>, Q0>(true);
            typeAssertEq<Div<Q0, Zero>, DivisionByZero>(true);
            typeAssertEq<Div<Q0, EmptyNumberSet>, EmptyNumberSet>(true);
        })

        it("Q_Pos", () => {
            typeAssertEq<Div<Q_Pos, Q>, Q | DivisionByZero>(true);
            typeAssertEq<Div<Q_Pos, Q0>, Q>(true);
            typeAssertEq<Div<Q_Pos, Q_Pos>, Q_Pos | DivisionByZero>(true);
            typeAssertEq<Div<Q_Pos, Q_Neg>, Q_Neg | DivisionByZero>(true);
            typeAssertEq<Div<Q_Pos, Q0_Pos>, Q_Pos>(true);
            typeAssertEq<Div<Q_Pos, Q0_Neg>, Q_Neg>(true);
            typeAssertEq<Div<Q_Pos, Z>, Q | DivisionByZero>(true);
            typeAssertEq<Div<Q_Pos, Z0>, Q>(true);
            typeAssertEq<Div<Q_Pos, Z_Pos>, Q_Pos | DivisionByZero>(true);
            typeAssertEq<Div<Q_Pos, Z_Neg>, Q_Neg | DivisionByZero>(true);
            typeAssertEq<Div<Q_Pos, Z0_Pos>, Q_Pos>(true);
            typeAssertEq<Div<Q_Pos, Z0_Neg>, Q_Neg>(true);
            typeAssertEq<Div<Q_Pos, Zero>, DivisionByZero>(true);
            typeAssertEq<Div<Q_Pos, EmptyNumberSet>, EmptyNumberSet>(true);
        })

        it("Q_Neg", () => {
            typeAssertEq<Div<Q_Neg, Q>, Q | DivisionByZero>(true);
            typeAssertEq<Div<Q_Neg, Q0>, Q>(true);
            typeAssertEq<Div<Q_Neg, Q_Pos>, Q_Neg | DivisionByZero>(true);
            typeAssertEq<Div<Q_Neg, Q_Neg>, Q_Pos | DivisionByZero>(true);
            typeAssertEq<Div<Q_Neg, Q0_Pos>, Q_Neg>(true);
            typeAssertEq<Div<Q_Neg, Q0_Neg>, Q_Pos>(true);
            typeAssertEq<Div<Q_Neg, Z>, Q | DivisionByZero>(true);
            typeAssertEq<Div<Q_Neg, Z0>, Q>(true);
            typeAssertEq<Div<Q_Neg, Z_Pos>, Q_Neg | DivisionByZero>(true);
            typeAssertEq<Div<Q_Neg, Z_Neg>, Q_Pos | DivisionByZero>(true);
            typeAssertEq<Div<Q_Neg, Z0_Pos>, Q_Neg>(true);
            typeAssertEq<Div<Q_Neg, Z0_Neg>, Q_Pos>(true);
            typeAssertEq<Div<Q_Neg, Zero>, DivisionByZero>(true);
            typeAssertEq<Div<Q_Neg, EmptyNumberSet>, EmptyNumberSet>(true);
        })

        it("Q0_Pos", () => {
            typeAssertEq<Div<Q0_Pos, Q>, Q0 | DivisionByZero>(true);
            typeAssertEq<Div<Q0_Pos, Q0>, Q0>(true);
            typeAssertEq<Div<Q0_Pos, Q_Pos>, Q0_Pos | DivisionByZero>(true);
            typeAssertEq<Div<Q0_Pos, Q_Neg>, Q0_Neg | DivisionByZero>(true);
            typeAssertEq<Div<Q0_Pos, Q0_Pos>, Q0_Pos>(true);
            typeAssertEq<Div<Q0_Pos, Q0_Neg>, Q0_Neg>(true);
            typeAssertEq<Div<Q0_Pos, Z>, Q0 | DivisionByZero>(true);
            typeAssertEq<Div<Q0_Pos, Z0>, Q0>(true);
            typeAssertEq<Div<Q0_Pos, Z_Pos>, Q0_Pos | DivisionByZero>(true);
            typeAssertEq<Div<Q0_Pos, Z_Neg>, Q0_Neg | DivisionByZero>(true);
            typeAssertEq<Div<Q0_Pos, Z0_Pos>, Q0_Pos>(true);
            typeAssertEq<Div<Q0_Pos, Z0_Neg>, Q0_Neg>(true);
            typeAssertEq<Div<Q0_Pos, Zero>, DivisionByZero>(true);
            typeAssertEq<Div<Q0_Pos, EmptyNumberSet>, EmptyNumberSet>(true);
        })

        it("Q0_Neg", () => {
            typeAssertEq<Div<Q0_Neg, Q>, Q | DivisionByZero>(true);
            typeAssertEq<Div<Q0_Neg, Q0>, Q0>(true);
            typeAssertEq<Div<Q0_Neg, Q_Pos>, Q0_Neg | DivisionByZero>(true);
            typeAssertEq<Div<Q0_Neg, Q_Neg>, Q0_Pos | DivisionByZero>(true);
            typeAssertEq<Div<Q0_Neg, Q0_Pos>, Q0_Neg>(true);
            typeAssertEq<Div<Q0_Neg, Q0_Neg>, Q0_Pos>(true);
            typeAssertEq<Div<Q0_Neg, Z>, Q0 | DivisionByZero>(true);
            typeAssertEq<Div<Q0_Neg, Z0>, Q0>(true);
            typeAssertEq<Div<Q0_Neg, Z_Pos>, Q0_Neg | DivisionByZero>(true);
            typeAssertEq<Div<Q0_Neg, Z_Neg>, Q0_Pos | DivisionByZero>(true);
            typeAssertEq<Div<Q0_Neg, Z0_Pos>, Q0_Neg>(true);
            typeAssertEq<Div<Q0_Neg, Z0_Neg>, Q0_Pos>(true);
            typeAssertEq<Div<Q0_Neg, Zero>, DivisionByZero>(true);
            typeAssertEq<Div<Q0_Neg, EmptyNumberSet>, EmptyNumberSet>(true);
        })

        it("Z", () => {
            typeAssertEq<Div<Z, Q>, Q | DivisionByZero>(true);
            typeAssertEq<Div<Z, Q0>, Q>(true);
            typeAssertEq<Div<Z, Q_Pos>, Q | DivisionByZero>(true);
            typeAssertEq<Div<Z, Q_Neg>, Q | DivisionByZero>(true);
            typeAssertEq<Div<Z, Q0_Pos>, Q>(true);
            typeAssertEq<Div<Z, Q0_Neg>, Q>(true);
            typeAssertEq<Div<Z, Z>, Q | DivisionByZero>(true);
            typeAssertEq<Div<Z, Z0>, Q>(true);
            typeAssertEq<Div<Z, Z_Pos>, Q | DivisionByZero>(true);
            typeAssertEq<Div<Z, Z_Neg>, Q | DivisionByZero>(true);
            typeAssertEq<Div<Z, Z0_Pos>, Q>(true);
            typeAssertEq<Div<Z, Z0_Neg>, Q>(true);
            typeAssertEq<Div<Z, Zero>, DivisionByZero>(true);
            typeAssertEq<Div<Z, EmptyNumberSet>, EmptyNumberSet>(true);
        })

        it("Z0", () => {
            typeAssertEq<Div<Z0, Q>, Q0 | DivisionByZero>(true);
            typeAssertEq<Div<Z0, Q0>, Q0>(true);
            typeAssertEq<Div<Z0, Q_Pos>, Q0 | DivisionByZero>(true);
            typeAssertEq<Div<Z0, Q_Neg>, Q0 | DivisionByZero>(true);
            typeAssertEq<Div<Z0, Q0_Pos>, Q0>(true);
            typeAssertEq<Div<Z0, Q0_Neg>, Q0>(true);
            typeAssertEq<Div<Z0, Z>, Q0 | DivisionByZero>(true);
            typeAssertEq<Div<Z0, Z0>, Q0>(true);
            typeAssertEq<Div<Z0, Z_Pos>, Q0 | DivisionByZero>(true);
            typeAssertEq<Div<Z0, Z_Neg>, Q0 | DivisionByZero>(true);
            typeAssertEq<Div<Z0, Z0_Pos>, Q0>(true);
            typeAssertEq<Div<Z0, Z0_Neg>, Q0>(true);
            typeAssertEq<Div<Z0, Zero>, DivisionByZero>(true);
            typeAssertEq<Div<Z0, EmptyNumberSet>, EmptyNumberSet>(true);
        })

        it("Z_Pos", () => {
            typeAssertEq<Div<Z_Pos, Q>, Q | DivisionByZero>(true);
            typeAssertEq<Div<Z_Pos, Q0>, Q>(true);
            typeAssertEq<Div<Z_Pos, Q_Pos>, Q_Pos | DivisionByZero>(true);
            typeAssertEq<Div<Z_Pos, Q_Neg>, Q_Neg | DivisionByZero>(true);
            typeAssertEq<Div<Z_Pos, Q0_Pos>, Q_Pos>(true);
            typeAssertEq<Div<Z_Pos, Q0_Neg>, Q_Neg>(true);
            typeAssertEq<Div<Z_Pos, Z>, Q | DivisionByZero>(true);
            typeAssertEq<Div<Z_Pos, Z0>, Q>(true);
            typeAssertEq<Div<Z_Pos, Z_Pos>, Q_Pos | DivisionByZero>(true);
            typeAssertEq<Div<Z_Pos, Z_Neg>, Q_Neg | DivisionByZero>(true);
            typeAssertEq<Div<Z_Pos, Z0_Pos>, Q_Pos>(true);
            typeAssertEq<Div<Z_Pos, Z0_Neg>, Q_Neg>(true);
            typeAssertEq<Div<Z_Pos, Zero>, DivisionByZero>(true);
            typeAssertEq<Div<Z_Pos, EmptyNumberSet>, EmptyNumberSet>(true);
        })

        it("Z_Neg", () => {
            typeAssertEq<Div<Z_Neg, Q>, Q | DivisionByZero>(true);
            typeAssertEq<Div<Z_Neg, Q0>, Q>(true);
            typeAssertEq<Div<Z_Neg, Q_Pos>, Q_Neg | DivisionByZero>(true);
            typeAssertEq<Div<Z_Neg, Q_Neg>, Q_Pos | DivisionByZero>(true);
            typeAssertEq<Div<Z_Neg, Q0_Pos>, Q_Neg>(true);
            typeAssertEq<Div<Z_Neg, Q0_Neg>, Q_Pos>(true);
            typeAssertEq<Div<Z_Neg, Z>, Q | DivisionByZero>(true);
            typeAssertEq<Div<Z_Neg, Z0>, Q>(true);
            typeAssertEq<Div<Z_Neg, Z_Pos>, Q_Neg | DivisionByZero>(true);
            typeAssertEq<Div<Z_Neg, Z_Neg>, Q_Pos | DivisionByZero>(true);
            typeAssertEq<Div<Z_Neg, Z0_Pos>, Q_Neg>(true);
            typeAssertEq<Div<Z_Neg, Z0_Neg>, Q_Pos>(true);
            typeAssertEq<Div<Z_Neg, Zero>, DivisionByZero>(true);
            typeAssertEq<Div<Z_Neg, EmptyNumberSet>, EmptyNumberSet>(true);
        })
        it("Z0_Pos", () => {
            typeAssertEq<Div<Z0_Pos, Q>, Q0 | DivisionByZero>(true);
            typeAssertEq<Div<Z0_Pos, Q0>, Q0>(true);
            typeAssertEq<Div<Z0_Pos, Q_Pos>, Q0_Pos | DivisionByZero>(true);
            typeAssertEq<Div<Z0_Pos, Q_Neg>, Q0_Neg | DivisionByZero>(true);
            typeAssertEq<Div<Z0_Pos, Q0_Pos>, Q0_Pos>(true);
            typeAssertEq<Div<Z0_Pos, Q0_Neg>, Q0_Neg>(true);
            typeAssertEq<Div<Z0_Pos, Z>, Q0 | DivisionByZero>(true);
            typeAssertEq<Div<Z0_Pos, Z0>, Q0>(true);
            typeAssertEq<Div<Z0_Pos, Z_Pos>, Q0_Pos | DivisionByZero>(true);
            typeAssertEq<Div<Z0_Pos, Z_Neg>, Q0_Neg | DivisionByZero>(true);
            typeAssertEq<Div<Z0_Pos, Z0_Pos>, Q0_Pos>(true);
            typeAssertEq<Div<Z0_Pos, Z0_Neg>, Q0_Neg>(true);
            typeAssertEq<Div<Z0_Pos, Zero>, DivisionByZero>(true);
            typeAssertEq<Div<Z0_Pos, EmptyNumberSet>, EmptyNumberSet>(true);
        })

        it("Z0_Neg", () => {
            typeAssertEq<Div<Z0_Neg, Q>, Q0 | DivisionByZero>(true);
            typeAssertEq<Div<Z0_Neg, Q0>, Q0>(true);
            typeAssertEq<Div<Z0_Neg, Q_Pos>, Q0_Neg | DivisionByZero>(true);
            typeAssertEq<Div<Z0_Neg, Q_Neg>, Q0_Pos | DivisionByZero>(true);
            typeAssertEq<Div<Z0_Neg, Q0_Pos>, Q0_Neg>(true);
            typeAssertEq<Div<Z0_Neg, Q0_Neg>, Q0_Pos>(true);
            typeAssertEq<Div<Z0_Neg, Z>, Q0 | DivisionByZero>(true);
            typeAssertEq<Div<Z0_Neg, Z0>, Q0>(true);
            typeAssertEq<Div<Z0_Neg, Z_Pos>, Q0_Neg | DivisionByZero>(true);
            typeAssertEq<Div<Z0_Neg, Z_Neg>, Q0_Pos | DivisionByZero>(true);
            typeAssertEq<Div<Z0_Neg, Z0_Pos>, Q0_Neg>(true);
            typeAssertEq<Div<Z0_Neg, Z0_Neg>, Q0_Pos>(true);
            typeAssertEq<Div<Z0_Neg, Zero>, DivisionByZero>(true);
            typeAssertEq<Div<Z0_Neg, EmptyNumberSet>, EmptyNumberSet>(true);
        })

        it("Zero", () => {
            typeAssertEq<Div<Zero, Q>, Zero | DivisionByZero>(true);
            typeAssertEq<Div<Zero, Q0>, Zero>(true);
            typeAssertEq<Div<Zero, Q_Pos>, Zero | DivisionByZero>(true);
            typeAssertEq<Div<Zero, Q_Neg>, Zero | DivisionByZero>(true);
            typeAssertEq<Div<Zero, Q0_Pos>, Zero>(true);
            typeAssertEq<Div<Zero, Q0_Neg>, Zero>(true);
            typeAssertEq<Div<Zero, Z>, Zero | DivisionByZero>(true);
            typeAssertEq<Div<Zero, Z0>, Zero>(true);
            typeAssertEq<Div<Zero, Z_Pos>, Zero | DivisionByZero>(true);
            typeAssertEq<Div<Zero, Z_Neg>, Zero | DivisionByZero>(true);
            typeAssertEq<Div<Zero, Z0_Pos>, Zero>(true);
            typeAssertEq<Div<Zero, Z0_Neg>, Zero>(true);
            typeAssertEq<Div<Zero, Zero>, DivisionByZero>(true);
            typeAssertEq<Div<Zero, EmptyNumberSet>, EmptyNumberSet>(true);
        })

        it("EmptyNumberSet", () => {
            typeAssertEq<Div<EmptyNumberSet, Q>, EmptyNumberSet>(true);
            typeAssertEq<Div<EmptyNumberSet, Q0>, EmptyNumberSet>(true);
            typeAssertEq<Div<EmptyNumberSet, Q_Pos>, EmptyNumberSet>(true);
            typeAssertEq<Div<EmptyNumberSet, Q_Neg>, EmptyNumberSet>(true);
            typeAssertEq<Div<EmptyNumberSet, Q0_Pos>, EmptyNumberSet>(true);
            typeAssertEq<Div<EmptyNumberSet, Q0_Neg>, EmptyNumberSet>(true);
            typeAssertEq<Div<EmptyNumberSet, Z>, EmptyNumberSet>(true);
            typeAssertEq<Div<EmptyNumberSet, Z0>, EmptyNumberSet>(true);
            typeAssertEq<Div<EmptyNumberSet, Z_Pos>, EmptyNumberSet>(true);
            typeAssertEq<Div<EmptyNumberSet, Z_Neg>, EmptyNumberSet>(true);
            typeAssertEq<Div<EmptyNumberSet, Z0_Pos>, EmptyNumberSet>(true);
            typeAssertEq<Div<EmptyNumberSet, Z0_Neg>, EmptyNumberSet>(true);
            typeAssertEq<Div<EmptyNumberSet, Zero>, EmptyNumberSet>(true);
            typeAssertEq<Div<EmptyNumberSet, EmptyNumberSet>, EmptyNumberSet>(true);
        })

    })

})