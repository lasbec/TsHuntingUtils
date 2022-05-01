import { Eq, IsSubsetOf, typeAssert } from "../src/typeCalculus/type-testing";


typeAssert<Eq<[1] | [0], [0 | 1]>>(true); // works as expected
typeAssert<Eq<{ p: 1 } | { p: 0 }, { p: 0 | 1 }>>(true); // works as expected
typeAssert<IsSubsetOf<{ p: [1] } | { p: [0] }, { p: [0 | 1] }>>(true); // works as expected

typeAssert<IsSubsetOf<{ p: [0 | 1] }, { p: [1] } | { p: [0] }>>(false); //CURIO


// compare keys of the two types (works like expected)
type Keys = keyof { p: [0 | 1] }
type KeysUnion = keyof ({ p: [0] } | { p: [1] })
typeAssert<Eq<Keys, KeysUnion>>(true);

// compare property values of the two types (works like expected)
type Val = { p: [0 | 1] }["p"];
type ValUnion = ({ p: [0] } | { p: [1] })["p"];
typeAssert<Eq<Val, ValUnion>>(true);

let xUnion: { p: [1] } | { p: [0] } = { p: [1] };
let x: { p: [0 | 1] };

x = xUnion;
xUnion = x;