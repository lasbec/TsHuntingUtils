import { typeAssert, Eq, IsSubsetOf } from "../src/typeCalculus/type-testing";


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
typeAssert<IsSubsetOf<Intersection, Expected>>(false) // <- this one is not what I would expect
// CURIO 2:
typeAssert<Eq<Intersection[5], "not in R<0/Z" | "not in -N/0" | "not in {0}" | "in N/0" | "not in N/0" | "in R>0/Z" | "not in R>0/Z">>(true);
typeAssert<Eq<Intersection[6], "not in R<0/Z" | "not in -N/0" | "not in {0}" | "in N/0" | "not in N/0" | "in R>0/Z" | "not in R>0/Z">>(true);
typeAssert<Eq<Intersection[7], "not in R<0/Z" | "not in -N/0" | "not in {0}" | "in N/0" | "not in N/0" | "in R>0/Z" | "not in R>0/Z">>(true);
typeAssert<Eq<Intersection[8], "not in R<0/Z" | "not in -N/0" | "not in {0}" | "in N/0" | "not in N/0" | "in R>0/Z" | "not in R>0/Z">>(true);
typeAssert<Eq<Intersection[9849654], "not in R<0/Z" | "not in -N/0" | "not in {0}" | "in N/0" | "not in N/0" | "in R>0/Z" | "not in R>0/Z">>(true);
// CURIO 3:
typeAssert<Eq<Intersection, [
    "not in R<0/Z",
    "not in -N/0",
    "not in {0}",
    "in N/0" | "not in N/0",
    "in R>0/Z" | "not in R>0/Z",
    ...("not in R<0/Z" | "not in -N/0" | "not in {0}" | "in N/0" | "not in N/0" | "in R>0/Z" | "not in R>0/Z")[]]>>(false);




// Testing other subset direction
typeAssert<IsSubsetOf<Expected, Intersection>>(true)


// pairwise comparison 
typeAssert<Eq<Intersection[0], Expected[0]>>(true);
typeAssert<Eq<Intersection[1], Expected[1]>>(true);
typeAssert<Eq<Intersection[2], Expected[2]>>(true);
typeAssert<Eq<Intersection[3], Expected[3]>>(true);
typeAssert<Eq<Intersection[4], Expected[4]>>(true);

// Testing each single entry of the Intersection individual
typeAssert<Eq<Intersection[0], never>>(false);
typeAssert<Eq<Intersection[1], never>>(false);
typeAssert<Eq<Intersection[2], never>>(false);
typeAssert<Eq<Intersection[3], never>>(false);
typeAssert<Eq<Intersection[4], never>>(false);

typeAssert<Eq<Intersection[0], "in R<0/Z" | "not in R<0/Z">>(false)
typeAssert<Eq<Intersection[1], "in -N/0" | "not in -N/0">>(false)
typeAssert<Eq<Intersection[2], "in {0}" | "not in {0}">>(false)
typeAssert<Eq<Intersection[3], "in N/0" | "not in N/0">>(true)
typeAssert<Eq<Intersection[4], "in R>0/Z" | "not in R>0/Z">>(true)

typeAssert<Eq<Intersection[0], "not in R<0/Z">>(true)
typeAssert<Eq<Intersection[1], "not in -N/0">>(true)
typeAssert<Eq<Intersection[2], "not in {0}">>(true)
typeAssert<Eq<Intersection[3], "not in N/0">>(false)
typeAssert<Eq<Intersection[4], "not in R>0/Z">>(false)


typeAssert<Eq<Intersection[0], "in R<0/Z">>(false)
typeAssert<Eq<Intersection[1], "in -N/0">>(false)
typeAssert<Eq<Intersection[2], "in {0}">>(false)
typeAssert<Eq<Intersection[3], "in N/0">>(false)
typeAssert<Eq<Intersection[4], "in R>0/Z">>(false)


// Testing each single entry of the Expected result individual
typeAssert<Eq<Expected[0], never>>(false);
typeAssert<Eq<Expected[1], never>>(false);
typeAssert<Eq<Expected[2], never>>(false);
typeAssert<Eq<Expected[3], never>>(false);
typeAssert<Eq<Expected[4], never>>(false);

typeAssert<Eq<Expected[0], "in R<0/Z" | "not in R<0/Z">>(false)
typeAssert<Eq<Expected[1], "in -N/0" | "not in -N/0">>(false)
typeAssert<Eq<Expected[2], "in {0}" | "not in {0}">>(false)
typeAssert<Eq<Expected[3], "in N/0" | "not in N/0">>(true)
typeAssert<Eq<Expected[4], "in R>0/Z" | "not in R>0/Z">>(true)

typeAssert<Eq<Expected[0], "not in R<0/Z">>(true)
typeAssert<Eq<Expected[1], "not in -N/0">>(true)
typeAssert<Eq<Expected[2], "not in {0}">>(true)
typeAssert<Eq<Expected[3], "not in N/0">>(false)
typeAssert<Eq<Expected[4], "not in R>0/Z">>(false)

typeAssert<Eq<Expected[0], "in R<0/Z">>(false)
typeAssert<Eq<Expected[1], "in -N/0">>(false)
typeAssert<Eq<Expected[2], "in {0}">>(false)
typeAssert<Eq<Expected[3], "in N/0">>(false)
typeAssert<Eq<Expected[4], "in R>0/Z">>(false)