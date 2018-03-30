const fs = require('fs');
const yargs = require('yargs');
var bs = require('./bs.js');
const top={
    describe:'title of note',
    demand:false,
    alias:'t'
};
  const bop={
      describe:'body of note',
      demand:false,
      alias:'b'
  };

const argv = yargs
.command('add','add a new note',{
  title:top,
  body:bop
})
.help()
.argv;
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
