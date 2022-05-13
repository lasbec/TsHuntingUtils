import { Zero, Z, Z0, Q, Q0, Z_Pos, Z0_Pos, Q_Pos, Q0_Pos, Z_Neg, Z0_Neg, Q_Neg, Q0_Neg, EmptyNumberSet } from "../src/numbers/true-number";
import { typeAssertEq, typeAssertSubset } from "../src/typeCalculus/type-testing";

describe("TrueNumber", () => {
    describe("Relations", () => {
        it("R is Subset of", () => {
            typeAssertSubset<Q, Q>(true);
            typeAssertSubset<Q, Q0>(false);
            typeAssertSubset<Q, Q_Pos>(false)
            typeAssertSubset<Q, Q_Neg>(false);
            typeAssertSubset<Q, Q0_Pos>(false)
            typeAssertSubset<Q, Q0_Neg>(false);
            typeAssertSubset<Q, Z>(false);
            typeAssertSubset<Q, Z0>(false);
            typeAssertSubset<Q, Z_Pos>(false);
            typeAssertSubset<Q, Z_Neg>(false);
            typeAssertSubset<Q, Z0_Pos>(false);
            typeAssertSubset<Q, Z0_Neg>(false);
            typeAssertSubset<Q, Zero>(false);
            typeAssertSubset<Q, EmptyNumberSet>(false);
        })

        it("R0 is Subset of", () => {
            typeAssertSubset<Q0, Q>(true);
            typeAssertSubset<Q0, Q0>(true);
            typeAssertSubset<Q0, Q_Pos>(false);
            typeAssertSubset<Q0, Q_Neg>(false);
            typeAssertSubset<Q0, Q0_Pos>(false);
            typeAssertSubset<Q0, Q0_Neg>(false);
            typeAssertSubset<Q0, Z>(false);
            typeAssertSubset<Q0, Z0>(false);
            typeAssertSubset<Q0, Z_Pos>(false);
            typeAssertSubset<Q0, Z_Neg>(false);
            typeAssertSubset<Q0, Z0_Pos>(false);
            typeAssertSubset<Q0, Z0_Neg>(false);
            typeAssertSubset<Q0, Zero>(false);
            typeAssertSubset<Q0, EmptyNumberSet>(false);
        })

        it("R_Pos is Subset of", () => {
            typeAssertSubset<Q_Pos, Q>(true);
            typeAssertSubset<Q_Pos, Q0>(false);
            typeAssertSubset<Q_Pos, Q_Pos>(true);
            typeAssertSubset<Q_Pos, Q_Neg>(false);
            typeAssertSubset<Q_Pos, Q0_Pos>(false);
            typeAssertSubset<Q_Pos, Q0_Neg>(false);
            typeAssertSubset<Q_Pos, Z>(false);
            typeAssertSubset<Q_Pos, Z0>(false);
            typeAssertSubset<Q_Pos, Z_Pos>(false);
            typeAssertSubset<Q_Pos, Z_Neg>(false);
            typeAssertSubset<Q_Pos, Z0_Pos>(false);
            typeAssertSubset<Q_Pos, Z0_Neg>(false);
            typeAssertSubset<Q_Pos, Zero>(false);
            typeAssertSubset<Q_Pos, EmptyNumberSet>(false);
        })
        it("R_Neg is Subset of", () => {
            typeAssertSubset<Q_Neg, Q>(true);
            typeAssertSubset<Q_Neg, Q0>(false);
            typeAssertSubset<Q_Neg, Q_Pos>(false)
            typeAssertSubset<Q_Neg, Q_Neg>(true);
            typeAssertSubset<Q_Neg, Q0_Pos>(false)
            typeAssertSubset<Q_Neg, Q0_Neg>(false);
            typeAssertSubset<Q_Neg, Z>(false);
            typeAssertSubset<Q_Neg, Z0>(false);
            typeAssertSubset<Q_Neg, Z_Pos>(false);
            typeAssertSubset<Q_Neg, Z_Neg>(false);
            typeAssertSubset<Q_Neg, Z0_Pos>(false);
            typeAssertSubset<Q_Neg, Z0_Neg>(false);
            typeAssertSubset<Q_Neg, Zero>(false);
            typeAssertSubset<Q_Neg, EmptyNumberSet>(false);
        })
        it("R0_Pos is Subset of", () => {
            typeAssertSubset<Q0_Pos, Q>(true);
            typeAssertSubset<Q0_Pos, Q0>(true);
            typeAssertSubset<Q0_Pos, Q_Pos>(true)
            typeAssertSubset<Q0_Pos, Q_Neg>(false);
            typeAssertSubset<Q0_Pos, Q0_Pos>(true)
            typeAssertSubset<Q0_Pos, Q0_Neg>(false);
            typeAssertSubset<Q0_Pos, Z>(false);
            typeAssertSubset<Q0_Pos, Z0>(false);
            typeAssertSubset<Q0_Pos, Z_Pos>(false);
            typeAssertSubset<Q0_Pos, Z_Neg>(false);
            typeAssertSubset<Q0_Pos, Z0_Pos>(false);
            typeAssertSubset<Q0_Pos, Z0_Neg>(false);
            typeAssertSubset<Q0_Pos, Zero>(false);
            typeAssertSubset<Q0_Pos, EmptyNumberSet>(false);
        })

        it("R0_Neg is Subset of", () => {
            typeAssertSubset<Q0_Neg, Q>(true);
            typeAssertSubset<Q0_Neg, Q0>(true);
            typeAssertSubset<Q0_Neg, Q_Pos>(false)
            typeAssertSubset<Q0_Neg, Q_Neg>(true);
            typeAssertSubset<Q0_Neg, Q0_Pos>(false)
            typeAssertSubset<Q0_Neg, Q0_Neg>(true);
            typeAssertSubset<Q0_Neg, Z>(false);
            typeAssertSubset<Q0_Neg, Z0>(false);
            typeAssertSubset<Q0_Neg, Z_Pos>(false);
            typeAssertSubset<Q0_Neg, Z_Neg>(false);
            typeAssertSubset<Q0_Neg, Z0_Pos>(false);
            typeAssertSubset<Q0_Neg, Z0_Neg>(false);
            typeAssertSubset<Q0_Neg, Zero>(false);
            typeAssertSubset<Q0_Neg, EmptyNumberSet>(false);
        })

        it("Z is Subset of", () => {
            typeAssertSubset<Z, Q>(true);
            typeAssertSubset<Z, Q0>(false);
            typeAssertSubset<Z, Q_Pos>(false)
            typeAssertSubset<Z, Q_Neg>(false);
            typeAssertSubset<Z, Q0_Pos>(false)
            typeAssertSubset<Z, Q0_Neg>(false);
            typeAssertSubset<Z, Z>(true);
            typeAssertSubset<Z, Z0>(false);
            typeAssertSubset<Z, Z_Pos>(false);
            typeAssertSubset<Z, Z_Neg>(false);
            typeAssertSubset<Z, Z0_Pos>(false);
            typeAssertSubset<Z, Z0_Neg>(false);
            typeAssertSubset<Z, Zero>(false);
            typeAssertSubset<Z, EmptyNumberSet>(false);
        })

        it("Z0 is Subset of", () => {
            typeAssertSubset<Z0, Q>(true);
            typeAssertSubset<Z0, Q0>(true);
            typeAssertSubset<Z0, Q_Pos>(false)
            typeAssertSubset<Z0, Q_Neg>(false);
            typeAssertSubset<Z0, Q0_Pos>(false)
            typeAssertSubset<Z0, Q0_Neg>(false);
            typeAssertSubset<Z0, Z>(true);
            typeAssertSubset<Z0, Z0>(true);
            typeAssertSubset<Z0, Z_Pos>(false);
            typeAssertSubset<Z0, Z_Neg>(false);
            typeAssertSubset<Z0, Z0_Pos>(false);
            typeAssertSubset<Z0, Z0_Neg>(false);
            typeAssertSubset<Z0, Zero>(false);
            typeAssertSubset<Z0, EmptyNumberSet>(false);
        })

        it("Z_Pos is Subset of", () => {
            typeAssertSubset<Z_Pos, Q>(true);
            typeAssertSubset<Z_Pos, Q0>(false);
            typeAssertSubset<Z_Pos, Q_Pos>(true)
            typeAssertSubset<Z_Pos, Q_Neg>(false);
            typeAssertSubset<Z_Pos, Q0_Pos>(false)
            typeAssertSubset<Z_Pos, Q0_Neg>(false);
            typeAssertSubset<Z_Pos, Z>(true);
            typeAssertSubset<Z_Pos, Z0>(false);
            typeAssertSubset<Z_Pos, Z_Pos>(true);
            typeAssertSubset<Z_Pos, Z_Neg>(false);
            typeAssertSubset<Z_Pos, Z0_Pos>(false);
            typeAssertSubset<Z_Pos, Z0_Neg>(false);
            typeAssertSubset<Z_Pos, Zero>(false);
            typeAssertSubset<Z_Pos, EmptyNumberSet>(false);
        })

        it("Z_Neg is Subset of", () => {
            typeAssertSubset<Z_Neg, Q>(true);
            typeAssertSubset<Z_Neg, Q0>(false);
            typeAssertSubset<Z_Neg, Q_Pos>(false)
            typeAssertSubset<Z_Neg, Q_Neg>(true);
            typeAssertSubset<Z_Neg, Q0_Pos>(false)
            typeAssertSubset<Z_Neg, Q0_Neg>(false);
            typeAssertSubset<Z_Neg, Z>(true);
            typeAssertSubset<Z_Neg, Z0>(false);
            typeAssertSubset<Z_Neg, Z_Pos>(false);
            typeAssertSubset<Z_Neg, Z_Neg>(true);
            typeAssertSubset<Z_Neg, Z0_Pos>(false);
            typeAssertSubset<Z_Neg, Z0_Neg>(false);
            typeAssertSubset<Z_Neg, Zero>(false);
            typeAssertSubset<Z_Neg, EmptyNumberSet>(false);
        })
        it("Z0_Pos is Subset of", () => {
            typeAssertSubset<Z0_Pos, Q>(true);
            typeAssertSubset<Z0_Pos, Q0>(true);
            typeAssertSubset<Z0_Pos, Q_Pos>(true)
            typeAssertSubset<Z0_Pos, Q_Neg>(false);
            typeAssertSubset<Z0_Pos, Q0_Pos>(true)
            typeAssertSubset<Z0_Pos, Q0_Neg>(false);
            typeAssertSubset<Z0_Pos, Z>(true);
            typeAssertSubset<Z0_Pos, Z0>(true);
            typeAssertSubset<Z0_Pos, Z_Pos>(true);
            typeAssertSubset<Z0_Pos, Z_Neg>(false);
            typeAssertSubset<Z0_Pos, Z0_Pos>(true);
            typeAssertSubset<Z0_Pos, Z0_Neg>(false);
            typeAssertSubset<Z0_Pos, Zero>(false);
            typeAssertSubset<Z0_Pos, EmptyNumberSet>(false);
        })

        it("Z0_Neg is Subset of", () => {
            typeAssertSubset<Z0_Neg, Q>(true);
            typeAssertSubset<Z0_Neg, Q0>(true);
            typeAssertSubset<Z0_Neg, Q_Pos>(false)
            typeAssertSubset<Z0_Neg, Q_Neg>(true);
            typeAssertSubset<Z0_Neg, Q0_Pos>(false)
            typeAssertSubset<Z0_Neg, Q0_Neg>(true);
            typeAssertSubset<Z0_Neg, Z>(true);
            typeAssertSubset<Z0_Neg, Z0>(true);
            typeAssertSubset<Z0_Neg, Z_Pos>(false);
            typeAssertSubset<Z0_Neg, Z_Neg>(true);
            typeAssertSubset<Z0_Neg, Z0_Pos>(false);
            typeAssertSubset<Z0_Neg, Z0_Neg>(true);
            typeAssertSubset<Z0_Neg, Zero>(false);
            typeAssertSubset<Z0_Neg, EmptyNumberSet>(false);
        })

        it("Zero is Subset of", () => {
            typeAssertSubset<Zero, Q>(true);
            typeAssertSubset<Zero, Q0>(false);
            typeAssertSubset<Zero, Q_Pos>(true)
            typeAssertSubset<Zero, Q_Neg>(true);
            typeAssertSubset<Zero, Q0_Pos>(false)
            typeAssertSubset<Zero, Q0_Neg>(false);
            typeAssertSubset<Zero, Z>(true);
            typeAssertSubset<Zero, Z0>(false);
            typeAssertSubset<Zero, Z_Pos>(true);
            typeAssertSubset<Zero, Z_Neg>(true);
            typeAssertSubset<Zero, Z0_Pos>(false);
            typeAssertSubset<Zero, Z0_Neg>(false);
            typeAssertSubset<Zero, Zero>(true);
            typeAssertSubset<Zero, EmptyNumberSet>(false);
        })

        it("EmptyNumberSet is Subset of", () => {
            typeAssertSubset<EmptyNumberSet, Q>(true);
            typeAssertSubset<EmptyNumberSet, Q0>(true);
            typeAssertSubset<EmptyNumberSet, Q_Pos>(true);
            typeAssertSubset<EmptyNumberSet, Q_Neg>(true);
            typeAssertSubset<EmptyNumberSet, Q0_Pos>(true);
            typeAssertSubset<EmptyNumberSet, Q0_Neg>(true);
            typeAssertSubset<EmptyNumberSet, Z>(true);
            typeAssertSubset<EmptyNumberSet, Z0>(true);
            typeAssertSubset<EmptyNumberSet, Z_Pos>(true);
            typeAssertSubset<EmptyNumberSet, Z_Neg>(true);
            typeAssertSubset<EmptyNumberSet, Z0_Pos>(true);
            typeAssertSubset<EmptyNumberSet, Z0_Neg>(true);
            typeAssertSubset<EmptyNumberSet, Zero>(true);
            typeAssertSubset<EmptyNumberSet, EmptyNumberSet>(true);
        })

    })

    describe("intersections", () => {
        it("R intersected with", () => {
            typeAssertEq<Q & Q, Q>(true);
            typeAssertEq<Q & Q0, Q0>(true);
            typeAssertEq<Q & Q_Pos, Q_Pos>(true);
            typeAssertEq<Q & Q_Neg, Q_Neg>(true);
            typeAssertEq<Q & Q0_Pos, Q0_Pos>(true);
            typeAssertEq<Q & Q0_Neg, Q0_Neg>(true);
            typeAssertEq<Q & Z, Z>(true);
            typeAssertEq<Q & Z0, Z0>(true);
            typeAssertEq<Q & Z_Pos, Z_Pos>(true);
            typeAssertEq<Q & Z_Neg, Z_Neg>(true);
            typeAssertEq<Q & Z0_Pos, Z0_Pos>(true);
            typeAssertEq<Q & Z0_Neg, Z0_Neg>(true);
            typeAssertEq<Q & Zero, Zero>(true);
            typeAssertEq<Q & EmptyNumberSet, EmptyNumberSet>(true);
        })
        it("R0 intersected with", () => {
            typeAssertEq<Q0 & Q, Q0>(true);
            typeAssertEq<Q0 & Q0, Q0>(true);
            typeAssertEq<Q0 & Q_Pos, Q0_Pos>(true);
            typeAssertEq<Q0 & Q_Neg, Q0_Neg>(true);
            typeAssertEq<Q0 & Q0_Pos, Q0_Pos>(true);
            typeAssertEq<Q0 & Q0_Neg, Q0_Neg>(true);
            typeAssertEq<Q0 & Z, Z0>(true);
            typeAssertEq<Q0 & Z0, Z0>(true);
            typeAssertEq<Q0 & Z_Pos, Z0_Pos>(true);
            typeAssertEq<Q0 & Z_Neg, Z0_Neg>(true);
            typeAssertEq<Q0 & Z0_Pos, Z0_Pos>(true);
            typeAssertEq<Q0 & Z0_Neg, Z0_Neg>(true);
            typeAssertEq<Q0 & Zero, EmptyNumberSet>(true);
            typeAssertEq<Q0 & EmptyNumberSet, EmptyNumberSet>(true);
        })

        it("R_Pos intersected with", () => {
            typeAssertEq<Q_Pos & Q, Q_Pos>(true);
            typeAssertEq<Q_Pos & Q0, Q0_Pos>(true);
            typeAssertEq<Q_Pos & Q_Pos, Q_Pos>(true);
            typeAssertEq<Q_Pos & Q_Neg, Zero>(true);
            typeAssertEq<Q_Pos & Q0_Pos, Q0_Pos>(true);
            typeAssertEq<Q_Pos & Q0_Neg, EmptyNumberSet>(true);
            typeAssertEq<Q_Pos & Z, Z_Pos>(true);
            typeAssertEq<Q_Pos & Z0, Z0_Pos>(true);
            typeAssertEq<Q_Pos & Z_Pos, Z_Pos>(true);
            typeAssertEq<Q_Pos & Z_Neg, Zero>(true);
            typeAssertEq<Q_Pos & Z0_Pos, Z0_Pos>(true);
            typeAssertEq<Q_Pos & Z0_Neg, EmptyNumberSet>(true);
            typeAssertEq<Q_Pos & Zero, Zero>(true);
            typeAssertEq<Q_Pos & EmptyNumberSet, EmptyNumberSet>(true);
        })

        it("R_Neg intersected with", () => {
            typeAssertEq<Q_Neg & Q, Q_Neg>(true);
            typeAssertEq<Q_Neg & Q0, Q0_Neg>(true);
            typeAssertEq<Q_Neg & Q_Pos, Zero>(true);
            typeAssertEq<Q_Neg & Q_Neg, Q_Neg>(true);
            typeAssertEq<Q_Neg & Q0_Pos, EmptyNumberSet>(true);
            typeAssertEq<Q_Neg & Q0_Neg, Q0_Neg>(true);
            typeAssertEq<Q_Neg & Z, Z_Neg>(true);
            typeAssertEq<Q_Neg & Z0, Z0_Neg>(true);
            typeAssertEq<Q_Neg & Z_Pos, Zero>(true);
            typeAssertEq<Q_Neg & Z_Neg, Z_Neg>(true);
            typeAssertEq<Q_Neg & Z0_Pos, EmptyNumberSet>(true);
            typeAssertEq<Q_Neg & Z0_Neg, Z0_Neg>(true);
            typeAssertEq<Q_Neg & Zero, Zero>(true);
            typeAssertEq<Q_Neg & EmptyNumberSet, EmptyNumberSet>(true);
        })

        it("R0_Pos intersected with", () => {
            typeAssertEq<Q0_Pos & Q, Q0_Pos>(true);
            typeAssertEq<Q0_Pos & Q0, Q0_Pos>(true);
            typeAssertEq<Q0_Pos & Q_Pos, Q0_Pos>(true);
            typeAssertEq<Q0_Pos & Q_Neg, EmptyNumberSet>(true);
            typeAssertEq<Q0_Pos & Q0_Pos, Q0_Pos>(true);
            typeAssertEq<Q0_Pos & Q0_Neg, EmptyNumberSet>(true);
            typeAssertEq<Q0_Pos & Z, Z0_Pos>(true);
            typeAssertEq<Q0_Pos & Z0, Z0_Pos>(true);
            typeAssertEq<Q0_Pos & Z_Pos, Z0_Pos>(true);
            typeAssertEq<Q0_Pos & Z_Neg, EmptyNumberSet>(true);
            typeAssertEq<Q0_Pos & Z0_Pos, Z0_Pos>(true);
            typeAssertEq<Q0_Pos & Z0_Neg, EmptyNumberSet>(true);
            typeAssertEq<Q0_Pos & Zero, EmptyNumberSet>(true);
            typeAssertEq<Q0_Pos & EmptyNumberSet, EmptyNumberSet>(true);
        })

        it("R0_Neg intersected with", () => {
            typeAssertEq<Q0_Neg & Q, Q0_Neg>(true);
            typeAssertEq<Q0_Neg & Q0, Q0_Neg>(true);
            typeAssertEq<Q0_Neg & Q_Pos, EmptyNumberSet>(true);
            typeAssertEq<Q0_Neg & Q_Neg, Q0_Neg>(true);
            typeAssertEq<Q0_Neg & Q0_Pos, EmptyNumberSet>(true);
            typeAssertEq<Q0_Neg & Q0_Neg, Q0_Neg>(true);
            typeAssertEq<Q0_Neg & Z, Z0_Neg>(true);
            typeAssertEq<Q0_Neg & Z0, Z0_Neg>(true);
            typeAssertEq<Q0_Neg & Z_Pos, EmptyNumberSet>(true);
            typeAssertEq<Q0_Neg & Z_Neg, Z0_Neg>(true);
            typeAssertEq<Q0_Neg & Z0_Pos, EmptyNumberSet>(true);
            typeAssertEq<Q0_Neg & Z0_Neg, Z0_Neg>(true);
            typeAssertEq<Q0_Neg & Zero, EmptyNumberSet>(true);
            typeAssertEq<Q0_Neg & EmptyNumberSet, EmptyNumberSet>(true);
        })

        it("Z intersected with", () => {
            typeAssertEq<Z & Q, Z>(true);
            typeAssertEq<Z & Q0, Z0>(true);
            typeAssertEq<Z & Q_Pos, Z_Pos>(true);
            typeAssertEq<Z & Q_Neg, Z_Neg>(true);
            typeAssertEq<Z & Q0_Pos, Z0_Pos>(true);
            typeAssertEq<Z & Q0_Neg, Z0_Neg>(true);
            typeAssertEq<Z & Z, Z>(true);
            typeAssertEq<Z & Z0, Z0>(true);
            typeAssertEq<Z & Z_Pos, Z_Pos>(true);
            typeAssertEq<Z & Z_Neg, Z_Neg>(true);
            typeAssertEq<Z & Z0_Pos, Z0_Pos>(true);
            typeAssertEq<Z & Z0_Neg, Z0_Neg>(true);
            typeAssertEq<Z & Zero, Zero>(true);
            typeAssertEq<Z & EmptyNumberSet, EmptyNumberSet>(true);
        })

        it("Z0 intersected with", () => {
            typeAssertEq<Z0 & Q, Z0>(true);
            typeAssertEq<Z0 & Q0, Z0>(true);
            typeAssertEq<Z0 & Q_Pos, Z0_Pos>(true);
            typeAssertEq<Z0 & Q_Neg, Z0_Neg>(true);
            typeAssertEq<Z0 & Q0_Pos, Z0_Pos>(true);
            typeAssertEq<Z0 & Q0_Neg, Z0_Neg>(true);
            typeAssertEq<Z0 & Z, Z0>(true);
            typeAssertEq<Z0 & Z0, Z0>(true);
            typeAssertEq<Z0 & Z_Pos, Z0_Pos>(true);
            typeAssertEq<Z0 & Z_Neg, Z0_Neg>(true);
            typeAssertEq<Z0 & Z0_Pos, Z0_Pos>(true);
            typeAssertEq<Z0 & Z0_Neg, Z0_Neg>(true);
            typeAssertEq<Z0 & Zero, EmptyNumberSet>(true);
            typeAssertEq<Z0 & EmptyNumberSet, EmptyNumberSet>(true);
        })

        it("Z_Pos intersected with", () => {
            typeAssertEq<Z_Pos & Q, Z_Pos>(true);
            typeAssertEq<Z_Pos & Q0, Z0_Pos>(true);
            typeAssertEq<Z_Pos & Q_Pos, Z_Pos>(true);
            typeAssertEq<Z_Pos & Q_Neg, Zero>(true);
            typeAssertEq<Z_Pos & Q0_Pos, Z0_Pos>(true);
            typeAssertEq<Z_Pos & Q0_Neg, EmptyNumberSet>(true);
            typeAssertEq<Z_Pos & Z, Z_Pos>(true);
            typeAssertEq<Z_Pos & Z0, Z0_Pos>(true);
            typeAssertEq<Z_Pos & Z_Pos, Z_Pos>(true);
            typeAssertEq<Z_Pos & Z_Neg, Zero>(true);
            typeAssertEq<Z_Pos & Z0_Pos, Z0_Pos>(true);
            typeAssertEq<Z_Pos & Z0_Neg, EmptyNumberSet>(true);
            typeAssertEq<Z_Pos & Zero, Zero>(true);
            typeAssertEq<Z_Pos & EmptyNumberSet, EmptyNumberSet>(true);
        })

        it("Z_Neg intersected with", () => {
            typeAssertEq<Z_Neg & Q, Z_Neg>(true);
            typeAssertEq<Z_Neg & Q0, Z0_Neg>(true);
            typeAssertEq<Z_Neg & Q_Pos, Zero>(true);
            typeAssertEq<Z_Neg & Q_Neg, Z_Neg>(true);
            typeAssertEq<Z_Neg & Q0_Pos, EmptyNumberSet>(true);
            typeAssertEq<Z_Neg & Q0_Neg, Z0_Neg>(true);
            typeAssertEq<Z_Neg & Z, Z_Neg>(true);
            typeAssertEq<Z_Neg & Z0, Z0_Neg>(true);
            typeAssertEq<Z_Neg & Z_Pos, Zero>(true);
            typeAssertEq<Z_Neg & Z_Neg, Z_Neg>(true);
            typeAssertEq<Z_Neg & Z0_Pos, EmptyNumberSet>(true);
            typeAssertEq<Z_Neg & Z0_Neg, Z0_Neg>(true);
            typeAssertEq<Z_Neg & Zero, Zero>(true);
            typeAssertEq<Z_Neg & EmptyNumberSet, EmptyNumberSet>(true);
        })

        it("Z0_Pos intersected with", () => {
            typeAssertEq<Z0_Pos & Q, Z0_Pos>(true);
            typeAssertEq<Z0_Pos & Q0, Z0_Pos>(true);
            typeAssertEq<Z0_Pos & Q_Pos, Z0_Pos>(true);
            typeAssertEq<Z0_Pos & Q_Neg, EmptyNumberSet>(true);
            typeAssertEq<Z0_Pos & Q0_Pos, Z0_Pos>(true);
            typeAssertEq<Z0_Pos & Q0_Neg, EmptyNumberSet>(true);
            typeAssertEq<Z0_Pos & Z, Z0_Pos>(true);
            typeAssertEq<Z0_Pos & Z0, Z0_Pos>(true);
            typeAssertEq<Z0_Pos & Z_Pos, Z0_Pos>(true);
            typeAssertEq<Z0_Pos & Z_Neg, EmptyNumberSet>(true);
            typeAssertEq<Z0_Pos & Z0_Pos, Z0_Pos>(true);
            typeAssertEq<Z0_Pos & Z0_Neg, EmptyNumberSet>(true);
            typeAssertEq<Z0_Pos & Zero, EmptyNumberSet>(true);
            typeAssertEq<Z0_Pos & EmptyNumberSet, EmptyNumberSet>(true);
        })

        it("Z0_Neg intersected with", () => {
            typeAssertEq<Z0_Neg & Q, Z0_Neg>(true);
            typeAssertEq<Z0_Neg & Q0, Z0_Neg>(true);
            typeAssertEq<Z0_Neg & Q_Pos, EmptyNumberSet>(true);
            typeAssertEq<Z0_Neg & Q_Neg, Z0_Neg>(true);
            typeAssertEq<Z0_Neg & Q0_Pos, EmptyNumberSet>(true);
            typeAssertEq<Z0_Neg & Q0_Neg, Z0_Neg>(true);
            typeAssertEq<Z0_Neg & Z, Z0_Neg>(true);
            typeAssertEq<Z0_Neg & Z0, Z0_Neg>(true);
            typeAssertEq<Z0_Neg & Z_Pos, EmptyNumberSet>(true);
            typeAssertEq<Z0_Neg & Z_Neg, Z0_Neg>(true);
            typeAssertEq<Z0_Neg & Z0_Pos, EmptyNumberSet>(true);
            typeAssertEq<Z0_Neg & Z0_Neg, Z0_Neg>(true);
            typeAssertEq<Z0_Neg & Zero, EmptyNumberSet>(true);
            typeAssertEq<Z0_Neg & EmptyNumberSet, EmptyNumberSet>(true);
        })

        it("Zero intersected with", () => {
            typeAssertEq<Zero & Q, Zero>(true);
            typeAssertEq<Zero & Q0, EmptyNumberSet>(true);
            typeAssertEq<Zero & Q_Pos, Zero>(true);
            typeAssertEq<Zero & Q_Neg, Zero>(true);
            typeAssertEq<Zero & Q0_Pos, EmptyNumberSet>(true);
            typeAssertEq<Zero & Q0_Neg, EmptyNumberSet>(true);
            typeAssertEq<Zero & Z, Zero>(true);
            typeAssertEq<Zero & Z0, EmptyNumberSet>(true);
            typeAssertEq<Zero & Z_Pos, Zero>(true);
            typeAssertEq<Zero & Z_Neg, Zero>(true);
            typeAssertEq<Zero & Z0_Pos, EmptyNumberSet>(true);
            typeAssertEq<Zero & Z0_Neg, EmptyNumberSet>(true);
            typeAssertEq<Zero & Zero, Zero>(true);
            typeAssertEq<Zero & EmptyNumberSet, EmptyNumberSet>(true);
        })

        it("EmptyNumberSet intersected with", () => {
            typeAssertEq<EmptyNumberSet & Q, EmptyNumberSet>(true);
            typeAssertEq<EmptyNumberSet & Q0, EmptyNumberSet>(true);
            typeAssertEq<EmptyNumberSet & Q_Pos, EmptyNumberSet>(true);
            typeAssertEq<EmptyNumberSet & Q_Neg, EmptyNumberSet>(true);
            typeAssertEq<EmptyNumberSet & Q0_Pos, EmptyNumberSet>(true);
            typeAssertEq<EmptyNumberSet & Q0_Neg, EmptyNumberSet>(true);
            typeAssertEq<EmptyNumberSet & Z, EmptyNumberSet>(true);
            typeAssertEq<EmptyNumberSet & Z0, EmptyNumberSet>(true);
            typeAssertEq<EmptyNumberSet & Z_Pos, EmptyNumberSet>(true);
            typeAssertEq<EmptyNumberSet & Z_Neg, EmptyNumberSet>(true);
            typeAssertEq<EmptyNumberSet & Z0_Pos, EmptyNumberSet>(true);
            typeAssertEq<EmptyNumberSet & Z0_Neg, EmptyNumberSet>(true);
            typeAssertEq<EmptyNumberSet & Zero, EmptyNumberSet>(true);
            typeAssertEq<EmptyNumberSet & EmptyNumberSet, EmptyNumberSet>(true);
        })
    })

    describe("unions", () => {
        it("R united with", () => {
            typeAssertEq<Q | Q, Q>(true);
            typeAssertEq<Q | Q0, Q>(true);
            typeAssertEq<Q | Q_Pos, Q>(true);
            typeAssertEq<Q | Q_Neg, Q>(true);
            typeAssertEq<Q | Q0_Pos, Q>(true);
            typeAssertEq<Q | Q0_Neg, Q>(true);
            typeAssertEq<Q | Z, Q>(true);
            typeAssertEq<Q | Z0, Q>(true);
            typeAssertEq<Q | Z_Pos, Q>(true);
            typeAssertEq<Q | Z_Neg, Q>(true);
            typeAssertEq<Q | Z0_Pos, Q>(true);
            typeAssertEq<Q | Z0_Neg, Q>(true);
            typeAssertEq<Q | Zero, Q>(true);
            typeAssertEq<Q | EmptyNumberSet, Q>(true);
        })

        it("R0 united with", () => {
            typeAssertEq<Q0 | Q, Q>(true);
            typeAssertEq<Q0 | Q0, Q0>(true);
            typeAssertEq<Q0 | Q_Pos, Q>(true);
            typeAssertEq<Q0 | Q_Neg, Q>(true);
            typeAssertEq<Q0 | Q0_Pos, Q0>(true);
            typeAssertEq<Q0 | Q0_Neg, Q0>(true);
            typeAssertEq<Q0 | Z, Q>(true);
            typeAssertEq<Q0 | Z0, Q0>(true);
            typeAssertEq<Q0 | Z_Pos, Q>(true);
            typeAssertEq<Q0 | Z_Neg, Q>(true);
            typeAssertEq<Q0 | Z0_Pos, Q0>(true);
            typeAssertEq<Q0 | Z0_Neg, Q0>(true);
            typeAssertEq<Q0 | Zero, Q>(true);
            typeAssertEq<Q0 | EmptyNumberSet, Q0>(true);
        })

        it("R_Pos united with", () => {
            typeAssertEq<Q_Pos | Q, Q>(true);
            typeAssertEq<Q_Pos | Q0, Q>(true);
            typeAssertEq<Q_Pos | Q_Pos, Q_Pos>(true);
            typeAssertEq<Q_Pos | Q_Neg, Q>(true);
            typeAssertEq<Q_Pos | Q0_Pos, Q_Pos>(true);
            typeAssertEq<Q_Pos | Q0_Neg, Q>(true);
            // typeAssertEq<R_Pos | Z,  >(true); // has no explicit result
            // typeAssertEq<R_Pos | Z0,  >(true);// has no explicit result
            typeAssertEq<Q_Pos | Z_Pos, Q_Pos>(true);
            //typeAssertEq<R_Pos | Z_Neg, >(true); // has no explicit result
            typeAssertEq<Q_Pos | Z0_Pos, Q_Pos>(true);
            //typeAssertEq<R_Pos | Z0_Neg, >(true); // has no explicit result
            typeAssertEq<Q_Pos | Zero, Q_Pos>(true);
            typeAssertEq<Q_Pos | EmptyNumberSet, Q_Pos>(true);
        })

        it("R_Neg united with", () => {
            typeAssertEq<Q_Neg | Q, Q>(true);
            typeAssertEq<Q_Neg | Q0, Q>(true);
            typeAssertEq<Q_Neg | Q_Pos, Q>(true);
            typeAssertEq<Q_Neg | Q_Neg, Q_Neg>(true);
            typeAssertEq<Q_Neg | Q0_Pos, Q>(true);
            typeAssertEq<Q_Neg | Q0_Neg, Q_Neg>(true);
            // typeAssertEq<R_Neg | Z, >(true); // has no explicit result
            // typeAssertEq<R_Neg | Z0,>(true); // has no explicit result
            // typeAssertEq<R_Neg | Z_Pos,>(true); // has no explicit result
            typeAssertEq<Q_Neg | Z_Neg, Q_Neg>(true);
            // typeAssertEq<R_Neg | Z0_Pos,>(true); // has no explicit result
            typeAssertEq<Q_Neg | Z0_Neg, Q_Neg>(true);
            typeAssertEq<Q_Neg | Zero, Q_Neg>(true);
            typeAssertEq<Q_Neg | EmptyNumberSet, Q_Neg>(true);
        })


        it("R0_Pos united with", () => {
            typeAssertEq<Q0_Pos | Q, Q>(true);
            typeAssertEq<Q0_Pos | Q0, Q0>(true);
            typeAssertEq<Q0_Pos | Q_Pos, Q_Pos>(true);
            typeAssertEq<Q0_Pos | Q_Neg, Q>(true);
            typeAssertEq<Q0_Pos | Q0_Pos, Q0_Pos>(true);
            typeAssertEq<Q0_Pos | Q0_Neg, Q0>(true);
            // typeAssertEq<R0_Pos | Z,  >(true); // has no explicit result
            // typeAssertEq<R0_Pos | Z0,  >(true);// has no explicit result
            typeAssertEq<Q0_Pos | Z_Pos, Q_Pos>(true);
            //typeAssertEq<R0_Pos | Z_Neg, >(true); // has no explicit result
            typeAssertEq<Q0_Pos | Z0_Pos, Q0_Pos>(true);
            //typeAssertEq<R0_Pos | Z0_Neg, >(true); // has no explicit result
            typeAssertEq<Q0_Pos | Zero, Q_Pos>(true);
            typeAssertEq<Q0_Pos | EmptyNumberSet, Q0_Pos>(true);
        })

        it("R_Neg united with", () => {
            typeAssertEq<Q0_Neg | Q, Q>(true);
            typeAssertEq<Q0_Neg | Q0, Q0>(true);
            typeAssertEq<Q0_Neg | Q_Pos, Q>(true);
            typeAssertEq<Q0_Neg | Q_Neg, Q_Neg>(true);
            typeAssertEq<Q0_Neg | Q0_Pos, Q0>(true);
            typeAssertEq<Q0_Neg | Q0_Neg, Q0_Neg>(true);
            // typeAssertEq<R0_Neg | Z, >(true); // has no explicit result
            // typeAssertEq<R0_Neg | Z0,>(true); // has no explicit result
            // typeAssertEq<R0_Neg | Z_Pos,>(true); // has no explicit result
            typeAssertEq<Q0_Neg | Z_Neg, Q_Neg>(true);
            // typeAssertEq<R_Neg | Z0_Pos,>(true); // has no explicit result
            typeAssertEq<Q0_Neg | Z0_Neg, Q0_Neg>(true);
            typeAssertEq<Q0_Neg | Zero, Q_Neg>(true);
            typeAssertEq<Q0_Neg | EmptyNumberSet, Q0_Neg>(true);
        })

        it("Z united with", () => {
            typeAssertEq<Z | Q, Q>(true);
            typeAssertEq<Z | Q0, Q>(true);
            // typeAssertEq<Z | R_Pos, >(true); // has no explicit result
            // typeAssertEq<Z | R_Neg, >(true); // has no explicit result
            // typeAssertEq<Z | R0_Pos, >(true); // has no explicit result
            // typeAssertEq<Z | R0_Neg, >(true); // has no explicit result
            typeAssertEq<Z | Z, Z>(true);
            typeAssertEq<Z | Z0, Z>(true);
            typeAssertEq<Z | Z_Pos, Z>(true);
            typeAssertEq<Z | Z_Neg, Z>(true);
            typeAssertEq<Z | Z0_Pos, Z>(true);
            typeAssertEq<Z | Z0_Neg, Z>(true);
            typeAssertEq<Z | Zero, Z>(true);
            typeAssertEq<Z | EmptyNumberSet, Z>(true);
        })

        it("Z0 united with", () => {
            typeAssertEq<Z0 | Q, Q>(true);
            typeAssertEq<Z0 | Q0, Q0>(true);
            // typeAssertEq<Z0 | R_Pos, >(true); // has no explicit result
            // typeAssertEq<Z0 | R_Neg, >(true); // has no explicit result
            // typeAssertEq<Z0 | R0_Pos, >(true); // has no explicit result
            // typeAssertEq<Z0 | R0_Neg, >(true); // has no explicit result
            typeAssertEq<Z0 | Z, Z>(true);
            typeAssertEq<Z0 | Z0, Z0>(true);
            typeAssertEq<Z0 | Z_Pos, Z>(true);
            typeAssertEq<Z0 | Z_Neg, Z>(true);
            typeAssertEq<Z0 | Z0_Pos, Z0>(true);
            typeAssertEq<Z0 | Z0_Neg, Z0>(true);
            typeAssertEq<Z0 | Zero, Z>(true);
            typeAssertEq<Z0 | EmptyNumberSet, Z0>(true);
        })

        it("Z_Pos united with", () => {
            typeAssertEq<Z_Pos | Q, Q>(true);
            typeAssertEq<Z_Pos | Q0, Q>(true);
            typeAssertEq<Z_Pos | Q_Pos, Q_Pos>(true); // has no explicit result
            // typeAssertEq<Z_Pos | R_Neg, >(true); // has no explicit result
            typeAssertEq<Z_Pos | Q0_Pos, Q_Pos>(true); // has no explicit result
            // typeAssertEq<Z_Pos | R0_Neg, >(true); // has no explicit result
            typeAssertEq<Z_Pos | Z, Z>(true);
            typeAssertEq<Z_Pos | Z0, Z>(true);
            typeAssertEq<Z_Pos | Z_Pos, Z_Pos>(true);
            typeAssertEq<Z_Pos | Z_Neg, Z>(true);
            typeAssertEq<Z_Pos | Z0_Pos, Z_Pos>(true);
            typeAssertEq<Z_Pos | Z0_Neg, Z>(true);
            typeAssertEq<Z_Pos | Zero, Z_Pos>(true);
            typeAssertEq<Z_Pos | EmptyNumberSet, Z_Pos>(true);
        })

        it("Z_Neg united with", () => {
            typeAssertEq<Z_Neg | Q, Q>(true);
            typeAssertEq<Z_Neg | Q0, Q>(true);
            // typeAssertEq<Z_Neg | R_Pos, >(true); // has no explicit result
            typeAssertEq<Z_Neg | Q_Neg, Q_Neg>(true); // has no explicit result
            // typeAssertEq<Z_Neg | R0_Pos, >(true); // has no explicit result
            typeAssertEq<Z_Neg | Q0_Neg, Q_Neg>(true); // has no explicit result
            typeAssertEq<Z_Neg | Z, Z>(true);
            typeAssertEq<Z_Neg | Z0, Z>(true);
            typeAssertEq<Z_Neg | Z_Pos, Z>(true);
            typeAssertEq<Z_Neg | Z_Neg, Z_Neg>(true);
            typeAssertEq<Z_Neg | Z0_Pos, Z>(true);
            typeAssertEq<Z_Neg | Z0_Neg, Z_Neg>(true);
            typeAssertEq<Z_Neg | Zero, Z_Neg>(true);
            typeAssertEq<Z_Neg | EmptyNumberSet, Z_Neg>(true);
        })

        it("Z0_Pos united with", () => {
            typeAssertEq<Z0_Pos | Q, Q>(true);
            typeAssertEq<Z0_Pos | Q0, Q0>(true);
            typeAssertEq<Z0_Pos | Q_Pos, Q_Pos>(true); // has no explicit result
            // typeAssertEq<Z0_Pos | R_Neg, >(true); // has no explicit result
            typeAssertEq<Z0_Pos | Q0_Pos, Q0_Pos>(true); // has no explicit result
            // typeAssertEq<Z0_Pos | R0_Neg, >(true); // has no explicit result
            typeAssertEq<Z0_Pos | Z, Z>(true);
            typeAssertEq<Z0_Pos | Z0, Z0>(true);
            typeAssertEq<Z0_Pos | Z_Pos, Z_Pos>(true);
            typeAssertEq<Z0_Pos | Z_Neg, Z>(true);
            typeAssertEq<Z0_Pos | Z0_Pos, Z0_Pos>(true);
            typeAssertEq<Z0_Pos | Z0_Neg, Z0>(true);
            typeAssertEq<Z0_Pos | Zero, Z_Pos>(true);
            typeAssertEq<Z0_Pos | EmptyNumberSet, Z0_Pos>(true);
        })

        it("Z0_Neg united with", () => {
            typeAssertEq<Z0_Neg | Q, Q>(true);
            typeAssertEq<Z0_Neg | Q0, Q0>(true);
            // typeAssertEq<Z0_Neg | R_Pos, >(true); // has no explicit result
            typeAssertEq<Z0_Neg | Q_Neg, Q_Neg>(true); // has no explicit result
            // typeAssertEq<Z0_Neg | R0_Pos, >(true); // has no explicit result
            typeAssertEq<Z0_Neg | Q0_Neg, Q0_Neg>(true); // has no explicit result
            typeAssertEq<Z0_Neg | Z, Z>(true);
            typeAssertEq<Z0_Neg | Z0, Z0>(true);
            typeAssertEq<Z0_Neg | Z_Pos, Z>(true);
            typeAssertEq<Z0_Neg | Z_Neg, Z_Neg>(true);
            typeAssertEq<Z0_Neg | Z0_Pos, Z0>(true);
            typeAssertEq<Z0_Neg | Z0_Neg, Z0_Neg>(true);
            typeAssertEq<Z0_Neg | Zero, Z_Neg>(true);
            typeAssertEq<Z0_Neg | EmptyNumberSet, Z0_Neg>(true);
        })
    })

})