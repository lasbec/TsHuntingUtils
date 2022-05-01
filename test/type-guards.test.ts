import { R, N, Z, Zero, TN, Z_Neg, Z0_Neg, EmptyNumberSet, R_Pos, R0_Pos, Z0_Pos, Z_Pos, R0_Neg } from "../src/numbers/true-number";
import { Eq, typeAssert } from "../src/typeCalculus/type-testing";



describe("TrueNumber typeguards", () => {
    const r: R = TN(1);
    it("integer", () => {
        if (r.isInteger()) typeAssert<Eq<typeof r, Z>>(true);
    })

    it("isPositive", () => {
        if (r.isPositive()) {
            if (r.isInteger()) {
                if (r.isInteger()) typeAssert<Eq<typeof r, Z_Pos>>(true);
            }
        }
    })

    it("isNegativ", () => {
        if (r.isNegative()) {
            if (r.isInteger()) typeAssert<Eq<typeof r, Z_Neg>>(true);
            if (r.isPositive()) typeAssert<Eq<typeof r, Zero>>(true);
        }
    })

    it("isNotNegativ", () => {
        if (r.isNotNegative()) {
            if (r.isInteger()) typeAssert<Eq<typeof r, Z0_Pos>>(true);
            if (r.isPositive()) typeAssert<Eq<typeof r, R0_Pos>>(true);
            if (r.isNegative()) typeAssert<Eq<typeof r, EmptyNumberSet>>(true);
        }
    })

    it("isNotPositiv", () => {
        if (r.isNotPositive()) {
            if (r.isInteger()) typeAssert<Eq<typeof r, Z0_Neg>>(true);
            if (r.isPositive()) typeAssert<Eq<typeof r, EmptyNumberSet>>(true);
            if (r.isNegative()) typeAssert<Eq<typeof r, R0_Neg>>(true);
            if (r.isNotNegative()) typeAssert<Eq<typeof r, EmptyNumberSet>>(true);
        }
    })

})