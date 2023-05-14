const mutant = require('./../lib/mutants.js');

describe('Mutación en secuencia de ADN', () => {
  test('Prueba de mutación horizontal', () => {
    expect(mutant.hasMutation(['AAAAAA', 'CAGTGC', 'TTTTTT', 'AGACGG', 'CCCCCA', 'TGGGGG'])).toBe(true)
  })
  test('Prueba de mutación vertical', () => {
    expect(mutant.hasMutation(['ATGCGA', 'ACGTGA', 'ATATTA', 'AGACGA', 'GCGTCC', 'TCACTG'])).toBe(true)
  })
  test('Prueba de mutación oblicua', () => {
    expect(mutant.hasMutation(['AGGCGA', 'CAGTGC', 'TTAGTT', 'ATAAGG', 'GCTTCA', 'TCATTG'])).toBe(true)
  })
  test('Prueba de mutación mixta', () => {
    expect(mutant.hasMutation(['AAAAGA', 'CAGGAC', 'TTGACT', 'TGTCGG', 'TACTCA', 'TCGCTG'])).toBe(true)
  })
  test('Prueba de no mutación', () => {
     expect(mutant.hasMutation(['ATGCGA','CAGTCC','TTGTGT','AGAAGG','ACCCTA','TCACTG'])).toBe(false)
  })
  test('Prueba con caracteres erroneos', () => {
    expect(() => {
      mutant.hasMutation(['ATGCGA', 'CAZTGC', 'TTAHTT', 'AGAYGG', 'GCGTCA', 'TCACTG'])
    }).toThrow()
  })
})