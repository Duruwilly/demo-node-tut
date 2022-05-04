// GLOBALS - NO WINDOW!!!
// in node, there is no access to window object because there is no browser i.e no access to dom element, queryselector etc. however, there are global variable i.e, anywhere in my app, i can access them no matter how complex my app is.

// __dirname - path to current directory
// __filename - file name
//require - function to use modules (commonJS)
// module - info about current module (file)
// process - it gives us the info about environment where the program is being executed

console.log(__filename);
setTimeout(() => {
 console.log('hello world')
}, 1000)