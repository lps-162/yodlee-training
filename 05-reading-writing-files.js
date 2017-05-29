const fs = require('fs');
const path = require('path');

console.log(__dirname);
console.log(__filename);

const filePath = path.join(__dirname, 'stuff/readMe.txt');
const anotherPath = path.join(__dirname, 'stuff/writeMe.txt');

// fs.readFile('stuff/readMe.txt', function(err, contents) {
//     if (err) console.log(err);
//     else {
//         fs.writeFile(anotherPath, contents, function(err) {
//             if (err) console.log('Error in writing file');
//             else console.log('Successfully wrote the file');
//         })
//         console.log(contents);
//     }
// });

// let fileContent = fs.readFileSync(filePath, 'utf8');
// console.log(fileContent);

// fs.writeFileSync(anotherPath, fileContent);

fs.unlink(anotherPath, function(err) {
    if (err) {
        console.log(err.message);
    } else {
        console.log('successfully deleted the file');
    }
});

console.log('This should be printed first');

