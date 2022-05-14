import { Contains } from "../../src/TypeProcessing/ArrayOperations";
import { typeAssert } from "../../src/TypeProcessing/TypeAsserting";

typeAssert<Contains<number, [1, 2, 15], 15>>(true);
typeAssert<Contains<number | string, [1, "iae", 15], "a">>(false);
typeAssert<Contains<number | string, [1, never, 15], never>>(true);