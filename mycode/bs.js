console.log('starting bs.js');

const fs=require('fs');

//fetching notes
var fetchNote =() =>{
  try {
    var notesString=fs.readFileSync('yup.json');
    console.log(JSON.parse(notesString));
    return JSON.parse(notesString);
} catch (e) {
  return [];
  }
};


//save note
var saveNote =(notes) =>{
fs.writeFileSync('yup.json',JSON.stringify(notes));

}

//main function

var addNotes = (title,body) => {
  var notes=fetchNote();
  var note={
    title,
    body
  };

  //filter duplicate note
var duplicatenote=notes.filter((note)=>{
  return note.title===title;
});


if(duplicatenote.length===0){
  notes.push(note);
  saveNote(notes);
  return note;
}
};




var getAll=() =>{
  console.log('getting all notes');
};

var getNote=(title) =>{
  console.log('getting note',title);
};
var removeNote=(title)=>{
  console.log('removing note',title);
};

module.exports={
  addNotes,
  getAll,
  getNote,
  removeNote

};
