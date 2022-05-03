class TrueNumberType {
    protected constructor(private readonly value: number) { }

    static construct(value: number): R {
        return new TrueNumberType(value) as R;
    }


    valueOf(): number {
        return this.value;
    }

    isInteger(): this is Z {
        return Number.isInteger(this.value);
    };

    isPositive(): this is R_Pos {
        return this.value >= 0;
    }

    isNegative(): this is R_Neg {
        return this.value <= 0;
    }

    isNotNegative(): this is R0_Pos {
        return this.value > 0;
    }

    isNotPositive(): this is R0_Neg {
        return this.value < 0;
    }

    isZero(): this is Zero {
        return this.value === 0;
    }

    isNotZero(): this is R0 {
        return this.value != 0;
    }

    add<OtherTNT extends R>(other: OtherTNT): R {
        return new TrueNumberType(this.value + other.value) as R;
    }
}


export function TN(value: number): R {
    return TrueNumberType.construct(value);
}

class TrueRealLt0 extends TrueNumberType {
    private "in R<0/Z": true;
    private "in -N/0": boolean;
    private "in {0}": boolean;
    private "in N/0": boolean;
    private "in R>0/Z": boolean;

    override add<OtherTNT extends R>(other: OtherTNT): OtherTNT extends R_Neg ? R0_Neg : R;
    override add<OtherTNT extends R>(other: OtherTNT): R {
        return super.add(other);
    }
}
class NaturalLt0 extends TrueNumberType {
    private "in R<0/Z": boolean;
    private "in -N/0": true;
    private "in {0}": boolean;
    private "in N/0": boolean;
    private "in R>0/Z": boolean;

    override add<OtherTNT extends R>(other: OtherTNT):
        OtherTNT extends Z ? OtherTNT | NaturalLt0 :
        OtherTNT extends R_Neg ? OtherTNT | NaturalLt0 :
        R;
    override add<OtherTNT extends R>(other: OtherTNT): R {
        return super.add(other);
    }
}
class ZeroSet extends TrueNumberType {
    private "in R<0/Z": boolean;
    private "in -N/0": boolean;
    private "in {0}": true;
    private "in N/0": boolean;
    private "in R>0/Z": boolean;

    override add<OtherTNT extends R>(other: OtherTNT): OtherTNT;
    override add<OtherTNT extends R>(other: OtherTNT): R {
        return super.add(other);
    }
}
class NaturalGt0 extends TrueNumberType {
    private "in R<0/Z": boolean;
    private "in -N/0": boolean;
    private "in {0}": boolean;
    private "in N/0": true;
    private "in R>0/Z": boolean;

    override add<OtherTNT extends R>(other: OtherTNT):
        OtherTNT extends Z ? OtherTNT | NaturalGt0 :
        OtherTNT extends R_Pos ? OtherTNT | NaturalGt0 :
        R;
    override add<OtherTNT extends R>(other: OtherTNT): R {
        return super.add(other);
    }
}
class TrueRealGt0 extends TrueNumberType {
    private "in R<0/Z": boolean;
    private "in -N/0": boolean;
    private "in {0}": boolean;
    private "in N/0": boolean;
    private "in R>0/Z": true;

    override add<OtherTNT extends R>(other: OtherTNT): OtherTNT extends R_Pos ? R0_Pos : R;
    override add<OtherTNT extends R>(other: OtherTNT): R {
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

export type R = TrueRealLt0 | NaturalLt0 | ZeroSet | NaturalGt0 | TrueRealGt0;
export type R0 = TrueRealLt0 | NaturalLt0 | NaturalGt0 | TrueRealGt0;
export type R_Pos = ZeroSet | NaturalGt0 | TrueRealGt0;
export type R_Neg = TrueRealLt0 | NaturalLt0 | ZeroSet;
export type R0_Pos = NaturalGt0 | TrueRealGt0;
export type R0_Neg = TrueRealLt0 | NaturalLt0;

export type Zero = ZeroSet;
export type EmptyNumberSet = never;
