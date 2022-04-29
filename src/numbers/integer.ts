export class DivisionByZeroException extends Error {
    constructor() {
        super("Can not devide by zero.");
    }
}


type NumberSet = "I" | "R";
type SignSet = "<=0" | ">=0";
type ZeroSet = "=0" | "!=0";

export class TrueNumber<_NumberSet extends NumberSet, _SignSet extends SignSet, _ZeroSet extends ZeroSet>{
    static construct(value: number): R {
        return new TrueNumber(value);
    }

    // without this variables the type inference won't work properly
    private readonly _number_set: _NumberSet | null = null;
    private readonly _sign_set: _SignSet | null = null;
    private readonly _zero_set: _ZeroSet | null = null;

    private constructor(private readonly value: number) { };

    valueOf(): number {
        return this.value;
    }

    isNotZero(): this is TrueNumber<_NumberSet, _SignSet, "!=0"> {
        return this.value !== 0;
    }

    isZero(): this is TrueNumber<_NumberSet, _SignSet, "=0"> {
        return this.value === 0;
    }

    isNotNegative(): this is TrueNumber<_NumberSet, ">=0", "!=0"> {
        return this.isPositiv() && this.isNotZero();
    }

    isNotPositive(): this is TrueNumber<_NumberSet, "<=0", "!=0"> {
        return this.isNegativ() && this.isNotZero();
    }

    isNegativ(): this is TrueNumber<_NumberSet, "<=0", _ZeroSet> {
        return this.value <= 0;
    }

    isPositiv(): this is TrueNumber<_NumberSet, ">=0", _ZeroSet> {
        return this.value >= 0;
    }

    isInteger(): this is TrueNumber<"I", _SignSet, _ZeroSet> {
        return Number.isInteger(this.value);
    }
}


export type Z = TrueNumber<"I", SignSet, ZeroSet>;
export type Z0 = TrueNumber<"I", SignSet, "!=0">;

export type Z_Pos = TrueNumber<"I", ">=0", ZeroSet>;
export type Z0_Pos = TrueNumber<"I", ">=0", "!=0">;
export type N = Z_Pos
export type N0 = Z0_Pos

export type Z_Neg = TrueNumber<"I", "<=0", ZeroSet>;
export type Z0_Neg = TrueNumber<"I", "<=0", "!=0">;


export type R = TrueNumber<NumberSet, SignSet, ZeroSet>;
export type R0 = TrueNumber<NumberSet, SignSet, "!=0">;

export type R_Pos = TrueNumber<NumberSet, ">=0", ZeroSet>;
export type R0_Pos = TrueNumber<NumberSet, ">=0", "!=0">;

export type R_Neg = TrueNumber<NumberSet, "<=0", ZeroSet>;
export type R0_Neg = TrueNumber<NumberSet, "<=0", "!=0">;