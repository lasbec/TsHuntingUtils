export type IsSubsetOf<Sub, Super> = [Sub] extends [Super] ? true : false;
export type Eq<A, B> = [A] extends [B] ? [B] extends [A] ? true : false : false;

export type IF<Cond extends boolean, Then, Else> =
    Eq<Cond, never> extends true ? never :
    Eq<Cond, boolean> extends true ? Then | Else :
    Eq<Cond, true> extends true ? Then :
    Else