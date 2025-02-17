var JavaScriptObfuscator = require('javascript-obfuscator');
var fs = require('fs');

var code = fs.readFileSync(".//node_modules//input.js", "utf8");

var obfuscationResult = JavaScriptObfuscator.obfuscate(code, {
    renameGlobals: true,
    compact: true,
    simplify: true,
    target: 'node',
    unicodeEscapeSequence: true
});

//create the file fn

fs.writeFileSync("..//build//index.js", obfuscationResult.getObfuscatedCode(), "utf8");

console.log("Done Run build.bat to build exe")
