import { typeAssertSubset, typeAssertEq } from "../src/typeCalculus/type-testing";


type Intersection = [
    "not in R<0/Z",
    "not in -N/0",
    "in {0}" | "not in {0}",
    "in N/0" | "not in N/0",
    "in R>0/Z" | "not in R>0/Z"
] & [
    "in R<0/Z" | "not in R<0/Z",
    "in -N/0" | "not in -N/0",
    "not in {0}",
    "in N/0" | "not in N/0",
    "in R>0/Z" | "not in R>0/Z"
]
type Expected = [
    "not in R<0/Z",
    "not in -N/0",
    "not in {0}",
    "in N/0" | "not in N/0",
    "in R>0/Z" | "not in R>0/Z"
]


// The following Curios are behavior of the typesystem  that I hadn't expeced
// CURIO 1:
typeAssertSubset<Intersection, Expected>(false) // <- this one is not what I would expect
// CURIO 2:
typeAssertEq<Intersection[5], "not in R<0/Z" | "not in -N/0" | "not in {0}" | "in N/0" | "not in N/0" | "in R>0/Z" | "not in R>0/Z">(true);
typeAssertEq<Intersection[6], "not in R<0/Z" | "not in -N/0" | "not in {0}" | "in N/0" | "not in N/0" | "in R>0/Z" | "not in R>0/Z">(true);
typeAssertEq<Intersection[7], "not in R<0/Z" | "not in -N/0" | "not in {0}" | "in N/0" | "not in N/0" | "in R>0/Z" | "not in R>0/Z">(true);
typeAssertEq<Intersection[8], "not in R<0/Z" | "not in -N/0" | "not in {0}" | "in N/0" | "not in N/0" | "in R>0/Z" | "not in R>0/Z">(true);
typeAssertEq<Intersection[9849654], "not in R<0/Z" | "not in -N/0" | "not in {0}" | "in N/0" | "not in N/0" | "in R>0/Z" | "not in R>0/Z">(true);
// CURIO 3:
typeAssertEq<Intersection, [
    "not in R<0/Z",
    "not in -N/0",
    "not in {0}",
    "in N/0" | "not in N/0",
    "in R>0/Z" | "not in R>0/Z",
    ...("not in R<0/Z" | "not in -N/0" | "not in {0}" | "in N/0" | "not in N/0" | "in R>0/Z" | "not in R>0/Z")[]]>(false);




// Testing other subset direction
typeAssertSubset<Expected, Intersection>(true)


// pairwise comparison 
typeAssertEq<Intersection[0], Expected[0]>(true);
typeAssertEq<Intersection[1], Expected[1]>(true);
typeAssertEq<Intersection[2], Expected[2]>(true);
typeAssertEq<Intersection[3], Expected[3]>(true);
typeAssertEq<Intersection[4], Expected[4]>(true);

// Testing each single entry of the Intersection individual
typeAssertEq<Intersection[0], never>(false);
typeAssertEq<Intersection[1], never>(false);
typeAssertEq<Intersection[2], never>(false);
typeAssertEq<Intersection[3], never>(false);
typeAssertEq<Intersection[4], never>(false);

typeAssertEq<Intersection[0], "in R<0/Z" | "not in R<0/Z">(false)
typeAssertEq<Intersection[1], "in -N/0" | "not in -N/0">(false)
typeAssertEq<Intersection[2], "in {0}" | "not in {0}">(false)
typeAssertEq<Intersection[3], "in N/0" | "not in N/0">(true)
typeAssertEq<Intersection[4], "in R>0/Z" | "not in R>0/Z">(true)

typeAssertEq<Intersection[0], "not in R<0/Z">(true)
typeAssertEq<Intersection[1], "not in -N/0">(true)
typeAssertEq<Intersection[2], "not in {0}">(true)
typeAssertEq<Intersection[3], "not in N/0">(false)
typeAssertEq<Intersection[4], "not in R>0/Z">(false)


typeAssertEq<Intersection[0], "in R<0/Z">(false)
typeAssertEq<Intersection[1], "in -N/0">(false)
typeAssertEq<Intersection[2], "in {0}">(false)
typeAssertEq<Intersection[3], "in N/0">(false)
typeAssertEq<Intersection[4], "in R>0/Z">(false)


// Testing each single entry of the Expected result individual
typeAssertEq<Expected[0], never>(false);
typeAssertEq<Expected[1], never>(false);
typeAssertEq<Expected[2], never>(false);
typeAssertEq<Expected[3], never>(false);
typeAssertEq<Expected[4], never>(false);

typeAssertEq<Expected[0], "in R<0/Z" | "not in R<0/Z">(false)
typeAssertEq<Expected[1], "in -N/0" | "not in -N/0">(false)
typeAssertEq<Expected[2], "in {0}" | "not in {0}">(false)
typeAssertEq<Expected[3], "in N/0" | "not in N/0">(true)
typeAssertEq<Expected[4], "in R>0/Z" | "not in R>0/Z">(true)

typeAssertEq<Expected[0], "not in R<0/Z">(true)
typeAssertEq<Expected[1], "not in -N/0">(true)
typeAssertEq<Expected[2], "not in {0}">(true)
typeAssertEq<Expected[3], "not in N/0">(false)
typeAssertEq<Expected[4], "not in R>0/Z">(false)

typeAssertEq<Expected[0], "in R<0/Z">(false)
typeAssertEq<Expected[1], "in -N/0">(false)
typeAssertEq<Expected[2], "in {0}">(false)
typeAssertEq<Expected[3], "in N/0">(false)
typeAssertEq<Expected[4], "in R>0/Z">(false)