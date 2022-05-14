import { N__, N__Value, N__Len, N__PP, N__Zero } from "./NaturalNumbers";
import { Eq } from "./SimpleBasics";
import { typeAssert } from "./TypeAsserting";


export type GetIndex
    <TT, Arr extends TT[], N extends N__>
    = Arr[N__Value<N>];


type Contains_internal
    <TT, Arr extends TT[], Elem extends TT, Counter extends N__ = N__Zero>
    =
    Eq<N__Len<TT, Arr>, Counter> extends true ? false :
    Eq<GetIndex<TT, Arr, Counter>, Elem> extends true ? true :
    Contains_internal<TT, Arr, Elem, N__PP<Counter>>
export type Contains<TT, Arr extends TT[], Elem extends TT> = Contains_internal<TT, Arr, Elem>;


typeAssert<Contains<number, [1, 2, 15], 15>>(true);
typeAssert<Contains<number | string, [1, "iae", 15], "a">>(false);
typeAssert<Contains<number | string, [1, never, 15], never>>(true);


