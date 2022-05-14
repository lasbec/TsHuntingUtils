import { And, Or } from "../TypeProcessing/BooleanOperations";
import { Eq, IsSubsetOf } from "../TypeProcessing/SimpleBasics";
import { DivisionByZero, EmptyNumberSet, Q, Q0, Q0_Neg, Q0_Pos, Q_Neg, Q_Pos, Z, Zero } from "./TrueNumberType";

export type Add
    <Num0 extends Q, Num1 extends Q>
    =
    (Or<[Eq<Num0, EmptyNumberSet>, Eq<Num1, EmptyNumberSet>]> extends true ? EmptyNumberSet : Q)
    &
    (Eq<Num0, Zero> extends true ? Num1 : Q)
    &
    (Eq<Num1, Zero> extends true ? Num0 : Q)
    &
    (And<[IsSubsetOf<Num0, Q0_Pos>, IsSubsetOf<Num1, Q_Pos>]> extends true ? Q0_Pos : Q)
    &
    (And<[IsSubsetOf<Num0, Q_Pos>, IsSubsetOf<Num1, Q0_Pos>]> extends true ? Q0_Pos : Q)
    &
    (And<[IsSubsetOf<Num0, Q_Pos>, IsSubsetOf<Num1, Q_Pos>]> extends true ? Q_Pos : Q)
    &
    (And<[IsSubsetOf<Num0, Q0_Neg>, IsSubsetOf<Num1, Q_Neg>]> extends true ? Q0_Neg : Q)
    &
    (And<[IsSubsetOf<Num0, Q_Neg>, IsSubsetOf<Num1, Q0_Neg>]> extends true ? Q0_Neg : Q)
    &
    (And<[IsSubsetOf<Num0, Q_Neg>, IsSubsetOf<Num1, Q_Neg>]> extends true ? Q_Neg : Q)
    &
    (And<[IsSubsetOf<Num0, Z>, IsSubsetOf<Num1, Z>]> extends true ? Z : Q)


export type Sub
    <Num0 extends Q, Num1 extends Q>
    =
    Add<Num0, Neg<Num1>>

export type Neg
    <Num extends Q>
    =
    ReturnType<Num["neg"]>;



export type Mul
    <Num0 extends Q, Num1 extends Q>
    =
    (Or<[Eq<Num0, EmptyNumberSet>, Eq<Num1, EmptyNumberSet>]> extends true ? EmptyNumberSet : Q)
    &
    (Or<[Eq<Zero, Num0>, Eq<Zero, Num1>]> extends true ? Zero : Q)
    &
    (Or<[IsSubsetOf<Zero, Num0>, IsSubsetOf<Zero, Num1>]> extends true ? Q : Q0)
    &
    (And<[IsSubsetOf<Num0, Q_Pos>, IsSubsetOf<Num1, Q_Pos>]> extends true ? Q_Pos : Q)
    &
    (And<[IsSubsetOf<Num0, Q_Neg>, IsSubsetOf<Num1, Q_Neg>]> extends true ? Q_Pos : Q)
    &
    (And<[IsSubsetOf<Num0, Q_Pos>, IsSubsetOf<Num1, Q_Neg>]> extends true ? Q_Neg : Q)
    &
    (And<[IsSubsetOf<Num0, Q_Neg>, IsSubsetOf<Num1, Q_Pos>]> extends true ? Q_Neg : Q)
    &
    (And<[IsSubsetOf<Num0, Z>, IsSubsetOf<Num1, Z>]> extends true ? Z : Q)



export type Div
    <Num0 extends Q, Num1 extends Q>
    =
    Or<[Eq<Num0, EmptyNumberSet>, Eq<Num1, EmptyNumberSet>]> extends true ? EmptyNumberSet : (
        (IsSubsetOf<Zero, Num1> extends true ? DivisionByZero : never)
        |
        &
        (Or<[Eq<Zero, Num0>, Eq<Zero, Num1>]> extends true ? Zero : Q)
        &
        (Or<[IsSubsetOf<Zero, Num0>, IsSubsetOf<Zero, Num1>]> extends true ? Q : Q0)
        &
        (And<[IsSubsetOf<Num0, Q_Pos>, IsSubsetOf<Num1, Q_Pos>]> extends true ? Q_Pos : Q)
        &
        (And<[IsSubsetOf<Num0, Q_Neg>, IsSubsetOf<Num1, Q_Neg>]> extends true ? Q_Pos : Q)
        &
        (And<[IsSubsetOf<Num0, Q_Pos>, IsSubsetOf<Num1, Q_Neg>]> extends true ? Q_Neg : Q)
        &
        (And<[IsSubsetOf<Num0, Q_Neg>, IsSubsetOf<Num1, Q_Pos>]> extends true ? Q_Neg : Q)
    )

export type Reciprocal
    <Num extends Q>
    =
    ReturnType<Num["reciprocal"]>;