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
    },

    compareDNA: pAeqour => {
      let match = 0;
      for (let i = 0; i < pAeqour.dna.length; i++) {
        if (pAeqour.dna[i] === dna[i]) {
          match++
        }
      }
      const matchPercentage = Math.round((match / pAeqour.dna.length) * 100, 0);
      console.log(`Specimen #${specimenNum} and specimen #${pAeqour.specimenNum} have ${matchPercentage}% DNA in common.`)
    },

    willLikelySurvive: () => {
      const dnaLength = dna.length;
      const cCount = [...dna].filter(element => element === 'C').length;
      const gCount = [...dna].filter(element => element === 'G').length;
      const totalCount = cCount + gCount;
      return totalCount / dnaLength >= 0.6;
    }
  };
};
