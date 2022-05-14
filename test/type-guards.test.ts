import { Q, N, Z, Zero, TN, Z_Neg, Z0_Neg, EmptyNumberSet, Q_Pos, Q0_Pos, Z0_Pos, Z_Pos, Q0_Neg, Z0 } from "../src/numbers/true-number";
import { typeAssert, typeAssertEq } from "../src/typeCalculus/type-testing";



describe("TrueNumber typeguards", () => {
    const r: Q = TN(1);
    it("integer", () => {
        if (r.isInteger()) typeAssertEq<typeof r, Z>(true);
    })

    it("isPositive", () => {
        if (r.isPositive()) {
            if (r.isInteger()) {
                if (r.isInteger()) typeAssertEq<typeof r, Z_Pos>(true);
            }
        }
    })

    it("isNegativ", () => {
        if (r.isNegative()) {
            if (r.isInteger()) typeAssertEq<typeof r, Z_Neg>(true);
            if (r.isPositive()) typeAssertEq<typeof r, Zero>(true);
        }
    })

    it("isNotNegativ", () => {
        if (r.isNotNegative()) {
            if (r.isInteger()) typeAssertEq<typeof r, Z0_Pos>(true);
            if (r.isPositive()) typeAssertEq<typeof r, Q0_Pos>(true);
            if (r.isNegative()) typeAssertEq<typeof r, EmptyNumberSet>(true);
        }
    })

    it("isNotPositiv", () => {
        if (r.isNotPositive()) {
            if (r.isInteger()) typeAssertEq<typeof r, Z0_Neg>(true);
            if (r.isPositive()) typeAssertEq<typeof r, EmptyNumberSet>(true);
            if (r.isNegative()) typeAssertEq<typeof r, Q0_Neg>(true);
            if (r.isNotNegative()) typeAssertEq<typeof r, EmptyNumberSet>(true);
        }
    })

    it("isZero", () => {
        if (r.isZero()) {
            if (r.isInteger()) typeAssertEq<typeof r, Zero>(true);
            if (r.isPositive()) typeAssertEq<typeof r, Zero>(true);
            if (r.isNegative()) typeAssertEq<typeof r, Zero>(true);
            if (r.isNotNegative()) typeAssertEq<typeof r, EmptyNumberSet>(true);
            if (r.isNotPositive()) typeAssertEq<typeof r, EmptyNumberSet>(true);
        }
    })

    it("isNotZero", () => {
        if (r.isNotZero()) {
            if (r.isInteger()) typeAssertEq<typeof r, Z0>(true);
            if (r.isPositive()) typeAssertEq<typeof r, Q0_Pos>(true);
            if (r.isNegative()) typeAssertEq<typeof r, Q0_Neg>(true);
            if (r.isNotNegative()) typeAssertEq<typeof r, Q0_Pos>(true);
            if (r.isNotPositive()) typeAssertEq<typeof r, Q0_Neg>(true);
        }
    })

})