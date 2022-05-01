import { TN } from "../src/numbers/true-number"
import { typeAssert } from "../src/typeCalculus/type-testing"

describe("Adding true numbers", () => {
    it("add", () => {
        const five = TN(5);
        const half = TN(0.5);
        five.add(half);
    })
})