import { Eq, IsSubsetOf } from "./SimpleBasics";

export function typeAssert<Var extends boolean>(x: Eq<Var, true>) { }
export function typeAssertEq<A, B>(x: Eq<A, B>) { }
export function typeAssertSubset<A, B>(x: IsSubsetOf<A, B>) { }
export function typeAssertIsAssignable<T>(_: T): void { }