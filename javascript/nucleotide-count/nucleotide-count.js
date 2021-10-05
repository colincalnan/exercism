export class NucleotideCounts {
  static parse(strand) {
    const nucleotides = {
      'A': 0,
      'C': 0,
      'G': 0,
      'T': 0
    }
    
    for (const nucleotide of strand ) {
      if(typeof nucleotides[nucleotide] === 'undefined') throw new Error('Invalid nucleotide in strand');
      nucleotides[nucleotide] += 1;
    }

    return Object.values(nucleotides).join(' ');
  }
}
