import { And, Or } from "../typeCalculus/booleanTypes";
import { Eq, IsSubsetOf } from "../typeCalculus/type-testing";

export type Add<Num0 extends Q, Num1 extends Q> =
    Or<Eq<Num0, Q>, Eq<Num1, Q>> extends true ? Q :
    Or<Eq<Num0, Q0>, Eq<Num1, Q0>> extends true ? Q :
    Eq<Num1, never> extends true ? never :
    Eq<Num1, Zero> extends true ? Num0 :

    And<IsSubsetOf<Num0, Z_Pos>, IsSubsetOf<Num1, Z0_Pos>> extends true ? Z0_Pos :
    And<IsSubsetOf<Num0, Z0_Pos>, IsSubsetOf<Num1, Z_Pos>> extends true ? Z0_Pos :
    And<IsSubsetOf<Num0, Z_Pos>, IsSubsetOf<Num1, Z_Pos>> extends true ? Z_Pos :

    And<IsSubsetOf<Num0, Z_Neg>, IsSubsetOf<Num1, Z0_Neg>> extends true ? Z0_Neg :
    And<IsSubsetOf<Num0, Z0_Neg>, IsSubsetOf<Num1, Z_Neg>> extends true ? Z0_Neg :
    And<IsSubsetOf<Num0, Z_Neg>, IsSubsetOf<Num1, Z_Neg>> extends true ? Z_Neg :
    Z;


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

class TrueRealLt0 extends TrueNumberType {
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
class NaturalLt0 extends TrueNumberType {
    private "in R<0/Z": boolean;
    private "in -N/0": true;
    private "in {0}": boolean;
    private "in N/0": boolean;
    private "in R>0/Z": boolean;

    override add<OtherTNT extends Q>(other: OtherTNT):
        OtherTNT extends Z ? OtherTNT | NaturalLt0 :
        OtherTNT extends Q_Neg ? OtherTNT | NaturalLt0 :
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
class NaturalGt0 extends TrueNumberType {
    private "in R<0/Z": boolean;
    private "in -N/0": boolean;
    private "in {0}": boolean;
    private "in N/0": true;
    private "in R>0/Z": boolean;

    override add<OtherTNT extends Q>(other: OtherTNT):
        OtherTNT extends Z ? OtherTNT | NaturalGt0 :
        OtherTNT extends Q_Pos ? OtherTNT | NaturalGt0 :
        Q;
    override add<OtherTNT extends Q>(other: OtherTNT): Q {
        return super.add(other);
    }
}
class TrueRealGt0 extends TrueNumberType {
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

export type Z = NaturalLt0 | ZeroSet | NaturalGt0;
export type Z0 = NaturalLt0 | NaturalGt0;
export type Z_Pos = ZeroSet | NaturalGt0;
export type N = Z_Pos;
export type N0 = Z0_Pos;

export type Z_Neg = NaturalLt0 | ZeroSet;

export type Z0_Pos = NaturalGt0;
export type Z0_Neg = NaturalLt0;

export type Q = TrueRealLt0 | NaturalLt0 | ZeroSet | NaturalGt0 | TrueRealGt0;
export type Q0 = TrueRealLt0 | NaturalLt0 | NaturalGt0 | TrueRealGt0;
export type Q_Pos = ZeroSet | NaturalGt0 | TrueRealGt0;
export type Q_Neg = TrueRealLt0 | NaturalLt0 | ZeroSet;
export type Q0_Pos = NaturalGt0 | TrueRealGt0;
export type Q0_Neg = TrueRealLt0 | NaturalLt0;

export type Zero = ZeroSet;
export type EmptyNumberSet = never;
