// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specimenNum, dna) => {
  return {
    _specimenNum: specimenNum,
    _dna: dna,

    get dna() {
      return this._dna;
    },

    get specimenNum() {
      return this._specimenNum;
    },

    mutate: () => {
      const selectedIndex = Math.floor(Math.random() * dna.length);
      const selectedBase = dna[selectedIndex];
      let newBase = selectedBase;
      while (newBase === selectedBase) newBase = returnRandBase();
      dna[selectedIndex] = newBase;
    }
  };
};
