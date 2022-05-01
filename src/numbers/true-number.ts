import { Eq, typeAssert } from "../typeCalculus/type-testing";

class TrueNumber {
    protected constructor(private readonly value: number) { }

    static construct(value: number): R {
        return new TrueNumber(value) as R;
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
        return this.value <= 0;
    }
}


export function TN(value: number): R {
    return TrueNumber.construct(value);
}

class TrueRealLt0<B extends true> extends TrueNumber {
    private "in R<0/Z": B;
    private "in -N/0": boolean;
    private "in {0}": boolean;
    private "in N/0": boolean;
    private "in R>0/Z": boolean;
}
class NaturalLt0<B extends true> extends TrueNumber {
    private "in R<0/Z": boolean;
    private "in -N/0": B;
    private "in {0}": boolean;
    private "in N/0": boolean;
    private "in R>0/Z": boolean;
}
class ZeroSet<B extends true> extends TrueNumber {
    private "in R<0/Z": boolean;
    private "in -N/0": boolean;
    private "in {0}": B;
    private "in N/0": boolean;
    private "in R>0/Z": boolean;
}
class NaturalGt0<B extends true> extends TrueNumber {
    private "in R<0/Z": boolean;
    private "in -N/0": boolean;
    private "in {0}": boolean;
    private "in N/0": B;
    private "in R>0/Z": boolean;
}
class TrueRealGt0<B extends true> extends TrueNumber {
    private "in R<0/Z": boolean;
    private "in -N/0": boolean;
    private "in {0}": boolean;
    private "in N/0": boolean;
    private "in R>0/Z": B;

}

export type Z = NaturalLt0<true> | ZeroSet<true> | NaturalGt0<true>;
export type Z0 = NaturalLt0<true> | NaturalGt0<true>;
export type Z_Pos = ZeroSet<true> | NaturalGt0<true>;
export type N = Z_Pos;
export type N0 = Z0_Pos;

export type Z_Neg = NaturalLt0<true> | ZeroSet<true>;

export type Z0_Pos = NaturalGt0<true>;
export type Z0_Neg = NaturalLt0<true>;

export type R = TrueRealLt0<true> | NaturalLt0<true> | ZeroSet<true> | NaturalGt0<true> | TrueRealGt0<true>;
export type R0 = TrueRealLt0<true> | NaturalLt0<true> | NaturalGt0<true> | TrueRealGt0<true>;
export type R_Pos = ZeroSet<true> | NaturalGt0<true> | TrueRealGt0<true>;
export type R_Neg = TrueRealLt0<true> | NaturalLt0<true> | ZeroSet<true>;
export type R0_Pos = NaturalGt0<true> | TrueRealGt0<true>;
export type R0_Neg = TrueRealLt0<true> | NaturalLt0<true>;

export type Zero = ZeroSet<true>;
export type EmptyNumberSet = never;
