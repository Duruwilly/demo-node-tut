// the second method of reading file system is the asynchrounous method which require a call back. whatever functionality we are doing, then we run that call back

const { readFile, writeFile } = require('fs')

readFile('./content/first.txt', 'utf8', (err, result) => {
 if(err) {
  console.log(err);
  return
 }
 const first = result
 readFile('./content/second.txt', 'utf8', (err, result) => {
  if (err) {
   console.log(err);
   return
  }
  const second = result
  writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second}`, (err, result) => {
   if (err) {
    console.log(err);
    return
   }
   console.log(result);
  })
 })
})