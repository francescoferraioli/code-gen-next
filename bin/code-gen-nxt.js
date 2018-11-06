#! /usr/bin/env node

var read = require('read-file');
var fs = require('fs');

var args = process.argv.slice(2);

if(args.length != 4) {
  console.log("I need four arguments");
  return 1;
}

var sourceFile = args[0];
var parserFile = args[1];
var templateFile = args[2];
var destinationFile = args[3];

if (!fs.existsSync(sourceFile)) {
    console.log(sourceFile + ": File not found");
    return 1;
}

if (!fs.existsSync(parserFile)) {
    console.log(parserFile + ": File not found");
    return 1;
}

if (!fs.existsSync(templateFile)) {
    console.log(templateFile + ": File not found");
    return 1;
}

var source = read.sync(sourceFile).toString();
var parser = read.sync(parserFile).toString();
var template = read.sync(templateFile).toString();

console.log(source);
console.log(parser);
console.log(template);