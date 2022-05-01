import { R, N, Z, Zero, TN, Z_Neg, Z0_Neg, EmptyNumberSet, R_Pos, R0_Pos, Z0_Pos, Z_Pos } from "../src/numbers/true-number";
import { Eq, IsSubsetOf, typeAssert, typeAssertIsAssignable } from "../src/typeCalculus/type-testing";



describe("TrueNumber typeguards", () => {
    it("integer and positiv", () => {
        const r: R = TN(50);
        if (r.isInteger()) {
            if (r.isPositive()) {
                typeAssert<Eq<typeof r, N>>(true);
            }
        }
    })
    it("positiv and integer", () => {
        const r: R = TN(50);
        if (r.isPositive()) {
            if (r.isInteger()) {
                typeAssert<Eq<typeof r, N>>(true);
            }
        }
    })

    it("negativ and integer", () => {
        const r: R = TN(50);
        if (r.isNegative()) {
            if (r.isInteger()) {
                typeAssert<Eq<typeof r, Z_Neg>>(true);
            }
        }
    })

    it("negativ and positiv", () => {
        const r: R = TN(50);
        if (r.isNegative()) {
            if (r.isPositive()) {
                const n: N = r;
                typeAssert<Eq<typeof r, Zero>>(true);
            }
        }
    })

})