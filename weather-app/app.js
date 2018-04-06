const yargs=require('yargs');


const geocode=require('./geocode/geocode.js');
const weather=require('./weather/weather.js');

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

var arr=geocode.reqmade(argv.a,(errormessage,result) =>{
  if(errormessage){
    console.log(errormessage)
  }
  else if (result) {
    console.log(result.address);
    weather.getweather(result.latitude, result.longitude,(errormessage,weatherresult) =>{
      if(errormessage){
        console.log(errormessage)
      }
      else if (weatherresult) {
        console.log(`its currently ${weatherresult.temperature}`);
        console.log(`its feel like ${weatherresult.apparentTemperature}`);
      }
    });

  }
});
