export class NucleotideCounts {
  static parse(strand) {
    const nucleotides = {
      'A': 0,
      'C': 0,
      'G': 0,
      'T': 0
    }
    
    for (const nucleotide of strand ) {
      if(nucleotide in nucleotides) {
        nucleotides[nucleotide] += 1;
      } else {
        throw new Error('Invalid nucleotide in strand');
      } 
    }

    return Object.values(nucleotides).join(' ');
  }
}
