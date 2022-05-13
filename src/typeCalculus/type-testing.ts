import { IsTrue } from "../typeCalculus/booleanTypes";
import { Eq, IsSubsetOf } from "./SimpleBasics";

export function typeAssert<Var extends boolean>(x: IsTrue<Var>) { }
export function typeAssertEq<A, B>(x: Eq<A, B>) { }
export function typeAssertSubset<A, B>(x: IsSubsetOf<A, B>) { }
export function typeAssertIsAssignable<T>(_: T): void { }