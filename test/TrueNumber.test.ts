import { Zero, Z, Z0, R, R0, Z_Pos, Z0_Pos, R_Pos, R0_Pos, Z_Neg, Z0_Neg, R_Neg, R0_Neg } from "../src/numbers/true-number";
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
        })
        it("R0 intersected with", () => {
            typeAssert<Eq<R0 & R, R0>>(true);
            typeAssert<Eq<R0 & R0, R0>>(true);
            typeAssert<Eq<R0 & R_Pos, R0_Pos>>(true);
        })
    })

})