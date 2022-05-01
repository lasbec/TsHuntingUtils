import { R, N, Z, TN } from "../src/numbers/true-number";

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
})