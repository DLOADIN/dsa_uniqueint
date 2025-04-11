//Created by Manzi David on 11/04/2025
//This code is a javascript script that processes text files containing integers.
// It reads integers from input files, filters them to find unique integers within a specified range, sorts them in ascending order, and writes the sorted unique integers to an output file.

class UniqueInt {
  
  constructor() {
    // Array to track seen integers (using indices from 0 to 2046 to represent -1023 to 1023)
    this.seen = new Array(2047).fill(false);
    // Array to store unique integers
    this.uniqueIntegers = [];
  }

  indexToInt(index) {
    return index - 1023;
  }

  
  intToIndex(num) {
    return num + 1023;
  }

  processLine(line) {
    // Skip empty lines
    if (!line.trim()) {
      return;
    }

    const trimmedLine = line.trim();
    
    // Skip lines with multiple values
    if (trimmedLine.split(/\s+/).length > 1) {
      return;
    }
    
    // Skip lines that don't contain a valid integer
    if (!/^-?\d+$/.test(trimmedLine)) {
      return;
    }
    
    const num = parseInt(trimmedLine);
    
    // Skip integers outside the valid range
    if (num < -1023 || num > 1023) {
      return;
    }
    
    const index = this.intToIndex(num);
    
    // Add to uniqueIntegers array only if we haven't seen this integer before
    if (!this.seen[index]) {
      this.seen[index] = true;
      this.uniqueIntegers.push(num);
    }
  }

  
  processFile(inputFilePath, outputFilePath) {
    console.time('Processing Time');
    const startMemory = process.memoryUsage().heapUsed;
    
    try {
      // Read the input file content
      const fileContent = fs.readFileSync(inputFilePath, 'utf8');

      // Split the content into lines and process each line
      const lines = fileContent.split('\n');
      for (const line of lines) {
        this.processLine(line);
      }
      
      // Sort the unique integers in ascending order
      this.uniqueIntegers.sort((a, b) => a - b);
      
      // Join the sorted integers with newlines and write to the output file
      const output = this.uniqueIntegers.join('\n');
      fs.writeFileSync(outputFilePath, output);
      
      // Calculate and display performance metrics
      const endMemory = process.memoryUsage().heapUsed;
      console.timeEnd('Processing Time');
      console.log(`Memory Usage: ${(endMemory - startMemory) / 1024} KB`);
      
      // Reset state for future use
      this.seen.fill(false);
      this.uniqueIntegers = [];
      
      return true;
    } catch (error) {
      console.error('Error processing file:', error);
      return false;
    }
  }
}

module.exports = UniqueInt;

const fs = require('fs');
const path = require('path');

// Create directories if they don't exist
// Create directories for sample inputs and outputs
// This code is a javascript script that processes text files containing integers following the assignment
// instructions for it's placed in the dsa/hw01/code/src directory
// and the sample inputs are located in the dsa/hw01/sample_inputs directory
// and the sample results are located in the dsa/hw01/sample_results directory.
const sampleInputsDir = '../../sample_inputs';
const sampleOutputsDir = '../../sample_results';

if (!fs.existsSync(sampleInputsDir)) {
  fs.mkdirSync(sampleInputsDir);
}

if (!fs.existsSync(sampleOutputsDir)) {
  fs.mkdirSync(sampleOutputsDir);
}

// Initialize the processor
const processor = new UniqueInt();

// Process all sample input files
const inputFiles = fs.readdirSync(sampleInputsDir);

console.log('Processing files...');
for (const file of inputFiles) {
  if (file.endsWith('.txt')) {
    const inputPath = path.join(sampleInputsDir, file);
    const outputPath = path.join(sampleOutputsDir, `${file.replace('.txt', '')}_result.txt`);
    
    console.log(`Processing ${file}...`);
    const success = processor.processFile(inputPath, outputPath);
    
    if (success) {
      console.log(`Successfully processed ${file} -> ${path.basename(outputPath)}`);
    } else {
      console.error(`Failed to process ${file}`);
    }
    console.log('-----------------------------------');
  }
}

console.log('All files processed!');
// This code is also running on the repository https://www.github.com/DLOADIN/dsa_uniqueint.git
