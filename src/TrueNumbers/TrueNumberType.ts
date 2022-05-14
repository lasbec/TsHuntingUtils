import { And, Or } from "../TypeProcessing/BooleanOperations";
import { Eq, IsSubsetOf } from "../TypeProcessing/SimpleBasics";

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




export class DivisionByZero { }
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

    sub<OtherTNT extends Q>(other: OtherTNT): Q {
        return new TrueNumberType(this.value - other.value) as Q;
    }

    /** returns the negative of a then number */
    neg(): Q {
        return new TrueNumberType(this.value * (-1)) as Q;
    }

    mul<OtherTNT extends Q>(other: OtherTNT): Q {
        return new TrueNumberType(this.value * other.value) as Q
    }

    div<OtherTNT extends Q>(other: OtherTNT): Q | DivisionByZero {
        if (this.value === 0) return new DivisionByZero();
        return new TrueNumberType(this.value / other.value) as Q
    }

    reciprocal(): Q | DivisionByZero {
        if (this.value === 0) return new DivisionByZero();
        return new TrueNumberType(1 / this.value);
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

    override add<OtherTNT extends Q>(other: OtherTNT): Add<TrueFractionLt0, OtherTNT>;
    override add<OtherTNT extends Q>(other: OtherTNT): Q {
        return super.add(other);
    }

    override sub<OtherTNT extends Q>(other: OtherTNT): Sub<TrueFractionLt0, OtherTNT>;
    override sub<OtherTNT extends Q>(other: OtherTNT): Q {
        return super.sub(other);
    }

    override neg(): TrueFractionGt0;
    override neg(): Q {
        return super.neg();
    }

    override mul<OtherTNT extends Q>(other: OtherTNT): Mul<TrueFractionLt0, OtherTNT>;
    override mul<OtherTNT extends Q>(other: OtherTNT): Q {
        return super.mul(other);
    }

    override div<OtherTNT extends Q>(other: OtherTNT): Div<TrueFractionLt0, OtherTNT>;
    override div<OtherTNT extends Q>(other: OtherTNT): Q | DivisionByZero {
        return super.div(other);
    }

    override reciprocal(): TrueFractionLt0 | IntegerLt0;
    override reciprocal(): Q | DivisionByZero {
        return super.reciprocal();
    }
}
class IntegerLt0 extends TrueNumberType {
    private "in R<0/Z": boolean;
    private "in -N/0": true;
    private "in {0}": boolean;
    private "in N/0": boolean;
    private "in R>0/Z": boolean;

    override add<OtherTNT extends Q>(other: OtherTNT): Add<IntegerLt0, OtherTNT>;
    override add<OtherTNT extends Q>(other: OtherTNT): Q {
        return super.add(other);
    }

    override sub<OtherTNT extends Q>(other: OtherTNT): Sub<IntegerLt0, OtherTNT>;
    override sub<OtherTNT extends Q>(other: OtherTNT): Q {
        return super.sub(other);
    }

    override neg(): IntegerGt0;
    override neg(): Q {
        return super.neg();
    }

    override mul<OtherTNT extends Q>(other: OtherTNT): Mul<IntegerLt0, OtherTNT>;
    override mul<OtherTNT extends Q>(other: OtherTNT): Q {
        return super.mul(other);
    }

    override div<OtherTNT extends Q>(other: OtherTNT): Div<IntegerLt0, OtherTNT>;
    override div<OtherTNT extends Q>(other: OtherTNT): Q | DivisionByZero {
        return super.div(other);
    }

    override reciprocal(): TrueFractionLt0 | IntegerLt0;
    override reciprocal(): Q | DivisionByZero {
        return super.reciprocal();
    }
}

class ZeroSet extends TrueNumberType {
    private "in R<0/Z": boolean;
    private "in -N/0": boolean;
    private "in {0}": true;
    private "in N/0": boolean;
    private "in R>0/Z": boolean;

