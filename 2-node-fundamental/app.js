console.log("Starting app.js");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const nodes = require('./nodes');

const argv = yargs.argv;

var command = argv._[0];
console.log("Command:", command);
console.log('Process:', process.argv);
console.log('Yargs:',argv);

if (command === 'add') {
  nodes.addNote(argv.title, argv.body);
} else if (command === 'list') {
  nodes.getAll();
} else if (command === 'read') {
  nodes.getNote(argv.title);
} else if (command === 'remove') {
  nodes.removeNote(argv.title);
} else {
  console.log("command not recogined");
}