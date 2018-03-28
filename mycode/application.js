const fs = require('fs');
const yargs = require('yargs');
var bs = require('./bs.js');

const argv = yargs.argv;
var command = process.argv[2];

//adding new node

if(command === 'add'){
  console.log('command: ',command);
  bs.addNotes(argv.title,argv.body);
  console.log(yargs.argv);

}
else if (command==='list') {

console.log('listing all notes');
}
else if (command==='read') {
  console.log('cpmmand: ',command);
  bs.getNote(argv.title);


}
else if (command==='remove') {
  console.log('command: ',command);
  bs.removeNote(argv.title);

}
else {
  console.log('command not found');
}
