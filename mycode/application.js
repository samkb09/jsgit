const fs = require('fs');
const yargs = require('yargs');
var bs = require('./bs.js');

const argv = yargs.argv;
var command = process.argv[2];

//adding new node

if(command === 'add'){
  console.log('adding new note');
  bs.addNotes(argv.title,argv.body);
  console.log(yargs.argv);

}
else if (command==='list') {
  console.log('listing notes');

}
else if (command==='read') {
  console.log('reading all notes');

}
else if (command==='remove') {
  console.log('removing notes');

}
else {
  console.log('command not found');
}
