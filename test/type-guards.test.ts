import { R, N, Z, Zero, TN, Z_Neg } from "../src/numbers/true-number";

describe("TrueNumber typeguards", () => {
    it("integer and positiv", () => {
        const r: R = TN(50);
        if (r.isInteger()) {
            if (r.isPositive()) {
                const n: N = r;
            }
        }
    })
    it("positiv and integer", () => {
        const r: R = TN(50);
        if (r.isPositive()) {
            if (r.isInteger()) {
                const n: N = r;
            }
        }
    })

    it("negativ and integer", () => {
        const r: R = TN(50);
        if (r.isNegative()) {
            if (r.isInteger()) {
                const n: Z_Neg = r;
            }
        }
    })

    it("negativ and positiv", () => {
        const r: R = TN(50);
        if (r.isNegative()) {
            if (r.isPositive()) {
                const n: Zero = r;
            }
        }
    })
})