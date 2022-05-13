import { And, Not, Or } from "../typeCalculus/booleanTypes";
import { Eq, IsSubsetOf } from "../typeCalculus/SimpleBasics";
import { typeAssert } from "../typeCalculus/type-testing";

// Add<A | B, C | D> == Add<A, C|D>  | Add<B, C | D>
export type Add<Num0 extends Q, Num1 extends Q> =
    TrueFractionLt0PartOfAddition<Num0, Num1> |
    IntegerLt0PartOfAddition<Num0, Num1> |
    ZeroPartOfAddition<Num0, Num1> |
    IntegerGt0PartOfAddition<Num0, Num1> |
    TrueFractionGt0PartOfAddition<Num0, Num1>


// -------------------------------------------------------------------------------------------
typeAssert<AdditionContainsTrueFractionLt0<Z, Q_Pos>>(true);
type AdditionContainsTrueFractionLt0<Num0 extends Q, Num1 extends Q> =
    And<[
        Not<Eq<Num0, EmptyNumberSet>>,
        Not<Eq<Num1, EmptyNumberSet>>,
        Or<[
            IsSubsetOf<TrueFractionLt0, Num0>,
            IsSubsetOf<TrueFractionLt0, Num1>,
            IsSubsetOf<IntegerLt0, Num0>,
            IsSubsetOf<IntegerLt0, Num1>
        ]>
    ]>;
type TrueFractionLt0PartOfAddition<Num0 extends Q, Num1 extends Q> =
    AdditionContainsTrueFractionLt0<Num0, Num1> extends true ? TrueFractionLt0 : EmptyNumberSet;
// -------------------------------------------------------------------------------------------
type AdditionContainsIntegerLt0<Num0 extends Q, Num1 extends Q> =
    And<[
        Not<Eq<Num0, EmptyNumberSet>>,
        Not<Eq<Num1, EmptyNumberSet>>,
        Or<[
            IsSubsetOf<IntegerLt0, Num0>,
            IsSubsetOf<IntegerLt0, Num1>
        ]>
    ]>;
type IntegerLt0PartOfAddition<Num0 extends Q, Num1 extends Q> =
    AdditionContainsIntegerLt0<Num0, Num1> extends true ? IntegerLt0 : EmptyNumberSet;

// -------------------------------------------------------------------------------------------
type AdditionContainsZero<Num0 extends Q, Num1 extends Q> =
    And<[
        Not<Eq<Num0, EmptyNumberSet>>,
        Not<Eq<Num1, EmptyNumberSet>>,
        Not<
            Or<[
                IsSubsetOf<[Num0, Num1], [Zero, Q0]>,
                IsSubsetOf<[Num0, Num1], [Q0, Zero]>,
                IsSubsetOf<[Num0, Num1], [Q_Pos, Q0_Pos]>,
                IsSubsetOf<[Num0, Num1], [Q0_Pos, Q_Pos]>,
                IsSubsetOf<[Num0, Num1], [Q_Neg, Q0_Neg]>,
                IsSubsetOf<[Num0, Num1], [Q0_Neg, Q_Neg]>
            ]>
        >
    ]>;
type ZeroPartOfAddition<Num0 extends Q, Num1 extends Q> =
    AdditionContainsZero<Num0, Num1> extends true ? Zero : EmptyNumberSet;
// -------------------------------------------------------------------------------------------
type AdditionContainsIntegerGt0<Num0 extends Q, Num1 extends Q> =
    And<[
        Not<Eq<Num0, EmptyNumberSet>>,
        Not<Eq<Num1, EmptyNumberSet>>,
        Or<[
            IsSubsetOf<IntegerGt0, Num0>,
            IsSubsetOf<IntegerGt0, Num1>
        ]>
    ]>;
type IntegerGt0PartOfAddition<Num0 extends Q, Num1 extends Q> =
    AdditionContainsIntegerGt0<Num0, Num1> extends true ? IntegerGt0 : EmptyNumberSet;
// -------------------------------------------------------------------------------------------
type AdditionContainsTrueFractionGt0<Num0 extends Q, Num1 extends Q> =
    And<[
        Not<Eq<Num0, EmptyNumberSet>>,
        Not<Eq<Num1, EmptyNumberSet>>,
        Or<[
            IsSubsetOf<TrueFractionGt0, Num0>,
            IsSubsetOf<TrueFractionGt0, Num1>
        ]>
    ]>;
type TrueFractionGt0PartOfAddition<Num0 extends Q, Num1 extends Q> =
    AdditionContainsTrueFractionGt0<Num0, Num1> extends true ? TrueFractionGt0 : EmptyNumberSet;


