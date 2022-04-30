import { And, IsTrue } from "../typeCalculus/booleanTypes";

export function typeAssert<Var extends boolean>(x: IsTrue<Var>) { }

export type IsSubsetOf<Sub, Super> = [Sub] extends [Super] ? true : false;
export type Eq<A, B> = And<IsSubsetOf<A, B>, IsSubsetOf<B, A>>;
export type Empty = never;