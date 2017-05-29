const fs = require('fs');

//fs.mkdirSync('stuff');

//fs.rmdirSync('stuff');

// fs.mkdir('stuff', function() {
//     fs.readFile('readMe.txt', 'utf8', function(err, data) {
//         fs.writeFile('./stuff/writeMe.txt', data, function(err) {
//             if (err) {
//                 console.log('Could not write to file');
//             }
//         });
//     });
// });


fs.unlink('./stuff/writeMe.txt', function(err) {
    if (err) {
        console.log('Could not delete the file');
    }
    else {
        fs.rmdir('stuff', function(err) {
            if (err) {
                console.log('Could not delete the directory');
            } else {
                console.log('Successfully deleted the stuff directory');
            }
        });
    } 
});