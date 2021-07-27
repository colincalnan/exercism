const complements = new Map([
  ['G', 'C'],
  ['C', 'G'],
  ['T', 'A'],
  ['A', 'U'],
  ['', '']
]);

export const toRna = dnaStrand => [...dnaStrand].map(nucleotide => complements.get(nucleotide)).join('');
