import { Q, TN } from "../TrueNumbers/TrueNumberType";

type UnitString = "m"

class Length<ThisUnit extends UnitString = UnitString> {
    constructor(private readonly value: Q, private readonly unit: ThisUnit) { }

    add(other: Length): Length {
        const sum = this.value.add(other.value);
        return new Length(sum, "m");
    }

    eq(other: Length): boolean {
        return this.value.eq(other.value);
    }
}

export function LEN(value: Q | number, unit: UnitString): Length {
    if (typeof value === "number") return new Length(TN(value), unit);
    return new Length(value, unit);
}

export class Meter extends Length<"m"> {
}