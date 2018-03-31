const request =require('request');

const yargs=require('yargs');

const argv=yargs
.option({
  a:{
    demand:true,
    alias:'address',
    describe:'address to fetch weather for',
    string:true
  }
})
.help()
.alias('help','h')
.argv;                //takes all the configuration runs it arguments and save in argv


console.log(argv);


request({
  url:'https://maps.googleapis.com/maps/api/geocode/json?address=sentrum%20mall%20asansol%20westbengal',
  json:true
}, (error,response,body)=> {
  console.log(body.results[0].formatted_address);
  console.log(body.results[0].geometry.location.lat);
  console.log(body.results[0].geometry.location.lng);
});
