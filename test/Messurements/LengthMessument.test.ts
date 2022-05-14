import { random, range } from "lodash";
import { LEN } from "../../src/Messurements/LengthMessurement"

describe("Messuring Lenght", () => {
    it("additon-isomorphism", () => {
        for (const _ in range(10)) {
            const aVal = random(-100, 100, true);
            const bVal = random(-100, 100, true);
            const a = LEN(aVal, "m");
            const b = LEN(bVal, "m");
            expect(a.add(b).eq(LEN(aVal + bVal, "m"))).toBeTruthy();
        }
    })
})