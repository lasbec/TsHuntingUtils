import { Not } from "./BooleanOperations";
import { typeAssert, typeAssertEq } from "./TypeAsserting";

export type N__ = 0[];

type N__New_internal
    <X extends number, Result extends N__ = []>
    = Result["length"] extends X ? Result : N__New_internal<X, [0, ...Result]>;
export type N__New<N extends number> = N__New_internal<N>;

export type N__Value<N extends N__> = N["length"];

export type N__PP<N extends N__> = N__Add<N__One, N>;

export type N__Len<TT, Arr extends TT[]> = N__New<Arr["length"]>;

export type N__Zero = [];
export type N__One = [0];

export type N__Add<A extends N__, B extends N__> = [...A, ...B];

export type N__Eq
    <A extends N__, B extends N__>
    = A["length"] extends B["length"] ? true : false;

export type N__Le
    <A extends N__, B extends N__>
    = A[B["length"]] extends undefined ? true : false;

export type N__Gt
    <A extends N__, B extends N__>
    = Not<N__Le<A, B>>;


export type N__Ge
    <A extends N__, B extends N__>
    = B[A["length"]] extends undefined ? true : false;

export type N__Lt
    <A extends N__, B extends N__>
    = Not<N__Ge<A, B>>;
