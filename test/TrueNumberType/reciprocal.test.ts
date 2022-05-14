import { EmptyNumberSet, Q, Q0, Q0_Neg, Q0_Pos, Q_Neg, Q_Pos, TN, Z, Z0, Z0_Neg, Z0_Pos, Zero, Z_Neg, Z_Pos, Reciprocal, DivisionByZero } from "../../src/TrueNumbers/TrueNumberType"
import { typeAssertEq } from "../../src/TypeProcessing/TypeAsserting"

describe("Get the muliplicative inverse of an Element", () => {
    it("Reciprocal", () => {
        typeAssertEq<Reciprocal<Q>, Q | DivisionByZero>(true);
        typeAssertEq<Reciprocal<Q0>, Q0>(true);
        typeAssertEq<Reciprocal<Q_Pos>, Q0_Pos | DivisionByZero>(true);
        typeAssertEq<Reciprocal<Q_Neg>, Q | DivisionByZero>(true);
        typeAssertEq<Reciprocal<Q0_Pos>, Q0_Pos>(true);
        typeAssertEq<Reciprocal<Q0_Neg>, Q0_Neg>(true);
        typeAssertEq<Reciprocal<Z>, Q | DivisionByZero>(true);
        typeAssertEq<Reciprocal<Z0>, Q0>(true);
        typeAssertEq<Reciprocal<Z_Pos>, Q | DivisionByZero>(true);
        typeAssertEq<Reciprocal<Z_Neg>, Q | DivisionByZero>(true);
        typeAssertEq<Reciprocal<Z0_Pos>, Q0_Pos>(true);
        typeAssertEq<Reciprocal<Z0_Neg>, Q0_Neg>(true);
        typeAssertEq<Reciprocal<Zero>, DivisionByZero>(true);
        typeAssertEq<Reciprocal<EmptyNumberSet>, EmptyNumberSet>(true);
    })
})