console.log("Starting app.js");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const nodes = require('./notes');

const argv = yargs.argv;

var command = argv._[0];
console.log("Command:", command);
console.log('Process:', process.argv);
console.log('Yargs:',argv);

if (command === 'add') {
  var note = nodes.addNote(argv.title, argv.body);

  if (note) {
    console.log("Note created");
    nodes.logNotes(note);
  } else {
    console.log("Note title taken");
  }

} else if (command === 'list') {
  nodes.getAll();

} else if (command === 'read') {
  var note = nodes.getNote(argv.title);
  if (note) {
    console.log("Note found");
    nodes.logNotes(note);
  } else {
    console.log("Note not found");
  }

} else if (command === 'remove') {
  var noteRemoved = nodes.removeNote(argv.title);
  var message = noteRemoved ? "Note was removed"  : "Note not found";
  console.log(message);

} else {
  console.log("command not recogined");
}