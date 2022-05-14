"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TN = void 0;
class TrueNumberType {
    constructor(value) {
        this.value = value;
    }
    static construct(value) {
        return new TrueNumberType(value);
    }
    valueOf() {
        return this.value;
    }
    isInteger() {
        return Number.isInteger(this.value);
    }
    ;
    isPositive() {
        return this.value >= 0;
    }
    isNegative() {
        return this.value <= 0;
    }
    isNotNegative() {
        return this.value > 0;
    }
    isNotPositive() {
        return this.value < 0;
    }
    isZero() {
        return this.value === 0;
    }
    isNotZero() {
        return this.value != 0;
    }
    add(other) {
        return new TrueNumberType(this.value + other.value);
    }
    sub(other) {
        return new TrueNumberType(this.value - other.value);
    }
    /** returns the negative of a then number */
    neg() {
        return new TrueNumberType(this.value * (-1));
    }
    mul(other) {
        return new TrueNumberType(this.value * other.value);
    }
}
function TN(value) {
    return TrueNumberType.construct(value);
}
exports.TN = TN;
class TrueFractionLt0 extends TrueNumberType {
    add(other) {
        return super.add(other);
    }
    sub(other) {
        return super.sub(other);
    }
    neg() {
        return super.neg();
    }
    mul(other) {
        return super.mul(other);
    }
}
class IntegerLt0 extends TrueNumberType {
    add(other) {
        return super.add(other);
    }
    sub(other) {
        return super.sub(other);
    }
    neg() {
        return super.neg();
    }
    mul(other) {
        return super.mul(other);
    }
}
class ZeroSet extends TrueNumberType {
    add(other) {
        return super.add(other);
    }
    sub(other) {
        return super.sub(other);
    }
    neg() {
        return super.neg();
    }
    mul(other) {
        return super.mul(other);
    }
}
class IntegerGt0 extends TrueNumberType {
    add(other) {
        return super.add(other);
    }
    sub(other) {
        return super.sub(other);
    }
    neg() {
        return super.neg();
    }
    mul(other) {
        return super.mul(other);
    }
}
class TrueFractionGt0 extends TrueNumberType {
    add(other) {
        return super.add(other);
    }
    sub(other) {
        return super.sub(other);
    }
    neg() {
        return super.neg();
    }
    mul(other) {
        return super.mul(other);
    }
}
