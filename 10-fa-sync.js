// the file module give us acess to the file system and there are two flavours - asynchronously(unblocking) and synchronously(blocking)

// this is the sync method... we want to read from a file using the fs(file system module. we destructure readFileSync and writeFileSync from the fs module)
const { readFileSync, writeFileSync } = require('fs');

// to read the file, we need to provide the path of the file we want to read and the encoding which generally is utf8. node knows how to decode a file 

//whie to create a new file can be done with a method known as writeFileSync
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second);

// writeFileSync
// if a file path is not provided, node will create one and if there is a text in the file, it will be overwitten by node
writeFileSync('./content/result-sync.txt', `here is the result: ${first}, ${second}`)