import { Contains } from "./ArrayOperations";
import { Eq, IsSubsetOf } from "./SimpleBasics";
import { typeAssert, typeAssertEq } from "./type-testing";


export type Not
    <X extends boolean>
    =
    Eq<X, false> extends true ? true :
    Eq<X, true> extends true ? false :
    Eq<X, boolean> extends true ? boolean :
    never


export type Or
    <Args extends [boolean, ...boolean[]]>
    =
    Eq<Args, never> extends true ? never :
    Contains<boolean, Args, never> extends true ? never :
    IsSubsetOf<Args, false[]> extends true ? false :
    Not<Contains<boolean, Args, true>> extends true ? boolean :
    true;

export type And
    <Args extends [boolean, ...boolean[]]>
    =
    Eq<Args, never> extends true ? never :
    Contains<boolean, Args, never> extends true ? never :
    IsSubsetOf<Args, true[]> extends true ? true :
    Not<Contains<boolean, Args, false>> extends true ? boolean :
    false;


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