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
