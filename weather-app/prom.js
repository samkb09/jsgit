const request =require('request');

var geocodeAddress =(address)=>{

  return new Promise((resolve, reject) =>{

    var encodedAdd= encodeURIComponent(address);

    request({
      url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAdd}`,
      json:true
    }, (error,response,body)=> {

        if(error){
          reject('unable to connect');
        }
        else if (body.status==='ZERO_RESULTS') {
          reject('unbale to fetch')
        }
        else if (body.status==='OK') {
          resolve({
            address:body.results[0].formatted_address,
            latitude:body.results[0].geometry.location.lat,
            longitude:body.results[0].geometry.location.lng
          })
        }
        }
)

  });


}
geocodeAddress("713301").then((location)=>{
  console.log(JSON.stringify(location,undefined,2))
},
(errormessage)=>{
  console.log(errormessage);
}
)