class TrueNumberType {
    protected constructor(private readonly value: number) { }

    static construct(value: number): Q {
        return new TrueNumberType(value) as Q;
    }


    valueOf(): number {
        return this.value;
    }

    isInteger(): this is Z {
        return Number.isInteger(this.value);
    };

    isPositive(): this is Q_Pos {
        return this.value >= 0;
    }

    isNegative(): this is Q_Neg {
        return this.value <= 0;
    }

    isNotNegative(): this is Q0_Pos {
        return this.value > 0;
    }

    isNotPositive(): this is Q0_Neg {
        return this.value < 0;
    }

    isZero(): this is Zero {
        return this.value === 0;
    }

    isNotZero(): this is Q0 {
        return this.value != 0;
    }

    add<OtherTNT extends Q>(other: OtherTNT): Q {
        return new TrueNumberType(this.value + other.value) as Q;
    }
}


export function TN(value: number): Q {
    return TrueNumberType.construct(value);
}

class TrueFractionLt0 extends TrueNumberType {
    private "in R<0/Z": true;
    private "in -N/0": boolean;
    private "in {0}": boolean;
    private "in N/0": boolean;
    private "in R>0/Z": boolean;

    override add<OtherTNT extends Q>(other: OtherTNT): OtherTNT extends Q_Neg ? Q0_Neg : Q;
    override add<OtherTNT extends Q>(other: OtherTNT): Q {
        return super.add(other);
    }
}
class IntegerLt0 extends TrueNumberType {
    private "in R<0/Z": boolean;
    private "in -N/0": true;
    private "in {0}": boolean;
    private "in N/0": boolean;
    private "in R>0/Z": boolean;

    override add<OtherTNT extends Q>(other: OtherTNT):
        OtherTNT extends Z ? OtherTNT | IntegerLt0 :
        OtherTNT extends Q_Neg ? OtherTNT | IntegerLt0 :
        Q;
    override add<OtherTNT extends Q>(other: OtherTNT): Q {
        return super.add(other);
    }
}
class ZeroSet extends TrueNumberType {
    private "in R<0/Z": boolean;
    private "in -N/0": boolean;
    private "in {0}": true;
    private "in N/0": boolean;
    private "in R>0/Z": boolean;

    override add<OtherTNT extends Q>(other: OtherTNT): OtherTNT;
    override add<OtherTNT extends Q>(other: OtherTNT): Q {
        return super.add(other);
    }
}
class IntegerGt0 extends TrueNumberType {
    private "in R<0/Z": boolean;
    private "in -N/0": boolean;
    private "in {0}": boolean;
    private "in N/0": true;
    private "in R>0/Z": boolean;

    override add<OtherTNT extends Q>(other: OtherTNT):
        OtherTNT extends Z ? OtherTNT | IntegerGt0 :
        OtherTNT extends Q_Pos ? OtherTNT | IntegerGt0 :
        Q;
    override add<OtherTNT extends Q>(other: OtherTNT): Q {
        return super.add(other);
    }
}
class TrueFractionGt0 extends TrueNumberType {
    private "in R<0/Z": boolean;
    private "in -N/0": boolean;
    private "in {0}": boolean;
    private "in N/0": boolean;
    private "in R>0/Z": true;

    override add<OtherTNT extends Q>(other: OtherTNT): OtherTNT extends Q_Pos ? Q0_Pos : Q;
    override add<OtherTNT extends Q>(other: OtherTNT): Q {
        return super.add(other);
    }
}

export type Z = IntegerLt0 | ZeroSet | IntegerGt0;
export type Z0 = IntegerLt0 | IntegerGt0;
export type Z_Pos = ZeroSet | IntegerGt0;
export type N = Z_Pos;
export type N0 = Z0_Pos;

export type Z_Neg = IntegerLt0 | ZeroSet;

export type Z0_Pos = IntegerGt0;
export type Z0_Neg = IntegerLt0;

export type Q = TrueFractionLt0 | IntegerLt0 | ZeroSet | IntegerGt0 | TrueFractionGt0;
export type Q0 = TrueFractionLt0 | IntegerLt0 | IntegerGt0 | TrueFractionGt0;
export type Q_Pos = ZeroSet | IntegerGt0 | TrueFractionGt0;
export type Q_Neg = TrueFractionLt0 | IntegerLt0 | ZeroSet;
export type Q0_Pos = IntegerGt0 | TrueFractionGt0;
export type Q0_Neg = TrueFractionLt0 | IntegerLt0;

export type Zero = ZeroSet;
export type EmptyNumberSet = never;
