const path = require('node:path');
const fs = require('node:fs');

const PUBLIC_DIRECTORY = './public';

function getHTML(htmlFileName) {
    const htmlFilePath = path.join(PUBLIC_DIRECTORY, htmlFileName);
    return fs.readFileSync(htmlFilePath, 'utf-8');
}

module.exports = getHTML;