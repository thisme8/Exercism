export function toRna(code: string) {
  return  code.split('').map(complement => {
    switch (complement) {
      case 'G': return 'C';
      case 'C': return 'G';
      case 'T': return 'A';
      case 'A': return 'U';
      default: null;
    } 
  })
  .join('');
} 