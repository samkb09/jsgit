const request=require('request');

var getweather= (lat,lng,callback) =>{
request({
  url:`https://api.darksky.net/forecast/03255e444bee4a285c37ec4b3f113a21/${lat},${lng}`,
  json:true

},(error,response,body)=>{
  if(!error && response.statusCode===200){
    callback(undefined,{
      temperature:body.currently.temperature,
      apparentTemperature:body.currently.apparentTemperature  //apparentTemperature
    });
  }else{
    callback('unable to fetch request');
  }
});
};

module.exports.getweather=getweather;
