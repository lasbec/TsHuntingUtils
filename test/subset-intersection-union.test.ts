import { Zero, Z, Z0, R, R0, Z_Pos, Z0_Pos, R_Pos, R0_Pos, Z_Neg, Z0_Neg, R_Neg, R0_Neg, EmptyNumberSet } from "../src/numbers/true-number";
import { Eq, typeAssert, IsSubsetOf } from "../src/typeCalculus/type-testing";

describe("TrueNumber", () => {
    describe("Relations", () => {
        it("R is Subset of", () => {
            typeAssert<IsSubsetOf<R, R>>(true);
            typeAssert<IsSubsetOf<R, R0>>(false);
            typeAssert<IsSubsetOf<R, R_Pos>>(false)
            typeAssert<IsSubsetOf<R, R_Neg>>(false);
            typeAssert<IsSubsetOf<R, R0_Pos>>(false)
            typeAssert<IsSubsetOf<R, R0_Neg>>(false);
            typeAssert<IsSubsetOf<R, Z>>(false);
            typeAssert<IsSubsetOf<R, Z0>>(false);
            typeAssert<IsSubsetOf<R, Z_Pos>>(false);
            typeAssert<IsSubsetOf<R, Z_Neg>>(false);
            typeAssert<IsSubsetOf<R, Z0_Pos>>(false);
            typeAssert<IsSubsetOf<R, Z0_Neg>>(false);
            typeAssert<IsSubsetOf<R, Zero>>(false);
            typeAssert<IsSubsetOf<R, EmptyNumberSet>>(false);
        })

        it("R0 is Subset of", () => {
            typeAssert<IsSubsetOf<R0, R>>(true);
            typeAssert<IsSubsetOf<R0, R0>>(true);
            typeAssert<IsSubsetOf<R0, R_Pos>>(false)
            typeAssert<IsSubsetOf<R0, R_Neg>>(false);
            typeAssert<IsSubsetOf<R0, R0_Pos>>(false)
            typeAssert<IsSubsetOf<R0, R0_Neg>>(false);
            typeAssert<IsSubsetOf<R0, Z>>(false);
            typeAssert<IsSubsetOf<R0, Z0>>(false);
            typeAssert<IsSubsetOf<R0, Z_Pos>>(false);
            typeAssert<IsSubsetOf<R0, Z_Neg>>(false);
            typeAssert<IsSubsetOf<R0, Z0_Pos>>(false);
            typeAssert<IsSubsetOf<R0, Z0_Neg>>(false);
            typeAssert<IsSubsetOf<R0, Zero>>(false);
            typeAssert<IsSubsetOf<R0, EmptyNumberSet>>(false);
        })

        it("R_Pos is Subset of", () => {
            typeAssert<IsSubsetOf<R_Pos, R>>(true);
            typeAssert<IsSubsetOf<R_Pos, R0>>(false);
            typeAssert<IsSubsetOf<R_Pos, R_Pos>>(true);
            typeAssert<IsSubsetOf<R_Pos, R_Neg>>(false);
            typeAssert<IsSubsetOf<R_Pos, R0_Pos>>(false);
            typeAssert<IsSubsetOf<R_Pos, R0_Neg>>(false);
            typeAssert<IsSubsetOf<R_Pos, Z>>(false);
            typeAssert<IsSubsetOf<R_Pos, Z0>>(false);
            typeAssert<IsSubsetOf<R_Pos, Z_Pos>>(false);
            typeAssert<IsSubsetOf<R_Pos, Z_Neg>>(false);
            typeAssert<IsSubsetOf<R_Pos, Z0_Pos>>(false);
            typeAssert<IsSubsetOf<R_Pos, Z0_Neg>>(false);
            typeAssert<IsSubsetOf<R_Pos, Zero>>(false);
            typeAssert<IsSubsetOf<R_Pos, EmptyNumberSet>>(false);
        })
        it("R_Neg is Subset of", () => {
            typeAssert<IsSubsetOf<R_Neg, R>>(true);
            typeAssert<IsSubsetOf<R_Neg, R0>>(false);
            typeAssert<IsSubsetOf<R_Neg, R_Pos>>(false)
            typeAssert<IsSubsetOf<R_Neg, R_Neg>>(true);
            typeAssert<IsSubsetOf<R_Neg, R0_Pos>>(false)
            typeAssert<IsSubsetOf<R_Neg, R0_Neg>>(false);
            typeAssert<IsSubsetOf<R_Neg, Z>>(false);
            typeAssert<IsSubsetOf<R_Neg, Z0>>(false);
            typeAssert<IsSubsetOf<R_Neg, Z_Pos>>(false);
            typeAssert<IsSubsetOf<R_Neg, Z_Neg>>(false);
            typeAssert<IsSubsetOf<R_Neg, Z0_Pos>>(false);
            typeAssert<IsSubsetOf<R_Neg, Z0_Neg>>(false);
            typeAssert<IsSubsetOf<R_Neg, Zero>>(false);
            typeAssert<IsSubsetOf<R_Neg, EmptyNumberSet>>(false);
        })
        it("R0_Pos is Subset of", () => {
            typeAssert<IsSubsetOf<R0_Pos, R>>(true);
            typeAssert<IsSubsetOf<R0_Pos, R0>>(true);
            typeAssert<IsSubsetOf<R0_Pos, R_Pos>>(true)
            typeAssert<IsSubsetOf<R0_Pos, R_Neg>>(false);
            typeAssert<IsSubsetOf<R0_Pos, R0_Pos>>(true)
            typeAssert<IsSubsetOf<R0_Pos, R0_Neg>>(false);
            typeAssert<IsSubsetOf<R0_Pos, Z>>(false);
            typeAssert<IsSubsetOf<R0_Pos, Z0>>(false);
            typeAssert<IsSubsetOf<R0_Pos, Z_Pos>>(false);
            typeAssert<IsSubsetOf<R0_Pos, Z_Neg>>(false);
            typeAssert<IsSubsetOf<R0_Pos, Z0_Pos>>(false);
            typeAssert<IsSubsetOf<R0_Pos, Z0_Neg>>(false);
            typeAssert<IsSubsetOf<R0_Pos, Zero>>(false);
            typeAssert<IsSubsetOf<R0_Pos, EmptyNumberSet>>(false);
        })

        it("R0_Neg is Subset of", () => {
            typeAssert<IsSubsetOf<R0_Neg, R>>(true);
            typeAssert<IsSubsetOf<R0_Neg, R0>>(true);
            typeAssert<IsSubsetOf<R0_Neg, R_Pos>>(false)
            typeAssert<IsSubsetOf<R0_Neg, R_Neg>>(true);
            typeAssert<IsSubsetOf<R0_Neg, R0_Pos>>(false)
            typeAssert<IsSubsetOf<R0_Neg, R0_Neg>>(true);
            typeAssert<IsSubsetOf<R0_Neg, Z>>(false);
            typeAssert<IsSubsetOf<R0_Neg, Z0>>(false);
            typeAssert<IsSubsetOf<R0_Neg, Z_Pos>>(false);
            typeAssert<IsSubsetOf<R0_Neg, Z_Neg>>(false);
            typeAssert<IsSubsetOf<R0_Neg, Z0_Pos>>(false);
            typeAssert<IsSubsetOf<R0_Neg, Z0_Neg>>(false);
            typeAssert<IsSubsetOf<R0_Neg, Zero>>(false);
            typeAssert<IsSubsetOf<R0_Neg, EmptyNumberSet>>(false);
        })

        it("Z is Subset of", () => {
            typeAssert<IsSubsetOf<Z, R>>(true);
            typeAssert<IsSubsetOf<Z, R0>>(false);
            typeAssert<IsSubsetOf<Z, R_Pos>>(false)
            typeAssert<IsSubsetOf<Z, R_Neg>>(false);
            typeAssert<IsSubsetOf<Z, R0_Pos>>(false)
            typeAssert<IsSubsetOf<Z, R0_Neg>>(false);
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
            typeAssert<IsSubsetOf<Z0, R>>(true);
            typeAssert<IsSubsetOf<Z0, R0>>(true);
            typeAssert<IsSubsetOf<Z0, R_Pos>>(false)
            typeAssert<IsSubsetOf<Z0, R_Neg>>(false);
            typeAssert<IsSubsetOf<Z0, R0_Pos>>(false)
            typeAssert<IsSubsetOf<Z0, R0_Neg>>(false);
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
            typeAssert<IsSubsetOf<Z_Pos, R>>(true);
            typeAssert<IsSubsetOf<Z_Pos, R0>>(false);
            typeAssert<IsSubsetOf<Z_Pos, R_Pos>>(true)
            typeAssert<IsSubsetOf<Z_Pos, R_Neg>>(false);
            typeAssert<IsSubsetOf<Z_Pos, R0_Pos>>(false)
            typeAssert<IsSubsetOf<Z_Pos, R0_Neg>>(false);
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
            typeAssert<IsSubsetOf<Z_Neg, R>>(true);
            typeAssert<IsSubsetOf<Z_Neg, R0>>(false);
            typeAssert<IsSubsetOf<Z_Neg, R_Pos>>(false)
            typeAssert<IsSubsetOf<Z_Neg, R_Neg>>(true);
            typeAssert<IsSubsetOf<Z_Neg, R0_Pos>>(false)
            typeAssert<IsSubsetOf<Z_Neg, R0_Neg>>(false);
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
            typeAssert<IsSubsetOf<Z0_Pos, R>>(true);
            typeAssert<IsSubsetOf<Z0_Pos, R0>>(true);
            typeAssert<IsSubsetOf<Z0_Pos, R_Pos>>(true)
            typeAssert<IsSubsetOf<Z0_Pos, R_Neg>>(false);
            typeAssert<IsSubsetOf<Z0_Pos, R0_Pos>>(true)
            typeAssert<IsSubsetOf<Z0_Pos, R0_Neg>>(false);
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
            typeAssert<IsSubsetOf<Z0_Neg, R>>(true);
            typeAssert<IsSubsetOf<Z0_Neg, R0>>(true);
            typeAssert<IsSubsetOf<Z0_Neg, R_Pos>>(false)
            typeAssert<IsSubsetOf<Z0_Neg, R_Neg>>(true);
            typeAssert<IsSubsetOf<Z0_Neg, R0_Pos>>(false)
            typeAssert<IsSubsetOf<Z0_Neg, R0_Neg>>(true);
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
            typeAssert<IsSubsetOf<Zero, R>>(true);
            typeAssert<IsSubsetOf<Zero, R0>>(false);
            typeAssert<IsSubsetOf<Zero, R_Pos>>(true)
            typeAssert<IsSubsetOf<Zero, R_Neg>>(true);
            typeAssert<IsSubsetOf<Zero, R0_Pos>>(false)
            typeAssert<IsSubsetOf<Zero, R0_Neg>>(false);
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
            typeAssert<IsSubsetOf<EmptyNumberSet, R>>(true);
            typeAssert<IsSubsetOf<EmptyNumberSet, R0>>(true);
            typeAssert<IsSubsetOf<EmptyNumberSet, R_Pos>>(true);
            typeAssert<IsSubsetOf<EmptyNumberSet, R_Neg>>(true);
            typeAssert<IsSubsetOf<EmptyNumberSet, R0_Pos>>(true);
            typeAssert<IsSubsetOf<EmptyNumberSet, R0_Neg>>(true);
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
            typeAssert<Eq<R & R, R>>(true);
            typeAssert<Eq<R & R0, R0>>(true);
            typeAssert<Eq<R & R_Pos, R_Pos>>(true);
            typeAssert<Eq<R & R_Neg, R_Neg>>(true);
            typeAssert<Eq<R & R0_Pos, R0_Pos>>(true);
            typeAssert<Eq<R & R0_Neg, R0_Neg>>(true);
            typeAssert<Eq<R & Z, Z>>(true);
            typeAssert<Eq<R & Z0, Z0>>(true);
            typeAssert<Eq<R & Z_Pos, Z_Pos>>(true);
            typeAssert<Eq<R & Z_Neg, Z_Neg>>(true);
            typeAssert<Eq<R & Z0_Pos, Z0_Pos>>(true);
            typeAssert<Eq<R & Z0_Neg, Z0_Neg>>(true);
            typeAssert<Eq<R & Zero, Zero>>(true);
            typeAssert<Eq<R & EmptyNumberSet, EmptyNumberSet>>(true);
        })
        it("R0 intersected with", () => {
            typeAssert<Eq<R0 & R, R0>>(true);
            typeAssert<Eq<R0 & R0, R0>>(true);
            typeAssert<Eq<R0 & R_Pos, R0_Pos>>(true);
            typeAssert<Eq<R0 & R_Neg, R0_Neg>>(true);
            typeAssert<Eq<R0 & R0_Pos, R0_Pos>>(true);
            typeAssert<Eq<R0 & R0_Neg, R0_Neg>>(true);
            typeAssert<Eq<R0 & Z, Z0>>(true);
            typeAssert<Eq<R0 & Z0, Z0>>(true);
            typeAssert<Eq<R0 & Z_Pos, Z0_Pos>>(true);
            typeAssert<Eq<R0 & Z_Neg, Z0_Neg>>(true);
            typeAssert<Eq<R0 & Z0_Pos, Z0_Pos>>(true);
            typeAssert<Eq<R0 & Z0_Neg, Z0_Neg>>(true);
            typeAssert<Eq<R0 & Zero, EmptyNumberSet>>(true);
            typeAssert<Eq<R0 & EmptyNumberSet, EmptyNumberSet>>(true);
        })

        it("R_Pos intersected with", () => {
            typeAssert<Eq<R_Pos & R, R_Pos>>(true);
            typeAssert<Eq<R_Pos & R0, R0_Pos>>(true);
            typeAssert<Eq<R_Pos & R_Pos, R_Pos>>(true);
            typeAssert<Eq<R_Pos & R_Neg, Zero>>(true);
            typeAssert<Eq<R_Pos & R0_Pos, R0_Pos>>(true);
            typeAssert<Eq<R_Pos & R0_Neg, EmptyNumberSet>>(true);
            typeAssert<Eq<R_Pos & Z, Z_Pos>>(true);
            typeAssert<Eq<R_Pos & Z0, Z0_Pos>>(true);
            typeAssert<Eq<R_Pos & Z_Pos, Z_Pos>>(true);
            typeAssert<Eq<R_Pos & Z_Neg, Zero>>(true);
            typeAssert<Eq<R_Pos & Z0_Pos, Z0_Pos>>(true);
            typeAssert<Eq<R_Pos & Z0_Neg, EmptyNumberSet>>(true);
            typeAssert<Eq<R_Pos & Zero, Zero>>(true);
            typeAssert<Eq<R_Pos & EmptyNumberSet, EmptyNumberSet>>(true);
        })

        it("R_Neg intersected with", () => {
            typeAssert<Eq<R_Neg & R, R_Neg>>(true);
            typeAssert<Eq<R_Neg & R0, R0_Neg>>(true);
            typeAssert<Eq<R_Neg & R_Pos, Zero>>(true);
            typeAssert<Eq<R_Neg & R_Neg, R_Neg>>(true);
            typeAssert<Eq<R_Neg & R0_Pos, EmptyNumberSet>>(true);
            typeAssert<Eq<R_Neg & R0_Neg, R0_Neg>>(true);
            typeAssert<Eq<R_Neg & Z, Z_Neg>>(true);
            typeAssert<Eq<R_Neg & Z0, Z0_Neg>>(true);
            typeAssert<Eq<R_Neg & Z_Pos, Zero>>(true);
            typeAssert<Eq<R_Neg & Z_Neg, Z_Neg>>(true);
            typeAssert<Eq<R_Neg & Z0_Pos, EmptyNumberSet>>(true);
            typeAssert<Eq<R_Neg & Z0_Neg, Z0_Neg>>(true);
            typeAssert<Eq<R_Neg & Zero, Zero>>(true);
            typeAssert<Eq<R_Neg & EmptyNumberSet, EmptyNumberSet>>(true);
        })

        it("R0_Pos intersected with", () => {
            typeAssert<Eq<R0_Pos & R, R0_Pos>>(true);
            typeAssert<Eq<R0_Pos & R0, R0_Pos>>(true);
            typeAssert<Eq<R0_Pos & R_Pos, R0_Pos>>(true);
            typeAssert<Eq<R0_Pos & R_Neg, EmptyNumberSet>>(true);
            typeAssert<Eq<R0_Pos & R0_Pos, R0_Pos>>(true);
            typeAssert<Eq<R0_Pos & R0_Neg, EmptyNumberSet>>(true);
            typeAssert<Eq<R0_Pos & Z, Z0_Pos>>(true);
            typeAssert<Eq<R0_Pos & Z0, Z0_Pos>>(true);
            typeAssert<Eq<R0_Pos & Z_Pos, Z0_Pos>>(true);
            typeAssert<Eq<R0_Pos & Z_Neg, EmptyNumberSet>>(true);
            typeAssert<Eq<R0_Pos & Z0_Pos, Z0_Pos>>(true);
            typeAssert<Eq<R0_Pos & Z0_Neg, EmptyNumberSet>>(true);
            typeAssert<Eq<R0_Pos & Zero, EmptyNumberSet>>(true);
            typeAssert<Eq<R0_Pos & EmptyNumberSet, EmptyNumberSet>>(true);
        })

        it("R0_Neg intersected with", () => {
            typeAssert<Eq<R0_Neg & R, R0_Neg>>(true);
            typeAssert<Eq<R0_Neg & R0, R0_Neg>>(true);
            typeAssert<Eq<R0_Neg & R_Pos, EmptyNumberSet>>(true);
            typeAssert<Eq<R0_Neg & R_Neg, R0_Neg>>(true);
            typeAssert<Eq<R0_Neg & R0_Pos, EmptyNumberSet>>(true);
            typeAssert<Eq<R0_Neg & R0_Neg, R0_Neg>>(true);
            typeAssert<Eq<R0_Neg & Z, Z0_Neg>>(true);
            typeAssert<Eq<R0_Neg & Z0, Z0_Neg>>(true);
            typeAssert<Eq<R0_Neg & Z_Pos, EmptyNumberSet>>(true);
            typeAssert<Eq<R0_Neg & Z_Neg, Z0_Neg>>(true);
            typeAssert<Eq<R0_Neg & Z0_Pos, EmptyNumberSet>>(true);
            typeAssert<Eq<R0_Neg & Z0_Neg, Z0_Neg>>(true);
            typeAssert<Eq<R0_Neg & Zero, EmptyNumberSet>>(true);
            typeAssert<Eq<R0_Neg & EmptyNumberSet, EmptyNumberSet>>(true);
        })

        it("Z intersected with", () => {
            typeAssert<Eq<Z & R, Z>>(true);
            typeAssert<Eq<Z & R0, Z0>>(true);
            typeAssert<Eq<Z & R_Pos, Z_Pos>>(true);
            typeAssert<Eq<Z & R_Neg, Z_Neg>>(true);
            typeAssert<Eq<Z & R0_Pos, Z0_Pos>>(true);
            typeAssert<Eq<Z & R0_Neg, Z0_Neg>>(true);
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
            typeAssert<Eq<Z0 & R, Z0>>(true);
            typeAssert<Eq<Z0 & R0, Z0>>(true);
            typeAssert<Eq<Z0 & R_Pos, Z0_Pos>>(true);
            typeAssert<Eq<Z0 & R_Neg, Z0_Neg>>(true);
            typeAssert<Eq<Z0 & R0_Pos, Z0_Pos>>(true);
            typeAssert<Eq<Z0 & R0_Neg, Z0_Neg>>(true);
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
            typeAssert<Eq<Z_Pos & R, Z_Pos>>(true);
            typeAssert<Eq<Z_Pos & R0, Z0_Pos>>(true);
            typeAssert<Eq<Z_Pos & R_Pos, Z_Pos>>(true);
            typeAssert<Eq<Z_Pos & R_Neg, Zero>>(true);
            typeAssert<Eq<Z_Pos & R0_Pos, Z0_Pos>>(true);
            typeAssert<Eq<Z_Pos & R0_Neg, EmptyNumberSet>>(true);
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
            typeAssert<Eq<Z_Neg & R, Z_Neg>>(true);
            typeAssert<Eq<Z_Neg & R0, Z0_Neg>>(true);
            typeAssert<Eq<Z_Neg & R_Pos, Zero>>(true);
            typeAssert<Eq<Z_Neg & R_Neg, Z_Neg>>(true);
            typeAssert<Eq<Z_Neg & R0_Pos, EmptyNumberSet>>(true);
            typeAssert<Eq<Z_Neg & R0_Neg, Z0_Neg>>(true);
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
            typeAssert<Eq<Z0_Pos & R, Z0_Pos>>(true);
            typeAssert<Eq<Z0_Pos & R0, Z0_Pos>>(true);
            typeAssert<Eq<Z0_Pos & R_Pos, Z0_Pos>>(true);
            typeAssert<Eq<Z0_Pos & R_Neg, EmptyNumberSet>>(true);
            typeAssert<Eq<Z0_Pos & R0_Pos, Z0_Pos>>(true);
            typeAssert<Eq<Z0_Pos & R0_Neg, EmptyNumberSet>>(true);
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
            typeAssert<Eq<Z0_Neg & R, Z0_Neg>>(true);
            typeAssert<Eq<Z0_Neg & R0, Z0_Neg>>(true);
            typeAssert<Eq<Z0_Neg & R_Pos, EmptyNumberSet>>(true);
            typeAssert<Eq<Z0_Neg & R_Neg, Z0_Neg>>(true);
            typeAssert<Eq<Z0_Neg & R0_Pos, EmptyNumberSet>>(true);
            typeAssert<Eq<Z0_Neg & R0_Neg, Z0_Neg>>(true);
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
            typeAssert<Eq<Zero & R, Zero>>(true);
            typeAssert<Eq<Zero & R0, EmptyNumberSet>>(true);
            typeAssert<Eq<Zero & R_Pos, Zero>>(true);
            typeAssert<Eq<Zero & R_Neg, Zero>>(true);
            typeAssert<Eq<Zero & R0_Pos, EmptyNumberSet>>(true);
            typeAssert<Eq<Zero & R0_Neg, EmptyNumberSet>>(true);
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
            typeAssert<Eq<EmptyNumberSet & R, EmptyNumberSet>>(true);
            typeAssert<Eq<EmptyNumberSet & R0, EmptyNumberSet>>(true);
            typeAssert<Eq<EmptyNumberSet & R_Pos, EmptyNumberSet>>(true);
            typeAssert<Eq<EmptyNumberSet & R_Neg, EmptyNumberSet>>(true);
            typeAssert<Eq<EmptyNumberSet & R0_Pos, EmptyNumberSet>>(true);
            typeAssert<Eq<EmptyNumberSet & R0_Neg, EmptyNumberSet>>(true);
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
            typeAssert<Eq<R | R, R>>(true);
            typeAssert<Eq<R | R0, R>>(true);
            typeAssert<Eq<R | R_Pos, R>>(true);
            typeAssert<Eq<R | R_Neg, R>>(true);
            typeAssert<Eq<R | R0_Pos, R>>(true);
            typeAssert<Eq<R | R0_Neg, R>>(true);
            typeAssert<Eq<R | Z, R>>(true);
            typeAssert<Eq<R | Z0, R>>(true);
            typeAssert<Eq<R | Z_Pos, R>>(true);
            typeAssert<Eq<R | Z_Neg, R>>(true);
            typeAssert<Eq<R | Z0_Pos, R>>(true);
            typeAssert<Eq<R | Z0_Neg, R>>(true);
            typeAssert<Eq<R | Zero, R>>(true);
            typeAssert<Eq<R | EmptyNumberSet, R>>(true);
        })

        it("R0 united with", () => {
            typeAssert<Eq<R0 | R, R>>(true);
            typeAssert<Eq<R0 | R0, R0>>(true);
            typeAssert<Eq<R0 | R_Pos, R>>(true);
            typeAssert<Eq<R0 | R_Neg, R>>(true);
            typeAssert<Eq<R0 | R0_Pos, R0>>(true);
            typeAssert<Eq<R0 | R0_Neg, R0>>(true);
            typeAssert<Eq<R0 | Z, R>>(true);
            typeAssert<Eq<R0 | Z0, R0>>(true);
            typeAssert<Eq<R0 | Z_Pos, R>>(true);
            typeAssert<Eq<R0 | Z_Neg, R>>(true);
            typeAssert<Eq<R0 | Z0_Pos, R0>>(true);
            typeAssert<Eq<R0 | Z0_Neg, R0>>(true);
            typeAssert<Eq<R0 | Zero, R>>(true);
            typeAssert<Eq<R0 | EmptyNumberSet, R0>>(true);
        })

        it("R_Pos united with", () => {
            typeAssert<Eq<R_Pos | R, R>>(true);
            typeAssert<Eq<R_Pos | R0, R>>(true);
            typeAssert<Eq<R_Pos | R_Pos, R_Pos>>(true);
            typeAssert<Eq<R_Pos | R_Neg, R>>(true);
            typeAssert<Eq<R_Pos | R0_Pos, R_Pos>>(true);
            typeAssert<Eq<R_Pos | R0_Neg, R>>(true);
            // typeAssert<Eq<R_Pos | Z,  >>(true); // has no explicit result
            // typeAssert<Eq<R_Pos | Z0,  >>(true);// has no explicit result
            typeAssert<Eq<R_Pos | Z_Pos, R_Pos>>(true);
            //typeAssert<Eq<R_Pos | Z_Neg, >>(true); // has no explicit result
            typeAssert<Eq<R_Pos | Z0_Pos, R_Pos>>(true);
            //typeAssert<Eq<R_Pos | Z0_Neg, >>(true); // has no explicit result
            typeAssert<Eq<R_Pos | Zero, R_Pos>>(true);
            typeAssert<Eq<R_Pos | EmptyNumberSet, R_Pos>>(true);
        })

        it("R_Neg united with", () => {
            typeAssert<Eq<R_Neg | R, R>>(true);
            typeAssert<Eq<R_Neg | R0, R>>(true);
            typeAssert<Eq<R_Neg | R_Pos, R>>(true);
            typeAssert<Eq<R_Neg | R_Neg, R_Neg>>(true);
            typeAssert<Eq<R_Neg | R0_Pos, R>>(true);
            typeAssert<Eq<R_Neg | R0_Neg, R_Neg>>(true);
            // typeAssert<Eq<R_Neg | Z, >>(true); // has no explicit result
            // typeAssert<Eq<R_Neg | Z0,>>(true); // has no explicit result
            // typeAssert<Eq<R_Neg | Z_Pos,>>(true); // has no explicit result
            typeAssert<Eq<R_Neg | Z_Neg, R_Neg>>(true);
            // typeAssert<Eq<R_Neg | Z0_Pos,>>(true); // has no explicit result
            typeAssert<Eq<R_Neg | Z0_Neg, R_Neg>>(true);
            typeAssert<Eq<R_Neg | Zero, R_Neg>>(true);
            typeAssert<Eq<R_Neg | EmptyNumberSet, R_Neg>>(true);
        })


        it("R0_Pos united with", () => {
            typeAssert<Eq<R0_Pos | R, R>>(true);
            typeAssert<Eq<R0_Pos | R0, R0>>(true);
            typeAssert<Eq<R0_Pos | R_Pos, R_Pos>>(true);
            typeAssert<Eq<R0_Pos | R_Neg, R>>(true);
            typeAssert<Eq<R0_Pos | R0_Pos, R0_Pos>>(true);
            typeAssert<Eq<R0_Pos | R0_Neg, R0>>(true);
            // typeAssert<Eq<R0_Pos | Z,  >>(true); // has no explicit result
            // typeAssert<Eq<R0_Pos | Z0,  >>(true);// has no explicit result
            typeAssert<Eq<R0_Pos | Z_Pos, R_Pos>>(true);
            //typeAssert<Eq<R0_Pos | Z_Neg, >>(true); // has no explicit result
            typeAssert<Eq<R0_Pos | Z0_Pos, R0_Pos>>(true);
            //typeAssert<Eq<R0_Pos | Z0_Neg, >>(true); // has no explicit result
            typeAssert<Eq<R0_Pos | Zero, R_Pos>>(true);
            typeAssert<Eq<R0_Pos | EmptyNumberSet, R0_Pos>>(true);
        })

        it("R_Neg united with", () => {
            typeAssert<Eq<R0_Neg | R, R>>(true);
            typeAssert<Eq<R0_Neg | R0, R0>>(true);
            typeAssert<Eq<R0_Neg | R_Pos, R>>(true);
            typeAssert<Eq<R0_Neg | R_Neg, R_Neg>>(true);
            typeAssert<Eq<R0_Neg | R0_Pos, R0>>(true);
            typeAssert<Eq<R0_Neg | R0_Neg, R0_Neg>>(true);
            // typeAssert<Eq<R0_Neg | Z, >>(true); // has no explicit result
            // typeAssert<Eq<R0_Neg | Z0,>>(true); // has no explicit result
            // typeAssert<Eq<R0_Neg | Z_Pos,>>(true); // has no explicit result
            typeAssert<Eq<R0_Neg | Z_Neg, R_Neg>>(true);
            // typeAssert<Eq<R_Neg | Z0_Pos,>>(true); // has no explicit result
            typeAssert<Eq<R0_Neg | Z0_Neg, R0_Neg>>(true);
            typeAssert<Eq<R0_Neg | Zero, R_Neg>>(true);
            typeAssert<Eq<R0_Neg | EmptyNumberSet, R0_Neg>>(true);
        })

        it("Z united with", () => {
            typeAssert<Eq<Z | R, R>>(true);
            typeAssert<Eq<Z | R0, R>>(true);
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
            typeAssert<Eq<Z0 | R, R>>(true);
            typeAssert<Eq<Z0 | R0, R0>>(true);
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
            typeAssert<Eq<Z_Pos | R, R>>(true);
            typeAssert<Eq<Z_Pos | R0, R>>(true);
            typeAssert<Eq<Z_Pos | R_Pos, R_Pos>>(true); // has no explicit result
            // typeAssert<Eq<Z_Pos | R_Neg, >>(true); // has no explicit result
            typeAssert<Eq<Z_Pos | R0_Pos, R_Pos>>(true); // has no explicit result
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
            typeAssert<Eq<Z_Neg | R, R>>(true);
            typeAssert<Eq<Z_Neg | R0, R>>(true);
            // typeAssert<Eq<Z_Neg | R_Pos, >>(true); // has no explicit result
            typeAssert<Eq<Z_Neg | R_Neg, R_Neg>>(true); // has no explicit result
            // typeAssert<Eq<Z_Neg | R0_Pos, >>(true); // has no explicit result
            typeAssert<Eq<Z_Neg | R0_Neg, R_Neg>>(true); // has no explicit result
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
            typeAssert<Eq<Z0_Pos | R, R>>(true);
            typeAssert<Eq<Z0_Pos | R0, R0>>(true);
            typeAssert<Eq<Z0_Pos | R_Pos, R_Pos>>(true); // has no explicit result
            // typeAssert<Eq<Z0_Pos | R_Neg, >>(true); // has no explicit result
            typeAssert<Eq<Z0_Pos | R0_Pos, R0_Pos>>(true); // has no explicit result
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
            typeAssert<Eq<Z0_Neg | R, R>>(true);
            typeAssert<Eq<Z0_Neg | R0, R0>>(true);
            // typeAssert<Eq<Z0_Neg | R_Pos, >>(true); // has no explicit result
            typeAssert<Eq<Z0_Neg | R_Neg, R_Neg>>(true); // has no explicit result
            // typeAssert<Eq<Z0_Neg | R0_Pos, >>(true); // has no explicit result
            typeAssert<Eq<Z0_Neg | R0_Neg, R0_Neg>>(true); // has no explicit result
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