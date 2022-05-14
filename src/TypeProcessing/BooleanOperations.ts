import { Contains } from "./ArrayOperations";
import { Eq, IsSubsetOf } from "./SimpleBasics";
import { typeAssert, typeAssertEq } from "./TypeAsserting";


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