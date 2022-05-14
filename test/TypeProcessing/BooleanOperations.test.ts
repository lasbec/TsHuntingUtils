import { And, Or } from "../../src/TypeProcessing/BooleanOperations";
import { typeAssertEq } from "../../src/TypeProcessing/TypeAsserting";

typeAssertEq<Or<[false]>, false>(true);
typeAssertEq<Or<[true, true, true]>, true>(true);
typeAssertEq<Or<[false, true, false]>, true>(true);
typeAssertEq<Or<[false, false, false]>, false>(true);
typeAssertEq<Or<[false, never, false]>, never>(true);
typeAssertEq<Or<[true, boolean]>, true>(true);
typeAssertEq<Or<[false, boolean]>, boolean>(true);
typeAssertEq<Or<never>, never>(true);


typeAssertEq<And<[false]>, false>(true);
typeAssertEq<And<[true]>, true>(true);
typeAssertEq<And<[true, true, true]>, true>(true);
typeAssertEq<And<[false, true, false]>, false>(true);
typeAssertEq<And<[false, false, false]>, false>(true);
typeAssertEq<And<[false, never, false]>, never>(true);
typeAssertEq<And<[true, boolean]>, boolean>(true);
typeAssertEq<And<[false, boolean]>, false>(true);
typeAssertEq<And<never>, never>(true);