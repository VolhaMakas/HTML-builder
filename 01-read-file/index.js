// const fs = require('fs');
// // const path = require('path');

// fs.readFile('/Users/volha/projects/HTML-builder/01-read-file/text.txt', (error, data) => {
//     console.log(data.toString());
// // })
// const fs = require('fs');

// const stream = fs.createReadStream('/Users/volha/projects/HTML-builder/01-read-file/text.txt', 'utf-8');

// let data = '';

// stream.on('data', chunk => data += chunk);
// stream.on('end', () => console.log('End', data));
// stream.on('error', error => console.log('Error', error.message));

// console.log(data);

const fs = require('fs');
const path = require('path');
const { stdout } = require('process');
const input = fs.createReadStream(path.join(__dirname, 'text.txt'), 'utf-8');
input.on('data', data => stdout.write(data));
