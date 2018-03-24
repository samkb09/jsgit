console.log('starting bs.js');

const fs=require('fs');

var addNotes = (title,body) => {
  var notes=[];
  var note={
    title,
    body
  };
  try {
    var a=fs.readFileSync('yup.json');
    notes=JSON.parse(a);

  } catch (e) {
    
  }

  notes.push(note);
  fs.writeFileSync('yup.json',JSON.stringify(notes));
};

module.exports={
  addNotes
};
