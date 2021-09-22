// Import File System(fs) module as 'fs' -  
var fs = require('fs')

// Make Folder - 
fs.mkdirSync('Greetings')
fs.mkdirSync('folder2')

// Input File -
fs.writeFileSync('Greetings/file_name.txt', 'Hello!')
fs.writeFileSync('Greetings/file2.txt', '')

// Append content - 
fs.appendFileSync('Greetings/file_name.txt', ' ridz here')

// Read File as HexaDecimal - 
fs.readFileSync('Greetings/file_name.txt')

// Read File as English-
fs.readFileSync('Greetings/file_name.txt', 'utf-8')

// Rename file - 
fs.renameSync('Greetings/file_name.txt', 'Greetings/Greet')

// Store contents- 
var data = fs.readFileSync('Greetings/file_name.txt')

// Delete file - 
fs.unlinkSync('Greetings/file2.txt')

// Delete folder
fs.rmdirSync('folder2')