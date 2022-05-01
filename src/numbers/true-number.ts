import { Eq, typeAssert } from "../typeCalculus/type-testing";


export class DivisionByZeroException extends Error {
    constructor() {
        super("Can not devide by zero.");
    }
}



type SetSignatrue = [
    "in R<0/Z" | "not in R<0/Z",
    "in -N/0" | "not in -N/0",
    "in {0}" | "not in {0}",
    "in N/0" | "not in N/0",
    "in R>0/Z" | "not in R>0/Z"
];

class TrueNumber<
    This_Cond0 extends SetSignatrue[0],
    This_Cond1 extends SetSignatrue[1],
    This_Cond2 extends SetSignatrue[2],
    This_Cond3 extends SetSignatrue[3],
    This_Cond4 extends SetSignatrue[4],
    >{
    static construct(value: number): R {
        return new TrueNumber(value);
    }

    // without this variables the type inference won't work properly
    private readonly cond0: This_Cond0 | null = null;
    private readonly cond1: This_Cond1 | null = null;
    private readonly cond2: This_Cond2 | null = null;
    private readonly cond3: This_Cond3 | null = null;
    private readonly cond4: This_Cond4 | null = null;

    private constructor(private readonly value: number) { };

    valueOf(): number {
        return this.value;
    }

    // GUARDS

    /*   
    isNotZero(): this is TrueNumber<This_Set, This_Sign, never> {
        return this.value !== 0;
    }

    isZero(): this is TrueNumber<This_Set, This_Sign, "=0"> {
        return this.value === 0;
    }

"not in R<0/Z"
"not in -N/0"
"not in {0}"
"in N/0" 
"not in R>0/Z"
    }
  
      isPositiv(): this is TrueNumber<This_Set, ">=0", This_Zero> {
          return this.value >= 0;
        }
        isInteger(): this is TrueNumber<"I", This_Sign, This_Zero> {
            return Number.isInteger(this.value);
        }
        */

    /* // Operators
    add<
        Other_Set extends NumberSet,
        Other_Sign extends SignSet,
        Other_Zero extends ZeroSet
    >(other: TrueNumber<Other_Set, Other_Sign, Other_Zero>)
        : ADD<
            This_Set, Other_Set,
            This_Sign, Other_Sign,
            This_Zero, Other_Zero
        > {
        return new TrueNumber(this.value + other.value);
    } */

}


// Aliasing
export type EmptyNumberSet = TrueNumber<
    "not in R<0/Z",
    "not in -N/0",
    "not in {0}",
    "not in N/0",
    "not in R>0/Z"
>;

export type Zero = TrueNumber<
    "not in R<0/Z",
    "not in -N/0",
    "in {0}" | "not in {0}",
    "not in N/0",
    "not in R>0/Z"
>;

export type Z = TrueNumber<
    "not in R<0/Z",
    "in -N/0" | "not in -N/0",
    "in {0}" | "not in {0}",
    "in N/0" | "not in N/0",
    "not in R>0/Z"
>;
export type Z0 = TrueNumber<
    "not in R<0/Z",
    "in -N/0" | "not in -N/0",
    "not in {0}",
    "in N/0" | "not in N/0",
    "not in R>0/Z"
>;

export type Z_Pos = TrueNumber<
    "not in R<0/Z",
    "not in -N/0",
    "in {0}" | "not in {0}",
    "in N/0" | "not in N/0",
    "not in R>0/Z"
>;
export type Z0_Pos = TrueNumber<
    "not in R<0/Z",
    "not in -N/0",
    "not in {0}",
    "in N/0" | "not in N/0",
    "not in R>0/Z"
>;
export type N = Z_Pos
export type N0 = Z0_Pos

export type Z_Neg = TrueNumber<
    "not in R<0/Z",
    "in -N/0" | "not in -N/0",
    "in {0}" | "not in {0}",
    "not in N/0",
    "not in R>0/Z"
>;
export type Z0_Neg = TrueNumber<
    "not in R<0/Z",
    "in -N/0" | "not in -N/0",
    "not in {0}",
    "not in N/0",
    "not in R>0/Z"
>;


export type R = TrueNumber<
    "in R<0/Z" | "not in R<0/Z",
    "in -N/0" | "not in -N/0",
    "in {0}" | "not in {0}",
    "in N/0" | "not in N/0",
    "in R>0/Z" | "not in R>0/Z"
>;
export type R0 = TrueNumber<
    "in R<0/Z" | "not in R<0/Z",
    "in -N/0" | "not in -N/0",
    "not in {0}",
    "in N/0" | "not in N/0",
    "in R>0/Z" | "not in R>0/Z"
>;

export type R_Pos = TrueNumber<
    "not in R<0/Z",
    "not in -N/0",
    "in {0}" | "not in {0}",
    "in N/0" | "not in N/0",
    "in R>0/Z" | "not in R>0/Z"
>;
export type R0_Pos = TrueNumber<
    "not in R<0/Z",
    "not in -N/0",
    "not in {0}",
    "in N/0" | "not in N/0",
    "in R>0/Z" | "not in R>0/Z"
>;



export type R_Neg = TrueNumber<
    "in R<0/Z" | "not in R<0/Z",
    "in -N/0" | "not in -N/0",
    "in {0}" | "not in {0}",
    "not in N/0",
    "not in R>0/Z"
>;
export type R0_Neg = TrueNumber<
    "in R<0/Z" | "not in R<0/Z",
    "in -N/0" | "not in -N/0",
    "not in {0}",
    "not in N/0",
    "not in R>0/Z"
>;
