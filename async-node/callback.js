var getUser = (id,callback) =>{
  var user ={
    id:id,
    name:'sameer'
  };
  console.log(1);
  setTimeout(()=>{
    callback(user);
  },5000)
  console.log(2);
};

getUser(36, (userobj)=>{
  console.log(userobj);
})
