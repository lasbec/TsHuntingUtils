// plase notice: boolean = {true, false}
// and the TYPE true = {true}
// and the TYPE false = {false}

export type _Null_ = null;
export type _Undefined_ = undefined;
export type _Null_Undefined_ = null | undefined;
export type _Zero_ = 0;
export type _One_ = 0;

export type Empty = never;
export type _True_ = true;
export type _False_ = false;
export type _True_False_ = boolean;

/** returns {true} or {false} */
export type EQ<A extends boolean, B extends boolean> = [A] extends [B] ? ([B] extends [A] ? true : false) : false

/** returns {true} or {false} */
export type ContainsTrue<X extends boolean> = X extends false ? false : true;
/** returns {true} or {false} */
export type ContainsFalse<X extends boolean> = X extends true ? false : true;
/** returns {true} or {false} */
export type ContainsBoth<X extends boolean> = X extends true ? (X extends false ? true : false) : false;


export type IsEmtpy<X extends boolean> = EQ<X, never>; // {}
export type IsTrue<X extends boolean> = EQ<X, true>; // {true}
export type IsFalse<X extends boolean> = EQ<X, false>; // {false}
export type IsBool<X extends boolean> = EQ<X, boolean>; // {true, false}


/** returns {true} or {false} or {true, false} */
export type Not<X extends boolean> = X extends false ? (X extends true ? boolean : true) : false;
export type And<A extends boolean, B extends boolean> =
    ContainsBoth<A> extends true ? boolean :
    ContainsBoth<B> extends true ? boolean :
    ContainsFalse<A> extends true ? false :
    ContainsFalse<B> extends true ? false :
    ContainsTrue<A> extends true ? true :
    ContainsTrue<B> extends true ? true :
    never
export type Or<A extends boolean, B extends boolean> =
    ContainsBoth<A> extends true ? boolean :
    ContainsBoth<B> extends true ? boolean :
    ContainsTrue<A> extends true ? true :
    ContainsTrue<B> extends true ? true :
    IsEmtpy<A> extends true ? never :
    IsEmtpy<B> extends true ? never :
    false
export type XOr<A extends boolean, B extends boolean> =
    ContainsBoth<A> extends true ? boolean :
    ContainsBoth<B> extends true ? boolean :
    Not<EQ<A, B>>;
export type Equivalent<A extends boolean, B extends boolean> = Not<XOr<A, B>>;
