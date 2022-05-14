import { N__Add, N__Ge, N__Gt, N__Le, N__Lt, N__New, N__One, N__Zero } from "../../src/TypeProcessing/NaturalNumbers";
import { typeAssert, typeAssertEq } from "../../src/TypeProcessing/TypeAsserting";

typeAssertEq<N__New<5>, [0, 0, 0, 0, 0]>(true);

typeAssert<N__Le<N__Zero, N__One>>(true);
typeAssert<N__Le<N__New<3>, N__Zero>>(false);
typeAssert<N__Le<N__One, N__One>>(true);

typeAssert<N__Gt<N__Zero, N__One>>(false);
typeAssert<N__Gt<N__New<3>, N__Zero>>(true);
typeAssert<N__Gt<N__One, N__One>>(false);

typeAssert<N__Lt<N__Zero, N__One>>(true);
typeAssert<N__Lt<N__New<3>, N__Zero>>(false);
typeAssert<N__Lt<N__One, N__One>>(false);

typeAssert<N__Ge<N__Zero, N__One>>(false);
typeAssert<N__Ge<N__New<3>, N__Zero>>(true);
typeAssert<N__Ge<N__One, N__One>>(true);

typeAssertEq<N__Add<N__New<4>, N__New<5>>, N__New<9>>(true);