const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Q:01
// Write a function to read all files in a directory recursively and return their paths as an array.
// (For example, given a directory structure, return ['dir/file1.txt', 'dir/subdir/file2.txt'].)

let files = [];
function ThroughDirectory(Directory) {
    fs.readdirSync(Directory).forEach(File => {
        const Absolute = path.join(Directory, File);
        if (fs.statSync(Absolute).isDirectory()) return ThroughDirectory(Absolute);
        else return files.push(Absolute);
    });
}
const currentDir = __dirname;     // Replace with any absolute path
ThroughDirectory(currentDir);

console.log(files)      // contains paths



// Q:02
// Implement a function to monitor changes in a file and log any modifications to the console in real time.

fs.watch('file.txt', (_, filename) => {
    console.log(`The file named '${filename}' was modified`);
    console.log('Content Updated : ', fs.readFileSync('file.txt', 'utf8'));
})



// Q:03
// Write a program that reads a large file line by line without loading the entire file into memory. 
// Explain why this approach is efficient.

const fileStream = fs.createReadStream('file.txt', { encoding: 'utf-8' });

const rl = readline.createInterface({
  input: fileStream,
  output: process.stdout,
  terminal: false
});

rl.on('line', (line) => {
  console.log(line);
});

rl.on('close', () => {
  console.log('Finished reading the file');
});



// Q:04
// Create a function that writes JSON data to a file. If the file already exists, 
// append the new data without overwriting the existing content.

function appendJsonToFile(filePath, data) {
    if (fs.existsSync(filePath)) {
        fs.readFile(filePath, 'utf8', (err, fileData) => {
            if (err) return

            let existingData = [];
            try {
                existingData = JSON.parse(fileData);
            } catch (err) {
                console.error(err);
                return;
            }

            existingData.push(data);

            fs.writeFile(filePath, JSON.stringify(existingData, null, 4), (writeErr) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log('Data appended successfully.');
                }
            });
        });
    } else {
        const newData = [data];
        fs.writeFileSync(filePath, JSON.stringify(newData, null, 4));
    }
}

const dataToAppend = { name: "John", age: 30 };
appendJsonToFile('data.json', dataToAppend);