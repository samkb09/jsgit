var getUser = (id,callback) =>{
  var user ={
    id:id,
    name:'sameer'
  };
  callback(user);
};

getUser(36, (userobj)=>{
  console.log(userobj);
})
