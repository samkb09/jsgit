console.log('starting bs.js');

const fs=require('fs');

//fetching notes
var fetchNote =() =>{
  try {
    var notesString=fs.readFileSync('yup.json');
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
  var ac=fetchNote();
  var vc=ac.filter((note)=>{
    return note.title===title;});
  if(vc.length!==0){
    console.log(vc);
  }
  else {
    console.log('note of title',title,'is not present');
  }

};

//removing notes

var removeNote=(title)=>{
  //fetch notes
  var arr = fetchNote();
  //filter notes,removing the one with title
  var rem=arr.filter((note)=>{
    return note.title!==title;});
  //save new notes array
  saveNote(rem);



  //how we can detect that note is removed or not...
  if(arr.length!==rem.length){
    console.log('note is  removed',title);
  }
  else {
    console.log('note ',title,' is not present');
  }
};

module.exports={
  addNotes,
  getAll,
  getNote,
  removeNote

};
