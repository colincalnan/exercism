//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (sequence) => {
  if (!sequence) return []; 

  const mapping = [
    ['Methionine', ['AUG']],
    ['Phenylalanine', ['UUU', 'UUC']],
    ['Leucine', ['UUA', 'UUG']],
    ['Serine', ['UCU', 'UCC', 'UCA', 'UCG']],
    ['Tyrosine', ['UAU', 'UAC']],
    ['Cysteine', ['UGU', 'UGC']],
    ['Tryptophan', ['UGG']],
  ];

  const stopCodons = ['UAA', 'UAG', 'UGA'];

  let start = 0; 
  let end = 3;
  const gap = 3;
  let codons = [];
  let proteins = [];

  do {
    codons.push(sequence.slice(start, end));
    start += gap;
    end += gap;
  }
  while (start < sequence.length);
  
  for (let codon of codons) {
    if (stopCodons.includes(codon)) {
      break;
    }

    const index = mapping.findIndex(arr => arr[1].includes(codon));
    
    if(index >= 0) {
      proteins.push(mapping[index][0])
    } else if (index == -1) {
      throw new Error('Invalid codon');
    }
  }
  
  return proteins;
};