import { N__, N__Lt, N__One, N__Value, N__Len, N__PP, N__Le, N__Ge, N__Zero } from "./NaturalNumbers";
import { Eq } from "./SimpleBasics";


type GetIndex
    <TT, Arr extends TT[], N extends N__>
    = Arr[N__Value<N>];

export type SliceFrom
    <TT, Arr extends TT[], From extends N__>
    = N__Lt<From, N__Len<TT, Arr>> extends true ?
    [
        GetIndex<TT, Arr, From>,
        ...SliceFrom<TT, Arr, N__PP<From>>
    ]
    : []

export type PopFirst
    <TT, Arr extends TT[]>
    = SliceFrom<TT, Arr, N__One>;


type Contains_internal
    <TT, Arr extends TT[], Elem extends TT, Counter extends N__ = N__Zero>
    =
    Eq<N__Len<TT, Arr>, Counter> extends true ? false :
    Eq<GetIndex<TT, Arr, Counter>, Elem> extends true ? true :
    Contains_internal<TT, Arr, Elem, N__PP<Counter>>
export type Contains<TT, Arr extends TT[], Elem extends TT> = Contains_internal<TT, Arr, Elem>;


