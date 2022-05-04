// the path modules allows usto interact with file path easily

const path = require('path')

console.log(path.sep);

const filePath = path.join('/content', 'subfolder', test.txt);
console.log(filePath);

// the base method return the base name of your file.. here, it will return test.txt
const base = path.basename(filePath)
console.log(base)

//the resolve method return an absolute path of your folder/ file
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute);