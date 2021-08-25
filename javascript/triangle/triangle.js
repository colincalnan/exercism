//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    this.sides = sides;
  }

  get isTriangle() {
    return this.sides
      .sort()
      .every((side) => side > 0) && (this.sides[2] <= this.sides[0] + this.sides[1])
  }

  get hasMatchingSides() {
    return this.sides.every((side) => side === this.sides[0]);
  }

  get hasTwoMatchingSides() {
    return this.sides
    .filter((side) => this.sides.filter(n => n === side).length >= 2)
    .length >= 2
  }

  get isEquilateral() {
    return this.isTriangle && this.hasMatchingSides;
  }

  get isIsosceles() {
    return this.isTriangle && this.hasTwoMatchingSides;
  }

  get isScalene() {
    return this.isTriangle && !this.hasMatchingSides && !this.hasTwoMatchingSides
  }
}
