var reqmade=(address,callback) =>{
  var arr=[];
  const request =require('request');
  var encodedAdd= encodeURIComponent(address);

  request({
    url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAdd}`,
    json:true
  }, (error,response,body)=> {

    if(error){
      callback('unable to connect');
    }
    else if (body.status==='ZERO_RESULTS') {
      callback('unable to find address')
    }
    else if (body.status==='OK') {
      callback(undefined,{
        address:body.results[0].formatted_address,
        latitude:body.results[0].geometry.location.lat,
        longitude:body.results[0].geometry.location.lng
      })
    }


  });

//  03255e444bee4a285c37ec4b3f113a21 api key of weather forecast
};
module.exports.reqmade=reqmade;
