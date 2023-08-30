import React, { useEffect, useState } from 'react';

interface Nucleotide {
  letter: string;
  matchingLetter: string;
}

interface NucleotideButtonProps {
  addNucleotide: (letter: string) => void;
}

interface DnaSequenceProps {
  nucleotides: Nucleotide[];
}

const App: React.FC = () => {
  const [nucleotides, setNucleotides] = useState<Nucleotide[]>([]);
  const [dnaLength, setDnaLength] = useState<number>(10);

  useEffect(() => {
    const storedNucleotides: Nucleotide[] = JSON.parse(localStorage.getItem('nucleotides') || '[]');
    setNucleotides(storedNucleotides);
  }, []);

  useEffect(() => {
    localStorage.setItem('nucleotides', JSON.stringify(nucleotides));
  }, [nucleotides]);

  const addNucleotide = (letter: string) => {
    setNucleotides([...nucleotides, { letter, matchingLetter: getMatchingLetter(letter) }]);
  };

  const generateRandomSequence = () => {
    const letters = ['T', 'A', 'G', 'C'];
    const sequence: Nucleotide[] = [];
    for (let i = 0; i < dnaLength; i++) {
      const randomIndex = Math.floor(Math.random() * letters.length);
      const letter = letters[randomIndex];
      sequence.push({ letter, matchingLetter: getMatchingLetter(letter) });
    }
    setNucleotides(sequence);
  };

  const handleSwap = (index: number) => {
    const updatedNucleotides = [...nucleotides];
    const currentNucleotide = updatedNucleotides[index];
    currentNucleotide.letter = currentNucleotide.matchingLetter;
    updatedNucleotides[index] = currentNucleotide;
    setNucleotides(updatedNucleotides);
  };

  const getColor = (letter: string) => {
    switch (letter) {
      case 'T':
        return 'red';
      case 'A':
        return 'green';
      case 'G':
        return 'purple';
      case 'C':
        return 'yellow';
      default:
        return 'white';
    }
  };

  const getMatchingLetter = (letter: string) => {
    switch (letter) {
      case 'T':
        return 'A';
      case 'A':
        return 'T';
      case 'G':
        return 'C';
      case 'C':
        return 'G';
      default:
        return '';
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>DNA Sequence Simulator</h1>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <button
          style={{ backgroundColor: getColor('T'), margin: '5px', padding: '10px' }}
          onClick={() => addNucleotide('T')}
        >
          T
        </button>
        {/* Repeat for other buttons */}
      </div>
      <div style={{ marginTop: '20px' }}>
        <input
          type="number"
          value={dnaLength}
          onChange={(e) => setDnaLength(parseInt(e.target.value))}
        />
        <button onClick={generateRandomSequence}>Generate Random Sequence</button>
      </div>
      <table style={{ margin: 'auto', marginTop: '20px' }}>
        <thead>
          <tr>
            <th>Letter</th>
            <th>Matching</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {nucleotides.map((nucleotide, index) => (
            <tr key={index}>
              <td style={{ backgroundColor: getColor(nucleotide.letter) }}>
                {nucleotide.letter}
              </td>
              <td style={{ backgroundColor: getColor(nucleotide.matchingLetter) }}>
                {nucleotide.matchingLetter}
              </td>
              <td>
                <button onClick={() => handleSwap(index)}>Swap</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
