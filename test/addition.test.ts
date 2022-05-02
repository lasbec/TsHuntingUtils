import { TN, Z } from "../src/numbers/true-number"
import { Eq, typeAssert } from "../src/typeCalculus/type-testing"

describe("Adding true numbers", () => {
    it("add", () => {
        const five = TN(5);
        const seven = TN(7);
        if (five.isInteger()) {
            if (seven.isInteger()) {
                const result = five.add(seven);
                typeAssert<Eq<typeof result, Z>>(true);
            }
        }
    })
})