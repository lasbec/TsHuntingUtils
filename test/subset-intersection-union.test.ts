import { Zero, Z, Z0, Q, Q0, Z_Pos, Z0_Pos, Q_Pos, Q0_Pos, Z_Neg, Z0_Neg, Q_Neg, Q0_Neg, EmptyNumberSet } from "../src/numbers/true-number";
import { Eq, typeAssert, IsSubsetOf } from "../src/typeCalculus/type-testing";

describe("TrueNumber", () => {
    describe("Relations", () => {
        it("R is Subset of", () => {
            typeAssert<IsSubsetOf<Q, Q>>(true);
            typeAssert<IsSubsetOf<Q, Q0>>(false);
            typeAssert<IsSubsetOf<Q, Q_Pos>>(false)
            typeAssert<IsSubsetOf<Q, Q_Neg>>(false);
            typeAssert<IsSubsetOf<Q, Q0_Pos>>(false)
            typeAssert<IsSubsetOf<Q, Q0_Neg>>(false);
            typeAssert<IsSubsetOf<Q, Z>>(false);
            typeAssert<IsSubsetOf<Q, Z0>>(false);
            typeAssert<IsSubsetOf<Q, Z_Pos>>(false);
            typeAssert<IsSubsetOf<Q, Z_Neg>>(false);
            typeAssert<IsSubsetOf<Q, Z0_Pos>>(false);
            typeAssert<IsSubsetOf<Q, Z0_Neg>>(false);
            typeAssert<IsSubsetOf<Q, Zero>>(false);
            typeAssert<IsSubsetOf<Q, EmptyNumberSet>>(false);
        })

        it("R0 is Subset of", () => {
            typeAssert<IsSubsetOf<Q0, Q>>(true);
            typeAssert<IsSubsetOf<Q0, Q0>>(true);
            typeAssert<IsSubsetOf<Q0, Q_Pos>>(false)
            typeAssert<IsSubsetOf<Q0, Q_Neg>>(false);
            typeAssert<IsSubsetOf<Q0, Q0_Pos>>(false)
            typeAssert<IsSubsetOf<Q0, Q0_Neg>>(false);
            typeAssert<IsSubsetOf<Q0, Z>>(false);
            typeAssert<IsSubsetOf<Q0, Z0>>(false);
            typeAssert<IsSubsetOf<Q0, Z_Pos>>(false);
            typeAssert<IsSubsetOf<Q0, Z_Neg>>(false);
            typeAssert<IsSubsetOf<Q0, Z0_Pos>>(false);
            typeAssert<IsSubsetOf<Q0, Z0_Neg>>(false);
            typeAssert<IsSubsetOf<Q0, Zero>>(false);
            typeAssert<IsSubsetOf<Q0, EmptyNumberSet>>(false);
        })

        it("R_Pos is Subset of", () => {
            typeAssert<IsSubsetOf<Q_Pos, Q>>(true);
            typeAssert<IsSubsetOf<Q_Pos, Q0>>(false);
            typeAssert<IsSubsetOf<Q_Pos, Q_Pos>>(true);
            typeAssert<IsSubsetOf<Q_Pos, Q_Neg>>(false);
            typeAssert<IsSubsetOf<Q_Pos, Q0_Pos>>(false);
            typeAssert<IsSubsetOf<Q_Pos, Q0_Neg>>(false);
            typeAssert<IsSubsetOf<Q_Pos, Z>>(false);
            typeAssert<IsSubsetOf<Q_Pos, Z0>>(false);
            typeAssert<IsSubsetOf<Q_Pos, Z_Pos>>(false);
            typeAssert<IsSubsetOf<Q_Pos, Z_Neg>>(false);
            typeAssert<IsSubsetOf<Q_Pos, Z0_Pos>>(false);
            typeAssert<IsSubsetOf<Q_Pos, Z0_Neg>>(false);
            typeAssert<IsSubsetOf<Q_Pos, Zero>>(false);
            typeAssert<IsSubsetOf<Q_Pos, EmptyNumberSet>>(false);
        })
        it("R_Neg is Subset of", () => {
            typeAssert<IsSubsetOf<Q_Neg, Q>>(true);
            typeAssert<IsSubsetOf<Q_Neg, Q0>>(false);
            typeAssert<IsSubsetOf<Q_Neg, Q_Pos>>(false)
            typeAssert<IsSubsetOf<Q_Neg, Q_Neg>>(true);
            typeAssert<IsSubsetOf<Q_Neg, Q0_Pos>>(false)
            typeAssert<IsSubsetOf<Q_Neg, Q0_Neg>>(false);
            typeAssert<IsSubsetOf<Q_Neg, Z>>(false);
            typeAssert<IsSubsetOf<Q_Neg, Z0>>(false);
            typeAssert<IsSubsetOf<Q_Neg, Z_Pos>>(false);
            typeAssert<IsSubsetOf<Q_Neg, Z_Neg>>(false);
            typeAssert<IsSubsetOf<Q_Neg, Z0_Pos>>(false);
            typeAssert<IsSubsetOf<Q_Neg, Z0_Neg>>(false);
            typeAssert<IsSubsetOf<Q_Neg, Zero>>(false);
            typeAssert<IsSubsetOf<Q_Neg, EmptyNumberSet>>(false);
        })
        it("R0_Pos is Subset of", () => {
            typeAssert<IsSubsetOf<Q0_Pos, Q>>(true);
            typeAssert<IsSubsetOf<Q0_Pos, Q0>>(true);
            typeAssert<IsSubsetOf<Q0_Pos, Q_Pos>>(true)
            typeAssert<IsSubsetOf<Q0_Pos, Q_Neg>>(false);
            typeAssert<IsSubsetOf<Q0_Pos, Q0_Pos>>(true)
            typeAssert<IsSubsetOf<Q0_Pos, Q0_Neg>>(false);
            typeAssert<IsSubsetOf<Q0_Pos, Z>>(false);
            typeAssert<IsSubsetOf<Q0_Pos, Z0>>(false);
            typeAssert<IsSubsetOf<Q0_Pos, Z_Pos>>(false);
            typeAssert<IsSubsetOf<Q0_Pos, Z_Neg>>(false);
            typeAssert<IsSubsetOf<Q0_Pos, Z0_Pos>>(false);
            typeAssert<IsSubsetOf<Q0_Pos, Z0_Neg>>(false);
            typeAssert<IsSubsetOf<Q0_Pos, Zero>>(false);
            typeAssert<IsSubsetOf<Q0_Pos, EmptyNumberSet>>(false);
        })

        it("R0_Neg is Subset of", () => {
            typeAssert<IsSubsetOf<Q0_Neg, Q>>(true);
            typeAssert<IsSubsetOf<Q0_Neg, Q0>>(true);
            typeAssert<IsSubsetOf<Q0_Neg, Q_Pos>>(false)
            typeAssert<IsSubsetOf<Q0_Neg, Q_Neg>>(true);
            typeAssert<IsSubsetOf<Q0_Neg, Q0_Pos>>(false)
            typeAssert<IsSubsetOf<Q0_Neg, Q0_Neg>>(true);
            typeAssert<IsSubsetOf<Q0_Neg, Z>>(false);
            typeAssert<IsSubsetOf<Q0_Neg, Z0>>(false);
            typeAssert<IsSubsetOf<Q0_Neg, Z_Pos>>(false);
            typeAssert<IsSubsetOf<Q0_Neg, Z_Neg>>(false);
            typeAssert<IsSubsetOf<Q0_Neg, Z0_Pos>>(false);
            typeAssert<IsSubsetOf<Q0_Neg, Z0_Neg>>(false);
            typeAssert<IsSubsetOf<Q0_Neg, Zero>>(false);
            typeAssert<IsSubsetOf<Q0_Neg, EmptyNumberSet>>(false);
        })

        it("Z is Subset of", () => {
            typeAssert<IsSubsetOf<Z, Q>>(true);
            typeAssert<IsSubsetOf<Z, Q0>>(false);
            typeAssert<IsSubsetOf<Z, Q_Pos>>(false)
            typeAssert<IsSubsetOf<Z, Q_Neg>>(false);
            typeAssert<IsSubsetOf<Z, Q0_Pos>>(false)
            typeAssert<IsSubsetOf<Z, Q0_Neg>>(false);
            typeAssert<IsSubsetOf<Z, Z>>(true);
            typeAssert<IsSubsetOf<Z, Z0>>(false);
            typeAssert<IsSubsetOf<Z, Z_Pos>>(false);
            typeAssert<IsSubsetOf<Z, Z_Neg>>(false);
            typeAssert<IsSubsetOf<Z, Z0_Pos>>(false);
            typeAssert<IsSubsetOf<Z, Z0_Neg>>(false);
            typeAssert<IsSubsetOf<Z, Zero>>(false);
            typeAssert<IsSubsetOf<Z, EmptyNumberSet>>(false);
        })

        it("Z0 is Subset of", () => {
            typeAssert<IsSubsetOf<Z0, Q>>(true);
            typeAssert<IsSubsetOf<Z0, Q0>>(true);
            typeAssert<IsSubsetOf<Z0, Q_Pos>>(false)
            typeAssert<IsSubsetOf<Z0, Q_Neg>>(false);
            typeAssert<IsSubsetOf<Z0, Q0_Pos>>(false)
            typeAssert<IsSubsetOf<Z0, Q0_Neg>>(false);
            typeAssert<IsSubsetOf<Z0, Z>>(true);
            typeAssert<IsSubsetOf<Z0, Z0>>(true);
            typeAssert<IsSubsetOf<Z0, Z_Pos>>(false);
            typeAssert<IsSubsetOf<Z0, Z_Neg>>(false);
            typeAssert<IsSubsetOf<Z0, Z0_Pos>>(false);
            typeAssert<IsSubsetOf<Z0, Z0_Neg>>(false);
            typeAssert<IsSubsetOf<Z0, Zero>>(false);
            typeAssert<IsSubsetOf<Z0, EmptyNumberSet>>(false);
        })

        it("Z_Pos is Subset of", () => {
            typeAssert<IsSubsetOf<Z_Pos, Q>>(true);
            typeAssert<IsSubsetOf<Z_Pos, Q0>>(false);
            typeAssert<IsSubsetOf<Z_Pos, Q_Pos>>(true)
            typeAssert<IsSubsetOf<Z_Pos, Q_Neg>>(false);
            typeAssert<IsSubsetOf<Z_Pos, Q0_Pos>>(false)
            typeAssert<IsSubsetOf<Z_Pos, Q0_Neg>>(false);
            typeAssert<IsSubsetOf<Z_Pos, Z>>(true);
            typeAssert<IsSubsetOf<Z_Pos, Z0>>(false);
            typeAssert<IsSubsetOf<Z_Pos, Z_Pos>>(true);
            typeAssert<IsSubsetOf<Z_Pos, Z_Neg>>(false);
            typeAssert<IsSubsetOf<Z_Pos, Z0_Pos>>(false);
            typeAssert<IsSubsetOf<Z_Pos, Z0_Neg>>(false);
            typeAssert<IsSubsetOf<Z_Pos, Zero>>(false);
            typeAssert<IsSubsetOf<Z_Pos, EmptyNumberSet>>(false);
        })

        it("Z_Neg is Subset of", () => {
            typeAssert<IsSubsetOf<Z_Neg, Q>>(true);
            typeAssert<IsSubsetOf<Z_Neg, Q0>>(false);
            typeAssert<IsSubsetOf<Z_Neg, Q_Pos>>(false)
            typeAssert<IsSubsetOf<Z_Neg, Q_Neg>>(true);
            typeAssert<IsSubsetOf<Z_Neg, Q0_Pos>>(false)
            typeAssert<IsSubsetOf<Z_Neg, Q0_Neg>>(false);
            typeAssert<IsSubsetOf<Z_Neg, Z>>(true);
            typeAssert<IsSubsetOf<Z_Neg, Z0>>(false);
            typeAssert<IsSubsetOf<Z_Neg, Z_Pos>>(false);
            typeAssert<IsSubsetOf<Z_Neg, Z_Neg>>(true);
            typeAssert<IsSubsetOf<Z_Neg, Z0_Pos>>(false);
            typeAssert<IsSubsetOf<Z_Neg, Z0_Neg>>(false);
            typeAssert<IsSubsetOf<Z_Neg, Zero>>(false);
            typeAssert<IsSubsetOf<Z_Neg, EmptyNumberSet>>(false);
        })
        it("Z0_Pos is Subset of", () => {
            typeAssert<IsSubsetOf<Z0_Pos, Q>>(true);
            typeAssert<IsSubsetOf<Z0_Pos, Q0>>(true);
            typeAssert<IsSubsetOf<Z0_Pos, Q_Pos>>(true)
            typeAssert<IsSubsetOf<Z0_Pos, Q_Neg>>(false);
            typeAssert<IsSubsetOf<Z0_Pos, Q0_Pos>>(true)
            typeAssert<IsSubsetOf<Z0_Pos, Q0_Neg>>(false);
            typeAssert<IsSubsetOf<Z0_Pos, Z>>(true);
            typeAssert<IsSubsetOf<Z0_Pos, Z0>>(true);
            typeAssert<IsSubsetOf<Z0_Pos, Z_Pos>>(true);
            typeAssert<IsSubsetOf<Z0_Pos, Z_Neg>>(false);
            typeAssert<IsSubsetOf<Z0_Pos, Z0_Pos>>(true);
            typeAssert<IsSubsetOf<Z0_Pos, Z0_Neg>>(false);
            typeAssert<IsSubsetOf<Z0_Pos, Zero>>(false);
            typeAssert<IsSubsetOf<Z0_Pos, EmptyNumberSet>>(false);
        })

        it("Z0_Neg is Subset of", () => {
            typeAssert<IsSubsetOf<Z0_Neg, Q>>(true);
            typeAssert<IsSubsetOf<Z0_Neg, Q0>>(true);
            typeAssert<IsSubsetOf<Z0_Neg, Q_Pos>>(false)
            typeAssert<IsSubsetOf<Z0_Neg, Q_Neg>>(true);
            typeAssert<IsSubsetOf<Z0_Neg, Q0_Pos>>(false)
            typeAssert<IsSubsetOf<Z0_Neg, Q0_Neg>>(true);
            typeAssert<IsSubsetOf<Z0_Neg, Z>>(true);
            typeAssert<IsSubsetOf<Z0_Neg, Z0>>(true);
            typeAssert<IsSubsetOf<Z0_Neg, Z_Pos>>(false);
            typeAssert<IsSubsetOf<Z0_Neg, Z_Neg>>(true);
            typeAssert<IsSubsetOf<Z0_Neg, Z0_Pos>>(false);
            typeAssert<IsSubsetOf<Z0_Neg, Z0_Neg>>(true);
            typeAssert<IsSubsetOf<Z0_Neg, Zero>>(false);
            typeAssert<IsSubsetOf<Z0_Neg, EmptyNumberSet>>(false);
        })

        it("Zero is Subset of", () => {
            typeAssert<IsSubsetOf<Zero, Q>>(true);
            typeAssert<IsSubsetOf<Zero, Q0>>(false);
            typeAssert<IsSubsetOf<Zero, Q_Pos>>(true)
            typeAssert<IsSubsetOf<Zero, Q_Neg>>(true);
            typeAssert<IsSubsetOf<Zero, Q0_Pos>>(false)
            typeAssert<IsSubsetOf<Zero, Q0_Neg>>(false);
            typeAssert<IsSubsetOf<Zero, Z>>(true);
            typeAssert<IsSubsetOf<Zero, Z0>>(false);
            typeAssert<IsSubsetOf<Zero, Z_Pos>>(true);
            typeAssert<IsSubsetOf<Zero, Z_Neg>>(true);
            typeAssert<IsSubsetOf<Zero, Z0_Pos>>(false);
            typeAssert<IsSubsetOf<Zero, Z0_Neg>>(false);
            typeAssert<IsSubsetOf<Zero, Zero>>(true);
            typeAssert<IsSubsetOf<Zero, EmptyNumberSet>>(false);
        })

        it("EmptyNumberSet is Subset of", () => {
            typeAssert<IsSubsetOf<EmptyNumberSet, Q>>(true);
            typeAssert<IsSubsetOf<EmptyNumberSet, Q0>>(true);
            typeAssert<IsSubsetOf<EmptyNumberSet, Q_Pos>>(true);
            typeAssert<IsSubsetOf<EmptyNumberSet, Q_Neg>>(true);
            typeAssert<IsSubsetOf<EmptyNumberSet, Q0_Pos>>(true);
            typeAssert<IsSubsetOf<EmptyNumberSet, Q0_Neg>>(true);
            typeAssert<IsSubsetOf<EmptyNumberSet, Z>>(true);
            typeAssert<IsSubsetOf<EmptyNumberSet, Z0>>(true);
            typeAssert<IsSubsetOf<EmptyNumberSet, Z_Pos>>(true);
            typeAssert<IsSubsetOf<EmptyNumberSet, Z_Neg>>(true);
            typeAssert<IsSubsetOf<EmptyNumberSet, Z0_Pos>>(true);
            typeAssert<IsSubsetOf<EmptyNumberSet, Z0_Neg>>(true);
            typeAssert<IsSubsetOf<EmptyNumberSet, Zero>>(true);
            typeAssert<IsSubsetOf<EmptyNumberSet, EmptyNumberSet>>(true);
        })

    })

    describe("intersections", () => {
        it("R intersected with", () => {
            typeAssert<Eq<Q & Q, Q>>(true);
            typeAssert<Eq<Q & Q0, Q0>>(true);
            typeAssert<Eq<Q & Q_Pos, Q_Pos>>(true);
            typeAssert<Eq<Q & Q_Neg, Q_Neg>>(true);
            typeAssert<Eq<Q & Q0_Pos, Q0_Pos>>(true);
            typeAssert<Eq<Q & Q0_Neg, Q0_Neg>>(true);
            typeAssert<Eq<Q & Z, Z>>(true);
            typeAssert<Eq<Q & Z0, Z0>>(true);
            typeAssert<Eq<Q & Z_Pos, Z_Pos>>(true);
            typeAssert<Eq<Q & Z_Neg, Z_Neg>>(true);
            typeAssert<Eq<Q & Z0_Pos, Z0_Pos>>(true);
            typeAssert<Eq<Q & Z0_Neg, Z0_Neg>>(true);
            typeAssert<Eq<Q & Zero, Zero>>(true);
            typeAssert<Eq<Q & EmptyNumberSet, EmptyNumberSet>>(true);
        })
        it("R0 intersected with", () => {
            typeAssert<Eq<Q0 & Q, Q0>>(true);
            typeAssert<Eq<Q0 & Q0, Q0>>(true);
            typeAssert<Eq<Q0 & Q_Pos, Q0_Pos>>(true);
            typeAssert<Eq<Q0 & Q_Neg, Q0_Neg>>(true);
            typeAssert<Eq<Q0 & Q0_Pos, Q0_Pos>>(true);
            typeAssert<Eq<Q0 & Q0_Neg, Q0_Neg>>(true);
            typeAssert<Eq<Q0 & Z, Z0>>(true);
            typeAssert<Eq<Q0 & Z0, Z0>>(true);
            typeAssert<Eq<Q0 & Z_Pos, Z0_Pos>>(true);
            typeAssert<Eq<Q0 & Z_Neg, Z0_Neg>>(true);
            typeAssert<Eq<Q0 & Z0_Pos, Z0_Pos>>(true);
            typeAssert<Eq<Q0 & Z0_Neg, Z0_Neg>>(true);
            typeAssert<Eq<Q0 & Zero, EmptyNumberSet>>(true);
            typeAssert<Eq<Q0 & EmptyNumberSet, EmptyNumberSet>>(true);
        })

        it("R_Pos intersected with", () => {
            typeAssert<Eq<Q_Pos & Q, Q_Pos>>(true);
            typeAssert<Eq<Q_Pos & Q0, Q0_Pos>>(true);
            typeAssert<Eq<Q_Pos & Q_Pos, Q_Pos>>(true);
            typeAssert<Eq<Q_Pos & Q_Neg, Zero>>(true);
            typeAssert<Eq<Q_Pos & Q0_Pos, Q0_Pos>>(true);
            typeAssert<Eq<Q_Pos & Q0_Neg, EmptyNumberSet>>(true);
            typeAssert<Eq<Q_Pos & Z, Z_Pos>>(true);
            typeAssert<Eq<Q_Pos & Z0, Z0_Pos>>(true);
            typeAssert<Eq<Q_Pos & Z_Pos, Z_Pos>>(true);
            typeAssert<Eq<Q_Pos & Z_Neg, Zero>>(true);
            typeAssert<Eq<Q_Pos & Z0_Pos, Z0_Pos>>(true);
            typeAssert<Eq<Q_Pos & Z0_Neg, EmptyNumberSet>>(true);
            typeAssert<Eq<Q_Pos & Zero, Zero>>(true);
            typeAssert<Eq<Q_Pos & EmptyNumberSet, EmptyNumberSet>>(true);
        })

        it("R_Neg intersected with", () => {
            typeAssert<Eq<Q_Neg & Q, Q_Neg>>(true);
            typeAssert<Eq<Q_Neg & Q0, Q0_Neg>>(true);
            typeAssert<Eq<Q_Neg & Q_Pos, Zero>>(true);
            typeAssert<Eq<Q_Neg & Q_Neg, Q_Neg>>(true);
            typeAssert<Eq<Q_Neg & Q0_Pos, EmptyNumberSet>>(true);
            typeAssert<Eq<Q_Neg & Q0_Neg, Q0_Neg>>(true);
            typeAssert<Eq<Q_Neg & Z, Z_Neg>>(true);
            typeAssert<Eq<Q_Neg & Z0, Z0_Neg>>(true);
            typeAssert<Eq<Q_Neg & Z_Pos, Zero>>(true);
            typeAssert<Eq<Q_Neg & Z_Neg, Z_Neg>>(true);
            typeAssert<Eq<Q_Neg & Z0_Pos, EmptyNumberSet>>(true);
            typeAssert<Eq<Q_Neg & Z0_Neg, Z0_Neg>>(true);
            typeAssert<Eq<Q_Neg & Zero, Zero>>(true);
            typeAssert<Eq<Q_Neg & EmptyNumberSet, EmptyNumberSet>>(true);
        })

        it("R0_Pos intersected with", () => {
            typeAssert<Eq<Q0_Pos & Q, Q0_Pos>>(true);
            typeAssert<Eq<Q0_Pos & Q0, Q0_Pos>>(true);
            typeAssert<Eq<Q0_Pos & Q_Pos, Q0_Pos>>(true);
            typeAssert<Eq<Q0_Pos & Q_Neg, EmptyNumberSet>>(true);
            typeAssert<Eq<Q0_Pos & Q0_Pos, Q0_Pos>>(true);
            typeAssert<Eq<Q0_Pos & Q0_Neg, EmptyNumberSet>>(true);
            typeAssert<Eq<Q0_Pos & Z, Z0_Pos>>(true);
            typeAssert<Eq<Q0_Pos & Z0, Z0_Pos>>(true);
            typeAssert<Eq<Q0_Pos & Z_Pos, Z0_Pos>>(true);
            typeAssert<Eq<Q0_Pos & Z_Neg, EmptyNumberSet>>(true);
            typeAssert<Eq<Q0_Pos & Z0_Pos, Z0_Pos>>(true);
            typeAssert<Eq<Q0_Pos & Z0_Neg, EmptyNumberSet>>(true);
            typeAssert<Eq<Q0_Pos & Zero, EmptyNumberSet>>(true);
            typeAssert<Eq<Q0_Pos & EmptyNumberSet, EmptyNumberSet>>(true);
        })

        it("R0_Neg intersected with", () => {
            typeAssert<Eq<Q0_Neg & Q, Q0_Neg>>(true);
            typeAssert<Eq<Q0_Neg & Q0, Q0_Neg>>(true);
            typeAssert<Eq<Q0_Neg & Q_Pos, EmptyNumberSet>>(true);
            typeAssert<Eq<Q0_Neg & Q_Neg, Q0_Neg>>(true);
            typeAssert<Eq<Q0_Neg & Q0_Pos, EmptyNumberSet>>(true);
            typeAssert<Eq<Q0_Neg & Q0_Neg, Q0_Neg>>(true);
            typeAssert<Eq<Q0_Neg & Z, Z0_Neg>>(true);
            typeAssert<Eq<Q0_Neg & Z0, Z0_Neg>>(true);
            typeAssert<Eq<Q0_Neg & Z_Pos, EmptyNumberSet>>(true);
            typeAssert<Eq<Q0_Neg & Z_Neg, Z0_Neg>>(true);
            typeAssert<Eq<Q0_Neg & Z0_Pos, EmptyNumberSet>>(true);
            typeAssert<Eq<Q0_Neg & Z0_Neg, Z0_Neg>>(true);
            typeAssert<Eq<Q0_Neg & Zero, EmptyNumberSet>>(true);
            typeAssert<Eq<Q0_Neg & EmptyNumberSet, EmptyNumberSet>>(true);
        })

        it("Z intersected with", () => {
            typeAssert<Eq<Z & Q, Z>>(true);
            typeAssert<Eq<Z & Q0, Z0>>(true);
            typeAssert<Eq<Z & Q_Pos, Z_Pos>>(true);
            typeAssert<Eq<Z & Q_Neg, Z_Neg>>(true);
            typeAssert<Eq<Z & Q0_Pos, Z0_Pos>>(true);
            typeAssert<Eq<Z & Q0_Neg, Z0_Neg>>(true);
            typeAssert<Eq<Z & Z, Z>>(true);
            typeAssert<Eq<Z & Z0, Z0>>(true);
            typeAssert<Eq<Z & Z_Pos, Z_Pos>>(true);
            typeAssert<Eq<Z & Z_Neg, Z_Neg>>(true);
            typeAssert<Eq<Z & Z0_Pos, Z0_Pos>>(true);
            typeAssert<Eq<Z & Z0_Neg, Z0_Neg>>(true);
            typeAssert<Eq<Z & Zero, Zero>>(true);
            typeAssert<Eq<Z & EmptyNumberSet, EmptyNumberSet>>(true);
        })

        it("Z0 intersected with", () => {
            typeAssert<Eq<Z0 & Q, Z0>>(true);
            typeAssert<Eq<Z0 & Q0, Z0>>(true);
            typeAssert<Eq<Z0 & Q_Pos, Z0_Pos>>(true);
            typeAssert<Eq<Z0 & Q_Neg, Z0_Neg>>(true);
            typeAssert<Eq<Z0 & Q0_Pos, Z0_Pos>>(true);
            typeAssert<Eq<Z0 & Q0_Neg, Z0_Neg>>(true);
            typeAssert<Eq<Z0 & Z, Z0>>(true);
            typeAssert<Eq<Z0 & Z0, Z0>>(true);
            typeAssert<Eq<Z0 & Z_Pos, Z0_Pos>>(true);
            typeAssert<Eq<Z0 & Z_Neg, Z0_Neg>>(true);
            typeAssert<Eq<Z0 & Z0_Pos, Z0_Pos>>(true);
            typeAssert<Eq<Z0 & Z0_Neg, Z0_Neg>>(true);
            typeAssert<Eq<Z0 & Zero, EmptyNumberSet>>(true);
            typeAssert<Eq<Z0 & EmptyNumberSet, EmptyNumberSet>>(true);
        })

        it("Z_Pos intersected with", () => {
            typeAssert<Eq<Z_Pos & Q, Z_Pos>>(true);
            typeAssert<Eq<Z_Pos & Q0, Z0_Pos>>(true);
            typeAssert<Eq<Z_Pos & Q_Pos, Z_Pos>>(true);
            typeAssert<Eq<Z_Pos & Q_Neg, Zero>>(true);
            typeAssert<Eq<Z_Pos & Q0_Pos, Z0_Pos>>(true);
            typeAssert<Eq<Z_Pos & Q0_Neg, EmptyNumberSet>>(true);
            typeAssert<Eq<Z_Pos & Z, Z_Pos>>(true);
            typeAssert<Eq<Z_Pos & Z0, Z0_Pos>>(true);
            typeAssert<Eq<Z_Pos & Z_Pos, Z_Pos>>(true);
            typeAssert<Eq<Z_Pos & Z_Neg, Zero>>(true);
            typeAssert<Eq<Z_Pos & Z0_Pos, Z0_Pos>>(true);
            typeAssert<Eq<Z_Pos & Z0_Neg, EmptyNumberSet>>(true);
            typeAssert<Eq<Z_Pos & Zero, Zero>>(true);
            typeAssert<Eq<Z_Pos & EmptyNumberSet, EmptyNumberSet>>(true);
        })

        it("Z_Neg intersected with", () => {
            typeAssert<Eq<Z_Neg & Q, Z_Neg>>(true);
            typeAssert<Eq<Z_Neg & Q0, Z0_Neg>>(true);
            typeAssert<Eq<Z_Neg & Q_Pos, Zero>>(true);
            typeAssert<Eq<Z_Neg & Q_Neg, Z_Neg>>(true);
            typeAssert<Eq<Z_Neg & Q0_Pos, EmptyNumberSet>>(true);
            typeAssert<Eq<Z_Neg & Q0_Neg, Z0_Neg>>(true);
            typeAssert<Eq<Z_Neg & Z, Z_Neg>>(true);
            typeAssert<Eq<Z_Neg & Z0, Z0_Neg>>(true);
            typeAssert<Eq<Z_Neg & Z_Pos, Zero>>(true);
            typeAssert<Eq<Z_Neg & Z_Neg, Z_Neg>>(true);
            typeAssert<Eq<Z_Neg & Z0_Pos, EmptyNumberSet>>(true);
            typeAssert<Eq<Z_Neg & Z0_Neg, Z0_Neg>>(true);
            typeAssert<Eq<Z_Neg & Zero, Zero>>(true);
            typeAssert<Eq<Z_Neg & EmptyNumberSet, EmptyNumberSet>>(true);
        })

        it("Z0_Pos intersected with", () => {
            typeAssert<Eq<Z0_Pos & Q, Z0_Pos>>(true);
            typeAssert<Eq<Z0_Pos & Q0, Z0_Pos>>(true);
            typeAssert<Eq<Z0_Pos & Q_Pos, Z0_Pos>>(true);
            typeAssert<Eq<Z0_Pos & Q_Neg, EmptyNumberSet>>(true);
            typeAssert<Eq<Z0_Pos & Q0_Pos, Z0_Pos>>(true);
            typeAssert<Eq<Z0_Pos & Q0_Neg, EmptyNumberSet>>(true);
            typeAssert<Eq<Z0_Pos & Z, Z0_Pos>>(true);
            typeAssert<Eq<Z0_Pos & Z0, Z0_Pos>>(true);
            typeAssert<Eq<Z0_Pos & Z_Pos, Z0_Pos>>(true);
            typeAssert<Eq<Z0_Pos & Z_Neg, EmptyNumberSet>>(true);
            typeAssert<Eq<Z0_Pos & Z0_Pos, Z0_Pos>>(true);
            typeAssert<Eq<Z0_Pos & Z0_Neg, EmptyNumberSet>>(true);
            typeAssert<Eq<Z0_Pos & Zero, EmptyNumberSet>>(true);
            typeAssert<Eq<Z0_Pos & EmptyNumberSet, EmptyNumberSet>>(true);
        })

        it("Z0_Neg intersected with", () => {
            typeAssert<Eq<Z0_Neg & Q, Z0_Neg>>(true);
            typeAssert<Eq<Z0_Neg & Q0, Z0_Neg>>(true);
            typeAssert<Eq<Z0_Neg & Q_Pos, EmptyNumberSet>>(true);
            typeAssert<Eq<Z0_Neg & Q_Neg, Z0_Neg>>(true);
            typeAssert<Eq<Z0_Neg & Q0_Pos, EmptyNumberSet>>(true);
            typeAssert<Eq<Z0_Neg & Q0_Neg, Z0_Neg>>(true);
            typeAssert<Eq<Z0_Neg & Z, Z0_Neg>>(true);
            typeAssert<Eq<Z0_Neg & Z0, Z0_Neg>>(true);
            typeAssert<Eq<Z0_Neg & Z_Pos, EmptyNumberSet>>(true);
            typeAssert<Eq<Z0_Neg & Z_Neg, Z0_Neg>>(true);
            typeAssert<Eq<Z0_Neg & Z0_Pos, EmptyNumberSet>>(true);
            typeAssert<Eq<Z0_Neg & Z0_Neg, Z0_Neg>>(true);
            typeAssert<Eq<Z0_Neg & Zero, EmptyNumberSet>>(true);
            typeAssert<Eq<Z0_Neg & EmptyNumberSet, EmptyNumberSet>>(true);
        })

        it("Zero intersected with", () => {
            typeAssert<Eq<Zero & Q, Zero>>(true);
            typeAssert<Eq<Zero & Q0, EmptyNumberSet>>(true);
            typeAssert<Eq<Zero & Q_Pos, Zero>>(true);
            typeAssert<Eq<Zero & Q_Neg, Zero>>(true);
            typeAssert<Eq<Zero & Q0_Pos, EmptyNumberSet>>(true);
            typeAssert<Eq<Zero & Q0_Neg, EmptyNumberSet>>(true);
            typeAssert<Eq<Zero & Z, Zero>>(true);
            typeAssert<Eq<Zero & Z0, EmptyNumberSet>>(true);
            typeAssert<Eq<Zero & Z_Pos, Zero>>(true);
            typeAssert<Eq<Zero & Z_Neg, Zero>>(true);
            typeAssert<Eq<Zero & Z0_Pos, EmptyNumberSet>>(true);
            typeAssert<Eq<Zero & Z0_Neg, EmptyNumberSet>>(true);
            typeAssert<Eq<Zero & Zero, Zero>>(true);
            typeAssert<Eq<Zero & EmptyNumberSet, EmptyNumberSet>>(true);
        })

        it("EmptyNumberSet intersected with", () => {
            typeAssert<Eq<EmptyNumberSet & Q, EmptyNumberSet>>(true);
            typeAssert<Eq<EmptyNumberSet & Q0, EmptyNumberSet>>(true);
            typeAssert<Eq<EmptyNumberSet & Q_Pos, EmptyNumberSet>>(true);
            typeAssert<Eq<EmptyNumberSet & Q_Neg, EmptyNumberSet>>(true);
            typeAssert<Eq<EmptyNumberSet & Q0_Pos, EmptyNumberSet>>(true);
            typeAssert<Eq<EmptyNumberSet & Q0_Neg, EmptyNumberSet>>(true);
            typeAssert<Eq<EmptyNumberSet & Z, EmptyNumberSet>>(true);
            typeAssert<Eq<EmptyNumberSet & Z0, EmptyNumberSet>>(true);
            typeAssert<Eq<EmptyNumberSet & Z_Pos, EmptyNumberSet>>(true);
            typeAssert<Eq<EmptyNumberSet & Z_Neg, EmptyNumberSet>>(true);
            typeAssert<Eq<EmptyNumberSet & Z0_Pos, EmptyNumberSet>>(true);
            typeAssert<Eq<EmptyNumberSet & Z0_Neg, EmptyNumberSet>>(true);
            typeAssert<Eq<EmptyNumberSet & Zero, EmptyNumberSet>>(true);
            typeAssert<Eq<EmptyNumberSet & EmptyNumberSet, EmptyNumberSet>>(true);
        })
    })

    describe("unions", () => {
        it("R united with", () => {
            typeAssert<Eq<Q | Q, Q>>(true);
            typeAssert<Eq<Q | Q0, Q>>(true);
            typeAssert<Eq<Q | Q_Pos, Q>>(true);
            typeAssert<Eq<Q | Q_Neg, Q>>(true);
            typeAssert<Eq<Q | Q0_Pos, Q>>(true);
            typeAssert<Eq<Q | Q0_Neg, Q>>(true);
            typeAssert<Eq<Q | Z, Q>>(true);
            typeAssert<Eq<Q | Z0, Q>>(true);
            typeAssert<Eq<Q | Z_Pos, Q>>(true);
            typeAssert<Eq<Q | Z_Neg, Q>>(true);
            typeAssert<Eq<Q | Z0_Pos, Q>>(true);
            typeAssert<Eq<Q | Z0_Neg, Q>>(true);
            typeAssert<Eq<Q | Zero, Q>>(true);
            typeAssert<Eq<Q | EmptyNumberSet, Q>>(true);
        })

        it("R0 united with", () => {
            typeAssert<Eq<Q0 | Q, Q>>(true);
            typeAssert<Eq<Q0 | Q0, Q0>>(true);
            typeAssert<Eq<Q0 | Q_Pos, Q>>(true);
            typeAssert<Eq<Q0 | Q_Neg, Q>>(true);
            typeAssert<Eq<Q0 | Q0_Pos, Q0>>(true);
            typeAssert<Eq<Q0 | Q0_Neg, Q0>>(true);
            typeAssert<Eq<Q0 | Z, Q>>(true);
            typeAssert<Eq<Q0 | Z0, Q0>>(true);
            typeAssert<Eq<Q0 | Z_Pos, Q>>(true);
            typeAssert<Eq<Q0 | Z_Neg, Q>>(true);
            typeAssert<Eq<Q0 | Z0_Pos, Q0>>(true);
            typeAssert<Eq<Q0 | Z0_Neg, Q0>>(true);
            typeAssert<Eq<Q0 | Zero, Q>>(true);
            typeAssert<Eq<Q0 | EmptyNumberSet, Q0>>(true);
        })

        it("R_Pos united with", () => {
            typeAssert<Eq<Q_Pos | Q, Q>>(true);
            typeAssert<Eq<Q_Pos | Q0, Q>>(true);
            typeAssert<Eq<Q_Pos | Q_Pos, Q_Pos>>(true);
            typeAssert<Eq<Q_Pos | Q_Neg, Q>>(true);
            typeAssert<Eq<Q_Pos | Q0_Pos, Q_Pos>>(true);
            typeAssert<Eq<Q_Pos | Q0_Neg, Q>>(true);
            // typeAssert<Eq<R_Pos | Z,  >>(true); // has no explicit result
            // typeAssert<Eq<R_Pos | Z0,  >>(true);// has no explicit result
            typeAssert<Eq<Q_Pos | Z_Pos, Q_Pos>>(true);
            //typeAssert<Eq<R_Pos | Z_Neg, >>(true); // has no explicit result
            typeAssert<Eq<Q_Pos | Z0_Pos, Q_Pos>>(true);
            //typeAssert<Eq<R_Pos | Z0_Neg, >>(true); // has no explicit result
            typeAssert<Eq<Q_Pos | Zero, Q_Pos>>(true);
            typeAssert<Eq<Q_Pos | EmptyNumberSet, Q_Pos>>(true);
        })

        it("R_Neg united with", () => {
            typeAssert<Eq<Q_Neg | Q, Q>>(true);
            typeAssert<Eq<Q_Neg | Q0, Q>>(true);
            typeAssert<Eq<Q_Neg | Q_Pos, Q>>(true);
            typeAssert<Eq<Q_Neg | Q_Neg, Q_Neg>>(true);
            typeAssert<Eq<Q_Neg | Q0_Pos, Q>>(true);
            typeAssert<Eq<Q_Neg | Q0_Neg, Q_Neg>>(true);
            // typeAssert<Eq<R_Neg | Z, >>(true); // has no explicit result
            // typeAssert<Eq<R_Neg | Z0,>>(true); // has no explicit result
            // typeAssert<Eq<R_Neg | Z_Pos,>>(true); // has no explicit result
            typeAssert<Eq<Q_Neg | Z_Neg, Q_Neg>>(true);
            // typeAssert<Eq<R_Neg | Z0_Pos,>>(true); // has no explicit result
            typeAssert<Eq<Q_Neg | Z0_Neg, Q_Neg>>(true);
            typeAssert<Eq<Q_Neg | Zero, Q_Neg>>(true);
            typeAssert<Eq<Q_Neg | EmptyNumberSet, Q_Neg>>(true);
        })


        it("R0_Pos united with", () => {
            typeAssert<Eq<Q0_Pos | Q, Q>>(true);
            typeAssert<Eq<Q0_Pos | Q0, Q0>>(true);
            typeAssert<Eq<Q0_Pos | Q_Pos, Q_Pos>>(true);
            typeAssert<Eq<Q0_Pos | Q_Neg, Q>>(true);
            typeAssert<Eq<Q0_Pos | Q0_Pos, Q0_Pos>>(true);
            typeAssert<Eq<Q0_Pos | Q0_Neg, Q0>>(true);
            // typeAssert<Eq<R0_Pos | Z,  >>(true); // has no explicit result
            // typeAssert<Eq<R0_Pos | Z0,  >>(true);// has no explicit result
            typeAssert<Eq<Q0_Pos | Z_Pos, Q_Pos>>(true);
            //typeAssert<Eq<R0_Pos | Z_Neg, >>(true); // has no explicit result
            typeAssert<Eq<Q0_Pos | Z0_Pos, Q0_Pos>>(true);
            //typeAssert<Eq<R0_Pos | Z0_Neg, >>(true); // has no explicit result
            typeAssert<Eq<Q0_Pos | Zero, Q_Pos>>(true);
            typeAssert<Eq<Q0_Pos | EmptyNumberSet, Q0_Pos>>(true);
        })

        it("R_Neg united with", () => {
            typeAssert<Eq<Q0_Neg | Q, Q>>(true);
            typeAssert<Eq<Q0_Neg | Q0, Q0>>(true);
            typeAssert<Eq<Q0_Neg | Q_Pos, Q>>(true);
            typeAssert<Eq<Q0_Neg | Q_Neg, Q_Neg>>(true);
            typeAssert<Eq<Q0_Neg | Q0_Pos, Q0>>(true);
            typeAssert<Eq<Q0_Neg | Q0_Neg, Q0_Neg>>(true);
            // typeAssert<Eq<R0_Neg | Z, >>(true); // has no explicit result
            // typeAssert<Eq<R0_Neg | Z0,>>(true); // has no explicit result
            // typeAssert<Eq<R0_Neg | Z_Pos,>>(true); // has no explicit result
            typeAssert<Eq<Q0_Neg | Z_Neg, Q_Neg>>(true);
            // typeAssert<Eq<R_Neg | Z0_Pos,>>(true); // has no explicit result
            typeAssert<Eq<Q0_Neg | Z0_Neg, Q0_Neg>>(true);
            typeAssert<Eq<Q0_Neg | Zero, Q_Neg>>(true);
            typeAssert<Eq<Q0_Neg | EmptyNumberSet, Q0_Neg>>(true);
        })

        it("Z united with", () => {
            typeAssert<Eq<Z | Q, Q>>(true);
            typeAssert<Eq<Z | Q0, Q>>(true);
            // typeAssert<Eq<Z | R_Pos, >>(true); // has no explicit result
            // typeAssert<Eq<Z | R_Neg, >>(true); // has no explicit result
            // typeAssert<Eq<Z | R0_Pos, >>(true); // has no explicit result
            // typeAssert<Eq<Z | R0_Neg, >>(true); // has no explicit result
            typeAssert<Eq<Z | Z, Z>>(true);
            typeAssert<Eq<Z | Z0, Z>>(true);
            typeAssert<Eq<Z | Z_Pos, Z>>(true);
            typeAssert<Eq<Z | Z_Neg, Z>>(true);
            typeAssert<Eq<Z | Z0_Pos, Z>>(true);
            typeAssert<Eq<Z | Z0_Neg, Z>>(true);
            typeAssert<Eq<Z | Zero, Z>>(true);
            typeAssert<Eq<Z | EmptyNumberSet, Z>>(true);
        })

        it("Z0 united with", () => {
            typeAssert<Eq<Z0 | Q, Q>>(true);
            typeAssert<Eq<Z0 | Q0, Q0>>(true);
            // typeAssert<Eq<Z0 | R_Pos, >>(true); // has no explicit result
            // typeAssert<Eq<Z0 | R_Neg, >>(true); // has no explicit result
            // typeAssert<Eq<Z0 | R0_Pos, >>(true); // has no explicit result
            // typeAssert<Eq<Z0 | R0_Neg, >>(true); // has no explicit result
            typeAssert<Eq<Z0 | Z, Z>>(true);
            typeAssert<Eq<Z0 | Z0, Z0>>(true);
            typeAssert<Eq<Z0 | Z_Pos, Z>>(true);
            typeAssert<Eq<Z0 | Z_Neg, Z>>(true);
            typeAssert<Eq<Z0 | Z0_Pos, Z0>>(true);
            typeAssert<Eq<Z0 | Z0_Neg, Z0>>(true);
            typeAssert<Eq<Z0 | Zero, Z>>(true);
            typeAssert<Eq<Z0 | EmptyNumberSet, Z0>>(true);
        })

        it("Z_Pos united with", () => {
            typeAssert<Eq<Z_Pos | Q, Q>>(true);
            typeAssert<Eq<Z_Pos | Q0, Q>>(true);
            typeAssert<Eq<Z_Pos | Q_Pos, Q_Pos>>(true); // has no explicit result
            // typeAssert<Eq<Z_Pos | R_Neg, >>(true); // has no explicit result
            typeAssert<Eq<Z_Pos | Q0_Pos, Q_Pos>>(true); // has no explicit result
            // typeAssert<Eq<Z_Pos | R0_Neg, >>(true); // has no explicit result
            typeAssert<Eq<Z_Pos | Z, Z>>(true);
            typeAssert<Eq<Z_Pos | Z0, Z>>(true);
            typeAssert<Eq<Z_Pos | Z_Pos, Z_Pos>>(true);
            typeAssert<Eq<Z_Pos | Z_Neg, Z>>(true);
            typeAssert<Eq<Z_Pos | Z0_Pos, Z_Pos>>(true);
            typeAssert<Eq<Z_Pos | Z0_Neg, Z>>(true);
            typeAssert<Eq<Z_Pos | Zero, Z_Pos>>(true);
            typeAssert<Eq<Z_Pos | EmptyNumberSet, Z_Pos>>(true);
        })

        it("Z_Neg united with", () => {
            typeAssert<Eq<Z_Neg | Q, Q>>(true);
            typeAssert<Eq<Z_Neg | Q0, Q>>(true);
            // typeAssert<Eq<Z_Neg | R_Pos, >>(true); // has no explicit result
            typeAssert<Eq<Z_Neg | Q_Neg, Q_Neg>>(true); // has no explicit result
            // typeAssert<Eq<Z_Neg | R0_Pos, >>(true); // has no explicit result
            typeAssert<Eq<Z_Neg | Q0_Neg, Q_Neg>>(true); // has no explicit result
            typeAssert<Eq<Z_Neg | Z, Z>>(true);
            typeAssert<Eq<Z_Neg | Z0, Z>>(true);
            typeAssert<Eq<Z_Neg | Z_Pos, Z>>(true);
            typeAssert<Eq<Z_Neg | Z_Neg, Z_Neg>>(true);
            typeAssert<Eq<Z_Neg | Z0_Pos, Z>>(true);
            typeAssert<Eq<Z_Neg | Z0_Neg, Z_Neg>>(true);
            typeAssert<Eq<Z_Neg | Zero, Z_Neg>>(true);
            typeAssert<Eq<Z_Neg | EmptyNumberSet, Z_Neg>>(true);
        })

        it("Z0_Pos united with", () => {
            typeAssert<Eq<Z0_Pos | Q, Q>>(true);
            typeAssert<Eq<Z0_Pos | Q0, Q0>>(true);
            typeAssert<Eq<Z0_Pos | Q_Pos, Q_Pos>>(true); // has no explicit result
            // typeAssert<Eq<Z0_Pos | R_Neg, >>(true); // has no explicit result
            typeAssert<Eq<Z0_Pos | Q0_Pos, Q0_Pos>>(true); // has no explicit result
            // typeAssert<Eq<Z0_Pos | R0_Neg, >>(true); // has no explicit result
            typeAssert<Eq<Z0_Pos | Z, Z>>(true);
            typeAssert<Eq<Z0_Pos | Z0, Z0>>(true);
            typeAssert<Eq<Z0_Pos | Z_Pos, Z_Pos>>(true);
            typeAssert<Eq<Z0_Pos | Z_Neg, Z>>(true);
            typeAssert<Eq<Z0_Pos | Z0_Pos, Z0_Pos>>(true);
            typeAssert<Eq<Z0_Pos | Z0_Neg, Z0>>(true);
            typeAssert<Eq<Z0_Pos | Zero, Z_Pos>>(true);
            typeAssert<Eq<Z0_Pos | EmptyNumberSet, Z0_Pos>>(true);
        })

        it("Z0_Neg united with", () => {
            typeAssert<Eq<Z0_Neg | Q, Q>>(true);
            typeAssert<Eq<Z0_Neg | Q0, Q0>>(true);
            // typeAssert<Eq<Z0_Neg | R_Pos, >>(true); // has no explicit result
            typeAssert<Eq<Z0_Neg | Q_Neg, Q_Neg>>(true); // has no explicit result
            // typeAssert<Eq<Z0_Neg | R0_Pos, >>(true); // has no explicit result
            typeAssert<Eq<Z0_Neg | Q0_Neg, Q0_Neg>>(true); // has no explicit result
            typeAssert<Eq<Z0_Neg | Z, Z>>(true);
            typeAssert<Eq<Z0_Neg | Z0, Z0>>(true);
            typeAssert<Eq<Z0_Neg | Z_Pos, Z>>(true);
            typeAssert<Eq<Z0_Neg | Z_Neg, Z_Neg>>(true);
            typeAssert<Eq<Z0_Neg | Z0_Pos, Z0>>(true);
            typeAssert<Eq<Z0_Neg | Z0_Neg, Z0_Neg>>(true);
            typeAssert<Eq<Z0_Neg | Zero, Z_Neg>>(true);
            typeAssert<Eq<Z0_Neg | EmptyNumberSet, Z0_Neg>>(true);
        })
    })

})