console.log("Starting app.js");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const nodes = require('./notes');

const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
}

const bodyOptions = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
}

const argv = yargs
  .command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', 'List all notes')
  .command('read', 'Read a note', {
    title: titleOptions
  })
  .command('remove', 'Remove a note', {
    title: titleOptions
  })
  .help()
  .argv;


var command = argv._[0];

if (command === 'add') {
  var note = nodes.addNote(argv.title, argv.body);

  if (note) {
    console.log("Note created");
    nodes.logNotes(note);
  } else {
    console.log("Note title taken");
  }

} else if (command === 'list') {
  var allNotes = nodes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach((note) => nodes.logNotes(note));

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