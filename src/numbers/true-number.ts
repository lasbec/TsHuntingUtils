export class DivisionByZeroException extends Error {
    constructor() {
        super("Can not devide by zero.");
    }
}


interface TrueRealLt0<B extends boolean> {
    "in R<0/Z": B;
}
interface NaturalLt0<B extends boolean> {
    "in -N/0": B;
}
interface ZeroSet<B extends boolean> {
    "in {0}": B;
}
interface NaturalGt0<B extends boolean> {
    "in N/0": B;
}
interface TrueRealGt0<B extends boolean> {
    "in R>0/Z": B;
}

export type Z = TrueRealLt0<false> & NaturalLt0<boolean> & ZeroSet<boolean> & NaturalGt0<boolean> & TrueRealGt0<false>;
export type Z0 = TrueRealLt0<false> & NaturalLt0<boolean> & ZeroSet<false> & NaturalGt0<boolean> & TrueRealGt0<false>;
export type Z_Pos = TrueRealLt0<false> & NaturalLt0<false> & ZeroSet<boolean> & NaturalGt0<boolean> & TrueRealGt0<false>;
export type Z_Neg = TrueRealLt0<false> & NaturalLt0<boolean> & ZeroSet<boolean> & NaturalGt0<false> & TrueRealGt0<false>;
export type Z0_Pos = TrueRealLt0<false> & NaturalLt0<false> & ZeroSet<false> & NaturalGt0<boolean> & TrueRealGt0<false>;
export type Z0_Neg = TrueRealLt0<false> & NaturalLt0<boolean> & ZeroSet<false> & NaturalGt0<false> & TrueRealGt0<false>;

export type R = TrueRealLt0<boolean> & NaturalLt0<boolean> & ZeroSet<boolean> & NaturalGt0<boolean> & TrueRealGt0<boolean>;
export type R0 = TrueRealLt0<boolean> & NaturalLt0<boolean> & ZeroSet<false> & NaturalGt0<boolean> & TrueRealGt0<boolean>;
export type R_Pos = TrueRealLt0<false> & NaturalLt0<false> & ZeroSet<boolean> & NaturalGt0<boolean> & TrueRealGt0<boolean>;
export type R_Neg = TrueRealLt0<boolean> & NaturalLt0<boolean> & ZeroSet<boolean> & NaturalGt0<false> & TrueRealGt0<false>;
export type R0_Pos = TrueRealLt0<false> & NaturalLt0<false> & ZeroSet<false> & NaturalGt0<boolean> & TrueRealGt0<boolean>;
export type R0_Neg = TrueRealLt0<boolean> & NaturalLt0<boolean> & ZeroSet<false> & NaturalGt0<false> & TrueRealGt0<false>;

export type Zero = TrueRealLt0<false> & NaturalLt0<false> & ZeroSet<boolean> & NaturalGt0<false> & TrueRealGt0<false>;
export type EmptyNumberSet = TrueRealLt0<false> & NaturalLt0<false> & ZeroSet<false> & NaturalGt0<false> & TrueRealGt0<false>;
