# Unique Integer Processor

This assignment processes a file containing integers, identifies unique integers within a valid range, sorts them, and writes them to an output file.

## Project Structure

- `UniqueInt.js` - The main class responsible for processing files and finding unique integers
- `index.js` - A script to demonstrate how to use the UniqueInt class
- `sample_inputs/` - Directory containing sample input files
- `sample_outputs/` - Directory where processed output files will be saved

## Requirements

- Node.js installed on your machine

## How the Program Works

The `UniqueInt` class:
1. Reads integers from an input file (one per line)
2. Keeps track of unique integers within the range of -1023 to 1023
3. Sorts the unique integers in ascending order
4. Writes the sorted unique integers to an output file

## Running the Program

1. Make sure you have the following directory structure:
```
DSA_UNIQUEINT/
        ├── dsa/hw01/
        |    ├── code/src/
        |              ├── main.js
        |
        ├── sample_inputs/
            ├── sample_input_01.txt
            ├── sample_input_02.txt
        ├── sample_results/
            ├── output.txt
```

2. Run the program:
```
node main.js
```

This will process all .txt files in the sample_inputs directory and save the results in the sample_outputs directory.

## How to Use the UniqueInt Class

```javascript
const UniqueInt = require('./UniqueInt');

const processor = new UniqueInt();
processor.processFile(
  './dsa/hw01/sample_inputs/sample_input_01.txt',
  './dsa/hw01/sample_outputs/sample_output_02.txt'
);
```

## Performance Metrics

The program measures and displays:
- Processing time
- Memory usage

## Notes

- Only integers within the range -1023 to 1023 are processed
- The program ignores:
  - Empty lines
  - Lines with multiple values
  - Lines containing non-integers
  - Integers outside the valid range
- Each unique integer appears exactly once in the output file