    override add<OtherTNT extends Q>(other: OtherTNT): Add<Zero, OtherTNT>;
    override add<OtherTNT extends Q>(other: OtherTNT): Q {
        return super.add(other);
    }

    override sub<OtherTNT extends Q>(other: OtherTNT): Sub<Zero, OtherTNT>;
    override sub<OtherTNT extends Q>(other: OtherTNT): Q {
        return super.sub(other);
    }

    override neg(): ZeroSet;
    override neg(): Q {
        return super.neg();
    }

    override mul<OtherTNT extends Q>(other: OtherTNT): Mul<Zero, OtherTNT>;
    override mul<OtherTNT extends Q>(other: OtherTNT): Q {
        return super.mul(other);
    }

    override div<OtherTNT extends Q>(other: OtherTNT): Div<Zero, OtherTNT>;
    override div<OtherTNT extends Q>(other: OtherTNT): Q | DivisionByZero {
        return super.div(other);
    }

    override reciprocal(): DivisionByZero;
    override reciprocal(): Q | DivisionByZero {
        return super.reciprocal();
    }
}

class IntegerGt0 extends TrueNumberType {
    private "in R<0/Z": boolean;
    private "in -N/0": boolean;
    private "in {0}": boolean;
    private "in N/0": true;
    private "in R>0/Z": boolean;

    override add<OtherTNT extends Q>(other: OtherTNT): Add<IntegerGt0, OtherTNT>;
    override add<OtherTNT extends Q>(other: OtherTNT): Q {
        return super.add(other);
    }

    override sub<OtherTNT extends Q>(other: OtherTNT): Sub<IntegerLt0, OtherTNT>;
    override sub<OtherTNT extends Q>(other: OtherTNT): Q {
        return super.sub(other);
    }

    override neg(): IntegerLt0;
    override neg(): Q {
        return super.neg();
    }

    override mul<OtherTNT extends Q>(other: OtherTNT): Mul<IntegerGt0, OtherTNT>;
    override mul<OtherTNT extends Q>(other: OtherTNT): Q {
        return super.mul(other);
    }

    override div<OtherTNT extends Q>(other: OtherTNT): Div<IntegerGt0, OtherTNT>;
    override div<OtherTNT extends Q>(other: OtherTNT): Q | DivisionByZero {
        return super.div(other);
    }

    override reciprocal(): TrueFractionGt0 | IntegerGt0;
    override reciprocal(): Q | DivisionByZero {
        return super.reciprocal();
    }
}
class TrueFractionGt0 extends TrueNumberType {
    private "in R<0/Z": boolean;
    private "in -N/0": boolean;
    private "in {0}": boolean;
    private "in N/0": boolean;
    private "in R>0/Z": true;

    override add<OtherTNT extends Q>(other: OtherTNT): Add<TrueFractionGt0, OtherTNT>;
    override add<OtherTNT extends Q>(other: OtherTNT): Q {
        return super.add(other);
    }

    override sub<OtherTNT extends Q>(other: OtherTNT): Sub<TrueFractionGt0, OtherTNT>;
    override sub<OtherTNT extends Q>(other: OtherTNT): Q {
        return super.sub(other);
    }

    override neg(): TrueFractionLt0;
    override neg(): Q {
        return super.neg();
    }

    override mul<OtherTNT extends Q>(other: OtherTNT): Mul<TrueFractionGt0, OtherTNT>;
    override mul<OtherTNT extends Q>(other: OtherTNT): Q {
        return super.mul(other);
    }

    override div<OtherTNT extends Q>(other: OtherTNT): Div<TrueFractionGt0, OtherTNT>;
    override div<OtherTNT extends Q>(other: OtherTNT): Q | DivisionByZero {
        return super.div(other);
    }

    override reciprocal(): TrueFractionGt0 | IntegerGt0;
    override reciprocal(): Q | DivisionByZero {
        return super.reciprocal();
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
