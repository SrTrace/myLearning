const path = require('path');

console.log('File Name: ', path.basename(__filename));

console.log('Dir Name: ', path.dirname(__filename));

console.log('File Extantion : ', path.extname(__filename));

console.log('Parse : ', path.parse(__filename).name);

console.log(path.join(__filename, 'server', 'index.html'));


