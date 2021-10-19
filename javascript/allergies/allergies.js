/**
 * Using learning from @slaymance's solution and elsewhere, I tried to figure this out
 * Lets look at Binary where Bits are represented in powers of 2 (2^0 = 1, 2^1 = 2, 2^2 = 4 and so on)
 * Conveniently our allergies are also powers of 2 so they can represent bits
 * If a bit is set to 1, then an allergy is present
 * 
 * Let's take Allergies(53), how is this written in binary?
 * 
 * 32  16  8  4  2  1
 * ------------------
 * 1   1   0  1  0  1  = 53 (32 + 16 + 4 + 1)
 * 
 * We can quickly see which bit is set, so in this case the allergies would be
 * [eggs(1), shellfish(4), tomatoes(16) and chocolate(32)]
 * 
 * To do this kind of binary operation, we must use the concepts of of bitwise SHIFT RIGHT and bitwise AND
 * 
 * Let's take the number 53 and Shift Right for the first item in our allergy array
 * 
 * 110101 >> 0 = 110101
 * 
 * and then we do a bitwise AND, 110101 & 1
 * 
 * 110101 &
 * 000001
 * ------
 * 000001 = 1 === TRUE
 * 
 * Our first allergy array item ALLERGENS[0] (eggs) is present in our allergy number of 53
 * 
 * We then loop through the array index doing the same thing each time 
 * 
 * 110101 >> 2 = 001101
 * 
 * 001101 &
 * 000001
 * ------
 * 000001 = 1 === TRUE so ALLERGENS[2] === TRUE (shellfish)
 * 
 * one more time
 * 
 * 110101 >> 3 = 000110
 * 
 * 000110 &
 * 000001
 * ------
 * 000000 = 0 == FALSE so ALLERGENS[3] === FALSE (strawberries)
 * 
 * I may need to be corrected, but this is my understanding of how to use bitwise operators to solve this
 */

export class Allergies {
  constructor(score) {
    this.score = score;
    this.ALLERGENS = [
      'eggs',
      'peanuts',
      'shellfish',
      'strawberries',
      'tomatoes',
      'chocolate',
      'pollen',
      'cats'
    ];
  }

  list() {
    return this.ALLERGENS.filter((_, i) => this.score >> i & 1);
  }

  allergicTo(allergen) {
    return this.list().includes(allergen);
  }
}
